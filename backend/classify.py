import pandas as pd
import os, requests
from constants import *

__location__ = os.path.realpath(
    os.path.join(os.getcwd(), os.path.dirname(__file__)))

df = pd.read_csv(os.path.join(__location__, 'courses.csv')).dropna()
examples = df.filter(['description','title'], axis=1).to_numpy().tolist()
labels = df['title'].tolist()
courses = dict()

for index, row in df.iterrows():
    title = row['title']
    id = row['id']
    desc = row['description']
    courses[title.lower()] = {
        "title": title,
        "id": id,
        "description": desc
    }

endpoint = 'https://api.openai.com/v1/classifications'

headers = {
    "Authorization": "Bearer {}".format(OPENAI_API_KEY),
    "Content-Type": "application/json"
}

def classify(query: str):
    data = {
        "examples": examples,
        "labels": labels,
        "query": query,
        "search_model": "ada",
        "model": "curie",
        "max_examples": 5
    }
    resp = requests.post(endpoint, json=data, headers=headers)
    if resp.status_code != 200:
        return resp
    resp = resp.json()
    selected = list(dict(resp)['selected_examples'])
    selected.sort(key=lambda x: -x['score'])
    results = []
    for example in selected:
        if resp['label'] == example['label'] or example['score'] < 0:
            continue
        key = example['label'].lower()
        if key in courses:
            results.append(courses[key])
    response = {
        'courses': results
    }
    if resp['label'].lower() in courses:
        response['answer'] = courses[resp['label'].lower()]
    return response

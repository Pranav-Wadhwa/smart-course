import re
import numpy as np
import pandas as pd

courses = []

for department in ['CS']: # 'ME', 'ECE'
    raw_text = ''

    with open('{}.txt'.format(department)) as infile:
        raw_text = "\n".join(infile.readlines())

    for match in re.finditer('\n(\d+): (.+)<br>(<br>|\n)+((.|\n)+?)<br>', raw_text):
        number = department + match.group(1)
        title = match.group(2).lower().title()
        description = match.group(4).strip()
        courses.append([number,title,description])


data = np.array(courses)

df = pd.DataFrame(data=data, columns=['id','title','description'])

df.to_csv('../courses.csv')

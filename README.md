# smart-course

### The best way of finding what you want to study.


https://user-images.githubusercontent.com/25285598/196500988-007500c0-0a7c-48bb-9a36-2d4425590f5e.mov


## Motivation

Course request at Virginia Tech is a time-consuming and frustrating process. If I'm looking for a course I want to take, I have to describe what I want to learn on Google since there's no course-based search website. VT's website for finding courses is an outdated application where you can only specify the course ID (see screenshot below). Overall, if I have a topic in mind, it's difficult to find a course that matches it. 

<img width="800" alt="Current VT course request" src="https://user-images.githubusercontent.com/25285598/196500965-579bef19-72d6-4321-beae-f66406c18c19.png">

## Solution

Smart Course is a web app that lets you use natural language to describe what you want to learn, and it provides a list of VT Computer Science courses that are the closest matches to your interests. 

- **Large Language Models:** Smart Course uses OpenAI's GPT-3 model to perform classification. It reads in course descrpitions from a CSV and provides these to OpenAI as examples and labels. It then parses the results and returns the top 5 matches. See `/backend/classify.py`

- **Tech Stack:** This app is built using a React frontend and a Flask backend, which is hosted on Python Anywhere.

## Future Improvements

If I had access to a larger database of course descriptions, I would have used OpenAI's fine tuning to create a custom model for my dataset. Not only would this help make results more accurate, but I would be able to scale it to all VT courses (not just CS) as the classification model has a size limit on the input. I would also work with VT's course request API to find exact time schedules for each course to help students build their class schedule.

## Installation

To run this project locally, clone the repo and run inside the root directory:

```
cd smart-course
npm install
npm run start
```

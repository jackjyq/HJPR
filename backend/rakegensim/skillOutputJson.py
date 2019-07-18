import json
import re
from nltk.corpus import wordnet

import re

import csv
data_skills={}
from nltk.corpus import stopwords
stopwords=list(stopwords.words('english'))
print(stopwords)
with open("skills.csv",'r') as readFile:
    reader = csv.reader(readFile)
    lines = list(reader)
    for i in lines:
        for j in i:
            j= ''.join(c for c in j if c not in "[]''")
            jsplit=j.split(" ")
            for sk in jsplit:
                data_skills[j]=1

temp={}
with open('cleaneddata.csv', 'r') as readFile:
    reader = csv.reader(readFile)
    lines = list(reader)
    # k=0
    for i in lines:
        text=i[3]
        temp1=[]
        a=text.split(",")
        for j in a:
            flag=0
            j= ''.join(c for c in j if c not in "[]'':-_.=?")
            j=j.strip()
            for strw in j.split(" "):
                if(len(strw)<5):
                    flag=1
                    break
                if(not wordnet.synsets(strw)):
                    flag=1
                    break
                if(strw in stopwords):
                    flag=1
                    break
            if flag==1:
                continue
            # j=''.join(c for c in j if c not in " ")
            if(j !=""):
                if(len(j)>4):
                    temp1.append(j)
                    if j in temp:
                        temp[j]+=1
                    else:
                        temp[j]=1

        i.append(temp1)



skills={}
for i in temp:
    if(temp[i]>20):
        continue
    skills[i]=temp[i]


import operator
sorted_skills = sorted(skills.items(), key=operator.itemgetter(1), reverse=True)

remove= ["whole", "global", "liquid", "present results", "participant", "issues related", "stated", "lecture", "abstract", "direct", "update", "topics covered", "become familiar", "large", "achieved", "welfare state", "capability", "autumn", "transfer",\
"distinguish", "realization", "freedom", "acutely", "resource", "regards", "distinctive character", "second edition", "followed", "abilities", "solved", "input", "essential", "general principles", "central topics", "spring semester", "contributing", "ordinary",\
 "acquainted", "skills related","knowledge related", "composing", "different parts", "reflecting", "relevant theory", "maximum", "illustrated", "normal", "short introduction", "decline", "basic", "handle", "reviewed", "given topic", "staff", "takes", "outside",\
  "submitted", "gained knowledge", "course presents",\
"instance", "condition", "following learning objectives"]
listDict=[]
for i in sorted_skills:
    temp={}
    if(i[0] not in remove):
        temp["label"]=i[0]
        temp["value"]=i[1]
        listDict.append(temp)
final={}
final["keywords"]=listDict
with open('outputSkills.txt', 'w') as json_file:
  json.dump(final, json_file)

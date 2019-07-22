import json
import re
from nltk.corpus import wordnet

import re

import csv
data_skills={}
from nltk.corpus import stopwords
stopwords=list(stopwords.words('english'))
# print(stopwords)

# temp={}
skillsCourse={}
courseDescription={}
allSkills=[]
allCourses=[]
with open('cleaneddata_edited2.csv', 'r') as readFile:
    reader = csv.reader(readFile)
    lines = list(reader)
    # k=0
    for i in lines:
        if(i[0]!="Course Code"):
            text=i[4]
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
                        allSkills.append(j)
                        temp1.append(j)
                        # if j in temp:
                        #     temp[j]+=1
                        # else:
                        #     temp[j]=1
            skillsCourse[i[0]]=temp1
            courseDescription[i[0]]=i[1]
            allCourses.append(i[0])
        # i.append(temp1)


import gensim
from nltk.tokenize import word_tokenize
import csv

dataCollection=[]
codeCollection=[]
with open('cleaneddata.csv', 'r') as fileread:
    reader = csv.reader(fileread)
    lines = list(reader)
    for i in lines:
        codeCollection.append(i[0])
        dataCollection.append(i[1])

dataList = [[l.lower() for l in word_tokenize(text)]
            for text in dataCollection]

dictCollection = gensim.corpora.Dictionary(dataList)

corpus = [dictCollection.doc2bow(data) for data in dataList]

tf_idf = gensim.models.TfidfModel(corpus)

sims = gensim.similarities.Similarity('/Users/himanshuvaswani/Desktop/UNSWSem5/CourseRecommeder',tf_idf[corpus],num_features=len(dictCollection))

docID=0
courseSimilarPercentage={}
courseSimilar={}
for i in dataCollection:
    j=0
    query=[l.lower() for l in word_tokenize(i)]
    query_doc_bow = dictCollection.doc2bow(query)
    query_doc_tf_idf = tf_idf[query_doc_bow]
    listSimilarity=[]
    for item in sims[query_doc_tf_idf]:
        if(j!=docID):
            listSimilarity.append((j, item))
        j+=1
    # print(listSimilarity)

    listSimilarity=sorted(listSimilarity, key=lambda x: x[1], reverse=True)
    # print(listSimilarity[:10])
    # break
    # file1 = open("file.txt","a+")
    # similarListTemp=[]
    tempx=[]
    temponly=[]
    for sim in listSimilarity[:15]:
        if(sim[1]!=0.0):
            tempx.append((codeCollection[sim[0]],sim[1] ))
            temponly.append(codeCollection[sim[0]])
    courseSimilarPercentage[codeCollection[docID]]=tempx
    courseSimilar[codeCollection[docID]]=temponly
    docID+=1

finalListToJson=[]
for course in skillsCourse:
    if(course!="Course Code"):
        tempc={}
        tempc["courseCode"]=course
        tempc["skills"]=skillsCourse[course]
        tempc["courseDesc"]=courseDescription[course]
        tempc["similarCourses"]=courseSimilar[course]
        finalListToJson.append(tempc)


with open('courses.txt', 'w') as json_file:
  json.dump(finalListToJson, json_file)


skillsJSON={}
skillsJSON["skills"]=allSkills
with open('skills.txt', 'w') as json_file1:
    json.dump(skillsJSON, json_file1)

courseJSON={}
courseJSON["courses"]=allCourses
with open('coursenames.txt', 'w') as json_file2:
    json.dump(courseJSON, json_file2)

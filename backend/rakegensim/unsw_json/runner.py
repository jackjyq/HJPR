import gensim
import nltk
ntlk.download('punkt')
from nltk.tokenize import word_tokenize
import csv
import json
import os
# path=dir_path/rakegensim/unsw_json
# os.chdir(r"..\\rakegensim\\unsw_json")
def suggest(user_preference):
    try:
        skills = user_preference["skills"]
        courses = user_preference["courses"]
        questions = user_preference["questions"]
    except KeyError:
        return 2, "bad input"
    if(len(skills)==0):
        value="Error"
        return 1,value
    userInfo=' '.join(skills)
    flag=0
    if(len(questions)!=0):
        flag=1
        userInfoMore=questions
    if(flag==1):
        userInfoTotal=userInfo+userInfoMore
    else:
        userInfoTotal=userInfo
    dataCollection=[]
    with open('./rakegensim/unsw_json/CourseDataCleaned-2.csv', 'r') as readFile:
        while (1):
            line = readFile.readline()
            if not line:
                break
            i = line.find(",")
            courseCode = line[:i]
            if(courseCode!="CourseCode"):
                courseDescription = str(line[i+1:])
                dataCollection.append(courseDescription)
    dataList = [[l.lower() for l in word_tokenize(text)]
                for text in dataCollection]
    dictCollection = gensim.corpora.Dictionary(dataList)
    # dictCollection.save("dictCollectionModel")
    import os
    dir_path = os.path.dirname(os.path.realpath(__file__))

    corpus = [dictCollection.doc2bow(data) for data in dataList]
    # corpus.save("corpusModel")
    tf_idf = gensim.models.TfidfModel(corpus)
    # tf_idf.save("tf_idfModel")
    model = gensim.similarities.Similarity(dir_path,\
                                            tf_idf[corpus],num_features=len(dictCollection))
    # sims.save("ModelSims")

    # model=gensim.similarities.Similarity.load("./rakegensim/unsw_json/ModelSims")
    # tf_idf=gensim.similarities.Similarity.load("./rakegensim/unsw_json/tf_idfModel")
    # dictCollection=gensim.similarities.Similarity.load("./rakegensim/unsw_json/dictCollectionModel")
    query=[l.lower() for l in word_tokenize(userInfoTotal)]
    query_doc_bow = dictCollection.doc2bow(query)
    query_doc_tf_idf = tf_idf[query_doc_bow]
    listSimilarity=[]
    j=0
    for item in model[query_doc_tf_idf]:
        listSimilarity.append((j, item))
        j+=1
    listSimilarity=sorted(listSimilarity, key=lambda x: x[1], reverse=True)

    courseInfo={}
    dictCourseInfo={}
    with open('./rakegensim/unsw_json/CourseDataCleaned-2.csv', 'r') as readFile:
        k=0
        while (1):
            line = readFile.readline()
            if not line:
                break
            i = line.find(",")
            courseCode = line[:i]
            if(courseCode!="CourseCode"):
                courseDescription = str(line[i+1:])
                courseDescription=courseDescription.strip()
                courseInfo[courseCode] = courseDescription
                dictCourseInfo[k]=[courseCode, courseDescription]
            k+=1



    sum1=0
    len1=0
    flg=0
    for courseValue in listSimilarity[:8]:
        if(courseValue[1]!=0.0):
            sum1+=courseValue[1]
            len1+=1
        else:
            flg=1
            break
    if(len1==0):
        value="Error"
        return 1,value
    finalListToJson={}
    listc=[]
    for courseValue in listSimilarity[:8]:
        if(courseValue[1]!=0.0):
            tempc={}
            tempc["label"]=dictCourseInfo[courseValue[0]][0]
            tempc["value"]=courseValue[1]/sum1
            tempc["desc"]=dictCourseInfo[courseValue[0]][1]
            listc.append(tempc)
    finalListToJson["courses"]=listc
    return 0, finalListToJson

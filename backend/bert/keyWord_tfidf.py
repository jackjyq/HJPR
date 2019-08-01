import os
import re
import math
import json
from nltk.stem import WordNetLemmatizer 
from nltk.corpus import stopwords
stop_words = stopwords.words('english')
def toCleanWordList(text):
    cleanedText = re.sub('[^a-zA-Z]',' ',text).lower()
    wordList = cleanedText.split()
    wordNetLemmatizer = WordNetLemmatizer()
    newList = [wordNetLemmatizer.lemmatize(new_word) for new_word in wordList]
    removeStopWords = [word for word in newList if word not in stopwords.words('english')]
    return removeStopWords

def getDir(path):
    fileList = os.listdir(path)
    dir = {}
    for file in fileList:
        with open(path + '/' + file) as fp:
            text = fp.read()
            wordList = toCleanWordList(text)
            for word in wordList:
                if word not in dir:
                    dir[word] = 1
                else:
                    dir[word] += 1
    return dir
def calcidf(path, dir):
    fileCount = {}
    for k, v in dir.items():
        fileCount[k] = 0
    fileList = os.listdir(path)
    for file in fileList:
        with open(path + '/' + file) as fp:
            text = fp.read()
            wordList = toCleanWordList(text)
            for word in wordList:
                if word in fileCount:
                    fileCount[word] += 1
    idf = {}
    for k, v in fileCount.items():
        idf[k] = math.log(len(fileList) / (1 + v))
    return idf
def calctf(path, fileName):
    tf = {}
    with open(path + '/' + fileName) as fp:
        text = fp.read()
        wordList = toCleanWordList(text)
        for word in wordList:
            if word in tf:
                tf[word] += 1
            else:
                tf[word] = 1
    return  tf
def tfidf(path):
    dir = getDir(path)
    tf_idf = {}
    idf = calcidf(path, dir)
    fileList = os.listdir(path)
    for fileName in fileList:
        tf = calctf(path, fileName)
        tfDir = {}
        for k, v in tf.items():
            if (dir[k] > 3):
                tfDir[k] = v * idf[k]
        courseCode = fileName.split('.')[0]
        tf_idf[courseCode] = tfDir
    return tf_idf
def toJSONFile(dir, fp):
    json.dump(dir, fp)
if __name__ == "__main__":
    tfidfDir = tfidf("./courseData")
    with open("courseKeyword.json","w") as fp:
        toJSONFile(tfidfDir, fp)



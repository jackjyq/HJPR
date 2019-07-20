import numpy as np
import re
import vectorGenerator
import operator
def userDescriptionToVector(courseDescription, outputDir = "vectorOutput/"):
    #makeDir
    textDir = outputDir + "rawText/"
    bertDir = outputDir + "vecBERT/"
    vectDir = outputDir + "vectFile/"
    courseCode = "tempInput"
    re.sub(r'[^\x00-\x7f]',r'', courseDescription)
    vec = []
    try:
        vectorGenerator.toTxtFile(courseCode, textDir, courseDescription)
        vectorGenerator.toBERTVector(courseCode, courseCode, textDir, bertDir)
        vec = vectorGenerator.getVector(bertDir + courseCode + ".json")
    except:
        pass
    return vec
def codeToVector(input, dataSet, labels):
    try:
        index = labels.index(input)
        return dataSet[index]
    except:
        return []
#return k course that closest to user description
def kNN(input, dataSet, labels, k, inputLabels = []):
    #calculate distances
    diffMat = np.tile(input, (dataSet.shape[0], 1)) - dataSet
    sqDiffMat = diffMat ** 2
    sqDistances = sqDiffMat.sum(axis = 1)
    distances = sqDistances ** 0.5
    
    sortedCourseIndex= distances.argsort()
    courseAndDistance = {}
    totalDist = 0.0
    
    i = -1
    n = 0
    while n < k:
        i += 1
        if labels[sortedCourseIndex[i]] in inputLabels:
            continue
        else:
            n += 1
        totalDist += 1 / (distances[sortedCourseIndex[i]] + 1)
    i = -1
    n = 0
    while n < k:
        i += 1
        if labels[sortedCourseIndex[i]] in inputLabels:
            continue
        else:
            n += 1
        courseAndDistance[labels[sortedCourseIndex[i]]] = distances[sortedCourseIndex[i]]

    #sorting
    coursePair = sorted(zip(courseAndDistance.values(), courseAndDistance.keys()))
    retVal = []
    for pair in coursePair:
        retVal.append([pair[1], (1/(pair[0] + 1)) / totalDist])
    return retVal
    return sortedClassCount
def listkNN(input, dataSet, labels, k, inputLabels = []):
    avgInput = np.mean(input, axis=0)
    return kNN(avgInput, dataSet, labels, k, inputLabels)
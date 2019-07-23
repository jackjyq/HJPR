import numpy as np
from . import prediction  as prediction
from . import dataLoader as dataLoader
#import prediction 
#import dataLoader
dataSet, labels, description = dataLoader.loadData("vectorOutput/vectFile/")
def suggest(user_preference, weight = 0.5):
    courseVecList = []
    inputCourseLabels = []
    for courseCode in user_preference["courses"]:
        currVec = prediction.codeToVector(courseCode, dataSet, labels)
        if (currVec == []):
            return -1, "Invalid Course code : " + courseCode + "!"
        courseVecList.append(currVec)
        inputCourseLabels.append(courseCode)
        #user input description
    avgSimularCourse = np.mean(courseVecList, axis=0)
    userDescription = user_preference["questions"]
    userVector = prediction.userDescriptionToVector(userDescription)
    avgGeneral = np.mean([userVector, avgSimularCourse], axis = 0)
    avgGeneral = avgSimularCourse
    
    anskNN = prediction.kNN(avgGeneral, dataSet, labels, 5, inputCourseLabels)
    retDir = {}
    courseList = []
    for course in anskNN:
        courseDir = {}
        courseDir["label"] = course[0]
        courseDir["value"] = course[1]
        courseDir["desc"] = description[course[0]]
        courseList.append(courseDir)
        #print(course)
    retDir["courses"] = courseList
    return 0 , retDir
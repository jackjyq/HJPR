import numpy as np
from . import prediction as p
import os
#import prediction as p
def loadData(path):

    BASE_DIR = os.path.dirname(__file__) 
    path = BASE_DIR.replace("\\", "/") + "/"+ path
    print(path)
    labelName = "label.txt"
    vecName = "vecArray.npy"
    labels = []
    with open(path + labelName, 'r') as fp:
        str = fp.readline()[:-1]
        while (str):
            labels.append(str)
            str = fp.readline()[:-1]
    group = np.load(path + vecName)
    return group, labels
if __name__ == "__main__":
    group, labels = loadData("vectorOutput/vectFile/")
    #print(len(group))
    #print(len(labels))
    res1 = p.codeToVector("MOL4010", group, labels)
    res2 = p.codeToVector("MOL8013", group, labels)
    #res = p.codeToVector("", group, labels)
    
    #print(res)
    print(p.listkNN([res1, res2], group, labels, 5))
    #vec = p.userDescriptionToVector("computer network")
    #print(p.kNN(vec, group, labels, 30))
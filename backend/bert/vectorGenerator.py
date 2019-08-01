import os
import numpy as np
import json
import re
bert_dir = "bert/bert/"

cmd1 = "python "+bert_dir + "extract_features.py  --input_file="
cmd2 = "   --output_file="
cmd3 = "   --vocab_file=" +bert_dir + "vocab.txt   --bert_config_file="+bert_dir+"bert_config.json   --init_checkpoint="+ bert_dir +"bert_model.ckpt   --layers=-1   --max_seq_length=128   --batch_size=8"

def makeCmd(inputFile, outputFile):
    return cmd1 + inputFile + cmd2 + outputFile + cmd3
        
def toTxtFile(fileName, outputDir, data):
    if not os.path.exists(outputDir): 
        os.makedirs(outputDir)     
    with open(outputDir + fileName + ".txt", "w") as fp:
            fp.write(data)
            fp.close()
def toBERTVector(inputFile, outputFile, inputDir, outputDir):
    inputFileName = inputDir + inputFile + ".txt"
    outputFileName = outputDir + outputFile + ".json"
    if not os.path.exists(outputDir): 
        os.makedirs(outputDir)     
    cmd = makeCmd(inputFileName, outputFileName)
    os.system(cmd)
def getVector(fname):
    l= []
    with open(fname, 'r') as f:
        data = json.load(f)
        features = data["features"]
        for tok in features:
            layers = tok["layers"]
            #print(layers[0]["values"])
            l.append(layers[0]["values"])
    currArray = np.array(l)
    #print(currArray.shape)
    avg = np.mean(currArray, axis=0)
    return avg

#Generate bert predict result
def descriptionToVecList(courseData, outputDir):
    #makeDir
    textDir = outputDir + "rawText/"
    bertDir = outputDir + "vecBERT/"
    vectDir = outputDir + "vectFile/"
    listVec = []
    if not os.path.exists(textDir): 
        os.makedirs(textDir)     
    if not os.path.exists(bertDir): 
        os.makedirs(bertDir) 
    if not os.path.exists(vectDir): 
        os.makedirs(vectDir) 
        
    fpLabel = open(vectDir + "label.txt", "w")
    nSuccess = 0
    with open(courseData,'r') as fp:
        line = fp.readline()
        line = fp.readline()
        nLine = 1
        while (line != ''):
            i = line.find(',')
            courseCode = line[:i]
            courseDescription = line[i + 2:-2]
            re.sub(r'[^\x00-\x7f]',r'', courseDescription)
            try:
                toTxtFile(courseCode, textDir, courseDescription)
                toBERTVector(courseCode, courseCode, textDir, bertDir)
                vec = getVector(bertDir + courseCode + ".json")
                listVec.append(vec)
                #fpLabel.write(courseCode)
                fpLabel.write(line)
                fpLabel.write('\n')
                nSuccess += 1
            except: 
                pass
            line = fp.readline()
            nLine += 1
            #break
    assert(nSuccess == len(listVec))
    np.save(vectDir + "vecArray.npy", np.array(listVec))    
    fpLabel.close()


if __name__ == "__main__":    
    descriptionToVecList("CourseDataCleaned.csv", "vectorOutput/")

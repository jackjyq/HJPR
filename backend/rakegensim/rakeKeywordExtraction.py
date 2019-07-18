import csv
from rake_nltk import Rake
r=Rake()
with open('cleaneddata.csv', 'r') as readFile:
    reader = csv.reader(readFile)
    lines = list(reader)
    for i in lines:
        text=i[1]
        r.extract_keywords_from_text(text)
        a=r.get_ranked_phrases()
        #stringA=str(a)
        i.append(a)
with open('cleaneddata.csv', 'w') as writeFile:
    writer = csv.writer(writeFile)
    writer.writerows(lines)
readFile.close()
writeFile.close()

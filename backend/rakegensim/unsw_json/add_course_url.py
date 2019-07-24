import json

handbook = "https://www.handbook.unsw.edu.au/undergraduate/courses/2019/"
with open("./course_info.json", "r") as f:
    data = json.load(f)

for code in data:
    data[code]["courseUrl"] = handbook + code

print(data)

with open("./course_info.json", "w") as f:
    json.dump(data, f)
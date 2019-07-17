# Name: db_model.py
# Author: Jack Jiang (z5129432)
# Date: 2019-07
# Description:
#   this file implements database related class and functions
from mongoengine import connect, StringField, Document
from flask import json
from ml_model import get_database_url

##################### Database Model Defination ########################
class Statistic(Document):
# {
#     "cloud": {
#         "analysis": 0.01,
#         "modern geometric": 0.005,
#         "python": 0.02
#     },
#     "skills": [ "Python", "analysis", "modern geometric"],
#     "courses": [ "TSMA2004", "TSMA4100", "AUT2201"]
# }
    key = StringField(required=True, primary_key=True)
    data = StringField(required=True)

    def __init__(self, key, data, *args, **values):
        super().__init__(*args, **values)
        self.key = key
        self.data = data


class Course_Info(Document):
# {
#     "TSMA2004": {
#         "courseCode": "TSMA2004",
#         "skills": [ "analysis", "python", "problem solving"],
#         "courseDesc": "course description",
#         "similarCourses" :["TSMA2004", "TSMA4100", "AUT2201"],
#         "courseUrl": "http://the home page of that course"
#     },
#     "TSMA4100": {
#         "courseCode": "TSMA4100",
#         "skills": [ "analysis", "python", "problem solving"],
#         "courseDesc": "course description",
#         "similarCourses" :["TSMA2004", "TSMA4100", "AUT2201"],
#         "courseUrl": "http://the home page of that course"
#     },
#     "AUT2201": {
#         "courseCode": "AUT2201",
#         "skills": [ "analysis", "python", "problem solving"],
#         "courseDesc": "course description",
#         "similarCourses" :["TSMA2004", "TSMA4100", "AUT2201"],
#         "courseUrl": "http://the home page of that course"
#     }
# }
    code = StringField(required=True, primary_key=True)
    data = StringField(required=True)

    def __init__(self, code, data, *args, **values):
        super().__init__(*args, **values)
        self.code = code
        self.data = data


####################### Other Helper functions #########################
def update_statistic(key, file):
    # key can be cloud, skills, courses
    database_url = get_database_url()
    db_client = connect(host=database_url)
    with open(file) as data_file:
        data_dict = json.load(data_file)
    data_json = json.dumps(data_dict)
    instance = Statistic(key, data_json)
    instance.save()
    print("Reading " + key + " back from the database")
    if Statistic.objects(key=key):
        data_json =  Statistic.objects(key=key)[0].data
        data_dict = dict(json.loads(data_json))
        print(data_json)
    db_client.close()


def update_course_info(file):
    database_url = get_database_url()
    db_client = connect(host=database_url)
    with open(file) as all_data_file:
        all_data_dict = json.load(all_data_file)
    for code, data_dict in all_data_dict.items():
        data_json = json.dumps(data_dict)
        instance = Course_Info(code, data_json)
        instance.save()
        print(code + " has been saved to database")
    print("\nReading back from the database")
    for code, data_dict in all_data_dict.items():
        if Course_Info.objects(code=code):
            data_json =  Course_Info.objects(code=code)[0].data
            data_dict = dict(json.loads(data_json))
            print(data_json)
    db_client.close()

############################ Main Function #############################
if __name__ == "__main__":
    # update_statistic(key="cloud", file="./hjprdump/sample_data/cloud.json")
    # update_course_info("./static/dump_database/course_info.json")
    pass
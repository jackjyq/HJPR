from config import *
from flask import Flask, json, jsonify, render_template, request
from flask_cors import CORS
from mongoengine import connect, StringField, Document
app = Flask(__name__)
CORS(app)


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



################### HJPR Backend API Implementation ####################
# https://github.com/unsw-cse-comp3900-9900/capstone-project-hjpr/blob/master/backend/api.md


@app.route('/api/cloud', methods = ["GET"])
# Get the cloud
# Return the list of skills in all courses, 
#   and the number of courses for each skill.
#   {
#       "analysis": 0.01,
#       "modern geometric": 0.005,
#       "python": 0.02
#   }
def get_cloud():
    if Statistic.objects(key="cloud"):
        data_json =  Statistic.objects(key="cloud")[0].data
        data_dict = dict(json.loads(data_json))
    return render_template("index.html"), 400


@app.route('/api/skills/', methods = ["GET"])
# Get the skills
# Return the list of skills in all courses.
#   {
#       "skills": [ "Python", "analysis", "modern geometric"]
#   }
def get_skills():
    with open(DATABASE + "/skills.json") as f:
        data = json.load(f)
    return jsonify(data), 200



@app.route('/api/courses/', methods = ["GET"])
# Get the courses
# return the list of all courses
#   {
#       "courses": [ "TSMA2004", "TSMA4100", "AUT2201"]
#   }
def get_courses():
    with open(DATABASE + "/courses.json") as f:
        data = json.load(f)
    return jsonify(data), 200



@app.route('/api/suggest/', methods = ["GET", "POST"])
# Get the suggested courses
# Send
#   {
#       "skills": [ "analysis", "python", "problem solving"],
#       "courses": [ "TSMA2004", "TSMA4100", "AUT2201"],
#       "questions": "I like python"
#   }
# Response (Success)
#   {
#       "courses": [
#           {
#               "label": "MA3402",
#               "value": 0.7,
#               "desc": "desc"
#           },
#           {
#               "label": "MUSP4145",
#               "value": 0.2,
#               "desc": "desc"
#           }
#       ]
#   }
# Response (Fail): 400
#   {
#       "errorMsg": "whatever error messeage specified by backend"
#   }
def get_suggest():
    # data = request.data
    if (request.method == "POST"):
        with open(DATABASE + "/suggested_courses_succeed.json") as f:
            data = json.load(f)
        return jsonify(data), 200
    else:
        return render_template("index.html"), 400



@app.route('/api/course/<course_code>/', methods = ["GET"])
# Get course information
# Response (Success)
#   return the skills and similar courses 
#   which should be sorted in descending order
#   {
#       "courseCode": "course code",
#       "skills": [ "analysis", "python", "problem solving"],
#       "courseDesc": "course description",
#       "similarCourses" :["TSMA2004", "TSMA4100", "AUT2201"],
#       "courseUrl": "http://the home page of that course"
#   }
# Response (Error) 404
#   return when the course code does not exist
#   {   
#       "courseCode": "course code",
#       "errorMsg": "the course code does not exist"
#   }
def get_info(course_code):
    # data = request.data
    with open(DATABASE + "/course_information_succeed.json") as f:
        data = json.load(f)
    return jsonify(data), 200


@app.route('/', methods = ["GET"])
# Index Page
#   Just show some information
def get_index():
    return render_template("index.html"), 400


############################ Main Function #############################
if __name__ == "__main__":
    db_client = connect(host=DB_URL)
    app.run(host = 'localhost',port=5000, debug=True)
    # data_json = json.dumps({
    #         "analysis": 0.01,
    #         "modern geometric": 0.005,
    #         "python": 0.02
    #         })
    # instance = Statistic("cloud", data_json)
    # instance.save()
    # if Statistic.objects(key="cloud"):
    #     data_json =  Statistic.objects(key="cloud")[0].data
    #     data_dict = dict(json.loads(data_json))
    #     print("ok")
    #     print(data_json)
    db_client.close()
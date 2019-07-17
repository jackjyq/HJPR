# Name: Main.py
# Author: Jack Jiang (z5129432)
# Date: 2019-07
# Description:
#   this file implement HJPR Backend API, see documentation for details
#   # https://github.com/unsw-cse-comp3900-9900/capstone-project-hjpr/blob/master/backend/api.md
from flask import Flask, json, jsonify, render_template, request
from flask_cors import CORS
from mongoengine import connect, StringField, Document

from config import ML_MODEL
from db_model import Statistic, Course_Info
from ml_model import get_database_url, bootstrap, suggest_runner


############################ Initialization ############################
DB_URL = get_database_url()
bootstrap()     # bootstrap the machine learning model
app = Flask(__name__)
CORS(app)


######################## Helper functions ##############################
def get_error_message(messeage):
    # input a str error message
    # return a json format
    #   {
    #       "errorMsg": messeage
    #   }
    return jsonify({"errorMsg": messeage})


################### HJPR Backend API Implementation ####################
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
        return data_json, 200
    else:
        return get_error_message("database error"), 500


@app.route('/api/skills/', methods = ["GET"])
# Get the skills
# Return the list of skills in all courses.
#   {
#       "skills": [ "Python", "analysis", "modern geometric"]
#   }
def get_skills():
    if Statistic.objects(key="skills"):
        data_json =  Statistic.objects(key="skills")[0].data
        return data_json, 200
    else:
        return get_error_message("database error"), 500


@app.route('/api/courses/', methods = ["GET"])
# Get the courses
# return the list of all courses
#   {
#       "courses": [ "TSMA2004", "TSMA4100", "AUT2201"]
#   }
def get_courses():
    if Statistic.objects(key="courses"):
        data_json =  Statistic.objects(key="courses")[0].data
        return data_json, 200
    else:
        return get_error_message("database error"), 500



@app.route('/api/suggest/', methods = ["POST"])
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
    data_json = request.data
    data_dict = json.loads(data_json)
    status, value = suggest_runner(data_dict)
    if (status == 0):
        return jsonify(value), 200
    else:
        return get_error_message(value), 400



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
    if Course_Info.objects(code=course_code):
        data_json =  Course_Info.objects(code=course_code)[0].data
        return data_json, 200
    else:
        error_dict = {   
                "courseCode": course_code,
                "errorMsg": "the course code does not exist"
                }
        return jsonify(error_dict), 404


@app.route('/', methods = ["GET"])
# Index Page
#   Just show some information
def get_index():
    return render_template("index.html"), 200


############################ Main Function #############################
if __name__ == "__main__":
    db_client = connect(host=DB_URL)
    app.run(host = 'localhost',port=5000, debug=True)
    db_client.close()
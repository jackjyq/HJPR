from flask import Flask, json, jsonify, render_template, request
app = Flask(__name__)


DATABASE = "./dump_database"

# show documentation
@app.route('/', methods = ["GET"])
def get_documentation():
    return render_template("documentation.html"), 200


# Get the skills
@app.route('/api/skills', methods = ["GET"])
def get_skills():
    with open(DATABASE + "/skills.json") as f:
        data = json.load(f)
    return jsonify(data), 200


# Get the courses
@app.route('/api/courses', methods = ["GET"])
def get_courses():
    with open(DATABASE + "/courses.json") as f:
        data = json.load(f)
    return jsonify(data), 200


# Get the suggested courses
@app.route('/api/suggest', methods = ["GET", "POST"])
def get_suggested_courses():
    # data = request.data
    if (request.method == "POST"):
        with open(DATABASE + "/suggested_courses_succeed.json") as f:
            data = json.load(f)
        return jsonify(data), 200
    else:
        return "You need to use POST method", 400

# Get course information
@app.route('/api/course/<course_code>', methods = ["GET"])
def get_course_information(course_code):
    # data = request.data
    with open(DATABASE + "/course_information_succeed.json") as f:
        data = json.load(f)
    return jsonify(data), 200


if __name__ == "__main__":
    app.run(host = 'localhost',port=5000, debug=True)
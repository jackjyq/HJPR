# HJPR Backend API Documentation

## @URL

[http://localhost:5000](http://localhost:5000)

# Error Message

if there is some error from the backend, e.g. database could not be connected, then return the following

- CODE: 500

```json
{
    "errorMsg": "error messeage specified by backend, e.g. database error"
}
```


# Get the cloud

- URL: @url/api/cloud
- Method: GET

**Response**

Return the list of skills in all courses, and the number of courses for each skill.

- CODE: 200

```json
{
    "keywords": [
        {
            "label": "Python",
            "value": 0.3
        },
        {
            "label": "Machine Learning",
            "value": 0.4
        }
    ]
}
```



# Get the skills

- URL: @url/api/skills
- Method: GET

**Response**

Return the list of skills in all courses.

- CODE: 200

```json
{
    "skills": [ "Python", "analysis", "modern geometric"]
}
```



# Get the courses

- URL: @url/api/courses
- Method: GET

**Response**

return the list of all courses

- CODE: 200

```json
{
    "courses": [ "TSMA2004", "TSMA4100", "AUT2201"]
}
```



# Get the suggested courses

- URL: @url/api/suggest/bert
- URL: @url/api/suggest/rakegensim
- Method: POST
```json
{
    "skills": [ "analysis", "python", "problem solving"],
    "courses": [ "COMP1000", "COMP1511"],
    "questions": "Molecular and cell biology"
}
```

**Response (Success)**

return a list of recommended courses sorted according to the relevance in descending order

- CODE: 200

```json
{
    "courses": [
        {
            "label": "COMP1000",
            "value": 0.7,
            "desc": "desc"
        },
        {
            "label": "COMP1511",
            "value": 0.2,
            "desc": "desc"
        }
    ]
}
```

**Response (Fail)**

return an error message if the client has sent bad request

- CODE: 400

```json
{
    "errorMsg": "whatever error messeage specified by backend"
}
```



# Get course information

- URL: @url/api/course/@course_code
- Method: GET

**Response (Success)**

return the skills and similar courses which should be sorted in descending order

- CODE: 200

```json

{
    "courseCode": "course code",
    "skills": [ "analysis", "python", "problem solving"],
    "courseDesc": "course description",
    "similarCourses" :["TSMA2004", "TSMA4100", "AUT2201"]
}
```

**Response (Error)**

return when the course code does not exist

- CODE: 404

```json
{   
    "courseCode": "course code",
    "errorMsg": "the course code does not exist"
}
```

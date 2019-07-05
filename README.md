# HJPR API Documentation

## Get the skills

- URL: /skills
- Method: GET
- Decription: get the list of skills in all courses, and the number of courses for each skill.

### Success Response

- CODE: 200
- Content:

```json
{
    "analysis": 0.01,
    "modern geometric": 0.005,
    "python": 0.02
}
```

## Get the courses

- URL: /courses
- Method: GET
- Description: get the list of all courses

### Success Response

- CODE: 200
- Content:

```json
{
    "courses": [ "TSMA2004", "TSMA4100", "AUT2201"]
}
```

## Get the suggested courses

- URL: /suggest
- Method: POST
- Description: return a list of recommended courses sorted according to the relevence in decending order
- Content:
  
```json
{
    "skills": [ "analysis", "python", "problem solving"],
    "courses": [ "TSMA2004", "TSMA4100", "AUT2201"],
    "questions": [],
}
```

### Success Response

- CODE: 200
- Content:

```json
{
    {
        "courses": [ "TSMA2004", "TSMA4100", "AUT2201"]
    }
}
```

### Error Response

return an error messenge if the client has sent bad request

- CODE: 400
- Content:

```json
{
    {
        "errorMsg": "whatever error messeage specified by backend"
    }
}

## get course information

- URL: /course/<course code>
- Method: GET
- Decription: the skills and similar courses should be sorted in decending order

### Success Response

- CODE: 200
- Content:

​```json
{
    "courseCode": "course code",
    "skills": [ "analysis", "python", "problem solving"],
    "courseDesc": "course description",
    "similarCourses" :["TSMA2004", "TSMA4100", "AUT2201"],
    "courseUrl": "http://the home page of that course"

}
```

### Error Response

the course code does not exist

- CODE: 404
- Content:

```json
{   
    "courseCode": "course code",
    "errorMsg": "the course code does not exist"
}
```


## References

- [Course Website](https://webcms3.cse.unsw.edu.au/COMP9900/19T2/)
- [Google Drive](https://drive.google.com/drive/folders/17uxR4HrlkMTmWBHJNuZqe2dFg7krcCz2?usp=sharing)
- [Trello](https://trello.com/b/An48d5C7/hjpr)
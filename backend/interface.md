# HJPR Backend Fuction Interface

Interface of suggest function

```python
import suggest from ./rakegenism/runner.py as rakegenism
import suggest from ./bert/runner.py as bert

parameter = {
    "skills": [ "analysis", "python", "problem solving"],
    "courses": [ "TSMA2004", "TSMA4100", "AUT2201"],
    "questions": "I like python",
}

code, value = rakegenism(parameter)

if succeed:
    code = 0
    value = {
    "courses": [
        {
            "label": "MA3402",
            "value": 0.7,
            "desc": "desc"
        },
        {
            "label": "MUSP4145",
            "value": 0.2,
            "desc": "desc"
        }
        ]
    }
else:
    code = 1
    value = "Error"
```
# HJPR Backend Fuction Interface

## Sample data

[Sample data](./sample_data)

## Interface of suggest function

```python
import suggest from ./rakegenism/runner.py as rakegenism
import suggest from ./bert/runner.py as bert

parameter = {
    "skills": [ "analysis", "python", "problem solving"],
    "courses": [ "TSMA2004", "TSMA4100", "AUT2201"],
    "questions": "I like python",
}

status, value = rakegenism(parameter)

if succeed:
    status = 0
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
    status != 1
    value = "Error"
```
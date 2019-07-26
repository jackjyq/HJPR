# HJPR Model Interface

- Jack Jiang(z5129432)
- jackjyq@outlook.com

## Sample data

[Sample data](https://github.com/unsw-cse-comp3900-9900/capstone-project-hjpr/tree/master/backend/hjprdump/sample_data)

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
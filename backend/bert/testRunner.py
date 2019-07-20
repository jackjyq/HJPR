import runner
parameter = {
    "skills": [ "analysis", "python", "problem solving"],
    "courses": [ "MOL4010", "MOL8013"],
    "questions": "Molecular and cell biology",
}
print(runner.suggest(parameter))
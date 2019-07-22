import ml_model
data_dict = {"skills": [ "analysis", "python", "problem solving"], "courses": [ "TSMA2004","TSMA4100", "AUT2201"],"questions": "I like python"}
parameter = {
    "skills": [ "analysis", "python", "problem solving"],
    "courses": [ "MOL4010", "MOL8013"],
    "questions": "Molecular and cell biology",
}
print (ml_model.suggest_runner(parameter))

import ml_model
data_dict = {"skills": [ "analysis", "python", "problem solving"], "courses": [ "TSMA2004","TSMA4100", "AUT2201"],"questions": "I like python"}
print (ml_model.suggest_runner(data_dict))

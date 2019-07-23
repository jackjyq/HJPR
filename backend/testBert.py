from bert.runner import suggest as bert_suggest

data_dict = {"skills": [ "analysis", "python", "problem solving"], "courses": [ "TSMA2004","TSMA4100", "AUT2201"],"questions": "I like python"}
parameter = {
    "skills": [ "analysis", "python", "problem solving"],
    "courses": [ "COMP1000", "COMP1511"],
    "questions": "Molecular and cell biology"
}
print (bert_suggest(parameter))
# Name: ml_model.py
# Author: Jack Jiang (z5129432)
# Date: 2019-07
# Description:
#   place all mL_dependent code here
from config import ML_MODEL
if (ML_MODEL == "hjprdump"):
    from hjprdump.runner import suggest
elif (ML_MODEL == "bert"):
    from bert.runner import suggest
elif (ML_MODEL == "rakegensim"):
    pass
else:
    raise Exception("model not supported!")

def get_database_url():
    # input is a global constant ML_MODEL    
    # return database_url
    if (ML_MODEL == "hjprdump"):
        database_url = "mongodb://admin:comp9900@ds048719.mlab.com:48719/hjprdump"
    elif (ML_MODEL == "bert"):
        database_url = "mongodb://admin:comp9900@ds048719.mlab.com:48719/hjprdump"
    elif (ML_MODEL == "rakegensim"):
        database_url = ""
    else:
        raise Exception("model not supported!")
    return database_url


def bootstrap():
    # this function will be called BEFORE starting backend server
    if (ML_MODEL == "hjprdump"):
        print(ML_MODEL + " starting...")
    elif (ML_MODEL == "bert"):
        print(ML_MODEL + " starting...")
    elif (ML_MODEL == "rakegensim"):
        print(ML_MODEL + " starting...")
    else:
        raise Exception("model not supported!")


def suggest_runner(user_preference):
    # a wrapper for suggest function
    # refer the documentation for detail
    # https://github.com/unsw-cse-comp3900-9900/capstone-project-hjpr/blob/master/documentation/backend_interface.md
    if (ML_MODEL == "hjprdump"):
        return suggest(user_preference)
    elif (ML_MODEL == "bert"):
        return suggest(user_preference)
    elif (ML_MODEL == "rakegensim"):
        pass
    else:
        raise Exception("model not supported!")
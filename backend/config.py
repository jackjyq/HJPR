# config the model
MODEL = "dump"
# MODEL = "bert"
# MODEL = "rakegensim"


DATABASE = "./static/dump_database"
if (MODEL == "dump"):
    DB_URL = "mongodb://admin:comp9900@ds048719.mlab.com:48719/hjprdump"
elif (MODEL == "bert"):
    DB_URL = ""
elif (MODEL == "rakegensim"):
    DB_URL = ""
else:
    raise Exception("model not supported!")

import json
import re
from nltk.corpus import wordnet
import re
import csv
data_skills={}
from nltk.corpus import stopwords
stopwords=list(stopwords.words('english'))

temp={}
courseInfo={}
import csv
from rake_nltk import Rake
r=Rake()
skillsCourseCode={}
skillsextracted=[ "world wide web www dependent activities", "world wide web", "powerful computer tools yet", "implement effective spreadsheet", "similar spreadsheet",  "database packages", "database applications", "database application", "spreadsheet", "spreadsheets", "security", "internet", "design", "databases", "computers", "commerce", "browsers","construct new software systems", "software systems work", "modern society", "critical skill", "computational thinking", "understanding", "solving",  "foundations", "computing", "object oriented programming", "interactive multimedia applications", "delivery", "construction", "high level programming language", "storage structures memory", "program structures statements", "data types numeric", "data structures arrays", "reflective practice", "code quality", "testing", "teamwork", "pointers", "lists", "iteration", "interest", "functions", "character", "analysis", "algorithms", "addresses", "become effective programmers", "system architectures", "level programs", "computer architecture", "number representation", "manipulates data", "level programming", "operating systems", "machine code", "level view", "level issues", "systems", "machine", "synchronisation", "programmer", "portability", "performance", "parallelism", "networks", "memory", "concurrency", "compilers", "communication", "fundamental database techniques software engineering methodologies", "software engineering principles", "modern development methodologies", "maintenance data modelling", "based system architecture", "software engineering", "techniques web", "software system", "development practices", "web platforms", "simple web", "conceptual modeling", "verification", "validation", "tools", "specification", "programming", "processes", "operation", "measurements", "deployment", "deploy", "build", "underlying memory representation", "high level language", "laboratory programming exercises", "fundamental programming concepts", "programming using", "programming style", "program testing", "practical experience", "objective", "debugging", "simple binary trees", "secure coding practice", "low level structure", "team programming", "stack frames", "problem solving", "linked lists", "memory allocation", "style", "recursion", "approaches", "abstraction", "formal examination", "data types", "data structures", "associated algorithms", "programming assignments", "trees", "large", "interfaces", "graphs", "complexity", "practical work involving programming", "software system decomposition", "software development life", "code improvement techniques", "debugging techniques", "version control", "configuration management", "command languages", "reliability", "profiling", "overview", "cycle", "especially set theory", "critical industrial contexts", "modelling system behaviour", "use case", "predicate logic", "methods support", "methods developed", "formal methods", "formal development", "develop competence", "concrete implementations", "abstract specifications", "proof obligations","modelling", "proof", "verified", "safety", "refinement", "implementation", "consistency", "builds", "low level device drivers", "floating point number representation", "digital signals data acquisition", "assembly language programming methodology", "machine language programming", "machine language fundamentals", "converting analog signals", "instruction repertoire", "analog input", "serial communication", "memory system", "driving actuators", "computer arithmetic", "addressing modes", "assembly", "variety", "timers", "sensors", "interrupts", "buses", "design skills problem solving", "real world problems", "year cs courses", "oriented paradigm topics", "oriented design object", "oriented design", "second year", "oriented programming", "design project", "design patterns", "wide range", "sound programming", "practical work", "knowledge gained", "introduce students", "implementation project", "fundamental techniques", "expose students", "economics using", "science", "objects", "modeling", "engineering", "application", "fundamental data types", "core data structures", "unix tools", "software systems", "core algorithms", "algorithmic strategies", "algorithm analysis", "structure", "sorting", "searching", "measurement", "context", "anticipate", "problem solving design methodologies", "engineering design", "practical assignments", "object orientation", "greedy method", "dynamic methods", "complex systems", "reliable", "divide", "conquer", "backtrack", "designing algorithms using induction", "approximation algorithms", "space bounds", "space analysis", "order statistics", "greedy strategies", "computational complexity", "case time", "matrices", "intractability", "efficiency", "correctness", "completeness", "modern programing language", "small programming language", "free parsing techniques", "compiler front ends", "programming languages", "type checking", "regular expressions", "implementation techniques", "formal translation", "directed translation", "compilers emphasis", "code generation", "attribute grammars", "program syntax", "compiler", "syntax", "semantics", "finite", "presented using case studies", "software system development", "software tools", "implementation phases", "designs", "true concurrency vs interleaving", "termination detection", "mutual exclusion", "gravitational n", "dining philosophers", "classical problems", "body problem", "threads", "semaphores", "rendezvous", "monitors", "models", "locks", "barriers", "abstractions", "distributed systems e", "design decisions underlying", "modelling concurrent systems", "concurrent systems", "true concurrency", "temporal logic", "system behaviour", "semantic equivalences", "process algebra", "implementation relations", "event structures", "equivalence checking", "concurrency found", "computational perspectives", "art techniques", "successful models", "semantic models", "mathematical models", "concurrent", "mathematical", "state", "philosophical", "operational", "modal", "literature", "component", "comparing", "describe several automatic verification techniques", "typically called algorithmic verification", "standard software engineering practice", "good software design alone", "fully automatic techniques", "mathematically sound techniques", "formal methods community", "automatic analysis", "several tools", "systematic testing", "code review", "system", "standard template library e", "run time type information", "oriented inheritance techniques", "advanced techniques", "generic programming", "exception handling", "efficiency issues", "templates", "containers", "sequential logic design principles", "simulate digital systems", "system level interconnect", "risc system", "modern processors", "memory subsystem", "architectural designs", "cad tools", "simulation", "architecture", "art computer aided design tools", "digital systems computer systems", "design complex systems", "develop circuit solutions", "basic building blocks", "computer systems", "digital circuits", "sequential circuits", "hardware models", "describe circuits", "digital", "operating system organisation", "distributed operating systems", "file systems", "virtual memory", "storage management", "process management", "memory management", "disk scheduling", "scheduling", "services", "segmentation", "protection", "paging", "relational database management systems", "database application design", "transaction processing", "query processing", "query languages", "development tools", "data models", "data definition", "relational", "oriented", "entity", "file transfer protocol ftp", "substantial network programming component", "fundamental network security concepts", "address resolution using arp", "internet protocol suite overview", "network layer services", "congestion control mechanisms", "application level protocols", "networking technology overview", "transport protocols tcp", "finite state automata", "11 wireless networks", "data link", "protocol design", "link state", "network layers", "validation using", "transport layer", "connecting networks", "routing algorithms", "distance vector", "peer networks", "conjunction", "addressing", "natural language processing", "logic programming assignments", "ai programming languages", "speech recognition", "search strategies", "pattern matching", "machine learning", "machine intelligence", "knowledge representation", "game playing", "expert systems", "control methods", "automated reasoning", "computer vision", "computer", "applications", "hidden surface removal", "user interfaces", "texture maps", "scan conversion", "perspective transformation", "modelling curves", "hierarchical modelling", "graphics standards", "graphics hardware", "3d transformations", "2d transformations", "3d clipping", "clipping", "surfaces", "splines", "polygons", "lighting", "fractals", "research agent architectures including classical planning", "picking actions using planning", "real agent architecture", "intelligent agent design", "working system", "theoretical components", "theoretical component", "implement parts", "engineered control", "reinforcement learning", "robot", "public cryptographic protocols", "case studies drawn", "engineering secure systems", "applied computer security", "computer security", "social engineering", "security fails", "security analysis", "physical security", "routing protocol design", "minor design project", "deploying wireless mesh", "transport layer issues", "wireless mesh", "sensor networks", "important technologies", "leading industrial", "laboratory component", "important impact", "academic researchers", "significance", "labelled", "learning emerging device functionalities", "mobility affects networks", "mobile device programming", "managing mobility", "ip networks", "mobile video", "mobile networking","basic understanding", "achieving self",  "realizing", "protocols", "enhancing", "secure routing protocols", "secure location discovery", "mac layer misbehaviours", "wireless technology emerges", "authentication servers radius", "building sensor networks", "wireless lan security", "traditional security attacks", "following key concepts", "wireless networks", "security vulnerabilities", "security becomes", "service attacks", "key management", "fundamental concepts", "broadcast authentication", "top priority", "securing ad", "communications markets", "advanced issues", "solutions", "networking", "mainstream", "hands", "explore", "denial", "small mobile robot kit", "artificial intelligence concepts", "multiple robot systems", "robot vision", "robot planning", "robot learning", "vision processing", "topics covered", "robotic architectures", "obstacle avoidance", "localisation problem", "hardware components", "subsystems", "robotics", "philosophy", "perception", "navigation", "experimental", "symbolic form", "solid background", "game theory", "artificial intelligence", "ai logics", "research issues", "important area", "reasoning", "research", "representation", "gives", "detail", "deepen", "constraints", "concerned", "iterative design process", "subject aims", "new game", "game fun", "game design", "game balanced", "computer science", "workshop games", "games industry", "digital media", "games", "media", "story", "prototype", "invent", "graphics", "communications", "change", "iterative game design process taught", "game design studio provides", "game design skills", "weekly reading group", "students work individually", "game salad", "game maker", "appropriate game", "development tool", "unity", "theory", "participating", "pairs", "flash", "consolidate",  "human computer interaction", "graphical user interfaces", "date industry practice",  "based course designed", "centred design process", "iterative process", "centred design", "solid understanding", "oriented techniques", "design practices", "complete prototypes", "knowledge required", "functioning application", "fidelity prototype", "industry", "fidelity", "interface", "coding", "built", "emphasises laboratory experience", "custom accelerator blocks", "cad challenges posed", "signal processing", "power consumption", "performance analysis", "core processors", "biological sequencing", "hardware design", "design validation", "telecommunications", "cryptography", "appropriate testing", "control human factors patents technical strategy", "ethics workable ethical theories morality", "law privacy public information", "innovation engineering project planning", "significant software development project", "include management issues", "ethical issues", "develop", "framework",  "solution design",  "security engineer", "inter overflow", "information security", "heap attacks", "buffer overflow", "vulnerabilities", "signatures", "integrity", "hashing", "confidentiality", "capabilities", "authentication", "current best practice professional coding", "successfully develop secure web applications", "web application vulnerabilities", "software vulnerabilities exploited", "social vulnerabilities assurance", "reflect emerging vulnerabilities", "security aware", "web applications", "online attacks", "web programmers", "testing standards", "low level technical skills", "analyse simple forensic tools", "course covers memory forensics", "standard forensic tools", "professional forensic practice", "disc forensics network", "forensic theory", "analyse data", "device forensics", "stealth techniques", "law enforcement", "extract carve", "forensics", "logging",  "analyse real world case studies", "return oriented programming course coverage", "skills including vulnerability classes", "common security models", "level software vulnerabilities", "war games competitions", "reflect emerging attack", "widespread systems", "technical process", "identify vulnerabilities",  "defence methods", "defence", "overflows", "exploited", "exploitation", "economics", "security area giving", "visiting expert", "topics depend", "precise timing", "intensive mode", "advanced topic", "workshops",  "mandatory data breech disclosure", "real world case studies", "reflect emerging best practice", "critique effective professional responses", "security engineering profession", "current best practice", "coverage includes standards", "organisational change management", "best practice", "professional issues", "organisational analysis", "culture change", "regularly updated", "key issues", "censorship terrorism", "risk assessment", "privacy", "legal", "leadership", "challenges", "audits", "analyse", "language models e evaluation methods f relevance feedback", "web search engine architecture b web crawling", "document modeling b inverted index construction", "compression c vector space model", "indexing c web structure", "web search", "ranking methods", "query expansion", "information retrieval", "probabilistic", "good programming practices", "additional correctness criteria", "practical programming tools", "practical structuring", "functional correctness", "traditional route", "sorting program", "randomisation implement", "larger set", "internet protocols", "effectiveness", "calculation", "simplify required structures graph theory", "adaptive space partition", "simplex search", "proximity search", "point location", "motion planning", "disjoint paths", "collection apis", "chromatic number", "patterns", "orthogonal", "isomorphism", "geometry", "generics", "eccentricity", "documentation", "connectivity", "binary", "low level programming language", "based stress level sensing", "sensor data smoothing", "inertial sensing", "data fusion", "security issues", "experimental approach", "activity recognition", "cloud services", "voice", "python", "light", "filtering",  "dynamic programming across subsets", "strong exponential time hypothesis",  "hard computational problems", "gives efficient algorithms", "polynomial time algorithm", "polynomial kernels subject", "computable function f", "running time", "branching algorithms", "polynomial dependence", "theoretic assumptions", "local search", "iterative compression", "colour coding", "branching", "extended version", "c programming", "conduct penetration tests", "simulated clients", "3d graphics hardware design", "detailed surface models", "animated file formats", "3d graphics software", "image based rendering",  "3d still", "advanced modelling", "advanced features", "volumetric rendering", "metropolis rendering", "ray tracing", "performance optimisation", "collision detection", "animation techniques", "optimisations", "relation theory", "mathematical methods", "graph theory", "efficient programs", "discrete probability", "boolean algebras", "algorithmic applications", "logic", "mathematics", "involving graphical user interfaces", "object oriented constructs", "fundamental programming techniques", "procedural", "animations", "sorting algorithms", "search trees", "hash tables", "stacks", "representations", "queues", "heaps", "dictionaries", "greedy strategy", "flow networks", "dynamic programming", "computational problems", "bounding summations", "asymptotic notations", "arithmetic circuits", "case analysis", "design techniques", "recurrences", "memorisation", "branch", "backtracking", "modern programming language", "current code generator generates c", "complete software cycle", "machine composition", "reliable software", "control visibility", "specification animation", "maintenance", "inheritance", "dependence", "byte code approach", "automatic memory management",
 "programming language paradigms", "theoretical foundations", "strong typing", "object oriented", "implementation aspects", "component software", "polymorphism", "overloading", "imperative", "dynamic", "declarative", "axiomatic", "architectures", "abstracting", "covers operating systems design", "os components", "persistent systems", "experimental systems", "level servers",
 "kernel implementation", "implementation issues", "hardware caches", "device drivers", "advanced level", "operating systems issues", "distributed shared memory", "distributed memory coherency", "distributed file systems", "distributed process management", "distributed systems", "distributed transactions", "process migration", "procedure call", "concurrency control", "server paradigm",
 "server", "database application techniques", "database management systems", "data manipulation languages", "database design", "data modelling", "stored procedures", "advanced databases", "manipulating big data e", "managing big data", "query languages e", "programming languages e", "big data analysis",  "database systems e", "big bata", "text analysis", "dimensionality reduction", "streaming",
  "spark", "compression", "advanced file access methods", "distributed database systems", "database performance tuning", "transaction management", "query optimisation", "b implementing data warehouses", "materialized view selection", "b mining techniques", "mining spatial databases", "mining multimedia databases", "data cube computation", "data mining process", "data warehouses", "data mining", "web mining", "text mining", "data warehouse", "data model",
  "data extraction", "system architecture", "cleansing", "information theory text compression zip", "indexing pattern matching", "data compression", "wheeler transform", "streaming algorithms", "adaptive coding", "discusses web application development techniques", "remote method invocation", "web access", "building web", "several assignments", "basic infrastructure", "ii apply web service composition techniques", "describe different architectural design approaches", "support semantic data modelling",
   "iv understand techniques", "scalable application platforms", "data modeling expertise", "semantic modelling", "securing apis",
    "complex structures", "business analysis",  "3 developing software using agile software engineering methodologies", "5 developing appropriate testing strategies", "2 developing software", "large enterprise system", "integrated system", "separate components",
    "layers", "collaboration", "transfer protocol ftp", "connection oriented networks", "advanced internet addressing", "packet switching networks", "exterior routing protocols", "atm networks", "switching architectures", "emerging switching", "routing technologies", "optical routing", "ip switching", "mobile ip", "classical ip",
   "atm solutions", "routing", "next generation internet architectures", "c programming knowledge", "network performance measurement", "network programming", "admission control", "network system", "linux",  "future workloads", "designing systems", "powered wireless communication", "device communication", "improving spectrum", "energy efficiency",
   "android", "artificial intelligence programming language prolog", "natural language understanding", "search techniques", "decision tree algorithms", "model tree algorithms", "neural network learning", "data mining technology", "machine learning algorithms", "model selection", "unsupervised learning", "rule learning", "lazy learning", "independent learning", "ensemble learning", "bayesian learning", "version spaces","kernel methods", "algorithmic approach", "regression", "evaluating",
    "clustering", "algorithm", "statistical machine learning approaches", "structured probabilistic models", "probabilistic graphical models", "gaussian processes", "restricted boltzmann machine","neural networks", "recurrent networks", "deep learning", "semantic analysis", "language processing",
     "image processing", "complexity analysis", "cross site scripting attacks",  "digital rights management", "code injection attacks",  "attacks", "threats", "cryptanalysis", "countermeasures", "template matching using classifiers", "local shading models",
     "satellite image analysis", "colour vision perception", "image pyramids",
      "based vision", "probabilistic methods", "medical imaging", "linear filters", "fourier transform", "model fitting", "recognition", "cameras", "distinction level performance",
      "aboriginal art","intrusion detection", "digital forensics",  "honeypots", "hacking", "firewalls", "cybercrime", "human information processing system", "system interactions", "computer technologies",
       "embedded system design life cycle", "embedded system design team projects", "software development techniques", "project report writing", "system testing", "software integration", "ip reuse", "ip protection", "software project management", "capstone software project", "world software system", "teamwork strategies",
        "complex software systems", "software reuse", "implementation methods", "illustrate concepts", "concurrent programming", "problem solving practices", "dimensional data storage", "parallel algorithmic techniques", "neumann techniques",
        "linear equations", "iteration methods", "circuit implementations", "algorithm engineering", "structured", "spatial", "solution", "convolution", "advanced", "algorithms covered include dynamic programming", "select appropriate algorithms", "integrate multiple algorithms", "design new algorithms", "programming contests", "include evaluation", "combinatorial algorithms", "advanced algorithms", "time pressure", "suffix trees", "shortest path", "problem difficulty", "max flow",  "solving problems", "development", "advanced dynamic programming",
        "time management", "team work", "maximum matching", "iterative deepening", "turing machines tms", "universal tms", "turing thesis", "run time",
         "relative completeness", "pumping lemma", "polynomial reductions", "loop invariants", "incompleteness result", "halting problem", "free grammars", "word problems", "optimisation problems", "formal languages", "program correctness", "np completeness", "finite automata", "complexity classes", "languages", "automata", "space", "reduction", "randomisation", "loops", "determinism", "assertions",
          "approximation", "mechanical proof assistants", "current research topics", "higher order logic", "conduct formal proofs", "proof techniques used", "order logic", "theorem proving", "techniques involved", "theoretical background", "term rewriting", "recursive functions", "presents specification",  "natural deduction", "mathematical proofs", "logical domains", "lambda calculus", "induction principles", "functional programming", "decision procedures", "automated deduction", "proofs", "practice", "based test generators", "including security infrastructure software",
           "amss transport systems", "modern functional languages", "achieve high assurance", "security infrastructure", "specific languages", "power grids","financial applications", "software used", "assurance", "trust", "domain", "query processing optimisation techniques", "1 stream computation", "web application system", "3 web searching", "multimedia data", "data streams", "web technologies", "web searching", "web databases", "multimedia databases", "multimedia applications", "future trends", "detailed examination", "database",
           "medium access control protocol"]

with open('CourseDataCleaned-2.csv', 'r') as readFile:
    while (1):
        line = readFile.readline()
        if not line:
            break
        i = line.find(",")
        courseCode = line[:i]
        courseDescription = str(line[i+1:])
        courseDescription=courseDescription.strip()
        courseInfo[courseCode] = courseDescription


allskills={}
for course in courseInfo:
    r.extract_keywords_from_text(courseInfo[course])
    a=r.get_ranked_phrases()
    temp1=[]
    for j in a:
        if j in skillsextracted:
            temp1.append(j)
            if j in allskills:
                allskills[j]+=1
            else:
                allskills[j]=1


    skillsCourseCode[course]=temp1

j=0
import operator
sorted_skills = sorted(allskills.items(), key=operator.itemgetter(1), reverse=True)

#word cloud
wordCloud=[]
for i in sorted_skills[:17]:
    temp={}
    temp["label"]=i[0]
    temp["value"]=i[1]
    wordCloud.append(temp)
final={}
final["keywords"]=wordCloud
#word cloud
with open('wordcloud.json', 'w') as json_file:
  json.dump(final, json_file)

#get the Skills
getSkill={}
getSkill["skills"]=skillsextracted
with open('skills.json', 'w') as json_file:
  json.dump(getSkill, json_file)

#get the courses

getCourses=[]
for course in courseInfo:
    getCourses.append(course)

getCourseJson={}
getCourseJson["courses"] = getCourses

with open('courses.json', 'w') as json_file:
  json.dump(getCourseJson, json_file)
#similar courses

import gensim
from nltk.tokenize import word_tokenize
import csv

dataCollection=[]
for i in courseInfo:
    dataCollection.append(courseInfo[i])
codeCollection=getCourses

dataList = [[l.lower() for l in word_tokenize(text)]
            for text in dataCollection]
dictCollection = gensim.corpora.Dictionary(dataList)
dictCollection.save("dictCollectionModel")

corpus = [dictCollection.doc2bow(data) for data in dataList]
# corpus.save("corpusModel")
tf_idf = gensim.models.TfidfModel(corpus)
tf_idf.save("tf_idfModel")
sims = gensim.similarities.Similarity('/Users/himanshuvaswani/Desktop/UNSWSem5/x',\
                                        tf_idf[corpus],num_features=len(dictCollection))
sims.save("ModelSims")

docID=0
courseSimilarPercentage={}
courseSimilar={}
for i in dataCollection:
    j=0
    query=[l.lower() for l in word_tokenize(i)]
    query_doc_bow = dictCollection.doc2bow(query)
    query_doc_tf_idf = tf_idf[query_doc_bow]
    listSimilarity=[]
    for item in sims[query_doc_tf_idf]:
        if(j!=docID):
            listSimilarity.append((j, item))
        j+=1

    listSimilarity=sorted(listSimilarity, key=lambda x: x[1], reverse=True)
    tempx=[]
    temponly=[]
    for sim in listSimilarity[:15]:
        if(sim[1]!=0.0):
            tempx.append((codeCollection[sim[0]],sim[1] ))
            temponly.append(codeCollection[sim[0]])
    courseSimilarPercentage[codeCollection[docID]]=tempx
    courseSimilar[codeCollection[docID]]=temponly
    docID+=1

courseInformationFinal={}
# finalListToJson={}
for course in codeCollection:
    if(course!="CourseCode"):
        tempc={}
        tempc["courseCode"]=course
        tempc["skills"]=skillsCourseCode[course]
        tempc["courseDesc"]=courseInfo[course]
        tempc["similarCourses"]=courseSimilar[course]
        courseInformationFinal[course]=tempc

with open('courses_info.json', 'w') as json_file:
  json.dump(courseInformationFinal, json_file)

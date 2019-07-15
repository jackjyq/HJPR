# how to run backend (Jack Jiang)

the dump_backend is used for testing frontend

## Install python modules from package.txt

```shell
python3 -m venv python_modules
python3 -m pip install -r package.txt
```

## Run main.py using Python modules

### 1. Recommended Way

```shell 
source ./python_modules/bin/activate
python main.py
deactivate  # after finish
```

### 2. Alternative Way

```shell
./python_modules/bin/python main.py
```

## Install new package

```shell
source ./python_modules/bin/activate
pip install your_python_module_name
python -m pip freeze > package.txt
deactivate  # after finish
```
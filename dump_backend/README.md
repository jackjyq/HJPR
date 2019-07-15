# how to run backend (Jack Jiang)

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
```

### 2. Alternative Way

```shell
./python_modules/bin/python main.py
```

## Reference

### deactivate

```shell
deactivate
```

### install new package

```
pip install your_python_module_name
python -m pip freeze > package.txt
```
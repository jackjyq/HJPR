# HJPR Backend Deployment Documentation

## 1. Install python modules from package.txt

```shell
python3 -m venv python_modules
python3 -m pip install -r package.txt
```

## 2. Run main.py using Python modules

```shell 
source ./python_modules/bin/activate
python main.py
deactivate  # after finish
```

## 3. Install new package (if needed)

```shell
source ./python_modules/bin/activate
pip install your_python_module_name
python -m pip freeze > package.txt
deactivate  # after finish
```
# HJPR Backend Deployment Documentation

## Frist Time Setup

```shell
python3 -m venv python_modules          # create python virtual environment
source ./python_modules/bin/activate    # activate python virtual environment
python3 -m pip install -r package.txt   # install package from package.txt
deactivate                              # deactivate python virtual environment
```

## Run Code

```shell 
source ./python_modules/bin/activate    # activate python virtual environment
python main.py                          # run backend
deactivate                              # deactivate python virtual environment
```

## Install new package (if needed)

```shell
source ./python_modules/bin/activate    # activate python virtual environment
pip install your_python_module_name
python -m pip freeze > package.txt
deactivate                              # deactivate python virtual environment
```
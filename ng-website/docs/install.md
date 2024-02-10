---
sidebar_position: 1
---

# Installation

The instructions below match those in the [GitHub repository](https://github.com/tufts-ai-robotics-group/NovelGym/tree/main).

### Install NovelGridWorldsV2

First clone the [NovelGridWorldsV2](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2) repository, activate your Python environment such as `venv` or `conda` (if applicable), and install dependencies using `pip`.

```
git clone https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2.git
cd NovelGridWorldsV2
pip install .
```

### Install NovelGym

Next, clone this repository and install dependencies using `pip`, keeping the same virtual environment activated (if applicable).

```
cd ..
git clone https://github.com/tufts-ai-robotics-group/NovelGym.git
cd NovelGym
pip install .
```

### Compile MetricFF

Finally, install your C compiler by going to `planners/Metric-FF-v2.1`, and running `make`, as follows.

```
cd planners/Metric-FF-v2.1
make
```



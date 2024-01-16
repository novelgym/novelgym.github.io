---
sidebar_position: 2
---

# Creating Your Environment

In the previous part of the tutorial, [Keyboard Demo](demo), we ran the script [manual_novelty_test1.py](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/manual_novelty_test1.py) to try out the keyboard agent for the NovelGym environment. Like [manual_sanity_checker.py](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/manual_sanity_checker.py), the script designed for loading a trained model and seeing what action the model selects, and [train.py](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/train.py), the script used for training, [manual_novelty_test1.py](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/manual_novelty_test1.py) creates the environment from the [polycraft_gym_main.yaml](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/config/polycraft_gym_main.yaml) config file.

In this part of the tutorial, we examine those parameters of the config file that can be modified towards creating a simple custom environment without having to write any additional code. Later parts of the tutorial cover the creation of entities, such as objects and actions in [Examples of Objects & Actions](objectsactions), and spaces, namely in [Defining Spaces](../agent/spaces), from scratch. The section [Implementing Novelties](novelty) includes how anything can become a novelty to the agent.

**Note**: This section will be structured similarly to the [Configuration File](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/docs/config_file.md) of the [NovelGridWorldsV2](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/tree/main) repo.

`sleep_time`

`time_limit`

`actions`

`action_sets`

`object_types`

`map_size`

`seed`

`rooms`

`objects`

`num_episodes`

`entities`

`recipies`

`trades`

`auto_pickup_agents`


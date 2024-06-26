---
sidebar_position: 1
---

# Defining Spaces

## Observation Space

The implementations of the observation spaces are in the [obs_convertion](https://github.com/tufts-ai-robotics-group/NovelGym/tree/main/obs_convertion) folder. The base class is [ObservationGenerator](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/obs_convertion/base.py), which outlines methods to be implemented in an observation space. See the diagram below for the full class interdependence.

**Note**: `ABC` refers to Python's [Abstract Base Classes](https://docs.python.org/3.8/library/abc.html).

![Observations](img/Observations.drawio.png)

### Currently Implemented Observation Spaces

All of the currently implemented observation spaces are [gymnasium Box spaces](https://gymnasium.farama.org/api/spaces/):

+ [LidarAll](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/obs_convertion/lidar_all.py) has a single Box space made from a one-dimensional vector with the item selected by the agent, the agent's inventory, and the euclidean distances to the objects that strike the LiDAR beam sent by the agent in 45 degree increments,

+ [OnlyFacingObs](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/obs_convertion/only_facing.py) (child of [LidarAll](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/obs_convertion/lidar_all.py)) limits the number of LiDAR beams sent,

+ [NovelOnlyObs](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/obs_convertion/only_hinted.py) (child of [LidarAll](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/obs_convertion/lidar_all.py)) limits the types of objects detected,

+ [Matrix](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/obs_convertion/matrix.py) (child of [LidarAll](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/obs_convertion/lidar_all.py)) holds a dictionary with three Box spaces – one for the agent's selected item, one for the agent's inventory, and one for the agent's local view stored as a two-dimensional square image.

### Adding New Observation Spaces

To integrate a new observation space:

1. declare a child of [LidarAll](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/obs_convertion/lidar_all.py) in the [obs_convertion](https://github.com/tufts-ai-robotics-group/NovelGym/tree/main/obs_convertion) folder and override any parts of the parent class,

1. if the structure of the new space differs from that under [LidarAll](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/obs_convertion/lidar_all.py):

    + add a compatible net to the [net](https://github.com/tufts-ai-robotics-group/NovelGym/tree/main/net) folder,

    + implement a new policy in the [policy_utils.py](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/policy_utils.py) file,

    + add a case to the [train.py](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/train.py) file so that the right policy-maker is called instead of `create_policy` when the new observation space is being used,

1. list the new space in the [obs_convertion/\_\_init\_\_.py](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/obs_convertion/__init__.py) file consistent with the spaces already there,

1. include the new space under `OBS_TYPES` in [config.py](https://github.com/tufts-ai-robotics-group/NovelGym/blob/36f78f5e25475a43a8a83627939a5744d0a42c0c/config.py) so that the space can be chosen when training is being run from the command line.

## Action Space

The agent's action space is automatically generated from the config file. Hence, all you need to do to integrate a new action is write the module representing it and reference this module in the config.

Of course, you can also modify or override the `action_space` method of the [SingleAgentWrapper](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/envs/single_agent_standard.py) class. This class is explained in the [Combining Planning & RL Agents](combining) section.

## Reward Function

The reward is generated from the observation module by the [SingleAgentWrapper](https://github.com/tufts-ai-robotics-group/NovelGym/blob/36f78f5e25475a43a8a83627939a5744d0a42c0c/envs/single_agent_standard.py) and passed to the external RL agent.

Additional reward is generated in the reward-shaping and neurosymbolics wrappers. These are found in the [envs](https://github.com/tufts-ai-robotics-group/NovelGym/tree/main/envs) folder and described in detail in the [Combining Planning & RL Agents](combining) section.

---
sidebar_position: 1
---

# Keyboard Demo

To gain an intuition behind the game the agent will be taught to play, run the following command from the root of the [NovelGym](https://github.com/tufts-ai-robotics-group/NovelGym) repository.

```
python manual_novelty_test1.py --novelty none --env sa
```

A screen similar to the one below will pop up, rendering the environment and the agent navigating it.

![Environment](img/environment.png)

The agent, represented by a red arrow, can be operated by typing the integer corresponding to the desired action next to the prompt `action: ` generated on the command line. For instance, `action: 2`, corresponding to `approach_oak_log`, would make the agent approach the nearest oak log.

**Note**: The `--novelty none` flag in the command above means that we are trying out the environment without any novelty being introduced to it. Feel free to experiment by modifying this to any novelty listed when running the script with the `--help` flag. On the other hand, the `--env sa` represents the choice of the single agent wrapper. Throughout the [Customizing Environments](../category/customizing-environments) part of the tutorial, this will be the environment we default to; for a deeper dive into agent wrappers, see the tutorial on [Combining Planning & RL Agents](../agent/combining).

---
sidebar_position: 2
---

# Creating Your Environment

In the previous part of the tutorial, [Keyboard Demo](demo), we ran the script [manual_novelty_test1.py](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/manual_novelty_test1.py) to try out the keyboard agent for the NovelGym environment. Like [manual_sanity_checker.py](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/manual_sanity_checker.py), the script designed for loading a trained model and seeing what action the model selects, and [train.py](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/train.py), the script used for training, [manual_novelty_test1.py](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/manual_novelty_test1.py) creates the environment from the [polycraft_gym_main.yaml](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/config/polycraft_gym_main.yaml) config file.

In this part of the tutorial, we examine those keys of the config file that can be modified towards creating a simple custom environment without having to write any additional code. Examples are provided. Later parts of the tutorial cover the creation of entities, such as objects and actions in [Examples of Objects & Actions](objectsactions), and spaces, namely in [Defining Spaces](../agent/spaces), from scratch. The section [Implementing Novelties](novelty) includes how anything can become a novelty to the agent.


## Layout

`map_size`

Width and height in cells of the gridworld navigated by the agent.

```yaml
map_size: `[16, 16]`
```


***

`rooms`

Coordinates of the upper-left and lower-right corner of each room. Where rooms overlap on a row or column, a wall with a door is created.

```yaml
rooms:
  '1':
    start: [0, 0]
    end: [10, 10]
  '2':
    start: [10, 0]
    end: [15, 15]
```

## Objects

`object_types`

Source modules, break cost, and collect cost of the object types in the game.

```yaml
object_types:
  tree_tap:
    module: gym_novel_gridworlds2.contrib.polycraft.objects.TreeTap
    collect_cost: 50000
```


***

`objects`

Quantity and location of the objects initially placed in the environment. The `chunked` key set to `True` places all objects of the same type next to each other.

```yaml
objects:
  oak_log:
    quantity: 5
    room: 2
    chunked: 'False'
```

## Entities

`entities`

The `agent` key takes the source of behaviour for the agent: `KeyboardAgent`, `RandomAgent`, or a more complex setting for an RL agent such as in [config/polycraft_gym_rl.yaml](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/config/polycraft_gym_rl.yaml). See [Combining Planning & RL Agents](../agent/combining) for more detail on integrating intelligent agents.

The `entity` key represents the source code of the agent and the `id` is a unique identifier of an entity and is used in actions, such as `approach_entity_<id>`.

The `action_set` key attributes to the entity one of the actions sets specified under the key `action_sets`. Multiple entities can share the same action set.

The `room` key stands for the room the entity is placed in at the start of the game. Analogously, the `inventory` key specifies what the entity has in their inventory at the start of the game, and the inventory is variable throughout the game.

In the case of intelligent agents, `max_step_cost` specifies the maximum cost that can be incurred on the agent at any step.

```yaml
entities:
  main_1:
    agent: gym_novel_gridworlds2.agents.KeyboardAgent
    name: entity.polycraft.Player.name
    type: agent
    entity: gym_novel_gridworlds2.contrib.polycraft.objects.PolycraftEntity
    action_set: main
    inventory:
      iron_pickaxe: 1
      tree_tap: 1
    id: 0
    room: 2
    max_step_cost: 100000
```


***

`trades`

The input and output of a trade and the `id` of the trader with whom this trade can be executed.

```yaml
trades:
  block_of_titanium_1:
    input:
      block_of_platinum: 1
    output:
      block_of_titanium: 1
    trader:
    - 103
```


***

`auto_pickup_agents`

List of ids of those entities that are to automatically collect all objects around them at each time step.


## Actions

`actions`

Source modules and step cost of actions possible in the environment. In the case of actions involving interactions with other agents, the `entity_id` must be provided. Compound actions include `break_<object>`, `approach_<object/entity>`, `interact_<entity>`, `select_<object>`, `craft_<object>`, `trade_<object>`. Notice `nop_placeholder`, a placeholder for a novelty action.

```yaml
actions:
  break_block:
    module: gym_novel_gridworlds2.contrib.polycraft.actions.Break
    step_cost: 3600
```


***

`action_sets`

Unique sets of actions that can be attributed to any entity. Any set of actions can be shared by entities.

```yaml
action_sets:
  main:
  - collect
  - break_block
  - approach_oak_log
  - select_oak_log
  - deselect_item
  - craft_stick
  - nop_placeholder1
  - give_up
```

## Goal

`recipies`

Input, output, and step cost of all the recipies the agent can craft. In the base implementation includes the recipe for the `pogo_stick`, the goal craft of the game.

```yaml
recipies:
  pogo_stick:
    input:
    - stick
    - block_of_titanium
    - stick
    - diamond
    - '0'
    - '0'
    - '0'
    - rubber
    - '0'
    output:
      pogo_stick: 1
    step_cost: 8400
```

## Training

All of the below keys take integer values.

`sleep_time`

Time delay after each environment step.


***

`time_limit`

Limit on how many steps the agent can take in attempting the goal during training.


***

`seed`

For the reproducibility of the experiment run.


***

`num_episodes`

Number of episodes to run.


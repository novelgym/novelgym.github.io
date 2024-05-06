---
sidebar_position: 2
---

# Creating Your Environment

In this section, we look at the [polycraft_gym_main.yaml](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/config/polycraft_gym_main.yaml) config used in the following three files:

+ [manual_novelty_test1.py](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/manual_novelty_test1.py) – keyboard agent with rendering,

+ [manual_sanity_checker.py](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/manual_sanity_checker.py) – loads trained model and sees what action it selects,

+ [train.py](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/train.py) – used for training.

Specifically, we explain how the environment can be modified using the config only, i.e. without having to write any code. Later sections cover what can be implemented from scratch:

+ entities such as objects and actions (see [Examples of Objects & Actions](objectsactions)),

+ spaces (see [Defining Spaces](../agent/spaces)).

For details on how anything can become a novelty to the agent, see [Implementing Novelties](novelty).

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

There are several subkeys to this key:

+ `agent` – source of behaviour for the agent:

  + `KeyboardAgent`,
    
  + `RandomAgent`,
  
  + a more complex setting for an RL agent such as in [config/polycraft_gym_rl.yaml](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/config/polycraft_gym_rl.yaml),
  
  + (see [Combining Planning & RL Agents](../agent/combining) for more detail on integrating intelligent agents),

+ `entity` – source code of the agent,

+ `id` – unique identifier of an entity, used in actions such as `approach_entity_<id>`,

+ `action_set` – attributes to the entity one of the actions sets (multiple entities can share the same action set),

+ `action_sets` – action sets available,

+ `room` – the room the entity is placed in at the start of the game,

+ `inventory` – what the entity has in their inventory at the start of the game (the inventory is variable throughout the game),

+ `max_step_cost` – the maximum cost that can be incurred on an intelligent (non-keyboard, non-random) agent at any step.

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

```yaml
auto_pickup_agents:
- 0
```


## Actions

`actions`

Source modules and step cost of actions in the environment. In the case of actions involving interactions with other agents, the `entity_id` must be provided. Compound actions include

+ `break_<object>`,

+ `approach_<object/entity>`,

+ `interact_<entity>`,

+ `select_<object>`,

+ `craft_<object>`,

+ `trade_<object>`.

Notice `nop_placeholder`, a placeholder for a novelty action.

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

Time delay after each environment step when training.

```yaml
sleep_time: 0
```


***

`time_limit`

Limit on how many steps the agent can take in attempting the goal during training.

```yaml
time_limit: 89000
```


***

`seed`

For the reproducibility of the experiment run.

```yaml
seed: 23
```


***

`num_episodes`

Number of episodes to run when training.

```yaml
num_episodes: 10
```


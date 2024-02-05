---
sidebar_position: 3
---

# Implementing Novelties

Two components are required for novelty implementation, namely a config file and optionally one or more python files, such as when a new object or action is being introduced. To see how these files are integrated in the project structure, go to [novelties/evaluation1](https://github.com/tufts-ai-robotics-group/NovelGym/tree/main/novelties/evaluation1).


## `.yaml`

The novelty config file is equivalent in layout to the config file that describes the environment, as described in [Creating Your Environment](custom).

For any changes that are to be in the environment from the first time step, the respective keys can be introduced directly. If the key listed is already in the base environment config file, the contents in the new config file will be appended to those in the old config file. An example is the fire novelty at [novelties/evaluation1/fire/fire_crafting_table.yaml](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/novelties/evaluation1/fire/fire_crafting_table.yaml). What this novelty implementation also demonstrates is how the `nop_placeholder` instances of the main agent are reassigned to new actions.

```yaml
---
object_types:
  water_bucket: novelties.evaluation1.fire.floating_obj.FloatingObj
  bucket: novelties.evaluation1.fire.floating_obj.FloatingObj
  crafting_table: novelties.evaluation1.fire.obj_on_fire.ObjOnFire
actions:
  craft: 
    module: novelties.evaluation1.fire.craft.FireAwareCraft
action_sets:
  main:
  - nop_placeholder1 -> approach_water_bucket
  - nop_placeholder2 -> select_water_bucket
objects:
  water_bucket:
    quantity: 1
    room: 2
    chunked: False
```

For any changes that are to be introduced at a later time step, novelties can be nested under the `novelties` key and a key specifying at which time step the novelty is to be introduced. Do not forget to wrap the number in single or double quotes. For an example, see [novelties/evaluation1/busy_traders/busy_traders.yaml](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/novelties/evaluation1/busy_traders/busy_traders.yaml).

```yaml
---
novelties:
  '0':
    actions:
      trade:
        module: novelties.evaluation1.busy_traders.trade_busy.BusyTrade
        busy_ratio: 0.5
```

## `.py`

Any new python modules can be listed as source code for any novelty implemented. There is no syntactical difference between python files defining modules in the base environment and the python files defining novelty modules. For detail on how to implement new objects and actions, see [Examples of Objects & Actions](objectsactions).

## Usage

Any new novelty must be listed as a key-value pair in the `NOVELTIES` dict in [config.py](https://github.com/tufts-ai-robotics-group/NovelGym/blob/36f78f5e25475a43a8a83627939a5744d0a42c0c/config.py). The key is the novelty name used as value to the `--novelty` argument, and the value is the relative path to the config file of the novelty.

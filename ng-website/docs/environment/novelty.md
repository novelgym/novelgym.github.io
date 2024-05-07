---
sidebar_position: 3
---

# Implementing Novelties

To implement a novelty, you need a config file and optionally one or more python files, such as when a new object or action is being introduced. To see how these files are integrated in the project structure, go to [novelties/evaluation1](https://github.com/tufts-ai-robotics-group/NovelGym/tree/main/novelties/evaluation1).


## `.yaml` Config

The novelty config file has the same layout as the config file that describes the environment, see [Creating Your Environment](custom).

**For any changes that appear in the environment at the first time step**,  the keys are introduced directly. If any key is already in the base environment config, the contents in the new config will be appended to those in the old config.

For an example, see the fire novelty below from [novelties/evaluation1/fire/fire_crafting_table.yaml](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/novelties/evaluation1/fire/fire_crafting_table.yaml).

In this example, notice how the `nop_placeholder` instances can be reassigned to new actions.

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

**For any changes introduced at a later time step**, novelties are nested under the `novelties` key and a key specifying at which time step the novelty is introduced.

For an example, see the busy traders novelty below from [novelties/evaluation1/busy_traders/busy_traders.yaml](https://github.com/tufts-ai-robotics-group/NovelGym/blob/main/novelties/evaluation1/busy_traders/busy_traders.yaml).

**Note**: Wrap the number specifying the time step in single or double quotes.

```yaml
---
novelties:
  '0':
    actions:
      trade:
        module: novelties.evaluation1.busy_traders.trade_busy.BusyTrade
        busy_ratio: 0.5
```

## `.py` Modules

Any new python modules can be listed as source code for a novelty. There is no syntactical difference between python files defining modules in the base environment and python files defining novelty modules.

For detail on how to implement new objects and actions, see [Examples of Objects & Actions](objectsactions).

## Usage

Any new novelty must be listed as a key-value pair in the `NOVELTIES` dict in [config.py](https://github.com/tufts-ai-robotics-group/NovelGym/blob/36f78f5e25475a43a8a83627939a5744d0a42c0c/config.py). The key is the novelty's name used for the `--novelty` flag of `train.py`, and the value is the relative path to the novelty's config file.

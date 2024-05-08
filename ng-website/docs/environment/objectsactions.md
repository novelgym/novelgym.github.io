---
sidebar_position: 5
---

# Examples of Objects & Actions

The implementations of the objects and actions for the base environment are in the [NovelGridWorldsV2](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2) repository, which you will have installed in [Installation](../install.md). In this section, we explore how the individual object and action classes relate to each other and how a specific object or action is implemented and integrated.

## Objects

The base class for objects and entities is the [Object](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/object/object.py) class, the children of which are [PolycraftObject](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/polycraft_obj.py) and [Entity](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/object/entity.py). See the diagram below for the full class interdependence.

![Environment](img/Objects.drawio.png)

**To implement a dynamic entity** that has their own inventory, declare a child class of [PolycraftEntity](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/polycraft_entity.py). This child class might not even need any method overriding: the entity's action set is defined in the config file, and the inventory logic is implemented in the [Entity](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/object/entity.py) class.

**To implement a static entity (object)** that may or may not be breakable, collectable, or placeable, declare a child class of [PolycraftObject](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/polycraft_obj.py). The child class will generally override one or more of the following methods of the [Object](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/object/object.py) class:

+ the static method `placement_reqs` – specifies whether an object can be placed in the environment by the agent (set to `False` by default),

+ `acted_upon` – for different actions gives the response to these actions (otherwise nothing happens),

+ `get_img` – returns the image to be rendered in the place of the object.

The implemented object class can go in any location that can be referenced in the config file. The locations consistent with the current setup are the [ngw_extensions/objects](https://github.com/tufts-ai-robotics-group/NovelGym/tree/main/ngw_extensions/objects) folder or, if the object is part of a novelty, the [novelties/evaluation1](https://github.com/tufts-ai-robotics-group/NovelGym/tree/main/novelties/evaluation1) folder.

We demonstrate the construction of one entity and two objects, one of which has an inventory itself.

### `OakLog`

+ As a child of the [BreakablePolycraftObject](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/breakable_polycraft_obj.py) class, [OakLog](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/easy_oak_log.py) can be broken – when acted on with the `break` action, it changes its state to `floating` and can be collected using the `collect` action,

+ as a child of the [PlacablePolycraftObject](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/placable_polycraft_obj.py) class, it can be placed in the environment by the agent from its inventory,

+ if collected by an agent holding a `tree_tap`, `rubber` is added to the agent's inventory.

<details>
<summary>`easy_oak_log.py`</summary>
```python
class OakLog(BreakablePolycraftObject):
    def acted_upon(self, action_name, agent: PolycraftEntity):
        if action_name == "collect":
            if agent.selectedItem == "tree_tap":
                agent.add_to_inventory("rubber", 1)
        super().acted_upon(action_name, agent)
```
</details>

### `Safe`

+ As a child of the [UnbreakablePolycraftObject](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/unbreakable_polycraft_obj.py) class, [Safe](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/safe.py) cannot be broken – when acted on with the `break` action, it does not change state,

+ [Safe](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/safe.py) has its own inventory:

  + initially, the [Safe](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/safe.py) is locked and nothing can be collected from it,
  
  + it can be unlocked when acted upon with the `use` action, provided that the agent has a `blue_key` in its inventory,
  
  + once unlocked and acted upon with the `collect` action, the [Safe](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/safe.py) inventory is merged with that of the agent (all the contents of the inventory of [Safe](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/safe.py) are transferred to the inventory of the agent).

<details>
<summary>`safe.py`</summary>
```python
class Safe(UnbreakablePolycraftObject):
    def __init__(self, type="safe", loc=(0, 0), state="block", inventory=None, **kwargs):
        super().__init__(**kwargs)
        if inventory is None:
            inventory = {"diamond": 18}
        self.type = type
        self.loc = loc  # update such that we update the 3D arr and add the item to it
        self.state = state  # two states: block and floating
        self.isLocked = True
        self.inventory = inventory

    @staticmethod
    def placement_reqs(map_state, loc):
        return True

    def acted_upon(self, action_name, agent):
        if action_name == "break":
            pass  # unbreakable
        elif action_name == "use":
            if "blue_key" in agent.inventory:
                self.isLocked = False
                self.type == "unlocked_safe"
        elif action_name == "collect" and not self.isLocked:
            merge_inventory(agent.inventory, self.inventory)
            self.inventory = {}
```
</details>

### `EntityTrader`

+ As a child of the [PolycraftEntity](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/polycraft_entity.py) class, [EntityTrader](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/entity_trader.py) has the `print_agent_status`, which allows the printing of its inventory,

+ as a child of the [Entity](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/object/entity.py) class, it has the capacity to perform actions and to add objects to its inventory,

+ since this fully characterises the expected behaviour of [EntityTrader](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/entity_trader.py), the class requires no more implementation.

<details>
<summary>`entity_trader.py`</summary>
```python
class EntityTrader(PolycraftEntity):
    pass
```
</details>

## Actions

The base class for actions is the [Action](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/actions/action.py) class. Most other actions implemented in the infrastructure are direct children of this class. Any such child classes will generally override the two following methods:

+ `check_precondition` – checks whether the preconditions for the action are met,

+ `do_action` – executes the action and causes the desired effects.

The implemented object class can go in any location that can be referenced in the config file. The locations consistent with the infrastructure setup are the [ngw_extensions](https://github.com/tufts-ai-robotics-group/NovelGym/tree/main/ngw_extensions) folder or, if the object is part of a novelty, the [novelties/evaluation1](https://github.com/tufts-ai-robotics-group/NovelGym/tree/main/novelties/evaluation1) folder.

### `SmoothMove`

[SmoothMove](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/actions/smoothmove.py) is an action class with a relatively straightforward precondition and effect,

+ used to back up the actions `move_forward`, `move_backward`, `move_left`, and `move_right`,

+ **note**: although the implementation of such a simple action is verbose, it can be translated into plain English as, "Check if the agent can make this move, and once it does, have it pick up whatever it finds in the location it moves to."

<details>
<summary>`smoothmove.py`</summary>
```python
class SmoothMove(Action):
    def __init__(self, direction=None, **kwargs):
        self.direction = direction
        self.vec = (0, 0)
        self.cmd_format = r"\w+ (?P<direction>\w+)"
        super().__init__(**kwargs)
        
    def check_precondition(
        self, agent_entity: Entity, target_type=None, target_object=None
    ):
        """
        Checks preconditions of the smooth_move action:
        1) The new location must not be out of bounds
        2) The new location must not be occupied by another non-floating object
        3) If the new location is occupied by a door, it must be open
        """

        if agent_entity.facing == "NORTH":
            if self.direction_tmp == "W":
                self.vec = (-1, 0)
            elif self.direction_tmp == "X":
                self.vec = (1, 0)
            elif self.direction_tmp == "A":
                self.vec = (0, -1)
            else:
                self.vec = (0, 1)
        elif agent_entity.facing == "EAST":
            if self.direction_tmp == "W":
                self.vec = (0, 1)
            elif self.direction_tmp == "X":
                self.vec = (0, -1)
            elif self.direction_tmp == "A":
                self.vec = (-1, 0)
            else:
                self.vec = (1, 0)
        elif agent_entity.facing == "WEST":
            if self.direction_tmp == "W":
                self.vec = (0, -1)
            elif self.direction_tmp == "X":
                self.vec = (0, 1)
            elif self.direction_tmp == "A":
                self.vec = (1, 0)
            else:
                self.vec = (-1, 0)
        else:
            if self.direction_tmp == "W":
                self.vec = (1, 0)
            elif self.direction_tmp == "X":
                self.vec = (-1, 0)
            elif self.direction_tmp == "A":
                self.vec = (0, 1)
            else:
                self.vec = (0, -1)

        new_loc = np.add(self.vec, agent_entity.loc)
        # check for bounds
        if (new_loc >= 0).all() and (new_loc < self.state._map.shape).all():
            # if it's inside the bounds
            obj = self.state.get_object_at(tuple(new_loc))
            if obj is not None:
                # check if object is floating or not.
                # if floating, still able to pass thru
                # if block, cannot pass thru unless door
                if not hasattr(obj, "state") or obj.state == "block":
                    if not hasattr(obj, "canWalkOver") or obj.canWalkOver == False:
                        return False
            return True
        else:
            # out of the bound
            return False

    def do_action(self, agent_entity, target_type=None, target_object=None, direction=None, **kwargs):
        """
        Checks for precondition, then moves the object to the destination.
        """
        

        if self.direction is None:
            if direction is None:
                direction = "W"
            self.direction_tmp = direction.upper()
        else:
            self.direction_tmp = self.direction

        if self.check_precondition(agent_entity, target_object):
            new_loc = tuple(np.add(self.vec, agent_entity.loc))
            # multiple objects handling
            objs = self.state.get_objects_at(new_loc)
            if len(objs[0]) != 0:
                # iterate through and remove every non-block element
                # at the new location
                i = 0
                while i != len(objs[0]):
                    obj = objs[0][i]
                    if not (
                        getattr(obj, "canWalkOver", False)
                        and obj.state == "block"
                    ):
                        collect_item(self.state, agent_entity, obj, new_loc)
                    else:
                        # not removing the current block, increment current index
                        i += 1
            self.state.update_object_loc(agent_entity.loc, new_loc)
        else:
            raise PreconditionNotMetError()

        return {}
```
</details>

### `Craft`

[Craft](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/actions/craft.py) is a class with a slightly more complex precondition and effect,

+ allows the agent to use objects from its inventory to generate new objects,

+ uses the helper class `RecipeSet` to represent the set of recipes available to the agent,

+ also used for the `trade` action,

+ has the capacity of ending the game.

<details>
<summary>`craft.py`</summary>
```python
class Craft(Action):
    def __init__(
        self,
        recipe_set: RecipeSet,
        recipe_name: Optional[str] = None,
        default_step_cost: int = 100,
        **kwargs,
    ):
        self.recipe_set = recipe_set
        self.itemToCraft = recipe_name
        self.cmd_format = r"\w+ 1 ([:\w]+) ([:\w]+) ([:\w]+) ([:\w]+)(?: ([:\w]+) ([:\w]+) ([:\w]+) ([:\w]+) ([:\w]+))?"
        self.default_step_cost = default_step_cost
        self.is_trade = False
        super().__init__(**kwargs)

    def check_precondition(
        self, agent_entity: Entity, target_type=None, target_object=None, recipe=None,
        **kwargs
    ):
        """
        Checks preconditions of the craft action:
        1) The agent must have all of the necessary inputs
        2) The agent must be adjacent to a crafting table if the recipe needs a crafting table
        """
        # legacy support
        if recipe is None:
            if self.itemToCraft is not None:
                recipe = self.recipe_set.get_recipe(self.itemToCraft)
            else:
                recipe = self.recipe_set.get_recipe_by_input(target_object)

        if recipe is None:
            print("available recipes:", self.recipe_set.recipe_index.keys())
            raise PreconditionNotMetError("recipe is wrong.")

        for item, count in recipe.input_dict.items():
            if item == "0":
                # empty slot, skip
                continue
            if item in agent_entity.inventory:
                if count > agent_entity.inventory[item]:
                    raise PreconditionNotMetError(f"Not sufficient {item} in the inventory.")  # not enough of the item
            else:
                raise PreconditionNotMetError(f"Not sufficient {item} in the inventory.")  # one of the inputs isnt in the agents inventory
        if self.is_trade:
            # not craft, skip crafting table check
            return True
        elif len(recipe.input_list) <= 4 or recipe.input_list[4] is None:
            # if input_list is <= 4 items long,
            # which means it does not require crafting table
            return True
        else:
            if self.is_near_target(agent_entity):
                return True
            else:
                raise PreconditionNotMetError("Agent is not near a crafting table.")

    def is_near_target(self, agent_entity):
        # convert the entity facing direction to coords
        direction = (0, 0)
        if agent_entity.facing == "NORTH":
            direction = (-1, 0)
        elif agent_entity.facing == "SOUTH":
            direction = (1, 0)
        elif agent_entity.facing == "EAST":
            direction = (0, 1)
        else:
            direction = (0, -1)

        self.temp_loc = tuple(np.add(agent_entity.loc, direction))
        objs = self.state.get_objects_at(self.temp_loc)
        if len(objs[0]) == 1:
            if objs[0][0].type == "crafting_table":
                return True
            else:
                return False

    def do_action(
        self, agent_entity: Entity, target_type=None, target_object=None, recipe=None, **kwargs
    ):
        
        if recipe is None:
            if self.itemToCraft is not None:
                recipe = self.recipe_set.get_recipe(self.itemToCraft)
            else:
                if "_all_params" in kwargs:
                    input_list = [o for o in kwargs["_all_params"] if o is not None]
                    target_object = [backConversion(o) for o in input_list]
                recipe = self.recipe_set.get_recipe_by_input(target_object)

        
        if not self.check_precondition(agent_entity, 
            target_type=target_type, 
            target_object=target_object, 
            recipe=recipe, 
            **kwargs
        ):
            raise PreconditionNotMetError(
                f"Agent {agent_entity.nickname} cannot craft {self.itemToCraft}."
            )

        for item, count in recipe.input_dict.items():
            if item != "0":
                agent_entity.inventory[item] -= count

        for item, quantity in recipe.output_dict.items():
            if item is not None:
                if item in agent_entity.inventory:
                    agent_entity.inventory[item] += quantity
                else:
                    agent_entity.inventory[item] = quantity

        if self.itemToCraft == "pogo_stick" or "pogo_stick" in recipe.output_dict:
            self.state.set_game_over(True)
        return {}
```
</details>

### `Interact`

[Interact](https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/actions/interact.py) is an example of an action that can have effects defined elsewhere,

+ the `check_precondition` method verifies that the entity in front of the agent matches the id provided,

+ the `do_action` method calls the `acted_upon` method of the entity being interacted with (this can have any effect as defined in the `acted_upon` method of this entity).

<details>
<summary>`interact.py`</summary>
```python
DIRECTIONS = [
    np.array([0, 1]),
    np.array([0, -1]),
    np.array([1, 0]),
    np.array([-1, 0]),
]

def check_target(agent_entity, state: State, distance_min=1, distance_max=3) -> Tuple[bool, PolycraftEntity]:
    # checks and finds the target entity to interact with.
    agent_room = state.get_room_by_loc(agent_entity.loc)[0] # assumes the first room for easier process
    for distance in range(distance_min, distance_max + 1):
        for direction in DIRECTIONS:
            tgt_loc = direction * distance + agent_entity.loc
            if tgt_loc in agent_room:
                objs = state.get_objects_at(tgt_loc)
                if len(objs[1]) == 1 and hasattr(objs[1][0], "id"):
                    return True, objs[1][0]
    return False, None


class Interact(Action):
    def __init__(self, entity_id=None, **kwargs):
        self.entity_id = entity_id
        self.cmd_format = r"\w+ (?P<entity_id>\w+)"
        super().__init__(**kwargs)

    def check_precondition(
        self,
        agent_entity: Entity,
        target_object: Object = None,
        entity_id=None,
        **kwargs,
    ):
        """
        Checks preconditions of the Interact action:
        1) The agent is facing an entity
        2) The entity shares the id with the arg provided
        """

        # make a 3x3 radius around the agent, determine if the wanted entity is there
        if entity_id is None:
            return False
        entity_id = int(entity_id)

        can_interact, target_entity = check_target(agent_entity, self.state)
        if can_interact and target_entity.id == entity_id:
            return True
        else:
            return False

    def do_action(
        self,
        agent_entity: Entity,
        target_object: Object = None,
        entity_id=None,
        **kwargs,
    ):
        """
        Checks for precondition, then interacts with the entity
        """
        if entity_id is None:
            entity_id = self.entity_id
        
        if not self.check_precondition(
            agent_entity, target_object, entity_id=entity_id
        ):
            obj_type = (
                target_object.type
                if hasattr(target_object, "type")
                else target_object.__class__.__name__
            )
            raise PreconditionNotMetError(
                f'Agent "{agent_entity.nickname}" cannot interact with {entity_id}.'
            )

        _, target_object = check_target(agent_entity, self.state) #TODO optimize called twice
        target_object.acted_upon("interact", agent_entity)
        return {}
```
</details>

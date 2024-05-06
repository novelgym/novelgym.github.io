"use strict";(self.webpackChunkng_website=self.webpackChunkng_website||[]).push([[926],{3741:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(5893),o=t(1151);const s={sidebar_position:4},r="Examples of Objects & Actions",c={id:"environment/objectsactions",title:"Examples of Objects & Actions",description:"The implementations of the objects and actions for the base environment are in the NovelGridWorldsV2 repository, which you will have installed in Installation. In this section, we explore how the individual object and action classes relate to each other and how a specific object or action is implemented and integrated.",source:"@site/docs/environment/objectsactions.md",sourceDirName:"environment",slug:"/environment/objectsactions",permalink:"/docs/environment/objectsactions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Implementing Novelties",permalink:"/docs/environment/novelty"},next:{title:"Training Agents",permalink:"/docs/category/training-agents"}},a={},l=[{value:"Objects",id:"objects",level:2},{value:"<code>OakLog</code>",id:"oaklog",level:3},{value:"<code>Safe</code>",id:"safe",level:3},{value:"<code>EntityTrader</code>",id:"entitytrader",level:3},{value:"Actions",id:"actions",level:2},{value:"<code>SmoothMove</code>",id:"smoothmove",level:3},{value:"<code>Craft</code>",id:"craft",level:3},{value:"<code>Interact</code>",id:"interact",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"examples-of-objects--actions",children:"Examples of Objects & Actions"}),"\n",(0,i.jsxs)(n.p,{children:["The implementations of the objects and actions for the base environment are in the ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2",children:"NovelGridWorldsV2"})," repository, which you will have installed in ",(0,i.jsx)(n.a,{href:"/docs/install",children:"Installation"}),". In this section, we explore how the individual object and action classes relate to each other and how a specific object or action is implemented and integrated."]}),"\n",(0,i.jsx)(n.h2,{id:"objects",children:"Objects"}),"\n",(0,i.jsxs)(n.p,{children:["The base class for objects and entities is the ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/object/object.py",children:"Object"})," class, the children of which are ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/polycraft_obj.py",children:"PolycraftObject"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/object/entity.py",children:"Entity"}),". See the diagram below for the full class interdependence."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Environment",src:t(2843).Z+"",width:"1703",height:"507"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"To implement an entity"})," that moves and has their own inventory, declare a child class of ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/polycraft_entity.py",children:"PolycraftEntity"}),". This child class might not even need any method overriding: the entity's action set is defined in the config file, and the inventory logic is implemented in the ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/object/entity.py",children:"Entity"})," class."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"To implement an object"})," that may or may not be breakable, collectable, or placeable, declare a child class of ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/polycraft_obj.py",children:"PolycraftObject"}),". The child class will generally override one or more of the following methods of the ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/object/object.py",children:"Object"})," class:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["the static method ",(0,i.jsx)(n.code,{children:"placement_reqs"})," \u2013 specifies whether an object can be placed in the environment by the agent (set to ",(0,i.jsx)(n.code,{children:"False"})," by default),"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"acted_upon"})," \u2013 for different actions gives the response to these actions (otherwise nothing happens),"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"get_img"})," \u2013 returns the image to be rendered in the place of the object."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The implemented object class can go in any location that can be referenced in the config file. The locations consistent with the current setup are the ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGym/tree/main/ngw_extensions/objects",children:"ngw_extensions/objects"})," folder or, if the object is part of a novelty, the ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGym/tree/main/novelties/evaluation1",children:"novelties/evaluation1"})," folder."]}),"\n",(0,i.jsx)(n.p,{children:"We demonstrate the construction of one entity and two objects, one of which has an inventory itself."}),"\n",(0,i.jsx)(n.h3,{id:"oaklog",children:(0,i.jsx)(n.code,{children:"OakLog"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["As a child of the ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/breakable_polycraft_obj.py",children:"BreakablePolycraftObject"})," class, ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/easy_oak_log.py",children:"OakLog"})," can be broken \u2013 when acted on with the ",(0,i.jsx)(n.code,{children:"break"})," action, it changes its state to ",(0,i.jsx)(n.code,{children:"floating"})," and can be collected using the ",(0,i.jsx)(n.code,{children:"collect"})," action,"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["as a child of the ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/placable_polycraft_obj.py",children:"PlacablePolycraftObject"})," class, it can be placed in the environment by the agent from its inventory,"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["if collected by an agent holding a ",(0,i.jsx)(n.code,{children:"tree_tap"}),", ",(0,i.jsx)(n.code,{children:"rubber"})," is added to the agent's inventory."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.code,{children:"easy_oak_log.py"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'class OakLog(BreakablePolycraftObject):\n    def acted_upon(self, action_name, agent: PolycraftEntity):\n        if action_name == "collect":\n            if agent.selectedItem == "tree_tap":\n                agent.add_to_inventory("rubber", 1)\n        super().acted_upon(action_name, agent)\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"safe",children:(0,i.jsx)(n.code,{children:"Safe"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["As a child of the ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/unbreakable_polycraft_obj.py",children:"UnbreakablePolycraftObject"})," class, ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/safe.py",children:"Safe"})," cannot be broken \u2013 when acted on with the ",(0,i.jsx)(n.code,{children:"break"})," action, it does not change state,"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/safe.py",children:"Safe"})," has its own inventory:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["initially, the ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/safe.py",children:"Safe"})," is locked and nothing can be collected from it,"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["it can be unlocked when acted upon with the ",(0,i.jsx)(n.code,{children:"use"})," action, provided that the agent has a ",(0,i.jsx)(n.code,{children:"blue_key"})," in its inventory,"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["once unlocked and acted upon with the ",(0,i.jsx)(n.code,{children:"collect"})," action, the ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/safe.py",children:"Safe"})," inventory is merged with that of the agent (all the contents of the inventory of ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/safe.py",children:"Safe"})," are transferred to the inventory of the agent)."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.code,{children:"safe.py"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'class Safe(UnbreakablePolycraftObject):\n    def __init__(self, type="safe", loc=(0, 0), state="block", inventory=None, **kwargs):\n        super().__init__(**kwargs)\n        if inventory is None:\n            inventory = {"diamond": 18}\n        self.type = type\n        self.loc = loc  # update such that we update the 3D arr and add the item to it\n        self.state = state  # two states: block and floating\n        self.isLocked = True\n        self.inventory = inventory\n\n    @staticmethod\n    def placement_reqs(map_state, loc):\n        return True\n\n    def acted_upon(self, action_name, agent):\n        if action_name == "break":\n            pass  # unbreakable\n        elif action_name == "use":\n            if "blue_key" in agent.inventory:\n                self.isLocked = False\n                self.type == "unlocked_safe"\n        elif action_name == "collect" and not self.isLocked:\n            merge_inventory(agent.inventory, self.inventory)\n            self.inventory = {}\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"entitytrader",children:(0,i.jsx)(n.code,{children:"EntityTrader"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["As a child of the ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/polycraft_entity.py",children:"PolycraftEntity"})," class, ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/entity_trader.py",children:"EntityTrader"})," has the ",(0,i.jsx)(n.code,{children:"print_agent_status"}),", which allows the printing of its inventory,"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["as a child of the ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/object/entity.py",children:"Entity"})," class, it has the capacity to perform actions and to add objects to its inventory,"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["since this fully characterises the expected behaviour of ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/objects/entity_trader.py",children:"EntityTrader"}),", the class requires no more implementation."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.code,{children:"entity_trader.py"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class EntityTrader(PolycraftEntity):\n    pass\n"})})]}),"\n",(0,i.jsx)(n.h2,{id:"actions",children:"Actions"}),"\n",(0,i.jsxs)(n.p,{children:["The base class for actions is the ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/actions/action.py",children:"Action"})," class. Most other actions implemented in the infrastructure are direct children of this class. Any such child classes will generally override the two following methods:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"check_precondition"})," \u2013 checks whether the preconditions for the action are met,"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"do_action"})," \u2013 executes the action and causes the desired effects."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The implemented object class can go in any location that can be referenced in the config file. The locations consistent with the infrastructure setup are the ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGym/tree/main/ngw_extensions",children:"ngw_extensions"})," folder or, if the object is part of a novelty, the ",(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGym/tree/main/novelties/evaluation1",children:"novelties/evaluation1"})," folder."]}),"\n",(0,i.jsx)(n.h3,{id:"smoothmove",children:(0,i.jsx)(n.code,{children:"SmoothMove"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/actions/smoothmove.py",children:"SmoothMove"})," is an action class with a relatively straightforward precondition and effect,"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["used to back up the actions ",(0,i.jsx)(n.code,{children:"move_forward"}),", ",(0,i.jsx)(n.code,{children:"move_backward"}),", ",(0,i.jsx)(n.code,{children:"move_left"}),", and ",(0,i.jsx)(n.code,{children:"move_right"}),","]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"note"}),': although the implementation of such a simple action is verbose, it can be translated into plain English as, "Check if the agent can make this move, and once it does, have it pick up whatever it finds in the location it moves to."']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.code,{children:"smoothmove.py"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'class SmoothMove(Action):\n    def __init__(self, direction=None, **kwargs):\n        self.direction = direction\n        self.vec = (0, 0)\n        self.cmd_format = r"\\w+ (?P<direction>\\w+)"\n        super().__init__(**kwargs)\n        \n    def check_precondition(\n        self, agent_entity: Entity, target_type=None, target_object=None\n    ):\n        """\n        Checks preconditions of the smooth_move action:\n        1) The new location must not be out of bounds\n        2) The new location must not be occupied by another non-floating object\n        3) If the new location is occupied by a door, it must be open\n        """\n\n        if agent_entity.facing == "NORTH":\n            if self.direction_tmp == "W":\n                self.vec = (-1, 0)\n            elif self.direction_tmp == "X":\n                self.vec = (1, 0)\n            elif self.direction_tmp == "A":\n                self.vec = (0, -1)\n            else:\n                self.vec = (0, 1)\n        elif agent_entity.facing == "EAST":\n            if self.direction_tmp == "W":\n                self.vec = (0, 1)\n            elif self.direction_tmp == "X":\n                self.vec = (0, -1)\n            elif self.direction_tmp == "A":\n                self.vec = (-1, 0)\n            else:\n                self.vec = (1, 0)\n        elif agent_entity.facing == "WEST":\n            if self.direction_tmp == "W":\n                self.vec = (0, -1)\n            elif self.direction_tmp == "X":\n                self.vec = (0, 1)\n            elif self.direction_tmp == "A":\n                self.vec = (1, 0)\n            else:\n                self.vec = (-1, 0)\n        else:\n            if self.direction_tmp == "W":\n                self.vec = (1, 0)\n            elif self.direction_tmp == "X":\n                self.vec = (-1, 0)\n            elif self.direction_tmp == "A":\n                self.vec = (0, 1)\n            else:\n                self.vec = (0, -1)\n\n        new_loc = np.add(self.vec, agent_entity.loc)\n        # check for bounds\n        if (new_loc >= 0).all() and (new_loc < self.state._map.shape).all():\n            # if it\'s inside the bounds\n            obj = self.state.get_object_at(tuple(new_loc))\n            if obj is not None:\n                # check if object is floating or not.\n                # if floating, still able to pass thru\n                # if block, cannot pass thru unless door\n                if not hasattr(obj, "state") or obj.state == "block":\n                    if not hasattr(obj, "canWalkOver") or obj.canWalkOver == False:\n                        return False\n            return True\n        else:\n            # out of the bound\n            return False\n\n    def do_action(self, agent_entity, target_type=None, target_object=None, direction=None, **kwargs):\n        """\n        Checks for precondition, then moves the object to the destination.\n        """\n        \n\n        if self.direction is None:\n            if direction is None:\n                direction = "W"\n            self.direction_tmp = direction.upper()\n        else:\n            self.direction_tmp = self.direction\n\n        if self.check_precondition(agent_entity, target_object):\n            new_loc = tuple(np.add(self.vec, agent_entity.loc))\n            # multiple objects handling\n            objs = self.state.get_objects_at(new_loc)\n            if len(objs[0]) != 0:\n                # iterate through and remove every non-block element\n                # at the new location\n                i = 0\n                while i != len(objs[0]):\n                    obj = objs[0][i]\n                    if not (\n                        getattr(obj, "canWalkOver", False)\n                        and obj.state == "block"\n                    ):\n                        collect_item(self.state, agent_entity, obj, new_loc)\n                    else:\n                        # not removing the current block, increment current index\n                        i += 1\n            self.state.update_object_loc(agent_entity.loc, new_loc)\n        else:\n            raise PreconditionNotMetError()\n\n        return {}\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"craft",children:(0,i.jsx)(n.code,{children:"Craft"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/actions/craft.py",children:"Craft"})," is a class with a slightly more complex precondition and effect,"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"allows the agent to use objects from its inventory to generate new objects,"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["uses the helper class ",(0,i.jsx)(n.code,{children:"RecipeSet"})," to represent the set of recipes available to the agent,"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["also used for the ",(0,i.jsx)(n.code,{children:"trade"})," action,"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"has the capacity of ending the game."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.code,{children:"craft.py"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'class Craft(Action):\n    def __init__(\n        self,\n        recipe_set: RecipeSet,\n        recipe_name: Optional[str] = None,\n        default_step_cost: int = 100,\n        **kwargs,\n    ):\n        self.recipe_set = recipe_set\n        self.itemToCraft = recipe_name\n        self.cmd_format = r"\\w+ 1 ([:\\w]+) ([:\\w]+) ([:\\w]+) ([:\\w]+)(?: ([:\\w]+) ([:\\w]+) ([:\\w]+) ([:\\w]+) ([:\\w]+))?"\n        self.default_step_cost = default_step_cost\n        self.is_trade = False\n        super().__init__(**kwargs)\n\n    def check_precondition(\n        self, agent_entity: Entity, target_type=None, target_object=None, recipe=None,\n        **kwargs\n    ):\n        """\n        Checks preconditions of the craft action:\n        1) The agent must have all of the necessary inputs\n        2) The agent must be adjacent to a crafting table if the recipe needs a crafting table\n        """\n        # legacy support\n        if recipe is None:\n            if self.itemToCraft is not None:\n                recipe = self.recipe_set.get_recipe(self.itemToCraft)\n            else:\n                recipe = self.recipe_set.get_recipe_by_input(target_object)\n\n        if recipe is None:\n            print("available recipes:", self.recipe_set.recipe_index.keys())\n            raise PreconditionNotMetError("recipe is wrong.")\n\n        for item, count in recipe.input_dict.items():\n            if item == "0":\n                # empty slot, skip\n                continue\n            if item in agent_entity.inventory:\n                if count > agent_entity.inventory[item]:\n                    raise PreconditionNotMetError(f"Not sufficient {item} in the inventory.")  # not enough of the item\n            else:\n                raise PreconditionNotMetError(f"Not sufficient {item} in the inventory.")  # one of the inputs isnt in the agents inventory\n        if self.is_trade:\n            # not craft, skip crafting table check\n            return True\n        elif len(recipe.input_list) <= 4 or recipe.input_list[4] is None:\n            # if input_list is <= 4 items long,\n            # which means it does not require crafting table\n            return True\n        else:\n            if self.is_near_target(agent_entity):\n                return True\n            else:\n                raise PreconditionNotMetError("Agent is not near a crafting table.")\n\n    def is_near_target(self, agent_entity):\n        # convert the entity facing direction to coords\n        direction = (0, 0)\n        if agent_entity.facing == "NORTH":\n            direction = (-1, 0)\n        elif agent_entity.facing == "SOUTH":\n            direction = (1, 0)\n        elif agent_entity.facing == "EAST":\n            direction = (0, 1)\n        else:\n            direction = (0, -1)\n\n        self.temp_loc = tuple(np.add(agent_entity.loc, direction))\n        objs = self.state.get_objects_at(self.temp_loc)\n        if len(objs[0]) == 1:\n            if objs[0][0].type == "crafting_table":\n                return True\n            else:\n                return False\n\n    def do_action(\n        self, agent_entity: Entity, target_type=None, target_object=None, recipe=None, **kwargs\n    ):\n        \n        if recipe is None:\n            if self.itemToCraft is not None:\n                recipe = self.recipe_set.get_recipe(self.itemToCraft)\n            else:\n                if "_all_params" in kwargs:\n                    input_list = [o for o in kwargs["_all_params"] if o is not None]\n                    target_object = [backConversion(o) for o in input_list]\n                recipe = self.recipe_set.get_recipe_by_input(target_object)\n\n        \n        if not self.check_precondition(agent_entity, \n            target_type=target_type, \n            target_object=target_object, \n            recipe=recipe, \n            **kwargs\n        ):\n            raise PreconditionNotMetError(\n                f"Agent {agent_entity.nickname} cannot craft {self.itemToCraft}."\n            )\n\n        for item, count in recipe.input_dict.items():\n            if item != "0":\n                agent_entity.inventory[item] -= count\n\n        for item, quantity in recipe.output_dict.items():\n            if item is not None:\n                if item in agent_entity.inventory:\n                    agent_entity.inventory[item] += quantity\n                else:\n                    agent_entity.inventory[item] = quantity\n\n        if self.itemToCraft == "pogo_stick" or "pogo_stick" in recipe.output_dict:\n            self.state.set_game_over(True)\n        return {}\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"interact",children:(0,i.jsx)(n.code,{children:"Interact"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/tufts-ai-robotics-group/NovelGridWorldsV2/blob/main/gym_novel_gridworlds2/contrib/polycraft/actions/interact.py",children:"Interact"})," is an example of an action that can have effects defined elsewhere,"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["the ",(0,i.jsx)(n.code,{children:"check_precondition"})," method verifies that the entity in front of the agent matches the id provided,"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["the ",(0,i.jsx)(n.code,{children:"do_action"})," method calls the ",(0,i.jsx)(n.code,{children:"acted_upon"})," method of the entity being interacted with (this can have any effect as defined in the ",(0,i.jsx)(n.code,{children:"acted_upon"})," method of this entity)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.code,{children:"interact.py"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'DIRECTIONS = [\n    np.array([0, 1]),\n    np.array([0, -1]),\n    np.array([1, 0]),\n    np.array([-1, 0]),\n]\n\ndef check_target(agent_entity, state: State, distance_min=1, distance_max=3) -> Tuple[bool, PolycraftEntity]:\n    # checks and finds the target entity to interact with.\n    agent_room = state.get_room_by_loc(agent_entity.loc)[0] # assumes the first room for easier process\n    for distance in range(distance_min, distance_max + 1):\n        for direction in DIRECTIONS:\n            tgt_loc = direction * distance + agent_entity.loc\n            if tgt_loc in agent_room:\n                objs = state.get_objects_at(tgt_loc)\n                if len(objs[1]) == 1 and hasattr(objs[1][0], "id"):\n                    return True, objs[1][0]\n    return False, None\n\n\nclass Interact(Action):\n    def __init__(self, entity_id=None, **kwargs):\n        self.entity_id = entity_id\n        self.cmd_format = r"\\w+ (?P<entity_id>\\w+)"\n        super().__init__(**kwargs)\n\n    def check_precondition(\n        self,\n        agent_entity: Entity,\n        target_object: Object = None,\n        entity_id=None,\n        **kwargs,\n    ):\n        """\n        Checks preconditions of the Interact action:\n        1) The agent is facing an entity\n        2) The entity shares the id with the arg provided\n        """\n\n        # make a 3x3 radius around the agent, determine if the wanted entity is there\n        if entity_id is None:\n            return False\n        entity_id = int(entity_id)\n\n        can_interact, target_entity = check_target(agent_entity, self.state)\n        if can_interact and target_entity.id == entity_id:\n            return True\n        else:\n            return False\n\n    def do_action(\n        self,\n        agent_entity: Entity,\n        target_object: Object = None,\n        entity_id=None,\n        **kwargs,\n    ):\n        """\n        Checks for precondition, then interacts with the entity\n        """\n        if entity_id is None:\n            entity_id = self.entity_id\n        \n        if not self.check_precondition(\n            agent_entity, target_object, entity_id=entity_id\n        ):\n            obj_type = (\n                target_object.type\n                if hasattr(target_object, "type")\n                else target_object.__class__.__name__\n            )\n            raise PreconditionNotMetError(\n                f\'Agent "{agent_entity.nickname}" cannot interact with {entity_id}.\'\n            )\n\n        _, target_object = check_target(agent_entity, self.state) #TODO optimize called twice\n        target_object.acted_upon("interact", agent_entity)\n        return {}\n'})})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2843:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Objects.drawio-2f0afc20a193595b0f85d9dd51d63952.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(7294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
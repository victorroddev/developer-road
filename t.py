
def create_inventory(items):
    """Function that takes a list to create a dict
    :param items: list of items to create a inventory 
    :return: dict (inventory)
    """
    inventory = {}

    for item in items:
        counter = items.count(item)
        inventory[item] = counter
    return inventory


#print(create_inventory(["coal", "wood", "wood", "diamond", "diamond", "diamond"]))

def add_items(inventory, items):
    """Function that add a list of items to an inventory
    :param: inventory - (dict)
    :param: items - (list) of items
    :return: inventory updated (dict)
    """
    inventory_updated = create_inventory(items)
    print(inventory_updated)

    for item in inventory:
        if item in inventory_updated:
            inventory_updated[item] = inventory_updated[item] + inventory[item]
        elif item not in inventory_updated:
            inventory_updated[item] = inventory[item]
    return inventory_updated

#print(add_items({"wood": 2, "gold": 1, "diamond": 3}, ["wood", "gold", "gold"]))

def decrement_items(inventory, items):
    """
    DOCSTRING
    """
    inventory_updated = create_inventory(items)
    for item in inventory:
        if item in inventory_updated:
            inventory[item] = inventory[item] - inventory_updated[item]
            if inventory[item] < 1:
                inventory[item] = 0
    return inventory

#print(decrement_items({"coal":3, "diamond":1, "iron":5}, ["diamond", "coal", "iron", "iron"]))
#print(decrement_items({"coal":2, "wood":1, "diamond":2}, ["coal", "coal", "wood", "wood", "diamond"]))
#print(decrement_items({"iron": 3, "gold": 2}, ["iron", "wood", "iron", "diamond"]))
#must be return  {'iron': 1, 'gold': 2}

def remove_item(inventory, item):
    """
    DOSCTRING
    """

    if item in inventory:
        inventory.pop(item)
    return inventory
    

#print(remove_item({"coal":2, "wood":1, "diamond":2}, "coal"))
#print(remove_item({"coal":2, "wood":1, "diamond":2}, "gold"))


def list_inventory(inventory):
    list_to_return = []
    for key in inventory:
        if inventory[key] > 0:
            item = key, inventory[key]
            list_to_return.append(item)
    return list_to_return
        

list_inventory({"coal":7, "wood":11, "diamond":2, "iron":7, "silver":0})
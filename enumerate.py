ex = ['a', 'b', 'c']
ax = [1, 2, 3]


def join(first_list, second_list):
    """docstring don't needed."""
    for index, item in enumerate(first_list):
        print(f"{first_list[index]} / {second_list[item]}")

join(ex,ax)
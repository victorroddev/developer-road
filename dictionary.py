names = {'name': 'Tony', 'lastName': 'Stark'}

for a,b in names.items():
    print(a,b) #O: name Tony lastName Stark


sequence = ['becker', 'friedman', 'loomis', 'skolnick']

for x,y in enumerate(sequence):
    if y == 'friedman':
        print('Encontramos a Marty su index es ',x)

first_names = ['Tony', 'Tyrion', 'Ser Jorah']
last_names = ['Stark', 'Lannister', 'Mormont']

for n, l in zip(first_names, last_names):
    print(n + " " + l + ',') 
    """Output:
    Tony Stark,
    Tyrion Lannister,
    Ser Jorah Mormont,
    """

numm = ['vier', 'drei', 'ein', 'null']

for i  in reversed(numm):
    print(i)
    """ Output
        null
        ein
        drei
        vier
    """    

print(i)

items = ['apple', 'apple', 'apple', 'avocado', 'milk']

undup = set(items)

print(undup)
#Output: {'milk', 'apple', 'avocado'}
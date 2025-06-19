

combs = [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]
print(combs) #output: [(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]

vec = [-8, -6 , -4, -2, 0, 2, 4, 6, 8]

double_list = [x*2 for x in vec]
print(double_list) #output: [-16, -12, -8, -4, 0, 4, 8, 12, 16]

vec_two = [-10, 11, -3, -4, -5, -9]

not_negative_value = [x for x in vec_two if x >= 0]

print(not_negative_value) #output: [11]

#Delete a spaces around string in a list
list = [' mint ', ' kali ', ' fedora ', ' manjaro ']
fixed_list = [distro.strip() for distro in list]

print(fixed_list)#Output: ['mint', 'kali', 'fedora', 'manjaro']
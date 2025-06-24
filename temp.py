input_data = ['heaviness', 'sadness', 'softness', 'crabbiness', 'lightness', 'artiness', 'edginess']

def remove_suffix_ness(word):
    if word[-5] == 'i':

        return print((word[:-5] + 'y'))
    
    return print((word[:4]))


for data in input_data:
    remove_suffix_ness(data)

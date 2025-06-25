input_data = ['heaviness', 'sadness', 'softness', 'crabbiness', 'lightness', 'artiness', 'edginess']

def remove_suffix_ness(word):
    if word[-5] == 'i':

        return print((word[:-5] + 'y'))
    
    return print((word[:-4]))


# # for data in input_data:
# #     remove_suffix_ness(data)

any_sentence = "I need to make that dark bright."

def adjective_to_verb(sentence, index): 
    word_to_verb = sentence.split()[index]
    if word_to_verb[-1] == '.':
        word_to_verb = word_to_verb.replace('.','en.')
        return word_to_verb
    word_to_verb = word_to_verb + 'en'
    return word_to_verb

print(adjective_to_verb(any_sentence, -2))
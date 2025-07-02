
list = [1,2,3]
list_two = [1,2,3,4]
list_three = [1,2,3,5,7,8,10]

def even_od(hand):
    odds = []
    even = []
    for x in range(0, len(hand), 2):
        odds.append(hand[x])

    for y in range(1, len(hand), 2):
        even.append(hand[y])

    odds_average = sum(odds) / len(odds)
    even_average = sum(even) / len(even)

    return odds_average == even_average


print(even_od(list_two))
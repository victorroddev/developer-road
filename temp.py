
rounds_table = [1,2,3]
rounds_table_two = [5,6,7]
test = [3, 6, 9, 12, 150]

def concatenate_rounds(rounds, other_rounds):
    rounds.extend(other_rounds)
    return rounds

def list_contains_round(rounds, number):
    if number in rounds:
        return True
    return False

def card_average(hand):
    result = sum(hand)
    result = result / len(hand)
    return result

#print(card_average(rounds_table))

def approx_average_is_average(hand):
    real_average = card_average(hand)
    condition_1 = (hand[0] + hand[-1]) / 2 == real_average
    condition_2 = hand[round((len(hand) - 1) / 2)] == real_average
    if condition_1 or condition_2:
        return True
    
    return False


print(approx_average_is_average(test))
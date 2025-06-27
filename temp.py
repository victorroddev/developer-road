
rounds_table = [1,2,3]
rounds_table_two = [5,6,7]

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

print(card_average(rounds_table))
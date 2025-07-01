

sequence = ['luna', 'sol', 'estrella']

def check(seq, to_check):
    if to_check not in seq:
        seq.append(to_check)
        return f'new sequence: {seq}'
    return 'luna is in sequence', seq


print(check(sequence, 'star'))

a = 5 > 6
b = 10 > 11
c = 10 > 12

if a and  b and c:
    print('todas son falsas')
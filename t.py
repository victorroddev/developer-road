one = [1,2,3] #2
two = [1,2,3,4,5] #3
three = [1,2,3,4,5,6,7] #4 
four = [1,2,3,4,5,6,7,8,9] #5
five = [1,2,3,4,5,6,7,8,9,10,11]
six = [1,2,3,4,5,6,7,8,9,10,11,12,13] 

other = [1,10,20,30,55,67,90] #30

def middle(items):
    middled = items[round((len(items)-1) / 2)]
    print(middled)


middle(one)
middle(two)
middle(three)
middle(four)
middle(five)
middle(six)
middle(other)
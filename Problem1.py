#1st method
def Sum_to_n_A(n):
    if n == 1:
        return 1
    else:
        return n + Sum_to_n_A(n-1)

#2nd method
def Sum_to_n_B(n):
    total = 0
    for i in range(n + 1):
        total += i
    return total

#3rd method
def Sum_to_n_C(n):
    total = 0
    while(n > 0):
        total += n
        n -= 1
    return total
"""
print(Sum_to_n_A(5))
print(Sum_to_n_B(5))
print(Sum_to_n_C(5))
"""
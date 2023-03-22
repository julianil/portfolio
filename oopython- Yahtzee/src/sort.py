"""
Module containing sorting functions
"""

def insertion_sort(items):
    """ Insertion sort """
    for i in range(1, items.size()):
        j = i
        while j > 0 and items.get(j) < items.get(j-1):
            x = items.get(j)
            y = items.get(j-1)
            items.set(j, y)
            items.set(j-1, x)
            j -= 1
    return items

def recursive_insertion(seq, lenght):
    """ Recursive insertion sort """
    if lenght <= 1:
        return None
    recursive_insertion(seq, lenght-1)
    last = seq.get(lenght - 1)
    i = lenght - 2
    while(i>=0 and seq.get(i) > last):
        seq.set(i+1, seq.get(i))
        i = i - 1
    seq.set(i + 1, last)
    return seq

"""
Module containing class Queue
"""

class Queue:
    """
    A class that represents a queue

    ...

    Methods
    -------
    is_empty():
        Checks if queue is empty
    enqueue(item):
        Adds item to the end of the queue
    dequeue():
        Removes first item in queue
    peek():
        Gets first item in queue
    peek():
        Gets length of queue
    """
    def __init__(self):
        """
        Constructs queue
        """
        self.items = []

    def is_empty(self):
        """
        Checks if queue is empty

        Returns
        -------
        Returns Boolean
        """
        return not self.items

    def enqueue(self, item):
        """
        Adds item to the end of the queue

        Parameters
        ----------
            item : int/str
                Value to be added to the queue
        """
        self.items.append(item)

    def dequeue(self):
        """
        Removes first item in queue
        """
        try:
            return self.items.pop(0)

        except IndexError:
            return "Empty list."

    def peek(self):
        """
        Gets first item in queue

        Returns
        -------
        Returns the first item in the queue
        """
        return self.items[0]

    def size(self):
        """
        Gets length of queue

        Returns
        -------
        Returns length of queue in int
        """
        return len(self.items)

"""
Module containing class Node
"""

class Node:
    """
    A class to represent a Node

    ...

    Attributes
    ----------
    data:
        Data to be placed in node

    Methods
    -------
    has_next():
        Checks if their is a node after current node
    get_data():
        Get data in node
    get_next():
        Get next node
    set_data():
        Set data in node
    set_next():
        Set data in next node
    """
    def __init__(self, data):
        """
        Constructs all attributes for the Node object

        Parameters
        ----------
            data:
                data in node
        """
        self.data = data
        self.next = None

    def has_next(self):
        """
        Checks if their is a node after current node
        """
        return self.next is not None

    def get_data(self):
        """
        Get data in node
        """
        return self.data

    def get_next(self):
        """
        Get next node
        """
        return self.next

    def set_data(self, new_data):
        """
        Set data in node
        """
        self.data = new_data

    def set_next(self, new_next):
        """
        Set data in next node
        """
        self.next = new_next

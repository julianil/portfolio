"""
Module containing class UnorderedList
"""

from src.errors import MissingValue
from src.errors import MissingIndex
from src.node import Node

class UnorderedList:
    """
    A class to represent a Unordered List

    ...

    Methods
    -------
    append():
        Appends value to list
    set():
        Sets new value to value in list
    size():
        Gets size/lenght of list
    get():
        Gets specific value in list using index
    index_of():
        Gets index of specfic value in list
    print_list():
        Prints list
    remove():
        Removes specific value from list
    """
    def __init__(self):
        """
        Constructs all attributes for list
        """
        self.head = None

    def append(self, data):
        """
        Appends value to list

        Parameters
        ----------
        Data: str/int
            New value to be added
        """
        temp = Node(data)
        if self.head is None:
            self.head = temp
        else:
            current_node = self.head
            while current_node.has_next():
                current_node = current_node.next
            current_node.next = temp

    def set(self, index, data):
        """
        Sets new value to value in list

        Parameters
        ----------
        Index: int
            Index of value that is to be changed
        Data: str/int
            New value for index
        """
        current_node = self.head
        i = 0
        if index > self.size():
            raise MissingIndex("Given index does not exist")
        while current_node is not None:
            if i == index:
                current_node.data = data
            i += 1
            current_node = current_node.next

    def size(self):
        """
        Gets size/lenght of list

        Returns
        -------
        Lenght/size of list as integer
        """
        current_node = self.head
        lenght = 0
        while current_node is not None:
            lenght += 1
            current_node = current_node.next
        return int(lenght)

    def get(self, index):
        """
        Gets specific value in list using index

        Parameters
        ----------
        Index: int
            Index of value to get
        """
        current_node = self.head
        i = 0
        while current_node is not None:
            if i == index:
                return current_node.data
            i += 1
            current_node = current_node.next
        raise MissingIndex("Index does not exist")

    def index_of(self, value):
        """
        Gets index of specfic value in list

        Parameters
        ----------
        Value: str/int
            Value of to look for in list
        """
        current_node = self.head
        index = 0
        while current_node is not None:
            if current_node.data == value:
                return int(index)
            index += 1
            current_node = current_node.next
        raise MissingValue("Given index does not exist")

    def print_list(self):
        """
        Prints list

        Returns
        -------
        Content in list
        """
        current_node = self.head
        i = 0
        while current_node is not None:
            i += 1
            print(current_node.data)
            current_node = current_node.next

    def remove(self, value):
        """
        Removes specific value from list

        Parameters
        ----------
        Value: str/int
            Value to be removed from list
        """
        temp = self.head
        if temp is not None:
            if temp.data == value:
                self.head = temp.next
                temp = None
                return
        while temp is not None:
            if temp.data == value:
                break
            prev_node = temp
            temp = temp.next
        if temp is None:
            raise MissingValue("The value does not exist")
        prev_node.next = temp.next
        temp = None

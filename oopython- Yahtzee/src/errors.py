"""
Module containing class MissingValue and MissingIndex
"""

class MissingValue(Exception):
    """
    A class to represent a MissingValue exception
    """
    def __init__(self, error):
        print(error)

class MissingIndex(Exception):
    """
    A class to represent a MissingIndex exception
    """
    def __init__(self, error):
        print(error)

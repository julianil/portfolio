"""
Module containing class Die
"""

import random

class Die:
    """
    A class to represent a dice

    ...

    Attributes
    ----------
    MIN_ROLL_VALUE : int
        Minimum value for dice
    MAX_ROLL_VALUE : int
        Maximum value for dice
    NAMES: list
        List of numbernames as strings
    _value : int = None
        The value on the dice

    Methods
    -------
    get_name():
        Gives the value of the dice as a string
    value():
        Gives the value of the dice
    roll():
        Gives dice a random value between 1 and 6
    """
    MIN_ROLL_VALUE = 1
    MAX_ROLL_VALUE = 6
    NAMES = ["one", "two", "three", "four", "five", "six"]

    def __init__(self, value=None):
        """
        Constructs all attributes for the dice value

        Parameters
        ----------
            _value : int
                Value of the dice
        """
        if value is None:
            self._value = self.roll()
        elif value is not None and isinstance(value, int):
            if value > Die.MAX_ROLL_VALUE:
                self._value = Die.MAX_ROLL_VALUE
            elif value < Die.MIN_ROLL_VALUE:
                self._value = Die.MIN_ROLL_VALUE
            else:
                self._value = value

    def get_name(self):
        """
        Gives the value of the dice as a string

        Returns
        -------
        The value of the dice as a string
        """
        return self.NAMES[self._value-1]

    @property
    def value(self):
        """
        Gives the value of the dice

        Returns
        -------
        The value of the dice as a integer
        """
        return self._value

    def roll(self):
        """
        Gives dice a random value between 1 and 6

        Returns
        -------
        Random integer value for dice
        """
        self._value = random.randint(Die.MIN_ROLL_VALUE, Die.MAX_ROLL_VALUE)
        return self._value

    def __eq__(self, other):
        result = None
        try:
            result = self.value == other.value
        except AttributeError:
            result = self.value == other
        return result

    def __str__(self):
        return str(self.value)

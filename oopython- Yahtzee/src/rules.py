"""
Module containing classes for Yahtzee game
"""

from abc import ABC, abstractmethod

class Rule(ABC):
    """
    Abstract class containing methods rules

    ...

    Methods
    -------
    points():
        Makes sure all other classes contains method points
    """

    @abstractmethod
    def points(self, hand):
        """
        Makes sure all other classes contains method points
        """


class SameValueRule(Rule):
    """
    A class that checks points for all subclasses

    ...

    Attributes
    ----------
    value : int
        Value of dice
    name : str
        Name of rule

    Methods
    -------
    points():
        Gives total score for dices
    """

    def __init__(self, value, name):
        """
        Constructs value of dice and name of rule

        Parameters
        ----------
            value : int
                Value of the dice
            name : str
                Name of rule
        """
        self.value = value
        self.name = name

    def points(self, hand):
        """
        Gives total score for dices

        Returns
        -------
        Returns score for hand of dices
        """
        list_of_values = hand.to_list()
        occurrences = list_of_values.count(self.value)
        points = self.value * occurrences
        return points


class Ones(SameValueRule):
    """
    A class to represent rule Ones
    """

    def __init__(self):
        """
        Sends value of dice and name of rule to SameValueRule class
        """
        super().__init__(1, "Ones")


class Twos(SameValueRule):
    """
    A class to represent rule Twos
    """

    def __init__(self):
        """
        Sends value of dice and name of rule to SameValueRule class
        """
        super().__init__(2, "Twos")


class Threes(SameValueRule):
    """
    A class to represent rule Threes
    """

    def __init__(self):
        """
        Sends value of dice and name of rule to SameValueRule class
        """
        super().__init__(3, "Threes")


class Fours(SameValueRule):
    """
    A class to represent rule Fours
    """

    def __init__(self):
        """
        Sends value of dice and name of rule to SameValueRule class
        """
        super().__init__(4, "Fours")


class Fives(SameValueRule):
    """
    A class to represent rule Fives
    """

    def __init__(self):
        """
        Sends value of dice and name of rule to SameValueRule class
        """
        super().__init__(5, "Fives")


class Sixes(SameValueRule):
    """
    A class to represent rule Sixes
    """

    def __init__(self):
        """
        Sends value of dice and name of rule to SameValueRule class
        """
        super().__init__(6, "Sixes")


class ThreeOfAKind:
    """
    A class to represent Three of a kind rule

    ...

    Methods
    -------
    points():
        Gives total score for dices according to rule
    """

    def __init__(self):
        """
        Constructs attribute name for rule
        """
        self.name = "Three Of A Kind"

    def points(self, hand):
        """
        Gives total score for dices

        Parameters
        ----------
        hand: object
            object of the class Hand

        Returns
        -------
        Returns score for hand of dices
        """
        points = 0
        list_of_values = hand.to_list()
        for value in list_of_values:
            equal_values = list_of_values.count(value)
            if equal_values >= 3:
                points = sum(list_of_values)
        return points


class FourOfAKind:
    """
    A class to represent Four of a kind rule

    ...

    Methods
    -------
    points():
        Gives total score for dices according to rule
    """

    def __init__(self):
        """
        Constructs attribute name for rule
        """
        self.name = "Four Of A Kind"

    def points(self, hand):
        """
        Gives total score for dices

        Parameters
        ----------
        hand: object
            object of the class Hand

        Returns
        -------
        Returns score for hand of dices
        """
        points = 0
        list_of_values = hand.to_list()
        for value in list_of_values:
            equal_values = list_of_values.count(value)
            if equal_values >= 4:
                points = sum(list_of_values)
        return points


class FullHouse:
    """
    A class to represent Full house rule

    ...

    Methods
    -------
    points():
        Gives total score for dices according to rule
    """

    def __init__(self):
        """
        Constructs attribute name for rule
        """
        self.name = "Full House"

    def points(self, hand):
        """
        Gives total score for dices

        Parameters
        ----------
        hand: object
            object of the class Hand

        Returns
        -------
        Returns score for hand of dices
        """
        list_of_values = hand.to_list()
        first = False
        points = 0
        for value in list_of_values:
            equal_values = list_of_values.count(value)
            if equal_values == 3:
                first = True
                break
        if first is True:
            for value in list_of_values:
                equal_values = list_of_values.count(value)
                if equal_values == 2:
                    points = 25
                    break
        return points


class SmallStraight:
    """
    A class to represent Small Straight rule

    ...

    Methods
    -------
    points():
        Gives total score for dices according to rule
    """

    def __init__(self):
        """
        Constructs attribute name for rule
        """
        self.name = "Small Straight"

    def points(self, hand):
        """
        Gives total score for dices

        Parameters
        ----------
        hand: object
            object of the class Hand

        Returns
        -------
        Returns score for hand of dices
        """
        list_of_values = hand.to_list()
        list1 = [2, 3, 4, 5]
        list2 = [3, 4, 5, 6]
        list3 = [1, 2, 3, 4]
        if all(item in list_of_values for item in list1):
            points = 30
        elif all(item in list_of_values for item in list2):
            points = 30
        elif all(item in list_of_values for item in list3):
            points = 30
        else:
            points = 0
        return points


class LargeStraight:
    """
    A class to represent Large Straight rule

    ...

    Methods
    -------
    points():
        Gives total score for dices according to rule
    """

    def __init__(self):
        """
        Constructs attribute name for rule
        """
        self.name = "Large Straight"

    def points(self, hand):
        """
        Gives total score for dices

        Parameters
        ----------
        hand: object
            object of the class Hand

        Returns
        -------
        Returns score for hand of dices
        """
        list_of_values = hand.to_list()
        list1 = [1, 2, 3, 4, 5]
        list2 = [2, 3, 4, 5, 6]
        if all(item in list_of_values for item in list1):
            points = 40
        elif all(item in list_of_values for item in list2):
            points = 40
        else:
            points = 0
        return points


class Yahtzee:
    """
    A class to represent Yahtzee rule

    ...

    Methods
    -------
    points():
        Gives total score for dices according to rule
    """
    def __init__(self):
        """
        Constructs attribute name for rule
        """
        self.name = "Yahtzee"

    def points(self, hand):
        """
        Gives total score for dices

        Parameters
        ----------
        hand: object
            object of the class Hand

        Returns
        -------
        Returns score for hand of dices
        """
        points = 0
        list_of_values = hand.to_list()
        for value in list_of_values:
            equal_values = list_of_values.count(value)
            if equal_values >= 5:
                points = 50
        return points


class Chance:
    """
    A class to represent Chance rule

    ...

    Methods
    -------
    points():
        Gives total score for dices according to rule
    """

    def __init__(self):
        """
        Constructs attribute name for rule
        """
        self.name = "Chance"

    def points(self, hand):
        """
        Gives total score for dices

        Parameters
        ----------
        hand: object
            object of the class Hand

        Returns
        -------
        Returns score for hand of dices
        """
        points = sum(hand.to_list())
        return points

def get_all_rules():
    """return list of rules"""
    return (Ones(), Twos(), Threes(), Fours(), Fives(), Sixes(), ThreeOfAKind(), FourOfAKind(),
    FullHouse(), SmallStraight(), LargeStraight(), Yahtzee(), Chance())

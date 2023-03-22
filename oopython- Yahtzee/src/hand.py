"""
Module containing class Hand
"""

from src.die import Die

class Hand:
    """
    A class to represent a Hand of 5 dices

    ...

    Attributes
    ----------
    dice : list
        List of dice objects

    Methods
    -------
    roll(indexes=None):
        Re-rolls all or some of the dices in your hand
    """

    def __init__(self, dice=None):
        """
        Constructs all attributes for the hand object

        Parameters
        ----------
            dice : list = None
                List of dices
        """
        if dice is None:
            dice = [Die(), Die(), Die(), Die(), Die()]
            self.dice = dice
        else:
            count = 0
            for i in dice:
                if count < 5:
                    dice1 = Die(i)
                    dice[count] = dice1
                count += 1
            self.dice = dice

    def roll(self, indexes=None):
        """
        Re-rolls all or some of the dices in your hand

        Parameters
        ----------
        Indexes: list
            List of index-numbers for the dices to be re-rolled

        Returns
        -------
        Uppdated hand of dices
        """
        if indexes is None:
            for dice in self.dice:
                dice.roll()
        elif len(indexes) <= 5 and all(i <= 4 for i in indexes):
            for dice in indexes:
                self.dice[dice].roll()

    def to_list(self):
        """
        Makes a list of int from dices in hand object

        Returns
        -------
        List of int values
        """
        list_of_dices = []
        for dice in self.dice:
            list_of_dices.append(dice.value)
        return list_of_dices

    def __str__(self):
        list_of_numbers = self.dice
        return ', '.join(str(i) for i in list_of_numbers)

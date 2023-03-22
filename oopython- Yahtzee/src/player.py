"""
Module containing class Player
"""

from src.scoreboard import Scoreboard

class Player:
    """
    A class that represents a player

    ...

    Attributes
    ----------
    name : str
        Name of player
    """
    def __init__(self, name):
        self.name = name
        self.scoreboard = Scoreboard()

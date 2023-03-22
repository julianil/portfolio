#!/usr/bin/env python3
"""
Class for testing Scoreboard class
"""
import unittest

from src.scoreboard import Scoreboard
from src.hand import Hand

class TestScoreboard(unittest.TestCase):
    """ Test class Scoreboard"""

    def test_add_points_gets_right_points(self):
        """ Test adding points for rule and getting right score in method add_points """
        a_dict = {"Ones": -1, "Twos": -1, "Threes": -1, "Fours": 0, "Fives": -1, "Sixes": 12,
        "Three Of A Kind": -1, "Four Of A Kind": -1, "Full House": -1, "Small Straight": -1,
        "Large Straight": -1, "Yahtzee": -1, "Chance": 13,}
        scoreboard = Scoreboard(a_dict)# Arrange
        hand = Hand([1, 2, 3, 1, 1])
        scoreboard.add_points("Ones", hand)
        new_score = scoreboard.scoreboard["Ones"]
        self.assertEqual(new_score, 3, "Object should be created, return True") # Assert

    def test_add_points_rises_exception(self):
        """ Test adding points for rule that is already used, check that exception is risen """
        a_dict = {"Ones": -1, "Twos": -1, "Threes": -1, "Fours": 0, "Fives": -1, "Sixes": 12,
        "Three Of A Kind": -1, "Four Of A Kind": -1, "Full House": -1, "Small Straight": -1,
        "Large Straight": -1, "Yahtzee": -1, "Chance": 13,}
        scoreboard = Scoreboard(a_dict)# Arrange
        hand = Hand([6, 2, 3, 6, 1])
        with self.assertRaises(ValueError) as _:
            scoreboard.add_points("Sixes", hand)

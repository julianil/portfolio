#!/usr/bin/env python3
"""
Class for testing Unorderedlist class
"""
import unittest

from src.unorderedlist import UnorderedList
from src.errors import MissingValue
from src.errors import MissingIndex

class TestUnorderedList(unittest.TestCase):
    """ Test class Unorderedlist"""

    def test_get_rises_exception(self):
        """ Test get function with index that does not exist, check that exception is risen"""
        list_players = UnorderedList() # Arrange
        with self.assertRaises(MissingIndex) as _:
            list_players.get(0)

    def test_get_returns_right_value(self):
        """ Test get function with index that does not exist, check that right value is returned"""
        list_players = UnorderedList() # Arrange
        list_players.append("game")
        self.assertEqual(list_players.get(0), "game",
        "Value on ondex should match 'game'") # Assert

    def test_remove_rises_exception(self):
        """ Test remove function with value that does not exist, check that exception is risen"""
        list_players = UnorderedList() # Arrange
        with self.assertRaises(MissingValue) as _:
            list_players.remove("hej")

    def test_remove_returns_correct_list(self):
        """ Test that remove function returns correct list_players after index is removed"""
        list_players = UnorderedList() # Arrange
        list_players.append("a")
        list_players.append("b")
        list_players.append("c")
        list_players.remove("b")
        result = ["a", "c"]
        new_list = [list_players.get(i) for i in range(list_players.size())]
        self.assertEqual(new_list, result,
        "Object should be created and match the list_players") # Assert

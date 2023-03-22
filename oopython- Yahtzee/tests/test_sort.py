#!/usr/bin/env python3
"""
Class for testing Unorderedlist class
"""
import unittest

from src.sort import recursive_insertion
from src.unorderedlist import UnorderedList

class TestRecursiveInsertion(unittest.TestCase):
    """ Test function recursive_insertion"""

    def test_sorting_list_of_tuples(self):
        """ Test that list of tuples is sorted correctly"""
        list_players = UnorderedList() # Arrange
        list_players.append((1, "Bil"))
        list_players.append((24, "Bil"))
        list_players.append((3, "Bil"))
        list_players.append((10, "Bil"))
        list_players.append((60, "Bil"))
        sorted_list = recursive_insertion(list_players, list_players.size())
        result = [sorted_list.get(i) for i in range(sorted_list.size())]
        self.assertEqual(result,
        [(1, 'Bil'), (3, 'Bil'), (10, 'Bil'), (24, 'Bil'), (60, 'Bil')],
        "Sorted list should match result") # Assert

    def test_sorting_list_of_int(self):
        """ Test that list of integers is sorted correctly"""
        list_players = UnorderedList() # Arrange
        list_players.append(1)
        list_players.append(24)
        list_players.append(3)
        list_players.append(10)
        list_players.append(60)
        sorted_list = recursive_insertion(list_players, list_players.size())
        result = [sorted_list.get(i) for i in range(sorted_list.size())]
        self.assertEqual(result, [1, 3, 10, 24, 60],
        "Sorted list should match [1, 3, 10, 24, 60]") # Assert

#!/usr/bin/env python3
"""
Class for testing Hand class
"""
import unittest
import random
from unittest import mock

from src.hand import Hand

class TestHand(unittest.TestCase):
    """ Test class Hand"""

    def test_create_object_without_argument(self):
        """ Test if you can create object without argument """
        random.seed("hand")
        hand = Hand() # Arrange
        self.assertEqual(hand.to_list(), [5, 1, 2, 3, 1],
        "Object should be created and match the list") # Assert

    def test_create_object_with_argument(self):
        """ Test if you can create object with argument """
        hand = Hand([2, 1, 2, 3, 4]) # Arrange
        self.assertEqual(hand.to_list(), [2, 1, 2, 3, 4],
        "Object should be created and match the list") # Assert

    def test_roll_method_with_argument(self):
        """ Test if method roll works with arguments """
        hand1 = Hand([3, 4, 6, 3, 1]) # Arrange
        hand2 = Hand([3, 4, 6, 3, 1]) # Arrange
        hand1.roll([1, 4])
        self.assertNotEqual(hand1.to_list(), hand2.to_list(),
        "Hands should not be the same") # Assert

    def test_roll_method_without_argument(self):
        """ Test if method roll works without argument """
        hand = Hand() # Arrange
        with mock.patch.object(random, 'randint') as randint_mock:
            randint_mock.return_value = 100
            hand.roll()
        self.assertEqual(hand.dice, [100, 100, 100, 100, 100],
        "Hands should have 5 vales equal to mockvalue 100") # Assert

    def test_to_list_method_returns_correct(self):
        """ Test if method to_list returns a correct list of dice-values """
        hand1 = Hand([1, 4, 5, 6, 2]) # Arrange
        self.assertEqual(hand1.to_list(), [1, 4, 5, 6, 2],
        "List of dice-values, return True") # Assert

#!/usr/bin/env python3
"""
Class for testing Die class
"""
import unittest
import random

from src.die import Die

class TestDie(unittest.TestCase):
    """ Test class Die"""

    def test_create_object_without_argument(self):
        """ Test if you can create object without argument """
        random.seed("die")
        dice = Die() # Arrange
        self.assertEqual(dice.value, 5, "Object should be created and value match 5") # Assert

    def test_create_object_with_argument(self):
        """ Test if you can create object with argument """
        dice = Die(2) # Arrange
        self.assertEqual(dice.value, 2, "Object should be created and value match 2") # Assert

    def test_create_object_with_bad_argument(self):
        """ Test if you can create object with bad argument """
        random.seed("die")
        dice = Die(98) # Arrange
        self.assertEqual(dice.value, 6, "Object should be created and value match 5") # Assert

    def test_if_random_is_new_value(self):
        """ Test that second dice has new value and not the same as first dice """
        random.seed("die")
        dice_value_2 = Die() # Arrange
        self.assertEqual(dice_value_2.value, 5, "Dice value should not be 5") # Assert

    def test_if_names_match(self):
        """ Test that get_name method returns correct name """
        dice_value_1 = Die(1) # Arrange
        number_str = dice_value_1.get_name() #Act
        self.assertIs(number_str, "one", "Should be one") # Assert

    def test_if_str_returns_correct(self):
        """ Test that __str__ returns the right string value """
        dice_value_1 = Die(1) # Arrange
        self.assertEqual(str(dice_value_1), "1", "Should return string `1`") # Assert

    def test_if_eq_returns_correct(self):
        """ Test that __eq__ returns the right boolean value """
        dice_value_1 = Die(1) # Arrange
        self.assertEqual(dice_value_1 == 1, True, "Should return bool True") # Assert

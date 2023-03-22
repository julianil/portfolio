"""
Module containing Scoreboard class
"""

from src.rules import get_all_rules

class Scoreboard:
    """
    A class that creates and updates the players scoreboard

    ...

    Attributes
    ----------
    scoreboard : dict
        {rule: scored points}

    Methods
    -------
    get_total_points():
        Get total points for scoreboard
    add_points():
        Update points for specified rule
    get_points():
        Get points for specified rule
    finished():
        Check if all rules are used, if game is finished
    """
    RULES = get_all_rules()

    def __init__(self, scoreboard = None):
        """
        Constructs scoreboard

        Parameters
        ----------
            scoreboard : dict
                {rule: scored points}
        """
        if scoreboard is None:
            self.scoreboard = {
                "Ones": -1,
                "Twos": -1,
                "Threes": -1,
                "Fours": -1,
                "Fives": -1,
                "Sixes": -1,
                "Three Of A Kind": -1,
                "Four Of A Kind": -1,
                "Full House": -1,
                "Small Straight": -1,
                "Large Straight": -1,
                "Yahtzee": -1,
                "Chance": -1,
            }
        else:
            self.scoreboard = scoreboard

    def get_total_points(self):
        """
        Get total points for scoreboard

        Returns
        -------
        Returns total points
        """
        scores = []
        for value in self.scoreboard.values():
            if value > -1:
                scores.append(value)
        points = sum(scores)
        return points

    def add_points(self, rule_name, hand):
        """
        Update points for specified rule
        """
        for key, value in self.scoreboard.items():
            if rule_name == key:
                if value == -1:
                    for rule in Scoreboard.RULES:
                        if rule_name == rule.name:
                            self.scoreboard[key] = rule.points(hand)
                else:
                    raise ValueError("Rule already used, choose another rule!")

    def get_points(self, rule_name):
        """
        Get points for specified rule

        Returns
        -------
        Returns points for rule
        """
        points = 0
        for key, value in self.scoreboard.items():
            if rule_name == key:
                if value == -1:
                    points = -1
                else:
                    points = value
        return points

    def finished(self):
        """
        Check if all rules are used, if game is finished

        Returns
        -------
        Returns bool- True if game is finished, else False
        """
        count = 0
        for rule in self.scoreboard.values():
            if rule == -1:
                count += 1
            else:
                count += 0
        if count > 0:
            res = False
        else:
            res = True
        return res

    @classmethod
    def from_dict(cls, points):
        """
        Initiates scoreboard object using dict

        Returns
        -------
        Returns coreboard object from dict
        """
        return cls(points)

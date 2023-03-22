"""
Module containing class Leaderboard
"""

from src.unorderedlist import UnorderedList

class Leaderboard:
    """
    A class to represent a Leaderboard

    ...

    Attributes
    ----------
    entries: list
        List of players and their scores saved in file

    Methods
    -------
    save():
        Saves leaderboard to file
    add_player():
        Adds new player and their score to leaderboard
    remove_player():
        Removes player and their score from leaderboard
    """
    def __init__(self, entries = None):
        """
        Constructs all attributes for the Leaderboard object

        Parameters
        ----------
            entries: list = None
                List of players and their scores saved in file
        """
        self.entries = UnorderedList()

        if entries:
            for player in entries:
                self.entries.append(player)

    @classmethod
    def load(cls, filename):
        """
        Loads data from given file
        """
        with open(filename, "r", encoding="utf-8") as file:
            leaderboard = cls([tuple(line.strip().split(", ")) for line in file])
        return leaderboard

    def save(self, filename):
        """
        Saves leaderboard to file

        Parameters
        ----------
        Filename: file
            Name of file to save data to
        """
        entries = []
        for i in range(self.entries.size()):
            entries.append(", ".join([str(i) for i in self.entries.get(i)]))

        with open(filename, "w", encoding="utf-8") as file:
            file.write("\n".join(entries))

    def add_player(self, name, score):
        """
        Adds new player and their score to leaderboard

        Parameters
        ----------
        Name: str
            Name of player
        Score: int
            Players score
        """
        self.entries.append((int(score), name))

    def remove_player(self, index):
        """
        Removes player and their score from leaderboard

        Parameters
        ----------
        Index: int
            Index of player to be removed from leaderboard
        """
        player = self.entries.get(int(index))
        self.entries.remove(player)

    def update_leaderboard(self, filename, data):
        """
        Saves leaderboard to file

        Parameters
        ----------
        Filename: file
            Name of file to save data to
        """
        with open(filename, "w", encoding="utf-8") as file:
            if data is not None:
                for i in data:
                    file.write(f"{i[1]}, {i[0]}")

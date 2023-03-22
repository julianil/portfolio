#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Meny opitions for type tranining program
"""

import functions

def main():
    """
    functiondocstring - Loop for getting data from file
    """

    while True:
        print(chr(27) + "[2J" + chr(27) + "[;H")
        print("1) Training mode: Easy")
        print("2) Training mode: Medium")
        print("3) Training mode: Hard")
        print("4) Highscores")
        print("q) Quit.")

        choice = input("-->")

        if choice == "q":
            print("Goodbye!")
            break

        elif choice == "1":
            filechoice = 1
            functions.choosefile(filechoice)

        elif choice == "2":
            filechoice = 2
            functions.choosefile(filechoice)

        elif choice == "3":
            filechoice = 3
            functions.choosefile(filechoice)
        
        elif choice == "4":
            functions.highscore()
        
        else:
            print("That is not a valid choice. Please choose something from the menu.")

        input("\nPress enter to continue...")

if __name__ == "__main__":
    main()

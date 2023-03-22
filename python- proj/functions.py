#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
functions for type training program
"""

import time

def choosefile(filechoice):
    """
    functiondocstring - val av fil
    """
    if filechoice == 1:
        typetest(file = "typing/easy.txt")
    elif filechoice == 2:
        typetest(file = "typing/medium.txt")
    elif filechoice == 3:
        typetest(file = "typing/hard.txt")

def userinput(file):
    """
    functiondocstring - get users full input and time it
    """
    with open(file) as file1:
        user_fulltext = ""
        t0 = time.time()
        for line in file1:
            print(line)
            user_text = input()
            user_fulltext += user_text + '\n'
        t1 = time.time()
        totalTime = round(t1 -t0, 3)
        return(user_fulltext, totalTime)

def checkmatch(file):
    """
    functiondocstring - present users result
    """
    user_text_time = userinput(file)
    user_fulltext = user_text_time[0]
    user_time_seconds = user_text_time[1]
    with open(file) as file1:
        file_fulltext = file1.read()
        file_string = ' '.join(file_fulltext)
        user_string = ' '.join(user_fulltext)
        difference_list = []
        for x, y in zip(user_string, file_string):
            if x != y:
                difference_list.append(x)
        difference_dict = { 
            item: difference_list.count(item) for item in difference_list
        }
        print(difference_dict)
        error_precentage = len(difference_list) / len(file_string) * 100
        user_time_minutes = user_time_seconds / 60
        characters_per_minute = round(len(user_fulltext) / user_time_minutes, 3)
        score = round(len(file_string) * (100 - error_precentage) / user_time_minutes, 3)
        print(f"Det tog {user_time_seconds} sekunder.")
        print(f"Du skrev {characters_per_minute} ord i minuten.")
        print("Procentuellt fel: " + str(round(error_precentage, 3)) + "%")
        print("Poäng: " + str(score))
        return(characters_per_minute, score)

def typetest(file):
    """
    functiondocstring - put users result into highscore-list
    """
    if file == "typing/easy.txt":
        level = "Easy"
    elif file == "typing/medium.txt":
        level = "Medium"
    elif file == "typing/hard.txt":
        level = "Hard"
    users_result = checkmatch(file)
    cpm = users_result[0]
    score = users_result[1]
    username = input("Please enter your username to save your score: ")
    user = f"{username}    {score}     {level}     {cpm}"
    with open('score.txt', 'a') as file1:
        file1.write(f"{user}\n")
    return(file1)

def highscore():
    """
    functiondocstring - output full formated highscore-list, sorted by level and score
    """
    with open('score.txt') as file1:
        highscores = file1.readlines()
        resultlist = sorted(sorted(highscores), key=lambda x: (x.split()[2], x.split()[1]), reverse=True)
        rubriker = "Username Score Level CPM"
        rubrik = rubriker. split()
        print(f'{rubrik[0]:<12}  {rubrik[1]:<12}  {rubrik[2]:<12}  {rubrik[3]:<12}')
        for x in resultlist:
            string = x
            words = string. split()
            print(f'{words[0]:<12}  {words[1]:<12}  {words[2]:<12}  {words[3]:<12}')

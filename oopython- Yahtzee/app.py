#!/usr/bin/env python3
"""
Module for app routes
"""
import traceback
import os
import re
from src.hand import Hand
from src.scoreboard import Scoreboard
from src.leaderboard import Leaderboard
from src.queue import Queue
from src.player import Player
from src.sort import insertion_sort
from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = re.sub(r"[^a-z\d]", "", os.path.realpath(__file__))

@app.route("/")
def main():
    """Content from classes for index.html"""
    return render_template("index.html")

@app.route("/init", methods=["POST", "GET"])
def init():
    """ Intialize values needed in session """
    queue = Queue()
    number_players = int(request.form.get("amount_players"))
    for i in range(1, number_players +1):
        player_name = f"Player {i}"
        player = Player(player_name)
        board = player.scoreboard
        queue.enqueue((player.name, board.scoreboard))
        names = list(zip(*queue.items))[0]
        scoreboards = list(zip(*queue.items))[1]
    session["players"] = names
    session["hand"] = Hand().to_list()
    session["count"] = 1
    session["message"] = ""
    session["scoreboard"] = scoreboards
    return redirect(url_for('yahtzee'))

@app.route("/yahtzee", methods=["GET"])
def yahtzee():
    """Main route"""
    player = session["players"]
    queue = Queue()
    for i in player:
        queue.enqueue(i)
    scoreboard = session["scoreboard"]
    queue_sb = Queue()
    boards = []
    for i in scoreboard:
        queue_sb.enqueue(i)
        sboard = Scoreboard(i)
        boards.append(sboard.get_total_points())
    board = Scoreboard(queue_sb.peek())
    players = [(boards[i], player[i]) for i in range(0, len(boards))]
    sorted_players = sorted(players, reverse=True)
    winner = sorted_players[0]
    hand_recreated = Hand(session.get("hand"))
    message = session["message"]
    return render_template(
        "yahtzee.html",
        winner = winner,
        list_of_players = players,
        player = queue.peek(),
        hand = hand_recreated,
        scoreboard = board,
        count = session["count"],
        message = message
    )

@app.route("/score", methods=["POST"])
def score():
    """Update score"""
    session["message"] = ""
    if request.form.get("score"):
        try:
            scoreboard = session["scoreboard"]
            queue_sb = Queue()
            for i in scoreboard:
                queue_sb.enqueue(i)
            nr_players = queue_sb.size()
            hand_recreated = Hand(session.get("hand"))
            choose_rule = request.form.get("score")
            Scoreboard(queue_sb.peek()).add_points(choose_rule, hand_recreated)
            board = queue_sb.peek()
            hand_recreated.roll()
            if nr_players > 1:
                queue_sb.dequeue()
                queue_sb.enqueue(board)
            session["hand"] = hand_recreated.to_list()
            session["count"] = 1
            session["scoreboard"] = queue_sb.items
            player = session["players"]
            queue = Queue()
            for i in player:
                queue.enqueue(i)
            current_player = queue.peek()
            queue.dequeue()
            queue.enqueue(current_player)
            session["players"] = queue.items
        except ValueError:
            session["hand"] = hand_recreated.to_list()
            session["message"] = "Rule already used, choose another rule!"
    return redirect(url_for('yahtzee'))

@app.route("/reroll", methods=["POST"])
def reroll():
    """Reroll part of hand"""
    dice_reroll = list(map(int, request.form.getlist("dice")))
    if session["count"] < 3:
        hand_reacreated = Hand(session.get("hand"))
        hand_reacreated.roll(dice_reroll)
        session["hand"] = hand_reacreated.to_list()
        session["count"] += 1
    else:
        session["message"] = "You have no rerolls left, please choose a rule!"
    return redirect(url_for('yahtzee'))

@app.route("/leaderboard", methods=["GET"])
def leaderboard():
    """Route for leaderboard"""
    leader_board = Leaderboard.load("leaderboard.json")
    insertion_sort(leader_board.entries)
    leader_board.save("leaderboard.json")
    return render_template(
        "leaderboard.html",
        leaderboard = leader_board
    )

@app.route("/leader_remove", methods=["POST", "GET"])
def leader_remove():
    """Update leaderboard by removing player"""
    leader_board = Leaderboard.load("leaderboard.json")
    leader_board.remove_player(request.form.get("player"))
    leader_board.save("leaderboard.json")
    return redirect(url_for('leaderboard'))

@app.route("/leader_new", methods=["POST", "GET"])
def leader_new():
    """Update leaderboard"""
    leader_board = Leaderboard.load("leaderboard.json")
    leader_board.add_player(request.form.get("name"), request.form.get("score"))
    leader_board.save("leaderboard.json")
    return redirect(url_for('reset'))

@app.route("/about")
def about():
    """Content for about.html"""
    return render_template("about.html")

@app.route("/reset")
def reset():
    """ Route for reset session """
    _ = [session.pop(key) for key in list(session.keys())]

    return redirect(url_for('main'))

@app.errorhandler(404)
def page_not_found(e):
    """
    Handler for page not found 404
    """
    #pylint: disable=unused-argument
    return "Flask 404 here, but not the page you requested."

@app.errorhandler(500)
def internal_server_error(e):
    """
    Handler for internal server error 500
    """
    #pylint: disable=unused-argument
    return "<p>Flask 500<pre>" + traceback.format_exc()

if __name__ == "__main__":
    app.run(debug=True)

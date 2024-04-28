import tkinter as tk
from tkinter import messagebox
import random

def determine_winner(user_choice, computer_choice):
    if user_choice == computer_choice:
        return "It's a tie!"
    elif (user_choice == 'rock' and computer_choice == 'scissors') or \
         (user_choice == 'scissors' and computer_choice == 'paper') or \
         (user_choice == 'paper' and computer_choice == 'rock'):
        return "You win!"
    else:
        return "Computer wins!"

def play_round(user_choice):
    computer_choice = random.choice(['rock', 'paper', 'scissors'])

    result = determine_winner(user_choice, computer_choice)

    messagebox.showinfo("Result", f"Your choice: {user_choice}\nComputer's choice: {computer_choice}\n{result}")

def rock_button_click():
    play_round('rock')

def paper_button_click():
    play_round('paper')

def scissors_button_click():
    play_round('scissors')

def main():
    root = tk.Tk()
    root.title("Rock-Paper-Scissors Game")

    label = tk.Label(root, text="Choose your move:")
    label.pack()

    rock_button = tk.Button(root, text="Rock", width=10, command=rock_button_click)
    rock_button.pack()

    paper_button = tk.Button(root, text="Paper", width=10, command=paper_button_click)
    paper_button.pack()

    scissors_button = tk.Button(root, text="Scissors", width=10, command=scissors_button_click)
    scissors_button.pack()

    root.mainloop()

if __name__ == "__main__":
    main()

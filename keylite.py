import tkinter as tk
from pynput.keyboard import Key, Controller

window = tk.Tk()

def left():
    kb = Controller()
    kb.press(Key.left)

def right():
    kb = Controller()
    kb.press(Key.right)

button = tk.Button(window, 
                   text="LEFT", 
                   command=left,
                   height= 3, width=5)
button.pack(side=tk.LEFT)

button = tk.Button(window, 
                   text="RIGHT", 
                   command=right,
                   height= 3, width=5)
button.pack(side=tk.LEFT)

frame = tk.Frame(window)  
frame.pack(side=tk.RIGHT)  



button = tk.Button(frame, 
                   text="UP", 
                   command=quit,
                   height= 3, width=10)
button.pack(side=tk.TOP)

button = tk.Button(frame, 
                   text="DOWN", 
                   command=quit,
                   height= 3, width=10)
button.pack(side=tk.BOTTOM)

window.grab_set()

window.geometry("200x100")

window.mainloop()
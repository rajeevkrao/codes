#pyspam.py
import pyautogui
import time
msg = input("Enter the message: ")
n = input("How many times ?: ")
print("Spam Starting in 5 seconds")
time.sleep(5)
for i in range(0,int(n)):
  pyautogui.typewrite(msg)
  time.sleep(1)
  pyautogui.typewrite('\n')
  
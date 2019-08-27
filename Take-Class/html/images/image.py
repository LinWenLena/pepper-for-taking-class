import PIL.Image, PIL.ImageTk
import cv2
from Tkinter import *
import PIL

def _fullscreen():
    root = Tk()
    img = PhotoImage(file = "C:/Users/aaa/Desktop/praxis/lecture/html/image/body.gif")
    w = Label(root, image=img)
    root.overrideredirect(True)
    root.geometry("{0}x{1}+0+0".format(root.winfo_screenwidth(), root.winfo_screenheight()))
    root.focus_set()  # <-- move focus to this widget
    root.bind("<Escape>", lambda e: e.widget.quit())
    w.pack()

    root.mainloop()


_fullscreen()

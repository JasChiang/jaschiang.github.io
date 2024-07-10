import tkinter as tk
from tkinter import messagebox, filedialog
import json

class FeatureBlock(tk.Frame):
    def __init__(self, parent, text):
        super().__init__(parent, bd=1, relief="solid")
        self.label = tk.Label(self, text=text, padx=10, pady=5)
        self.label.pack(fill="both", expand=True)
        self.label.bind("<Button-1>", self.start_move)
        self.label.bind("<B1-Motion>", self.do_move)
        self.label.bind("<ButtonRelease-1>", self.stop_move)
        self._drag_data = {"x": 0, "y": 0}

    def start_move(self, event):
        self._drag_data["x"] = event.x
        self._drag_data["y"] = event.y

    def do_move(self, event):
        x = self.winfo_x() - self._drag_data["x"] + event.x
        y = self.winfo_y() - self._drag_data["y"] + event.y
        self.place(x=x, y=y)

    def stop_move(self, event):
        self._drag_data["x"] = 0
        self._drag_data["y"] = 0

class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Feature Block Manager")
        self.geometry("800x600")
        self.blocks = []

        self.add_button = tk.Button(self, text="新增功能格", command=self.add_block)
        self.add_button.pack(pady=5)

        self.add_shared_2_button = tk.Button(self, text="新增兩機共同功能", command=self.add_shared_feature_2)
        self.add_shared_2_button.pack(pady=5)

        self.add_shared_4_button = tk.Button(self, text="新增四機共同功能", command=self.add_shared_feature_4)
        self.add_shared_4_button.pack(pady=5)

        self.save_button = tk.Button(self, text="保存內容", command=self.save_content)
        self.save_button.pack(pady=5)

        self.load_button = tk.Button(self, text="加載內容", command=self.load_content)
        self.load_button.pack(pady=5)

        self.canvas = tk.Canvas(self, bg="white")
        self.canvas.pack(fill="both", expand=True)

    def add_block(self):
        text = "新功能"
        block = FeatureBlock(self.canvas, text)
        block.place(x=50, y=50)
        self.blocks.append(block)

    def add_shared_feature_2(self):
        text = "兩機共同功能"
        block1 = FeatureBlock(self.canvas, text)
        block2 = FeatureBlock(self.canvas, text)
        block1.place(x=50, y=100)
        block2.place(x=250, y=100)
        self.blocks.extend([block1, block2])

    def add_shared_feature_4(self):
        text = "四機共同功能"
        blocks = [FeatureBlock(self.canvas, text) for _ in range(4)]
        for i, block in enumerate(blocks):
            block.place(x=50 + i * 200, y=200)
        self.blocks.extend(blocks)

    def save_content(self):
        content = [(block.winfo_x(), block.winfo_y(), block.label.cget("text")) for block in self.blocks]
        file_path = filedialog.asksaveasfilename(defaultextension=".json", filetypes=[("JSON files", "*.json")])
        if file_path:
            with open(file_path, 'w') as f:
                json.dump(content, f)
            messagebox.showinfo("保存內容", "內容已保存")

    def load_content(self):
        file_path = filedialog.askopenfilename(filetypes=[("JSON files", "*.json")])
        if file_path:
            with open(file_path, 'r') as f:
                content = json.load(f)
            self.canvas.delete("all")
            self.blocks = []
            for x, y, text in content:
                block = FeatureBlock(self.canvas, text)
                block.place(x=x, y=y)
                self.blocks.append(block)
            messagebox.showinfo("加載內容", "內容已加載")

if __name__ == "__main__":
    app = App()
    app.mainloop()

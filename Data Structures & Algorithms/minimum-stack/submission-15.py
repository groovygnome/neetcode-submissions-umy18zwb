class MinStack:

    def __init__(self):
        self.stack = []
        self.length = -1
        self.minStack = []
        self.minLength = -1
        

    def push(self, val: int) -> None:
        self.stack.append(val)
        self.length += 1
        if self.minLength == -1 or self.minStack[self.minLength] >= val:
            self.minStack.append(val)
            self.minLength += 1
        

    def pop(self) -> None:
        if self.minStack[self.minLength] == self.stack[self.length]:
            self.minStack.pop()
            self.minLength -= 1
        self.length -= 1
        self.stack.pop()
        

    def top(self) -> int:
        return self.stack[self.length]
        

    def getMin(self) -> int:
        return self.minStack[self.minLength]
        

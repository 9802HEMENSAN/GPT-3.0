# 1. **Implement Stack using Queue**: Use Python's queue data structure to implement a stack.
#     - *Input*: push(1), push(2), pop(), push(3), pop(), pop()
#     - *Output*: "1, None, 3, None, None"

# Need Practice

from queue import Queue

class Stack:
    def __init__(self):
        self.q = Queue()

    def push(self, item):
        self.q.put(item)

    def pop(self):
        # Create a temporary queue to store elements
        temp_q = Queue()

        # Move all elements except the last one to the temporary queue
        while self.q.qsize() > 1:
            temp_q.put(self.q.get())

        # Get and return the last element from the original queue
        if not self.q.empty():
            popped_item = self.q.get()
        else:
            popped_item = None

        # Assign the temporary queue to the original queue
        self.q = temp_q

        return popped_item

# Input operations
s = Stack()
s.push(1)
s.push(2)
result1 = s.pop()
s.push(3)
result2 = s.pop()
result3 = s.pop()

print(result1, result2, result3)  # Output: 1 None 3

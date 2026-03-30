class LRUCache:

    def __init__(self, capacity: int):
        self.LRUcache = {}
        self.LRUstack = []
        self.capacity = capacity
        

    def get(self, key: int) -> int:
        if key in self.LRUcache:
            for i in range(len(self.LRUstack)):
                if self.LRUstack[i] == key:
                   self.LRUstack.pop(i)
                   self.LRUstack.append(key) 
            return self.LRUcache[key]
        else:
            return -1
        

    def put(self, key: int, value: int) -> None:
        if key in self.LRUcache:
            self.LRUcache[key] = value
            for i in range(len(self.LRUstack)):
                if self.LRUstack[i] == key:
                   self.LRUstack.pop(i)
                   self.LRUstack.append(key) 
        else:
            self.LRUcache[key] = value
            self.LRUstack.append(key)
        if len(self.LRUstack) > self.capacity:
            self.LRUcache.pop(self.LRUstack[0])
            self.LRUstack.pop(0)
            
            
        

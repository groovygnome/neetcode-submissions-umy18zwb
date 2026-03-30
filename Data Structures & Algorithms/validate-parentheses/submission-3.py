class Solution:
    def isValid(self, s: str) -> bool:
        par = list(s)
        if len(par) <= 1:
            return False
        check = []
        for i in range(len(par)):
            if par[i] == '[':
                check.append('[')
            if par[i] == '(':
                check.append('(')
            if par[i] == '{':
                check.append('{')
            if par[i] == ']':
                if len(check) > 0:
                    close = check.pop()
                    if close != '[':
                        return False
                else:
                    return False
            if par[i] == ')':
                if len(check) > 0:
                    close = check.pop()
                    if close != '(':
                        return False
                else:
                    return False
            if par[i] == '}':
                if len(check) > 0:
                    close = check.pop()
                    if close != '{':
                        return False
                else:
                    return False
        if len(check) == 0:            
            return True
        else:
            return False
        
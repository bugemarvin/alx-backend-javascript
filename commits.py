#!/usr/bin/env python3 
'''create a git commiter
'''
import sys
import subprocess


'''For committing all the messages
'''
subprocess.run(["git", "add", "."])

'''For getting message from user
'''

subprocess.run(["git", "commit", "-m", input("Enter a Message to commit:\n")])

'''pushing to remote
'''
subprocess.run(["git", "push"])

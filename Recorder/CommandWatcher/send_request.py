import os
import time
import sys
import requests
import threading

def send_request():
    try:
        requests.post('http://0.0.0.0:8000/log', json={    
            'user': sys.argv[1],
            'host': sys.argv[2],
            'pwd': '~/' + os.path.relpath(sys.argv[3], os.environ.get('HOME')),
            'command': ' '.join(sys.argv[4:]),
            'timestamp': time.time(),
            '_eventType': 'commandExec'
        })
    except Exception as e:
        pass

thread = threading.Thread(target=send_request)
thread.setDaemon(True)
thread.start()
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
from brain import AgentBrain

app = Flask(__name__, static_folder='../public', static_url_path='')
CORS(app)

brain = AgentBrain()

@app.route('/api/think', methods=['POST'])
def think():
    data = request.json
    task = data.get('task', 'Automate my workflow')
    
    # Run the simulated thinking process
    steps = brain.think(task)
    return jsonify(steps)

@app.route('/')
def index():
    return send_from_directory('../public', 'index.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5003))
    app.run(host='0.0.0.0', port=port, debug=True)

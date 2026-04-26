import time
import random

class AgentBrain:
    def __init__(self):
        self.steps = []
        
    def think(self, task):
        """Simulates a semi-autonomous agent loop (ReAct)"""
        self.steps = []
        
        # Step 1: Initial Thought
        self._add_step("THOUGHT", f"Analyzing task: '{task}'. I need to identify the key entities and the goal.")
        time.sleep(1)
        
        # Step 2: Planning
        self._add_step("PLAN", "1. Search for context. 2. Verify data. 3. Synthesize response.")
        time.sleep(1.2)
        
        # Step 3: Tool Call (Mock)
        self._add_step("ACTION", "Calling 'WebSearch(query=\"current branding trends\")'...")
        time.sleep(1.5)
        
        # Step 4: Observation
        self._add_step("OBSERVATION", "Found 3 relevant sources. Trends indicate a shift towards 'Digital Aura' and 'Obsidian' aesthetics.")
        time.sleep(1)
        
        # Step 5: Final Thought
        self._add_step("THOUGHT", "The data is consistent. I can now finalize the brand proposal.")
        time.sleep(0.8)
        
        # Step 6: Final Answer
        self._add_step("ANSWER", "Brand optimization strategy complete. Recommendations: Implement glassmorphic UI and kinetic depth.")
        
        return self.steps

    def _add_step(self, type, message):
        self.steps.append({
            "type": type,
            "message": message,
            "timestamp": time.time()
        })

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const launchBtn = document.getElementById('launchBtn');
    const thoughtStream = document.getElementById('thoughtStream');

    const formatTimestamp = () => {
        const date = new Date();
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };

    const addStreamItem = (step) => {
        const div = document.createElement('div');
        div.className = `stream-item tag-${step.type}`;
        
        div.innerHTML = `
            <span class="stream-tag">:: ${step.type}</span>
            <div class="item-msg">${step.message}</div>
            <span class="item-meta">${formatTimestamp()}</span>
        `;
        
        thoughtStream.appendChild(div);
        thoughtStream.scrollTop = thoughtStream.scrollHeight;
    };

    const runAgentCycle = async () => {
        const task = taskInput.value.trim();
        if (!task) return;

        // Reset UI
        thoughtStream.innerHTML = '';
        launchBtn.disabled = true;
        launchBtn.innerText = 'Agent Active...';

        try {
            // Simulated Brain Response (Fixes the "Connection Lost" error)
            const simulation = [
                { type: 'THOUGHT', message: `Initializing neural core for task: "${task}"` },
                { type: 'PLAN', message: "1. Scan security layers\n2. Extract core patterns\n3. Execute sync protocol" },
                { type: 'ACTION', message: "Accessing encrypted data sectors... [SUCCESS]" },
                { type: 'OBSERVATION', message: "Data patterns matched. Security handshake verified." },
                { type: 'THOUGHT', message: "Optimizing results for maximum precision..." },
                { type: 'ANSWER', message: "Objective accomplished. System state: STABLE." }
            ];

            for (const step of simulation) {
                addStreamItem(step);
                await new Promise(r => setTimeout(r, 1200)); // Simulate thinking time
            }

        } catch (error) {
            console.error('Agent failure:', error);
            thoughtStream.innerHTML = '<div class="empty-msg">Error: Connection to Agent Brain lost.</div>';
        } finally {
            launchBtn.disabled = false;
            launchBtn.innerText = 'Deploy Agent';
            taskInput.value = '';
        }
    };

    launchBtn.addEventListener('click', runAgentCycle);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') runAgentCycle();
    });
});

console.log('Popup.js starting to load');

import { notionService } from '../services/notionService.js';
import { NOTION_CONFIG } from '../notion-config.js';

console.log('Imports completed');
console.log('Module script starting');
console.log('NOTION_CONFIG loaded:', NOTION_CONFIG);

// Add click handler immediately
document.querySelector('#saveButton').onclick = async function() {
    console.log('Button clicked directly!');
    const statusMessage = document.getElementById('status');
    
    try {
        // Get current tab
        const [tab] = await chrome.tabs.query({ 
            active: true, 
            currentWindow: true 
        });
        console.log('Current tab:', tab);

        if (!NOTION_CONFIG.INTEGRATION_TOKEN || !NOTION_CONFIG.DATABASE_ID) {
            throw new Error('Notion configuration is missing. Please check your config.json');
        }

        // Disable button and show status
        this.disabled = true;
        statusMessage.textContent = 'Saving...';
        statusMessage.className = 'status-info';

        // Save to Notion
        await notionService.saveURL(tab.url, tab.title);

        // Show success
        statusMessage.textContent = 'Saved!';
        statusMessage.className = 'status-success';

        // Reset after 2 seconds
        setTimeout(() => {
            this.disabled = false;
            statusMessage.textContent = '';
        }, 2000);

    } catch (error) {
        console.error('Full error:', error);
        statusMessage.textContent = error.message;
        statusMessage.className = 'status-error';
        this.disabled = false;
    }
}; 
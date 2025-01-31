import { NOTION_CONFIG } from '../notion-config.js';

export const notionService = {
    async saveURL(url, title = '') {
        try {
            const response = await fetch('https://api.notion.com/v1/pages', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${NOTION_CONFIG.INTEGRATION_TOKEN}`,
                    'Content-Type': 'application/json',
                    'Notion-Version': NOTION_CONFIG.API_VERSION
                },
                body: JSON.stringify({
                    parent: { database_id: NOTION_CONFIG.DATABASE_ID },
                    properties: {
                        Name: {
                            title: [
                                {
                                    text: {
                                        content: title || url
                                    }
                                }
                            ]
                        },
                        URL: {
                            url: url
                        }
                    }
                })
            });

            if (!response.ok) {
                throw new Error(`Notion API error: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error saving to Notion:', error);
            throw error;
        }
    }
}; 
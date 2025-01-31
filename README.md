# Notion URL Saver

A Chrome extension to save URLs directly to your Notion database.

## Setup

1. Create a Notion integration:
   - Go to https://www.notion.so/my-integrations
   - Click "New integration"
   - Name it (e.g., "URL Saver")
   - Copy the "Internal Integration Token"

2. Create or select a Notion database:
   - Create a new database in Notion or use an existing one
   - Make sure it has "Name" and "URL" properties
   - Copy the database ID from the URL (the part after the workspace name and before the "?")
   - Share the database with your integration

3. Configure the extension:
   - Copy `config.example.json` to `config.prod.json`
   - Replace the placeholder values with your:
     - Notion integration token
     - Database ID

4. Build the extension:
   ```bash
   npm run build:prod
   ```

5. Load in Chrome:
   - Go to chrome://extensions/
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist` folder 
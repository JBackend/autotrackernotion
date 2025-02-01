# Notion URL Saver

A Chrome extension to save URLs directly to your Notion database.

## 1. Create a Notion Integration  
1. Visit [Notion Integrations](https://www.notion.so/my-integrations).  
2. Click **"New integration"** and give it a name (e.g., **"URL Saver"**).  
3. Copy the **Internal Integration Token** (you’ll need this later).  

## 2. Set Up Your Notion Database  
1. Create a new database in Notion or use an existing one.  
2. Ensure the database has at least the following properties:  
   - **Name** (Text)  
   - **URL** (URL)  
3. Copy the **Database ID** from the URL:  
   - It’s the part between your workspace name and `?`.  
4. Share the database with your integration:  
   - Open the database, click **"Share"**, and add your integration.  

## 3. Configure the Extension  
1. Copy `config.example.json` and rename it to `config.prod.json`.  
2. Open `config.prod.json` and replace the placeholder values with:  
   - Your **Notion Integration Token**.  
   - Your **Database ID**.  

## 4. Build the Extension  
Run the following command to build the extension:  
```sh
npm run build:prod
```

5. Load in Chrome:
   - Go to chrome://extensions/
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist` folder 

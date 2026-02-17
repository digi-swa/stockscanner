// Vercel Serverless Function - Notion API Proxy
// Omzeilt CORS restricties door server-side requests te maken

export default async function handler(req, res) {
    // CORS headers toestaan
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Notion-Version, X-Notion-Path');
    
    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    try {
        // Haal Notion path uit header of query
        const notionPath = req.headers['x-notion-path'] || req.query.path;
        
        if (!notionPath) {
            return res.status(400).json({ error: 'Missing X-Notion-Path header or path query parameter' });
        }
        
        const notionUrl = `https://api.notion.com${notionPath.startsWith('/') ? '' : '/'}${notionPath}`;
        
        // Forward de request naar Notion
        const notionResponse = await fetch(notionUrl, {
            method: req.method,
            headers: {
                'Authorization': req.headers['authorization'],
                'Notion-Version': req.headers['notion-version'] || '2022-06-28',
                'Content-Type': 'application/json'
            },
            body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined
        });
        
        const data = await notionResponse.json();
        
        return res.status(notionResponse.status).json(data);
        
    } catch (error) {
        console.error('Proxy error:', error);
        return res.status(500).json({ error: error.message });
    }
}

const express = require('express');
const app = express();
const port = 3000; 

app.get('/api/button', (req, res) => {
    const buttonHtml = `
        <button class="glow-btn">
            <a href="https://github.com/Kusa331" target="_blank">
                <i class="fa-brands fa-github"></i>API
            </a>
        </button>
    `;
    res.json({ html: buttonHtml });
});

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}/api/button`);
});
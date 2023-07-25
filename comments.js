// Create web server 
// 1. Create web server
// 2. Create route for /comments
// 3. Send back a response of all comments
// 4. Start server
// 5. Test

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
    res.send('All comments');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});


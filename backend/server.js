const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors()); // ✅ Enable CORS
app.use(express.static('../frontend'));

app.get('/api/message', (req, res) => {
  res.json({ message: 'Backend Response Received 🎉' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

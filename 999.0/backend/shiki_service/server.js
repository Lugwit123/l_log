import express from 'express';
import { codeToHtml } from 'shiki';

const app = express();
app.use(express.json({ limit: '50mb' }));

app.post('/highlight', async (req, res) => {
  const { code, lang = 'python', theme = 'github-dark' } = req.body;
  
  try {
    const html = await codeToHtml(code, { 
      lang, 
      theme,
      transformers: []
    });
    res.json({ html });
  } catch (error) {
    console.error('Shiki highlighting error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Shiki service running on http://localhost:${PORT}`);
});

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// In-memory storage
let notes = [];
let nextId = 1;

// GET all notes
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// POST create note
app.post('/api/notes', (req, res) => {
  const { title, content, category, priority } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content required' });
  }
  const note = {
    _id: String(nextId++),
    title,
    content,
    category: category || 'other',
    priority: priority || 'medium',
    createdAt: new Date()
  };
  notes.push(note);
  res.status(201).json(note);
});

// PUT update note
app.put('/api/notes/:id', (req, res) => {
  const index = notes.findIndex(n => n._id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Note not found' });
  notes[index] = { ...notes[index], ...req.body };
  res.json(notes[index]);
});

// DELETE note
app.delete('/api/notes/:id', (req, res) => {
  notes = notes.filter(n => n._id !== req.params.id);
  res.json({ message: 'Note deleted' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
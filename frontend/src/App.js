import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { getNotes, createNote, updateNote, deleteNote } from './services/api';

function App() {
  const [notes, setNotes] = useState([]);
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await getNotes();
      setNotes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (form) => {
    try {
      if (noteToEdit) {
        await updateNote(noteToEdit._id, form);
        setNoteToEdit(null);
      } else {
        await createNote(form);
      }
      fetchNotes();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      fetchNotes();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredNotes = filter === 'all'
    ? notes
    : notes.filter(n => n.category === filter);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>📝 Notes App</h1>
        <p style={styles.subtitle}>Gérez vos notes facilement</p>
      </header>

      <div style={styles.content}>
        <div style={styles.sidebar}>
          <NoteForm
            onSubmit={handleSubmit}
            noteToEdit={noteToEdit}
            onCancel={() => setNoteToEdit(null)}
          />
        </div>

        <div style={styles.main}>
          <div style={styles.filters}>
            {['all', 'personal', 'work', 'study', 'other'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  ...styles.filterBtn,
                  background: filter === cat ? '#2E5FA3' : '#f0f0f0',
                  color: filter === cat ? '#fff' : '#333'
                }}
              >
                {cat === 'all' ? '🌐 Tous' : cat}
              </button>
            ))}
          </div>

          <NoteList
            notes={filteredNotes}
            onDelete={handleDelete}
            onEdit={setNoteToEdit}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', background: '#f5f7fa', fontFamily: 'Arial, sans-serif' },
  header: { background: '#2E5FA3', color: '#fff', padding: '20px 40px', textAlign: 'center' },
  title: { margin: 0, fontSize: '32px' },
  subtitle: { margin: '5px 0 0', opacity: 0.8 },
  content: { display: 'flex', gap: '20px', padding: '20px 40px', maxWidth: '1200px', margin: '0 auto' },
  sidebar: { width: '350px', flexShrink: 0 },
  main: { flex: 1 },
  filters: { display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' },
  filterBtn: { border: 'none', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }
};

export default App;
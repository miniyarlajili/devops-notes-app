import React, { useState, useEffect } from 'react';

function NoteForm({ onSubmit, noteToEdit, onCancel }) {
  const [form, setForm] = useState({
    title: '',
    content: '',
    category: 'other',
    priority: 'medium'
  });

  useEffect(() => {
    if (noteToEdit) setForm(noteToEdit);
  }, [noteToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: '', content: '', category: 'other', priority: 'medium' });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>{noteToEdit ? 'Modifier la note' : 'Nouvelle note'}</h2>
      <input
        name="title"
        placeholder="Titre"
        value={form.title}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <textarea
        name="content"
        placeholder="Contenu"
        value={form.content}
        onChange={handleChange}
        required
        style={styles.textarea}
      />
      <select name="category" value={form.category} onChange={handleChange} style={styles.select}>
        <option value="personal">Personnel</option>
        <option value="work">Travail</option>
        <option value="study">Étude</option>
        <option value="other">Autre</option>
      </select>
      <select name="priority" value={form.priority} onChange={handleChange} style={styles.select}>
        <option value="low">Basse</option>
        <option value="medium">Moyenne</option>
        <option value="high">Haute</option>
      </select>
      <div style={styles.buttons}>
        <button type="submit" style={styles.btnSubmit}>
          {noteToEdit ? 'Modifier' : 'Ajouter'}
        </button>
        {noteToEdit && (
          <button type="button" onClick={onCancel} style={styles.btnCancel}>
            Annuler
          </button>
        )}
      </div>
    </form>
  );
}

const styles = {
  form: { background: '#fff', padding: '20px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  input: { width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box' },
  textarea: { width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', height: '100px', boxSizing: 'border-box' },
  select: { width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box' },
  buttons: { display: 'flex', gap: '10px' },
  btnSubmit: { background: '#2E5FA3', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' },
  btnCancel: { background: '#ccc', color: '#333', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }
};

export default NoteForm;
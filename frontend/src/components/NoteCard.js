import React from 'react';

function NoteCard({ note, onDelete, onEdit }) {
  const priorityColors = {
    low: '#70AD47',
    medium: '#FFC000',
    high: '#FF0000'
  };

  const categoryIcons = {
    personal: '👤',
    work: '💼',
    study: '📚',
    other: '📝'
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.icon}>{categoryIcons[note.category]}</span>
        <h3 style={styles.title}>{note.title}</h3>
        <span style={{ ...styles.priority, background: priorityColors[note.priority] }}>
          {note.priority}
        </span>
      </div>
      <p style={styles.content}>{note.content}</p>
      <div style={styles.footer}>
        <span style={styles.category}>{note.category}</span>
        <div style={styles.buttons}>
          <button onClick={() => onEdit(note)} style={styles.btnEdit}>✏️ Modifier</button>
          <button onClick={() => onDelete(note._id)} style={styles.btnDelete}>🗑️ Supprimer</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: { background: '#fff', borderRadius: '8px', padding: '16px', marginBottom: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  header: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' },
  icon: { fontSize: '20px' },
  title: { flex: 1, margin: 0, fontSize: '16px', color: '#333' },
  priority: { padding: '3px 10px', borderRadius: '12px', color: '#fff', fontSize: '12px', fontWeight: 'bold' },
  content: { color: '#666', fontSize: '14px', marginBottom: '12px', lineHeight: '1.5' },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  category: { fontSize: '12px', color: '#999', background: '#f0f0f0', padding: '3px 10px', borderRadius: '12px' },
  buttons: { display: 'flex', gap: '8px' },
  btnEdit: { background: '#2E5FA3', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' },
  btnDelete: { background: '#e74c3c', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }
};

export default NoteCard;
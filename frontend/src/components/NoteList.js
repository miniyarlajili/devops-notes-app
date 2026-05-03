import React from 'react';
import NoteCard from './NoteCard';

function NoteList({ notes, onDelete, onEdit }) {
  if (notes.length === 0) {
    return (
      <div style={styles.empty}>
        <p>📭 Aucune note trouvée</p>
      </div>
    );
  }

  return (
    <div>
      {notes.map(note => (
        <NoteCard
          key={note._id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

const styles = {
  empty: {
    textAlign: 'center',
    color: '#999',
    padding: '40px',
    fontSize: '18px'
  }
};

export default NoteList;
import React from 'react';
import CardComponent from './CardComponent';
// import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css';

const notes = [
    {
        noteTitle: "Trigonometry, Logarithms, and Sets",
        noteDate: "1:00 PM",
        noteContent: "Prof Rajeshwari Singh."
    },
    
];

const NotesParent = () => {
    return (
        <div className="page-content container note-has-grid">
            <div id="note-full-container" className="note-has-grid row" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {notes.map((note, index) => (
                    <CardComponent
                        key={index}
                        noteTitle={note.noteTitle}
                        noteDate={note.noteDate}
                        noteContent={note.noteContent}
                    />
                ))}
            </div>
        </div>
    );
};

export default NotesParent;

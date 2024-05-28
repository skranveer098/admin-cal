import React from 'react';
import './CardComponent.css'; // Assuming you save the CSS in a separate file

const CardComponent = ({ noteTitle, noteDate, noteContent }) => {
    return (
        <div className="col-md-4 single-note-item all-category">
            <div className="card card-body">
                <span className="side-stick"></span>
                <h5 className="note-title text-truncate w-75 mb-0" data-noteheading={noteTitle}>
                    {noteTitle} <i className="point fa fa-circle ml-1 font-10"></i>
                </h5>
                <p className="note-date font-12 text-muted">{noteDate}</p>
                <div className="note-content">
                    <p className="note-inner-content text-muted" data-notecontent={noteContent}>
                        {noteContent}
                    </p>
                </div>
                <div className="d-flex align-items-center"></div>
            </div>
        </div>
    );
};

export default CardComponent;

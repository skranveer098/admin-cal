import React from 'react'
import "./side_scroll.css"
import NotesParent from './NotesParent'

function side_scroll() {
  return (
<div className="scroll-bar" style={{ display: "flex", flexWrap: "wrap" }}>
  <NotesParent style={{display:"inline"}}></NotesParent>
  <NotesParent style={{display:"inline"}}></NotesParent>
  <NotesParent style={{display:"inline"}}></NotesParent>
  <NotesParent style={{display:"inline"}}></NotesParent>
  <NotesParent style={{display:"inline"}}></NotesParent>
  <NotesParent style={{display:"inline"}}></NotesParent>
  <NotesParent style={{display:"inline"}}></NotesParent>
  <NotesParent style={{display:"inline"}}></NotesParent>
  <NotesParent style={{display:"inline"}}></NotesParent>
  <NotesParent style={{display:"inline"}}></NotesParent>
  <NotesParent style={{display:"inline"}}></NotesParent>
  <NotesParent style={{display:"inline"}}></NotesParent>
  </div>
  )
}

export default side_scroll

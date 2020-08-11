import React from 'react';
import { Root } from './style';

const TextEditor = (props) => {
  
  // CKEditor depends on window and therefore it cannot be initialized server-side.
  // We show a basic textarea as a fallback.
  if (typeof window === 'undefined') {
    return (
      <textarea {...props} />
    );
  } else {
    // Cannot import at the beginning of the file, will crash with ReferenceError: window is not defined
    const CKEditor = require('@ckeditor/ckeditor5-react');
    const ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
    const editorConfiguration = {
      toolbar: [ 'heading', '|', 'bold', '|', 'undo', 'redo' ]
    };

    return (
      <Root> 
        <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        {...props}
        />
      </Root>
    );
  }
}

export default TextEditor;
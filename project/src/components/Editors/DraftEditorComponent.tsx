/* eslint-disable react/no-danger */
import { useState } from 'react';
import { Paper, Typography } from '@mui/material';

import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const DraftEditorComponent = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const [convertedContent, setConvertedContent] = useState<string>('');

  const convertContentToHTML = () => {
    const currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const createMarkup = (html: string) => ({
    __html: DOMPurify.sanitize(html),
  });

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        React-draft-wysiwyg based of Draft js
      </Typography>
      <Editor
        placeholder="Enter text here"
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <Typography variant="h6" gutterBottom>
        Preview:
      </Typography>
      <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}
      />
    </Paper>
  );
};

export default DraftEditorComponent;

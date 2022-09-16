/* eslint-disable react/no-danger */
/* eslint-disable arrow-body-style */
import { Paper, Typography } from '@mui/material';
import DOMPurify from 'dompurify';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type QuillState = {
  editorHtml: string;
};

// see: https://www.simplenextjs.com/posts/react-quill
const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    ['link'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const createMarkup = (html: string) => ({
  __html: DOMPurify.sanitize(html),
});

const QuillEditorComponent = () => {
  const [state, setState] = useState<QuillState>({
    editorHtml:
      '<p>Nested List</p><ul><li>List1</li><li class="ql-indent-1">Nested List</li></ul><p><br></p><p>Hello World. <strong>This is bold.</strong></p>',
  });

  const handleChange = (html: string) => {
    setState({ editorHtml: html });
  };
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        React Quill default Editor
      </Typography>
      <ReactQuill
        value={state.editorHtml}
        onChange={handleChange}
        theme="snow"
        modules={modules}
        placeholder="Enter text here"
      />
      <Typography variant="h6" gutterBottom>
        Preview:
      </Typography>
      <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(state.editorHtml)}
      />
    </Paper>
  );
};

export default QuillEditorComponent;

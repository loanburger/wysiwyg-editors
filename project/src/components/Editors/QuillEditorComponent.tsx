/* eslint-disable arrow-body-style */
import { Typography } from '@mui/material';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

const QuillEditorComponent = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        React Quill Wysiwyg Editor
      </Typography>
      <ReactQuill
        theme="snow"
        modules={modules}
        placeholder="Enter text here"
      />
    </>
  );
};

export default QuillEditorComponent;

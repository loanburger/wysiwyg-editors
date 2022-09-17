/* eslint-disable react/no-danger */
import {
  Grid,
  IconButton,
  Paper,
  ToggleButton,
  Typography,
} from '@mui/material';
import { useCallback, useState } from 'react';
import ReactQuill, { UnprivilegedEditor } from 'react-quill';
import DOMPurify from 'dompurify';

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { DeltaStatic, Sources } from 'quill';

type QuillState = {
  editorHtml: string;
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'list',
  'indent',
  `link`,
];

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 * Also see https://quilljs.com/docs/modules/toolbar/#handlers for handlers
 */
const modules = {
  toolbar: {
    container: '#toolbar',
  },
};

/*
 * CustomToolbar Component
 * Also see: https://quilljs.com/docs/modules/toolbar/
 */
const CustomToolbar = () => (
  <div id="toolbar">
    <Grid container direction="row">
      <select className="ql-header" defaultValue="">
        <option value="1" label="Heading 1" aria-label="Heading 1" />
        <option value="2" label="Heading 2" aria-label="Heading 2" />
        <option value="3" label="Heading 3" aria-label="Heading 3" />
        <option value="" label="Normal text" aria-label="Normal text" />
      </select>
      <IconButton className="ql-bold" aria-label="Bold">
        <FormatBoldIcon />
      </IconButton>
      <IconButton className="ql-italic" aria-label="Italic">
        <FormatItalicIcon />
      </IconButton>
      <IconButton className="ql-underline" aria-label="Underline">
        <FormatUnderlinedIcon />
      </IconButton>
      <span className="ql-formats">
        <ToggleButton
          className="ql-list"
          value="ordered"
          aria-label="ordered list"
        />
        <ToggleButton
          className="ql-list"
          value="bullet"
          aria-label="bullet list"
        />
        <ToggleButton
          className="ql-indent"
          value="-1"
          aria-label="indent left"
        />
        <ToggleButton
          className="ql-indent"
          value="+1"
          aria-label="indent right"
        />
        <ToggleButton className="ql-link" value="link" aria-label="Url" />
      </span>
    </Grid>
  </div>
);

const QuillEditorWithCustomToolbar = () => {
  const [state, setState] = useState<QuillState>({
    editorHtml:
      '<p>Nested List</p><ul><li>List1</li><li class="ql-indent-1">Nested List</li></ul><p><br></p><p>Hello World. <strong>This is bold.</strong></p>',
  });

  const handleChange = useCallback(
    (
      value: string,
      delta: DeltaStatic,
      source: Sources,
      editor: UnprivilegedEditor,
    ) => {
      console.log('handleChange delta:', delta);
      console.log('handleChange source:', source);
      console.log('handleChange editor:', editor);
      setState({ editorHtml: value });
    },
    [],
  );

  const createMarkup = (html: string) => ({
    __html: DOMPurify.sanitize(html),
  });

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        React Quill Editor with custom toolbar
      </Typography>
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          value={state.editorHtml}
          onChange={handleChange}
          placeholder="Enter your text here"
          modules={modules}
          formats={formats}
          theme="snow" // pass false to use minimal theme
        />
      </div>
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

export default QuillEditorWithCustomToolbar;

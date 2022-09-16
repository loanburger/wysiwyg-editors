import { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { IconButton, Stack } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';

import 'draft-js/dist/Draft.css';

type FormatCommand = 'BOLD' | 'ITALIC' | 'UNDERLINE';

const DraftEditorComponent = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  const onChange = (state: EditorState) => {
    setEditorState(state);
  };

  const handleKeyCommand = (command: string, state: EditorState) => {
    const newState = RichUtils.handleKeyCommand(state, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onBoldClick = (command: FormatCommand) => {
    console.log(`${command} clicked`);
    onChange(RichUtils.toggleInlineStyle(editorState, command));
  };

  return (
    <>
      <Stack direction="row" spacing={1}>
        <IconButton
          aria-label="Format bold"
          onClick={() => onBoldClick('BOLD')}
        >
          <FormatBoldIcon />
        </IconButton>
        <IconButton
          aria-label="Format italic"
          onClick={() => onBoldClick('ITALIC')}
        >
          <FormatItalicIcon />
        </IconButton>
        <IconButton
          aria-label="Format underline"
          onClick={() => onBoldClick('UNDERLINE')}
        >
          <FormatUnderlinedIcon />
        </IconButton>
      </Stack>

      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={setEditorState}
      />
    </>
  );
};

export default DraftEditorComponent;

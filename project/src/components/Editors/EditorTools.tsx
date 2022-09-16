import { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

import 'draft-js/dist/Draft.css';

const EditorToolbar = () => {
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

  return (
    <>
      <span>Editor below</span>
      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={setEditorState}
      />
    </>
  );
};

export default EditorToolbar;

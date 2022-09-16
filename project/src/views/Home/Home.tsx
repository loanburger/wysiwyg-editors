import Container from '@mui/material/Container';

import DraftEditorComponent from 'src/components/Editors/DraftEditorComponent';
import QuillEditorComponent from 'src/components/Editors/QuillEditorComponent';

const Home = (): JSX.Element => (
  <Container maxWidth="md">
    <DraftEditorComponent />
    <QuillEditorComponent />
  </Container>
);

export default Home;

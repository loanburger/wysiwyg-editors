import Container from '@mui/material/Container';

import DraftEditorComponent from 'src/components/Editors/DraftEditorComponent';

const Home = (): JSX.Element => (
  <Container maxWidth="md">
    <DraftEditorComponent />
  </Container>
);

export default Home;
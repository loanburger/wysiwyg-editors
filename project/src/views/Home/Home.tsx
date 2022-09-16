import { Container, Grid } from '@mui/material';

import DraftEditorComponent from 'src/components/Editors/DraftEditorComponent';
import QuillEditorComponent from 'src/components/Editors/QuillEditorComponent';
import QuillEditorWithCustomToolbar from 'src/components/Editors/QuillEditorWithCustomToolbar';

const Home = (): JSX.Element => (
  <Container>
    <Grid container direction="column">
      <Grid
        item
        marginBottom={2}
        padding={2}
        sx={{ backgroundColor: '#c3c3c3' }}
      >
        <DraftEditorComponent />
      </Grid>
      <Grid item marginBottom={2} padding={2} sx={{ background: '#c3c3c3' }}>
        <QuillEditorComponent />
      </Grid>
      <Grid item marginBottom={2} padding={2} sx={{ background: '#c3c3c3' }}>
        <QuillEditorWithCustomToolbar />
      </Grid>
    </Grid>
  </Container>
);

export default Home;

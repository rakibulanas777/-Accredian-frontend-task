
import { Container, Button, Typography } from '@mui/material';

const Home = ({ onReferClick }) => (
    <Container maxWidth="lg" style={{ textAlign: 'center', padding: '50px 0' }}>
        <Typography variant="h2" component="h1">
            Refer & Earn
        </Typography>
        <Button variant="contained" color="primary" onClick={onReferClick} style={{ marginTop: '20px' }}>
            Refer Now
        </Button>
    </Container>
);

export default Home;

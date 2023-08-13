import { Container, Grid, Paper, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const PricingPlan = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
    <Typography variant="h2" mb={6}>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</Typography>
      <Grid container spacing={3} sx={{pt:3}}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3, textAlign: 'center', color: 'text.secondary',background:"#fff" }}>
            <Typography variant="h5">Базовый</Typography>
            <List>
            <ListItem>hgfh</ListItem>
            <Typography>Feature 2</Typography>
            <Typography>Feature 3</Typography>
            <Typography variant="h6">$9.99/month</Typography>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3, textAlign: 'center', color: 'text.secondary'  ,background:"#fff" }}>
            <Typography variant="h5">Pro</Typography>
            <Typography variant="h6">$19.99/month</Typography>
            <Typography>Feature 1</Typography>
            <Typography>Feature 2</Typography>
            <Typography>Feature 3</Typography>
            <Typography>Feature 4</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3, textAlign: 'center', color: 'text.secondary',background:"#fff" }}>
            <Typography variant="h5">Premium</Typography>
            <Typography variant="h6">$29.99/month</Typography>
            <Typography>Feature 1</Typography>
            <Typography>Feature 2</Typography>
            <Typography>Feature 3</Typography>
            <Typography>Feature 4</Typography>
            <Typography>Feature 5</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PricingPlan;

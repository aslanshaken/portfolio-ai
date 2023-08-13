import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';

export default function WhoIsThis() {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h2" mb={3}>
            <span className="TextGradientPrimary">ДЛЯ КОГО</span> ЭТО ОБУЧЕНИЕ?
          </Typography>
        </Grid>
        <Grid item md>
          <List sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Box
                  component="span"
                  sx={{
                    width: 66,
                    height: 66,
                    borderRadius: '200px',
                    background: '#242524',
                    boxShadow: '-3px -2px 11px 0px rgba(109, 109, 109, 0.20), 2px 2px 12px 0px rgba(0, 0, 0, 0.34)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 43,
                      height: 43,
                      borderRadius: '50%',
                      background: theme.palette.gradient.primary,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EmailIcon />
                  </Box>
                </Box>
              </ListItemAvatar>
              <ListItemText
                primary="Новичкам"
                secondary={
                  <React.Fragment>
                    <Typography sx={{ display: 'inline', fontSize: '1.25rem' }} component="span">
                      Для тех, кто хочет освоить новую профессию, при этом с возможностью выбора работать на компанию
                      или на себя, оффлайн или онлайн. На курсе вы получите пошаговый план с нуля до получения первого
                      дохода.
                    </Typography>
                  </React.Fragment>
                }
                primaryTypographyProps={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                }}
              />
            </ListItem>

            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Box
                  component="span"
                  sx={{
                    width: 66,
                    height: 66,
                    borderRadius: '200px',
                    background: '#242524',
                    boxShadow: '-3px -2px 11px 0px rgba(109, 109, 109, 0.20), 2px 2px 12px 0px rgba(0, 0, 0, 0.34)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 43,
                      height: 43,
                      borderRadius: '50%',
                      background: theme.palette.gradient.primary,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EmailIcon />
                  </Box>
                </Box>
              </ListItemAvatar>
              <ListItemText
                primary="Фрилансерам, которые хотят иметь дополнительный доход"
                secondary={
                  <React.Fragment>
                    <Typography sx={{ display: 'inline', fontSize: '1.25rem' }} component="span">
                      Для тех, кто хочет получать стабильный доход и работать с постоянными клиентами из разных стран.
                    </Typography>
                  </React.Fragment>
                }
                primaryTypographyProps={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                }}
              />
            </ListItem>

            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Box
                  component="span"
                  sx={{
                    width: 66,
                    height: 66,
                    borderRadius: '200px',
                    background: '#242524',
                    boxShadow: '-3px -2px 11px 0px rgba(109, 109, 109, 0.20), 2px 2px 12px 0px rgba(0, 0, 0, 0.34)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 43,
                      height: 43,
                      borderRadius: '50%',
                      background: theme.palette.gradient.primary,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EmailIcon />
                  </Box>
                </Box>
              </ListItemAvatar>
              <ListItemText
                primary="Студентам, которые хотят быть финансово независимы"
                secondary={
                  <React.Fragment>
                    <Typography sx={{ display: 'inline', fontSize: '1.25rem' }} component="span">
                      Для тех, кто хочет быть финансово независимы от своих родителей, возможность поработать с
                      иностранными компаниями, до окончания учебы в унивестите уже иметь опыт в сфере финансов.
                    </Typography>
                  </React.Fragment>
                }
                primaryTypographyProps={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                }}
              />
            </ListItem>
          </List>
        </Grid>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            borderColor: '#5C5C5C',
            marginX: 1.5,
          }}
        />

        <Grid item md>
          <List sx={{}}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Box
                  component="span"
                  sx={{
                    width: 66,
                    height: 66,
                    borderRadius: '200px',
                    background: '#242524',
                    boxShadow: '-3px -2px 11px 0px rgba(109, 109, 109, 0.20), 2px 2px 12px 0px rgba(0, 0, 0, 0.34)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 43,
                      height: 43,
                      borderRadius: '50%',
                      background: theme.palette.gradient.primary,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EmailIcon />
                  </Box>
                </Box>
              </ListItemAvatar>
              <ListItemText
                primary="Новичкам"
                secondary={
                  <React.Fragment>
                    <Typography sx={{ display: 'inline', fontSize: '1.25rem' }} component="span">
                      Для тех, кто хочет освоить новую профессию, при этом с возможностью выбора работать на компанию
                      или на себя, оффлайн или онлайн. На курсе вы получите пошаговый план с нуля до получения первого
                      дохода.
                    </Typography>
                  </React.Fragment>
                }
                primaryTypographyProps={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                }}
              />
            </ListItem>

            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Box
                  component="span"
                  sx={{
                    width: 66,
                    height: 66,
                    borderRadius: '200px',
                    background: '#242524',
                    boxShadow: '-3px -2px 11px 0px rgba(109, 109, 109, 0.20), 2px 2px 12px 0px rgba(0, 0, 0, 0.34)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 43,
                      height: 43,
                      borderRadius: '50%',
                      background: theme.palette.gradient.primary,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EmailIcon />
                  </Box>
                </Box>
              </ListItemAvatar>
              <ListItemText
                primary="Фрилансерам, которые хотят иметь дополнительный доход"
                secondary={
                  <React.Fragment>
                    <Typography sx={{ display: 'inline', fontSize: '1.25rem' }} component="span">
                      Для тех, кто хочет получать стабильный доход и работать с постоянными клиентами из разных стран.
                    </Typography>
                  </React.Fragment>
                }
                primaryTypographyProps={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                }}
              />
            </ListItem>

            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Box
                  component="span"
                  sx={{
                    width: 66,
                    height: 66,
                    borderRadius: '200px',
                    background: '#242524',
                    boxShadow: '-3px -2px 11px 0px rgba(109, 109, 109, 0.20), 2px 2px 12px 0px rgba(0, 0, 0, 0.34)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 43,
                      height: 43,
                      borderRadius: '50%',
                      background: theme.palette.gradient.primary,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EmailIcon />
                  </Box>
                </Box>
              </ListItemAvatar>
              <ListItemText
                primary="Студентам, которые хотят быть финансово независимы"
                secondary={
                  <React.Fragment>
                    <Typography sx={{ display: 'inline', fontSize: '1.25rem' }} component="span">
                      Для тех, кто хочет быть финансово независимы от своих родителей, возможность поработать с
                      иностранными компаниями, до окончания учебы в унивестите уже иметь опыт в сфере финансов.
                    </Typography>
                  </React.Fragment>
                }
                primaryTypographyProps={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                }}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}

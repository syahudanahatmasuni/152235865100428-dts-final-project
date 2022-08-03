import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'common.black', color: 'grey.700'}}>
            
            <Container maxWidth="md" sx={{ py: 6, mt: 8}}>
            
            <center><img
            src={require("../assets/logo.png")}
            alt="logo"
            height={44.8}
            width={128}
          /></center>
          

                <Grid container spacing={4} sx={{ mb: 4, textAlign: 'left' }}>
                    <Grid item xs={6} md={3}>
                        <Stack spacing={'15px'}>
                            <Typography variant="caption" component="a" href="#">
                                Hubungi Kami
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                    <Stack spacing={'15px'}>
                            <Typography variant="caption" component="a" href="#">
                                Syarat & Kondisi
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                    <Stack spacing={'15px'}>
                            <Typography variant="caption" component="a" href="#">
                               Kebijakan Privasi
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                    <Stack spacing={'15px'}>
                            <Typography variant="caption" component="a" href="#">
                                Pengaturan Privasi
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
             

                <Typography variant="caption2" sx={{  float: 'left' }}> 
                Hak Cipta © 2022 Syahuda Nahatmasuni Hak cipta dilindungi oleh undang-undang. Dilarang menerbitkan, menyiarkan, menulis ulang, atau menyebarkan informasi dari situs ini tanpa meminta izin tertulis dari Goal (Indonesia)
                </Typography>
            </Container>
            
        
        </Box>
    )
}

export default Footer;
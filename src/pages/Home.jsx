import { Box, Button, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import { ArrowRight, List } from '@phosphor-icons/react';
import CC from '../assets/Card.png';
import LingKaran from '../assets/Lingkaran.png';
import MASTERCARD from '../assets/Mastercard_logo.png';
import PAYPAL from '../assets/Paypal_logo.png';
import VISA from '../assets/Visa_logo.png';
import Blob from '../assets/blob.svg';
import useResponsive from '../hooks/useResponsive';
function Header() {
    const isDesktop = useResponsive("up", "md");
    return <Grid container spacing={2}>
        <Grid item container xs={6} md={4}>
            <Stack direction="row" spacing={2} alignItems="center">
                {!isDesktop && <IconButton>
                    <List />
                </IconButton>
                }

                <Typography variant="h5">
                    OnCoin
                </Typography>
            </Stack>
        </Grid>
        {isDesktop && <Grid md={4} justifyContent="center" container>
            <Stack direction="row" alignItems="center" spacing={1}>
                <Button>Platform</Button>
                <Button>Feature</Button>
                <Button>Company</Button>
                <Button>Blog</Button>
                <Button>Contact us</Button>
            </Stack>
        </Grid>
        }

        <Grid item xs={6} md={4} container justifyContent="flex-end">
            <Stack alignItems="center" spacing={2} direction="row" container>
                <Button>Sign In</Button>
                <Button variant="contained" sx={{ borderRadius: 0 }}>Sign Up</Button>
            </Stack>
        </Grid>
    </Grid>
}

function HeroSection() {
    const leftSection = (
        <Grid sx={{
            flexGrow: 1
        }} items container md={6} xs={12} justifyContent="center" alignItems="center">
            <img src={LingKaran} style={{
                position: 'absolute',
                left: -60,
                opacity: 0.6,
                zIndex: 1
            }} />
            <Stack spacing={6} sx={{ zIndex: 10 }}>
                <Stack spacing={3}>
                    <Typography variant='h1' sx={{
                        lineHeight: 1.2,
                        fontWeight: 700,

                    }}>
                        Trades, Stocks <br /> earn bonus <br /> shares. Enjoy.
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={6}>
                        <Typography sx={{ fontSize: 20 }}>
                            Being in your control of funds is the <br /> same as owning life. we help you <br /> effectively manage your portfolio
                        </Typography>
                        <Box sx={{
                            p: 1,
                            bgColor: (theme) => theme.palette.common.black
                        }}>
                            <IconButton>
                                <ArrowRight />


                            </IconButton>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
            <Divider />
            <Stack direction="row" alignItems="center" spacing={4}>
                <img src={VISA} style={{ height: 30, filter: "saturate(0%" }} />
                <img src={MASTERCARD} style={{ height: 40, filter: "saturate(0%" }} />
                <img src={PAYPAL} style={{ height: 50, filter: "saturate(0%" }} />
            </Stack>
        </Grid>
    )

    const rightSection = (
        <Grid sx={{
            flexGrow: 1,
            position: 'relative'
        }} items container md={6} xs={12} justifyContent="center" alignItems="center">
            <img src={Blob} style={{
                position: "absolute",
                bottom: -100,
                left: '50%',
                transform: "translate(-50%, -30%)",
                width: '600px'
            }} />
            <Stack>
                <Box sx={{ transform: 'rotate3d(0,0,1,-40deg)' }}>
                    <img src={CC} style={{
                        height: '80%'
                    }} />
                </Box>
                <Box sx={{ transform: 'rotate3d(1,1,0.5,-60deg)' }}>
                    <img src={CC} style={{
                        height: '80%'
                    }} />
                </Box>
            </Stack>
        </Grid>
    )

    return (
        <Grid container sx={{ flexGrow: 1 }} spacing={{
            xs: 15, md: 2
        }}>
            {leftSection}
            {rightSection}
        </Grid>
    )
}
const Home = () => {
    return (
        <Box sx={{
            minHeight: "100vh",
            p: 4,
            bgColor: "#FDFAF0",
            display: "flex",
            flexDirection: "column",
            rowGap: 4
        }}>
            <Header />
            <HeroSection />
        </Box>
    )
}

export default Home

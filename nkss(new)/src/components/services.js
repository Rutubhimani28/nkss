import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import banner from "../components/asset/images/banner.png"
import start from "../components/asset/images/start.png"
import about from '../components/asset/images/about.png'

const services = () => {
    return (
        <Grid className='serviceWraper'>
            <Grid container >
                <Grid item xs={12} md={8} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }} textAlign={"center"}>
                    <div >
                        <Typography className='font' fontSize={{ sm: "40px", md: "80px" }} marginInlineStart={{ md: "80px" }} variant='h6'>Explore Our Services</Typography>
                        <button variant="contained" className='startBtn' >
                            <span style={{ marginTop: "4px" }}>  Get Started </span><ChevronRightIcon className='arrowicon' />
                        </button>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={banner} className='aboutimg' />

                </Grid>
            </Grid>

            <Grid container
                flexDirection={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }}
            >
                <Grid item xs={12} md={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={start} height={"100%"} className='aboutimg2' width={"100%"} />
                </Grid>
                <Grid item xs={12} md={8} textAlign={"center"} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }} >
                    <div>
                        <Typography className='font' fontSize={{ sm: "40px", md: "80px" }} marginInlineStart={{ md: "80px" }} variant='h6'>Explore Workshops</Typography>
                        <button variant="contained" className='startBtn' >
                            <span style={{ marginTop: "4px" }}>  Get Started </span><ChevronRightIcon className='arrowicon' />
                        </button>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default services

import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import logo from '../components/asset/images/GoA Logo.png'

const Client = () => {
    return (
        <Box py={5} mx={{ xs: 2, sm: 6, md: 8 }}>
            <Typography className='font' fontSize={{ sm: "40px", md: "80px" }} textAlign={"center"} variant='h6'> Our Clients</Typography>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }} justifyContent={"center"}>
                    <Grid item xs={12} sm={4} md={2.3} py={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <div className='clientBox'></div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2.3} py={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <div className='clientBox'></div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2.3} py={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <div className='clientBox'><img src={logo} style={{ marginLeft: "-11px" }} /></div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2.3} py={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <div className='clientBox'></div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2.3} py={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <div className='clientBox'></div>
                    </Grid>

                </Grid>
            </div>
        </Box>
    )
}

export default Client

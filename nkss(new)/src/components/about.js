import React from 'react'
import about from '../components/asset/images/about.png'
import { Box, Grid, Typography } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import logo from '../components/asset/images/Logo.png'
import goalogo from '../components/asset/images/GoA Logo.png'



const About = () => {
    return (
        <Grid className='aboutWraper'>
            <Box bgcolor={"#f9d4ff"} mx={{ xs: 2, sm: 6, md: 8 }} p={4} borderRadius={"86px"} mb={{ sm: 6, md: 20 }} position={"relative"} >
                <Grid container columnSpacing={{ xs: 1 }} >
                    <Grid item xs={12} md={4}>
                        <img src={about} className='servicesImg' />
                    </Grid>
                    <Grid item xs={12} md={8} textAlign={"center"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography variant='h4' className='font' color={"#A805CD"} fontSize={{ sm: "40px", md: "80px" }}>About Us</Typography>
                        <Typography variant='h6' className='khula' color={"#4E4D78"} fontSize={{ sm: "20px", md: "30px" }}>Nkss Digital Services helps you elevate your online presence with expert management, development, and design solutions. Craft captivating experiences, optimize your processes, and achieve tangible results for all your digital goals.</Typography>
                        <button variant="contained" className='seemore' >
                            <span> See more</span><ChevronRightIcon className='arrowicon1' />
                        </button>
                    </Grid>
                </Grid>
            </Box>
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
                            <div className='clientBox'><img src={goalogo} style={{ marginLeft: "-11px" }} /></div>
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
            <Grid sx={{ padding: { sm: "30px 0", md: "60px 0" } }}>
                <Box className='footer' mx={{ xs: 2, sm: 4, md: 8 }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }} justifyContent={{ sm: "left", md: "center" }}>
                        <Grid item sm={12} md={6} lg={3} display={"flex"} justifyContent={{ sm: "left", md: "center" }}>
                            <div >
                                <Typography variant='h6' className='font' color={"#a805cd"} fontSize={"35px"}>Quick Links</Typography>
                                <ul>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Home</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">About</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Our Services</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Digital Bootcamp</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Contact Us</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={6} lg={3} display={"flex"} justifyContent={{ sm: "left", md: "center" }}>
                            <div >
                                <Typography variant='h6' className='font' color={"#a805cd"} fontSize={"35px"}>Our Services</Typography>
                                <ul>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Ui/Ux Designing</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Softwer Devlopment</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Website Devlopment</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Mobile-App Devlopment</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Social Media Management</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Digital Marketing</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Graphic Desigining</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Video Editing</li>
                                </ul>

                            </div>
                        </Grid>
                        <Grid item sm={12} md={6} lg={3} display={"flex"} justifyContent={{ sm: "left", md: "center" }}>
                            <div >
                                <Typography variant='h6' className='font' color={"#a805cd"} fontSize={"35px"}>Digital Bootcamp</Typography>
                                <ul>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Ui/Ux Designing</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Full-Stack Devlopment</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">MERN-Stack Devlopment</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Mobile-App Devlopment</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">PHP/Laravel</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Advance Devlopment</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Basic Devlopment</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Digital Marketing</li>
                                    <li style={{ fontSize: "20px", color: "#4e4d78" }} className="khula">Graphic Desigining</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={6} lg={3} display={"flex"} justifyContent={"center"}>
                            <div >
                                <img src={logo} height={"200px"} width={"200px"} />
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default About

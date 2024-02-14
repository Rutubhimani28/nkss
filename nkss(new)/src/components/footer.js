import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import logo from '../components/asset/images/Logo.png'

const Footer = () => {
    return (
        <div style={{ padding: "60px 0" }}>
            <Box className='footer' mx={{ xs: 2, sm: 4, md: 8 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }} justifyContent={"center"}>
                    <Grid item sm={12} md={6} lg={3} display={"flex"} justifyContent={"center"}>
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
                    <Grid item sm={12} md={6} lg={3} display={"flex"} justifyContent={"center"}>
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
                    <Grid item sm={12} md={6} lg={3} display={"flex"} justifyContent={"center"}>
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
        </div>
    )
}

export default Footer

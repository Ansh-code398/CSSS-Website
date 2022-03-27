import React, { useRef, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { AddCircleRounded } from '@mui/icons-material';

export default function Contact({ color, bgColor }) {
    const username = useRef();
    const message = useRef();
    const email = useRef();
    const subject = useRef();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            alert('This feature is not not done yet')
        }
        catch (err) {
            console.log(err);
        }
    };
    return (
            <Container component="main" maxWidth="xs" sx={{color: color, borderRadius: '10px', marginTop: '500px'}}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <AddCircleRounded />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Contact Us
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="name"
                                    name="Name"
                                    required
                                    fullWidth
                                    autoFocus
                                    placeholder='Name'
                                    inputRef={username}
                                    sx={{
                                        background: 'white',
                                        color: color,
                                        borderRadius: '4px',
                                        '&:placeholder': {
                                            color: '#000',
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="email"
                                    placeholder='example@example.com'
                                    type="text"
                                    autoComplete="email"
                                    inputRef={email}
                                    sx={{
                                        background: 'white',
                                        color: color,
                                        borderRadius: '4px',
                                        '&:placeholder': {
                                            color: '#000',
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="Subject"
                                    placeholder="Subject"
                                    type="text"
                                    id="Subject"
                                    autoComplete="subject"
                                    inputRef={subject}
                                    sx={{
                                        background: 'white',
                                        color: color,
                                        borderRadius: '4px',
                                        '&:placeholder': {
                                            color: '#000',
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    multiline
                                    maxRows={5}
                                    minRows={5}
                                    fullWidth
                                    id="Msg"
                                    placeholder="Message"
                                    name="Message"
                                    inputRef={message}
                                    sx={{
                                        background: 'white',
                                        color: color,
                                        borderRadius: '4px',
                                        '&:placeholder': {
                                            color: '#000',
                                        }
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Container>
    );
}
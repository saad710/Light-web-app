import { Button, TextField, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { key } from '../../../apiKey';
import AppBarDrawer from '../AppBarDrawer';
import { useStyles } from './ProfileStyle';


const Profile = () => {
    const classes = useStyles();
    const [profileInfo, setProfileInfo] = useState({})
    const [disable, setDisable] = useState(true)
    const [updateClient, setUpdateClient] = useState({})
    const [oldPassword, setOldPassword] = useState({})
    const [newPassword, setNewPassword] = useState({})
    const [confirmPassword, setConfirmPassword] = useState({})
    // const [updateImage, setUpdateImage] = useState('')
    const [file, setFile] = useState(null);

    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
   
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true)
    // console.log(profileInfo);

    const handleBlur = (e) => {
        const newProfile = { ...profileInfo }
        newProfile[e.target.name] = e.target.value
        setProfileInfo(newProfile)
    }
    const handleOldPasswordBlur = (e) => {
        let oldPass ={...oldPassword}
        console.log(oldPass);
        oldPass[e.target.name] = e.target.value
        setOldPassword(oldPass);
    }
    const handleNewPasswordBlur = (e) => {
        const newPass ={...newPassword}
        console.log(newPass);
        newPass[e.target.name] = e.target.value
        
        setNewPassword(newPass)
        
    }

    const handleConfirmPasswordBlur = (e) => {
        const confirmPass ={...confirmPassword}
        console.log(confirmPass);
        confirmPass[e.target.name] = e.target.value
        
        setConfirmPassword(confirmPass)
        
    }

    // const uploadFile = ({ target: { files } }) =>{
    //     console.log( files[0] )
    //     let data = new FormData();
    //     data.append( 'file', files[0] )}
    const handleImageBlur = (e) => {
        // const newImage ={...updateImage}
        // // let newFile = e.target.files;

       
        // newImage[e.target.name] = e.target.files[0];
        // console.log(newImage);
        
        // [e.target.name] = e.target.files[0];
        // let data = new FormData();
        // data.append('file',e.target.files[0]);
       
        // setUpdateImage(...data);

        const newImage ={...file}
        // newImage[e.target.name] = e.target.files[0].name;
         newImage[e.target.name] = e.target.files[0];
        //  const URL = "http://127.0.0.1:8000/uploads/client_pro_pic";
        //  const putImage = URL.(newImage);

        // setFile(e.target.files[0]);
        // const newFile = {...file}
        // newFile[e.target.files] = e.target.File;
        // console.log(newFile);
        // (e.target.files[0]);
        // setFile(e.target.newImage);
        setFile(newImage);
        // console.log(e.target.files[0]);
       
    }
    // console.log(localStorage);
    const updateForm = (e) => {
        e.preventDefault();
        // console.log(profileInfo);
        const id = updateClient.id;
        const image = {...file}
        console.log(image);
        let data = new FormData(file.current);
        data.append('profile_picture', file);

        // const data = new FormData() 
        // data.append('file', file)
      
        const clientUpdate = { ...profileInfo, data};
        // const clientInfoUpdate = {...profileInfo};
        // const clientImageUpdate = {...file};
        // setupdateImage.append = (`http://127.0.0.1:8000/uploads/client_pro_pic/${localStorage.client.profile_picture}`)
        console.log(clientUpdate);
      
      
        
        Axios.put(`${key}client-update/${id}`,clientUpdate,{
            headers:{
                contentType: 'multipart/form-data'
            }
        })
            // "headers":"application/x-www-form-urlencoded"
        
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
    
    // fetch(`http://127.0.0.1:8000/api/client-update/${id}`, {
    //     method: 'PUT',
    //     headers: {
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(clientUpdate)
    // })
    //     .then(res => res.json())
    //     .then(val => {
    //         console.log(val);
    //     })

    }
    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'darwin')
        setLoading(true)
        const res = await fetch(
          '	https://api.cloudinary.com/v1_1/dihifeicm/image/upload',
          {
            method: 'POST',
            body: data
          }
        )
        const file = await res.json()
    
        setImage(file.secure_url)
        setLoading(false)
      }


    const updatePasswordInfo = (e) => {
        e.preventDefault();
        // console.log(profileInfo);
        const client_id = updateClient.id;
       
        const clientUpdatePassword = {...oldPassword, ...newPassword, ...confirmPassword};
        console.log(clientUpdatePassword);
        Axios.put(`${key}client-pass-change/${client_id}`,clientUpdatePassword)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    // const updateImageInfo = (e) => {
    //     e.preventDefault();
    //     // console.log(profileInfo);
    //     const id = updateClient.id;
    //     const clientUpdateImage = {...updateImage};
    //     console.log(clientUpdateImage);
    //     Axios.put(`${key}client-update/${id}`,clientUpdateImage)
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }

    useEffect(()=>{
        Axios.get(`${key}clients`)
        .then((response)=>{
            console.log(response.data);
            const clients = response.data;
            const singleClient = clients.filter(client=> client.email === localStorage.client);
            setUpdateClient(singleClient[0]);
            console.log(singleClient);
        })
    },[])

    
   console.log(updateClient.profile_picture);
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="sm" className={classes.container}>
                    <Grid container spacing={3}>
                        
                        <div className={classes.paper}>
                        <Form  onSubmit={updateForm}  encType="multipart/form-data">
                            <div style={{margin: ' 0 auto'}}>
                                <img className="pt-2" style={{position:'relative'}} width="20%" src={`http://127.0.0.1:8000/uploads/client_pro_pic/${updateClient.profile_picture}`} alt="" />
                                <Form.Group>
                                    <Form.File   id="profile_picture" label="Change your picture" style={{color:"black"}} name="profile_picture" onChange={handleImageBlur} />
                                </Form.Group>
                                {/* <img style={{ position: 'absolute', top: '28.5%', left: '57.5%' }} onClick={handleShow}  src={editIcon} alt=""/> */}
                                {/* <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Upload Image</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group>
                                                <Form.File id="exampleFormControlFile1" label="Example file input" onBlur={handleImageBlur} name="profile_picture"/>
                                            </Form.Group>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                        Close
                                        </Button>
                                        <Button variant="primary" onClick={updateForm}>
                                        Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal> */}
                             </div>
                            <Typography style={{color: '#2d2d2d', marginTop:'1rem'}} component="body2" variant="body2">
                                Personal Details
                            </Typography>
                            <EditIcon onClick={() => setDisable(!disable)} fontSize="small" style={{ marginLeft: '32.5rem',marginTop:'-1.5rem', color: '#2d2d2d' }} />
                            {/* <form onSubmit={updateForm}  method="put" className={classes.form} noValidate style={{color: '#2d2d2d'}}> */}
                                <div style={{ marginBottom: "1rem"}}>
                                    <label htmlFor="" style={{color:"black"}}> Name </label>
                                    <TextField
                                        disabled={disable ? disable : '' }
                                        style={{ borderRadius:'4px' }}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="name"
                                        name="name"
                                        autoComplete="name"

                                        autoFocus
                                        placeholder="Marie Winter"
                                        onBlur={handleBlur}
                                    />
                                    
                                </div>
                                <div className="pb-2">
                                    <label htmlFor="" style={{color:"black"}}> Email </label>
                                    <TextField
                                        // disabled={disable ? disable : ''}
                                        disabled
                                        style={{borderRadius: '4px' }}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        placeholder="user@email.com"
                                        // onBlur={handleBlur}
                                    />
                                </div>
                                
                                <Button
                                    style={{padding: '0.6rem 0', margin: '1rem 0'}}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={updateForm}
                                >
                                    SAVE
                                </Button>
                               
                                </Form>

                            <form onSubmit={updatePasswordInfo} method="put">
                                <div className="pb-2">
                                    <label htmlFor="" style={{color:"black"}}> Old Password </label>
                                    <TextField
                                        // disabled={disable ? disable : ''}
                                        style={{borderRadius: '4px' }}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="password"
                                        name="password"
                                        autoComplete="password"
                                        autoFocus
                                        placeholder="***********"
                                        // onBlur={handleBlur}
                                        onBlur={handleOldPasswordBlur}
                                        type="password"
                                    />
                                </div>
                                <div className="pb-2">
                                    <label htmlFor="" style={{color:"black"}}> New password </label>
                                    <TextField
                                        // disabled={disable ? disable : ''}
                                        style={{borderRadius: '4px' }}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="new_password"
                                        name="new_password"
                                        autoComplete="new_password"  
                                        autoFocus
                                        placeholder="***********"
                                        onBlur={handleNewPasswordBlur}
                                        type="password"
                                    />
                                </div>
                                <div className="pb-2">
                                    <label htmlFor="" style={{color:"black"}}> Retype New Password </label>
                                    <TextField
                                        // disabled={disable ? disable : ''}
                                        style={{borderRadius: '4px' }}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="confirm_password"
                                        name="confirm_password"
                                        autoComplete="confirm_password"
                                        autoFocus
                                        placeholder="***********"
                                        // onBlur={handleBlur}
                                        onBlur={handleConfirmPasswordBlur}
                                        type="password"
                                    />
                                </div>
                                <Button
                                    style={{ padding: '0.6rem 0', margin: '1rem 0' }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={updatePasswordInfo}
                                   
                                >
                                    CHANGE PASSWORD
                                </Button>
                            </form>

                            


                            {/* <Typography component="body2" variant="body2">
                                Change Password
                                </Typography>
                            <EditIcon fontSize="small" style={{ marginLeft: '24.5rem' }} />
                            <div className="mt-3">
                                <label htmlFor=""> Enter your old password </label>
                                <TextField
                                    disabled={disable ? disable : ''}
                                    style={{ borderRadius: '4px' }}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="oldPass"
                                    type="password"
                                    id="oldPass"
                                    autoComplete="current-password"
                                    placeholder="***********"
                                    onBlur={handleBlur}
                                />
                            </div>

                            <div className="mt-3">
                                <label htmlFor=""> Enter new password </label>
                                <TextField
                                    disabled={disable ? disable : ''}
                                    style={{ borderRadius: '4px' }}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="newPass"
                                    type="password"
                                    id="newPass"
                                    autoComplete="current-password"
                                    placeholder="***********"
                                    onBlur={handleBlur}
                                />
                            </div>

                            <div className="mt-3">
                                <label htmlFor=""> Confrim password </label>
                                <TextField
                                    disabled={disable ? disable : ''}
                                    style={{ borderRadius: '4px' }}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="newPass"
                                    type="password"
                                    id="newPass"
                                    autoComplete="current-password"
                                    placeholder="***********"
                                    onBlur={handleBlur}
                                />
                            </div> */}
                        </div>
                    </Grid>

                </Container>
            </main>
        </div>
    );
};

export default Profile;
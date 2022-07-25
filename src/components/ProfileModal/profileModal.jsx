import {Modal, useMantineTheme} from '@mantine/core'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { uploadImage } from '../../actions/uploadAction';
import { updateUser } from '../../actions/userAction';

function ProfileModal({modalOpened, setModalOpened, data}) {
    const theme = useMantineTheme();

    const {password, ...other} = data;
    const [formData, setFormData] = useState(other);
    const [profileImage, setProfileImage] = useState(null)
    const [coverImage, setCoverImage] = useState(null)
    const dispatch = useDispatch()
    const params = useParams()
    const {user} = useSelector((state)=> state.authReducer.authData)

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            event.target.name === 'profileImage'
            ? setProfileImage(img)
            : setCoverImage(img)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let userData = formData;
        if (profileImage) {
            const data = new FormData();
            const fileNmae = Date.now() + profileImage.name;
            data.append("name", fileNmae);
            data.append("file", profileImage);
            userData.profilePicture = fileNmae;
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
        }
        if (coverImage) {
            const data = new FormData();
            const fileNmae = Date.now() + coverImage.name;
            data.append("name", fileNmae);
            data.append("file", coverImage);
            userData.coverPicture = fileNmae;
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
        }
        dispatch(updateUser(params.id, userData))
        setModalOpened(false)
    }

    return (
        <Modal
        overlayColor={theme.colorScheme === 'dark' 
        ? theme.colors.dark[9]
        : theme.colors.gray[2]}
        overlayOpacity = {0.55}
        overlayBlur = {3}
        size = '55%'
        opened = {modalOpened}
        onClose={()=>setModalOpened(false)}
        >
            <form className='infoForm'>
                <h3>Your Info</h3>
                <div>
                    <input type="text" className="infoInput" 
                    placeholder='First Name' name='firstname'
                    onChange={handleChange}
                    value = {formData.firstname}
                    />
                    <input type="text" className="infoInput" 
                    placeholder='Last Name' name='lastname'
                    onChange={handleChange}
                    value = {formData.lastname}
                    />
                </div>
                <div>
                    <input type="text" className="infoInput" 
                    placeholder='Works as..' name='worksAs'
                    onChange={handleChange}
                    value = {formData.worksAs}
                    />
                    <input type="text" className="infoInput" 
                    placeholder='Works at..' name='worksAt'
                    onChange={handleChange}
                    value = {formData.worksAt}
                    />
                </div>
                <div>
                    <input type="text" className="infoInput" 
                    placeholder='Lives in..' name='livesIn'
                    onChange={handleChange}
                    value = {formData.livesIn}
                    />
                
                    <input type="text" className="infoInput" 
                    placeholder='Status..' name='relationship'
                    onChange={handleChange}
                    value = {formData.relationship}
                    />
                </div>

                <div>
                    <label>Profile Picture</label>
                    <input type="file" name='profileImage' onChange={onImageChange}/>

                    <label>Cover Picture</label>
                    <input type="file" name='coverImage' onChange={onImageChange}/>
                </div>

                <button className="button info-button" onClick={handleSubmit}>Update</button>
            </form>
        </Modal>
    );
}

export default ProfileModal
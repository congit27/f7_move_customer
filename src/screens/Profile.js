import React, { useState } from 'react';
import ProfileInfo from './profileInformationPage/ProfileInfo';
import EditProfile from './editProfilePage/EditProfile';

const Profile = ({ navigation }) => {
    const [showProfPage, setShowProfPage] = useState(true);
    const [showEditPage, setShowEditPage] = useState(false);

    const editBackToInfo = () => {
        setShowEditPage(false);
        setShowProfPage(true);
    };

    return (
        <>
            {showProfPage && <ProfileInfo setShowProfPage={setShowProfPage} setShowEditPage={setShowEditPage} />}
            {showEditPage && <EditProfile editBackToInfo={editBackToInfo} />}
        </>
    );
};

export default Profile;

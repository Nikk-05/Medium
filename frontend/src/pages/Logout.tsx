import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../atoms/userStateAtom';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const setUserState = useSetRecoilState(userState);
    const navigate = useNavigate();

    useEffect(() => {
        // Clear the user state
        setUserState('');
        // Remove the access token
        localStorage.removeItem('access_token');
        // Redirect to the intro page
        navigate('/');
    }, [setUserState, navigate]);

    // Return null since this is just a functional component
    return null;
};

export default Logout;

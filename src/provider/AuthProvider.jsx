import { createUserWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const userLogin = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authData = { userLogin };

    return (
        <AuthContext.Provider value={authData}>
            { children }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;
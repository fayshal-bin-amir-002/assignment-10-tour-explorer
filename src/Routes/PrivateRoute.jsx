import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    const location = useLocation();

    if(!user) {
        return <Navigate to="/login" state={location?.pathname}></Navigate>
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;
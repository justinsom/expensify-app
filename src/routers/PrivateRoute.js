import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';


export const PrivateRoute = ({ 
    isAuthenticated, 
    component: Component,
    ...rest                 // rest is variable for all props not individually destructured
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid       // set to fals if undefined
});

export default connect(mapStateToProps)(PrivateRoute);
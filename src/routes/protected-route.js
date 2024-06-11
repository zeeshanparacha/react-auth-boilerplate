import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component }) => {
  // this is internal route validation for making sure token exists.
  // eventually we need to validate token on each request from axios interceptor to prevent any unauthorized access.
  const token = localStorage.getItem('token');
  return token ? Component : <Navigate to="/" />;
};

export default ProtectedRoute;
import React, { useEffect } from 'react';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../Links/NavigationBar';
import { placesInIndia } from '../Links/PlacesInIndia';
import './Dashboard.css';

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      {isAuthenticated ? (
        <div className='hi'>
          <NavigationBar />
          <div className='n1'>
            <div className='n2'>
              welcome to SkyLine Towers
            </div>
          </div>
        </div>
      ) : (
        <p>Redirecting...</p>
      )}
    </div>
  );
};

export default Dashboard;

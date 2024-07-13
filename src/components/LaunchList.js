// src/components/LaunchList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLaunches } from '../actions/launchActions';
import LaunchItem from './LaunchItem';

const LaunchList = () => {
  const dispatch = useDispatch();
  const launches = useSelector((state) => state.launches.launches);

  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">SpaceX Launches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))}
      </div>
    </div>
  );
};

export default LaunchList;

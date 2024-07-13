// src/components/LaunchItem.js
import React from 'react';

const LaunchItem = ({ launch }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <img src={launch.links.mission_patch} alt={launch.mission_name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-semibold">{launch.mission_name}</h2>
      <p className="text-gray-600">{new Date(launch.launch_date_local).toLocaleDateString()}</p>
      <p className="text-gray-600">{launch.rocket.rocket_name}</p>
      <p className="text-gray-600">{launch.launch_site.site_name}</p>
    </div>
  );
};

export default LaunchItem;

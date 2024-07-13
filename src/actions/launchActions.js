// src/actions/launchActions.js
import axios from 'axios';

export const fetchLaunches = (query = '', year = '', status = '') => async (dispatch) => {
  const url = 'https://api.spacexdata.com/v3/launches';
  const response = await axios.get(url);
  
  let filteredLaunches = response.data;

  // Filter by mission name
  if (query) {
    filteredLaunches = filteredLaunches.filter(launch => 
      launch.mission_name.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Filter by launch year
  if (year) {
    filteredLaunches = filteredLaunches.filter(launch => 
      new Date(launch.launch_date_local).getFullYear().toString() === year
    );
  }

  // Filter by launch status
  if (status) {
    const isSuccess = status === 'success';
    filteredLaunches = filteredLaunches.filter(launch => 
      launch.launch_success === isSuccess
    );
  }

  dispatch({ type: 'FETCH_LAUNCHES', payload: filteredLaunches });
};

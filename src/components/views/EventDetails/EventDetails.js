import React from 'react';
import styles from './EventDetails.module.scss';
import { useParams } from 'react-router-dom';

function EventDetails(){

  let { id } = useParams();
  return(
    <div className = {styles.component}>
      <h2>EventDetails view</h2>
      <span>Event Id: { id } </span>
    </div>
  );

}

export default EventDetails;

import React from 'react';
import styles from './Booking.module.scss';
import { useParams } from 'react-router-dom';

function Booking(){

  let { id } = useParams();
  return(
    <div className = {styles.component}>
      <h2>Booking view</h2>
      <span>Booking Id: { id }</span>
    </div>
  );
}
export default Booking;

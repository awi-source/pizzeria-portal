import React from 'react';
import styles from './OrderDetails.module.scss';
import { useParams } from 'react-router-dom';

function OrderDetails(){

  let { id } = useParams();
  return(
    <div className = {styles.component}>
      <h2>OrderDetails view</h2>
      <span>Order Id: { id }</span>
    </div>
  );
}

export default OrderDetails;

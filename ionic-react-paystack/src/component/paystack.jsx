import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonLabel, IonContent, IonItem, IonInput, IonButton } from '@ionic/react';
import PaystackPop from '@paystack/inline-js';
import { useIonAlert } from '@ionic/react';

import '../scss/paystack.scss'

export const Paystack = ({ userEmail, userName, amount, onSuccess, onCancel, onClose }) => {
  const handlePayment = () => {
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: 'c36686f9f7dbdac054603',
      email: userEmail,
      amount: amount * 100, // Convert amount to kobo (100 kobo = 1 naira)
      description: 'Payment for goods', // Add your description here
      metadata: {
        custom_fields: [
          {
            display_name: 'Name',
            variable_name: 'name',
            value: userName,
          },
        ],
      },
      onSuccess,
      onCancel,
      onClose,
    });
  };

  return (
    <IonButton className="custom-button" expand="block" onClick={handlePayment}>Pay Now</IonButton>
  );
};
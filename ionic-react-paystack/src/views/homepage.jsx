import { IonContent, IonHeader, IonInput, IonItem, IonLabel, IonTitle, IonToolbar, setupIonicReact, useIonAlert } from "@ionic/react"
import { Paystack } from "../component/paystack"
import { useState } from "react";

setupIonicReact()

export function homepage (){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState(0);
    const [presentAlert] = useIonAlert();
    
    const handleSuccess = (transaction) => {
        // Payment complete! You can handle the success here.
        presentAlert({
          header: 'Success!',
          subHeader: 'Payment Successful',
          message: `Transaction Reference Id: ${transaction.reference}`,
          buttons: ['OK'],
        });
      };
    
      const handleCancel = () => {
        presentAlert({
          header: 'Failed!',
          subHeader: 'Payment Canceled',
          message: 'You have canceled the payment process',
          buttons: ['OK'],
        });
      };
    
      const handleClose = () => {
        presentAlert({
          header: 'Network Error',
          subHeader: 'Connection Failed',
          message: 'Please connect to the internet to continue the process',
          buttons: ['OK'],
        });
      };


    return (
        <>
        <IonHeader>
          <IonToolbar>
            <IonTitle className="ion-text-center">Pay Stack</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="gb_white" fullscreen>
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput type="text" value={name} onIonChange={(e) => setName(e.detail.value)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Amount</IonLabel>
            <IonInput type="number" value={amount} onIonChange={(e) => setAmount(e.detail.value)}></IonInput>
          </IonItem>
          <Paystack userEmail={email} userName={name} amount={amount} onSuccess={handleSuccess} onCancel={handleCancel} onClose={handleClose} />
        </IonContent>
      </>
    )
}
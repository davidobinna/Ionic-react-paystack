import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'
import './global.scss';
import { IonApp } from '@ionic/react';
import './theme/variable.scss';
import { MyRouter } from './router/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
   <IonApp>
        <MyRouter />
   </IonApp>

)

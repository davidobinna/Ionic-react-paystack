# Ionic-react-paystack
An open Source Ionic and React PayStack checkout page: integrate paystack payment payment into your hybrid app.



---

This documentation provides instructions for setting up and using the Paystack payment system in your React Vite Ionic application.

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

## Dependencies

The following dependencies are required for integrating the Paystack payment system:

- **@capacitor/android**: "^5.0.4"
- **@capacitor/app**: "^5.0.2"
- **@capacitor/cli**: "^5.0.4"
- **@capacitor/core**: "^5.0.4"
- **@capacitor/geolocation**: "^5.0.2"
- **@capacitor/haptics**: "^5.0.2"
- **@capacitor/ios**: "^5.0.4"
- **@capacitor/keyboard**: "^5.0.2"
- **@capacitor/status-bar**: "^5.0.2"
- **@ionic/react**: "^6.0.0"
- **@ionic/react-router**: "^7.4.2"
- **@paystack/inline-js**: "^2.13.0"
- **axios**: "^1.4.0"
- **node-sass**: "^9.0.0"
- **react**: "^18.2.0"
- **react-dom**: "^18.2.0"
- **react-router-dom**: "^5.3.4"
- **sass**: "^1.62.1"

## Usage

1. Add your Paystack API key to the appropriate configuration file.
2. Implement the necessary UI components for collecting user information and triggering payments.
3. Utilize the `@paystack/inline-js` library to initiate payment transactions.
4. Handle payment success and failure scenarios appropriately.
5. Test the payment flow thoroughly in development and staging environments.

## Commands
- **Initialization**: To set up capacitor, run npx cap init and npx cap sync, npx cap copy, npx cap open android or npx cap open xcode 
- **Development**: To start the development server, run `npm run dev`.
- **View on Android**: To view the application on an Android device or emulator, run `npm run android`.
- **View on iOS**: To view the application on an iOS simulator or device, run `npm run ios`.

## Support

For any issues or inquiries regarding the Paystack payment system integration, please contact me at info@davidobi.com.

---

Feel free to customize this documentation further to suit your specific requirements and provide more detailed instructions as needed.

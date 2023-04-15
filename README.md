# SSO Code Generator

This Node.js module allows you to generate Single Sign-On (SSO) codes for a given contact ID, expiration time, and encryption key. The SSO code is a secure token that can be used to authenticate users without requiring them to enter their credentials each time they access a resource.

## Prerequisites
Before using this module, you need to have Node.js installed on your system.

## Installation
To install this module, simply run:

```javascript
npm install sso-code-generator
```

## Usage
To use this application, follow these steps:
1. Clone this repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Install the project dependencies by running `npm install`.
4. Run the application by executing the following command in the terminal:

   ```javascript
   npm start <contactId>
   ```

   Replace `<contactId>` with the ID of the contact for which you want to create an SSO code, for example your orgId. The application will create an SSO code that expires 24 hours after it is created, using a secret encryption key generated from the GUID generated in the `getContextKey()` function. It will then log the SSO code to the console.

## Functions
This module exposes the following functions:

### `encodeContext(context: DecodedContext, secretKey: Buffer): string`
This function takes a decoded context object and a secret key, and returns a Base64-encoded, AES-256-encrypted string.

### `createSSOCode(contactId: string, expiresIn: number, SSO_ENCRYPTION_KEY: Buffer): string`
This function takes a contact ID, an expiration time in seconds, and a secret encryption key, and returns a string representing an SSO code that can be used to authenticate the contact.

### `run(): void`
This function runs the application. It generates a context key using the `getContextKey()` function, encodes it in Base64 using the `encode64()` function, and creates an SSO code using the `createSSOCode()` function. The SSO code is then logged to the console.

### `Important`
This program returns two different keys
- Context key with encode 64 should be sent to support and must be added to license metadata.
- It is the SSO  key and should be save in a safe place.
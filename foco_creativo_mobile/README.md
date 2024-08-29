# Foco Criativo Mobile

**Foco Criativo Mobile** is an application developed with React Native as part of a test for the company Foco Criativo. The app allows users to log in with Google and stores information in PocketBase, which acts as the backend for the application.

## Technologies Used

- **React Native**: Framework used for mobile development.
- **PocketBase**: Backend used for authentication and data storage.

## Prerequisites

Before running the project, make sure the backend is configured and running. Ensure that you follow the steps below correctly.

### Backend Link

The application's backend uses PocketBase. Before running the app, access the backend at this link:

[Backend PocketBase](#) <!-- Insert the actual link here -->

> **Note**: The backend needs to be running before starting the app.

## Environment Setup

Before running the app, you need to configure the `.env` file with the correct environment variables.

### Creating the `.env` File

Create a `.env` file in the root of the mobile project and add the following environment variables:

env
POCKET_BASE_URL=http://127.0.0.1:8080

GOOGLE_CLIENT_IOS=942364776611-nvvrm0dqrocnj8n4am2ltbpt472ik16u.apps.googleusercontent.com

GOOGLE_CLIENT_ANDROID=942364776611-t5jmpapflei7bgk0ghkt9psd0092dui6.apps.googleusercontent.com

GOOGLE_CLIENT_WEB=942364776611-skusp7bsbfphdhjlh4e8hlrq3e7jl677.apps.googleusercontent.com

POCKET_BASE_USERNAME=jersysilvafernandes@gmail.com

POCKET_BASE_PASSWORD=Ii13a2019!

GOOGLE_BASE_URL=https://www.googleapis.com/userinfo/v2/me

Make sure to replace `your_google_client_id` and `your_pocketbase_url` with the correct values for your credentials.

## Installation and Execution

### Step 1: Install Dependencies

Use your preferred package manager to install the project dependencies. Run one of the commands below:

bash
# Using Yarn
yarn install

# Using NPM
npm install

### Step 2: Initialize the Backend

Ensure that the backend is running and accessible before starting the app.

### Step 3: Run the Application

To run the mobile application, use one of the commands below depending on the desired platform:

#### iOS

bash
# Using Yarn
yarn ios

# Using NPM
npx react-native run-ios

#### Android

bash

# Com Yarn

yarn android

# Com NPM

npx react-native run-android

> **Note: In case of errors when running on iOS, make sure that all iOS-specific dependencies are correctly configured (such as Xcode, CocoaPods, etc.).

## Screenshots da Aplicação.

 Visualize the system.
    <div>
    <img width="300" alt="Screenshot 2024-08-29 at 14 00 29" src="https://github.com/user-attachments/assets/6019140e-40d6-4e5a-94b2-4760c2df23b1">
    <img width="300" alt="Screenshot 2024-08-29 at 14 00 43" src="https://github.com/user-attachments/assets/26bdec3f-bfb6-4033-a1b4-b576f612da65">
  </div>

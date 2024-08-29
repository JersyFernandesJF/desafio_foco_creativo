# Foco Criativo Web

**Foco Criativo Web** is an application developed with Next.js as part of a test for the company Foco Criativo. The application allows users to log in with Google and stores information in PocketBase, which acts as the backend for the application.

## Technologies Used

- **Next.js**: Framework used for web application development.
- **PocketBase**: Backend used for authentication and data storage.

## Prerequisites

Before running the project, ensure that the backend is configured and running. Make sure to follow the steps below correctly.

### Backend Link

The application's backend uses PocketBase. Before running the application, access the backend at this link:

[Backend PocketBase](https://github.com/JersyFernandesJF/desafio_foco_creativo/tree/main/foco_creativo_backend) <!-- Insert the actual link here -->

> **Note**: The backend needs to be running before starting the application.

## Environment Setup

Before running the application, you need to configure the `.env` file with the correct environment variables.

### Creating the `.env` File

Create a `.env.local` file in the root of the Next.js project and add the following environment variables:

env
AUTH_GOOGLE_ID=755410845988-p7lmpgc57q12g2st5q28s2fbfer0bhoc.apps.googleusercontent.com
AUTH_GOOGLE_SECRET=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
NEXT_PUBLIC_API_URL=http://127.0.0.1:8090
NEXT_PUBLIC_API_REDIRECT=http://localhost:3000/api/auth/callback/google
NEXT_PUBLIC_API_REDIRECT_APPLE=http://127.0.0.1:8090/auth/callback/
AUTH_POCKETDB_USER_NAME=jersysilvafernandes@gmail.com
AUTH_POCKETDB_PASSWORRD=Ii13a2019!


Ensure that you replace your_google_client_id, your_google_client_secret, and your_pocketbase_url with the correct values for your credentials.

## Installation and Execution

### Step 1: Install Dependencies

Use your preferred package manager to install the project dependencies. Run one of the commands below:

bash
# Com Yarn
yarn install

# Com NPM
npm install


### Step 2: Initialize the Backend

Ensure that the backend is running and accessible before starting the application.

### Step 3: Run the Application

To run the Next.js application, use the following command:

bash
# Com Yarn
yarn dev

# Com NPM
npm run dev


> **Note: Make sure that the environment variables are correctly configured in the .env.local file for the application to work properly.

## Application Screenshots

Add screenshots here showing the application in action to help visualize the system.

- *Login Page*  
  <div>
     <img width="2560" alt="Screenshot 2024-08-29 at 13 59 10" src="https://github.com/user-attachments/assets/68108872-3aec-4721-8478-c7abbe7c7e33">
  </div>

- *User Dashboard*  
  <div>
     <img width="2560" alt="Screenshot 2024-08-29 at 13 59 31" src="https://github.com/user-attachments/assets/a327028e-1ab5-4bc1-bcd6-2fba0d07f5f3">
  </div>

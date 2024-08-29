# Foco Criativo PocketBase

**Foco Criativo PocketBase** is the backend used for the Foco Criativo Mobile and Web applications. It is responsible for managing authentication and storing user data for users who log in through Google.

## Technologies Used

- **PocketBase**: Lightweight and standalone backend for authentication and data storage.
- **Docker**: Used for containerization and easy management of PocketBase.

## Prerequisites

Make sure you have Docker and Docker Compose installed on your machine before proceeding with the steps below.

## Environment Setup

### Creating the `.env` File

Create a `.env` file in the root of the PocketBase project with the following variables:

env
POCKETBASE_ADMIN_EMAIL=admin@example.com
POCKETBASE_ADMIN_PASSWORD=your_admin_password
POCKETBASE_DATA_DIR=./pb_data


Replace `your_admin_password` with the desired password for the administrator.

## Steps to Run PocketBase with Docker

### Step 1: Clone the Repository

Clone the PocketBase repository to your local machine:

cd foco-criativo-pocketbase


### Step 2: Configure Docker Compose

Ensure the `docker-compose.yml` file is correctly configured:

yaml
version: '3'

services:
  pocketbase:
    image: pocketbase/pocketbase:latest
    ports:
      - "8090:8090"
    environment:
      - POCKETBASE_ADMIN_EMAIL=${jersysilvafernandes@gmail.com}
      - POCKETBASE_ADMIN_PASSWORD=${Ii13a2019!}
    volumes:
      - ${POCKETBASE_DATA_DIR}:/pb_data


### Step 3: Start PocketBase

To start PocketBase with Docker, run the command below:

docker-compose up -d

./pocketbase serve

This command will start PocketBase in the background using the settings from the `.env` file.

### Step 4: Access PocketBase

After starting the service, access the PocketBase admin panel in your browser at:


http://localhost:8090/_/


Use the admin credentials configured in the `.env` file to log in.

- **Email**: `jersysilvafernandes@gmail.com`
- **Password**: `Ii13a2019!` (replace with the password set in the `.env` file)

## Managing Data in PocketBase

PocketBase allows you to create collections to store user data and manage their authentications. Use the web interface to create data collections, configure authentications, and manage the information of users who log in with Google.

## Modifying the Settings

This section can be expanded to include instructions on how to modify and customize the PocketBase setup further.

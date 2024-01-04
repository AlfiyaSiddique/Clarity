# Clarity App Overview

Clarity is a note keeping application designed to help you become more organise and productive.

## Tech Stack
- **Frontend:**
  - ReactJS
  - Tailwind CSS

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB

## Folder Structure

The project is organized into two main directories within the root folder:

1. **frontend:** Contains all the files related to the frontend development.
2. **backend:** Holds the backend codebase and configurations.

## Simple Note-Taking Backend API Documentation

## Introduction
This API provides endpoints to manage text notes in a note-taking application. It allows users to create, retrieve, update, and delete notes stored in a MongoDB database.

Base URL: `http://your-api-base-url.com`

## Endpoints

### Create User (Sign Up)
- **URL:** `/api/signup`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "email": "test@gmail.com",
    "fullname": "Jhon Doe",
    "password": "Jhonny@123"
  }
 - **Success: 201 Created**
    ```json
       {
         "success": true, 
          "user": "{createdUser}", 
          "token": "token", 
           "message": "User Created Successfully"
       }

### Login User
- **URL:** `/api/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "email": "test@gmail.com",
    "password": "Jhonny@123"
  }
 - **Success: 201 Created**
    ```json
       {
         "success": true, 
          "user": "{createdUser}", 
          "token": "token", 
           "message": "Login Successful"
       }


### Create Note (Protect API need token verification)
- **URL:** `/api/notes/add`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "title": "Note Title",
    "content": "Note Content",
  }
 - **Success: 201 Created**
    ```json
       {
         "_id": "note_id",
          "title": "Note Title",
          "content": "Note Content",
          "createdAt": "timestamp",
          "updatedAt": "timestamp",
          "userid": "userid",
          "success": true,
          "message": "Note Added Successfully"
    }
 

## Retrieve Notes

- **URL:** `/api/notes/get/user`
- **Method:** `GET`
- **Response:**
  - **Success: 200 OK**
  ```json
    { 
      "success": true,
      "message":"All Notes are returned"
      "notes": [
       {
        "_id": "note_id",
        "title": "Note Title",
        "content": "Note Content",
        "createdAt": "timestamp",
        "updatedAt": "timestamp",
        "userid":"userid" 
       },
       //  All notes...
      ]
    }

### Update Note
- **URL:** `/api/notes/update/:noteid`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "title": "Note Title",
    "content": "Note Content"
  }
 - **Success: 200 Created**
     ```json
          {
            "_id": "note_id",
            "title": "Updated Note Title",
            "content": "Updated Note Content",
            "createdAt": "timestamp",
            "updatedAt": "timestamp",
            "userid": "userid",
            "success": true, 
            "message": "Note Updated Successfully"
  }


### Delete a Note
- **URL:** `/api/notes/delete/:noteid`
- **Method:** `DELETE`
 - **Success: 200 Created**
   ```json
        {
          "success": true, 
          "message": "Note deleted successfully" 
       }


## Error Handling

- **200 Internal Server Error:** All OK.
- **201 Internal Server Error:** Created.
- **400 Bad Request:** Bad Request.
- **401 Bad Request:** Unauthorized.
- **403 Bad Request:** Forbidden.
- **404 Not Found:** Not Found.


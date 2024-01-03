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

### Create Note
- **URL:** `/api/notes/add`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "title": "Note Title",
    "content": "Note Content"
  }
 - **Success: 201 Created**
    ```json
       {
         "_id": "note_id",
          "title": "Note Title",
          "content": "Note Content",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
    }
 

## Retrieve Notes

- **URL:** `/api/notes/getall`
- **Method:** `GET`
- **Response:**
  - **Success: 200 OK**
  ```json
  [
    {
      "_id": "note_id",
      "title": "Note Title",
      "content": "Note Content",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    },
    // All notes...
  ]

### Update Note
- **URL:** `/api/notes/update`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "id": "Update note id",
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
            "updatedAt": "timestamp"
  }


### Delete a Note
- **URL:** `/api/notes/delete/:id`
- **Method:** `DELETE`
 - **Success: 200 Created**
   ```json
        {
         "_id": "note_id",
         "title": "Updated Note Title",
         "content": "Updated Note Content",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
  }


## Error Handling

- **400 Bad Request:** Invalid input or missing fields.
- **404 Not Found:** Trying to access or modify non-existent notes.
- **500 Internal Server Error:** Server-side issues.





# Clarity App Overview

Clarity is a note keeping application designed to help you become more organise and productive.

## Tech Stack
- **Frontend:**
  - ReactJS
  - Tailwind CSS
  - TypeScript

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

### Create Note
- **URL:** `/api/notes/add`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "title": "Note Title",
    "content": "Note Content"
  }
 - **Success: 201 Created**
    ```json
       {
         "_id": "note_id",
          "title": "Note Title",
          "content": "Note Content",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
    }
 

## Retrieve Notes

- **URL:** `/api/notes/getall`
- **Method:** `GET`
- **Response:**
  - **Success: 200 OK**
  ```json
  [
    {
      "_id": "note_id",
      "title": "Note Title",
      "content": "Note Content",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    },
    // All notes...
  ]

### Update Note
- **URL:** `/api/notes/update`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "id": "Update note id",
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
            "updatedAt": "timestamp"
  }


### Delete a Note
- **URL:** `/api/notes/delete/:id`
- **Method:** `DELETE`
 - **Success: 200 Created**
   ```json
        {
         "_id": "note_id",
         "title": "Updated Note Title",
         "content": "Updated Note Content",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
  }


## Error Handling

- **400 Bad Request:** Invalid input or missing fields.
- **404 Not Found:** Trying to access or modify non-existent notes.
- **500 Internal Server Error:** Server-side issues.






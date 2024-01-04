// tests/endpoints.test.js
import request from "supertest";
import { app, server } from "../server";
import mongoose from "mongoose";

// Test data for creating/updating notes
const testNote = {
  title: "Test Note",
  content: "This is a test note content.",
};

// Test data for creating notes
const userData = {
  email: "test@example.com",
  fullname: "Alfiya Siddique",
  password: "Alfiya@1708",
};

// Use Jest beforeAll and afterAll to connect/disconnect to the test database
beforeAll(async () => {
  await mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
  server.close();
});

describe("Clarity App API Endpoints", () => {
  let noteId;
  let token;
  let userid;

  test("POST /api/signup - Create a new user", async () => {
    const response = await request(app)
      .post("/api/signup")
      .send(userData)
      .expect(201);

    // Assertions for successful signup
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("User Created Successfully");
    expect(response.body.user).toHaveProperty("_id");
    expect(response.body).toHaveProperty("token");
    token = response.body.token;
    userid = response.body.user._id;
  });

  test("POST /api/login - Authenticate user", async () => {
    const response = await request(app)
      .post("/api/login")
      .send(userData)
      .expect(200);

    // Assertions for successful login
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Login Successful");
    expect(response.body.user).toHaveProperty("_id");
    expect(response.body).toHaveProperty("token");
    token = response.body.token;
    userid = response.body.token;
    // Add more assertions as needed
  });

  test("POST /api/notes/add - Create a new note", async () => {
    testNote.userid = userid;
    const response = await request(app)
      .post("/api/notes/add")
      .set("Authorization", `Bearer ${token}`)
      .send(testNote)
      .expect(201); 
    noteId = response.body._id; // Save the created note's ID for future tests
  });

  test("GET /api/notes/get/user - Get all notes of a user", async () => {
    await request(app)
      .get("/api/notes/get/user")
      .set("Authorization", `Bearer ${token}`)
      .expect(200); 
  });

  test("PUT /api/notes/update/:noteid - Update a note", async () => {
    const updatedContent = { content: "Updated test note content." };
    await request(app)
      .put(`/api/notes/update/${noteId}`)
      .set("Authorization", `Bearer ${token}`)
      .send(updatedContent)
      .expect(200); 
  });

  test("DELETE /api/notes/delete/:noteid - Delete a note", async () => {
    await request(app)
      .delete(`/api/notes/delete/${noteId}`)
      .set("Authorization", `Bearer ${token}`)
      .expect(200); 
  });
});

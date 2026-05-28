# GitHub Profile Analyzer API

A backend API built using Node.js, Express.js, MongoDB, and GitHub Public API.

The project fetches GitHub user profile information using a username, analyzes useful insights, stores them in MongoDB, and provides APIs to retrieve stored profiles.

---

# Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* GitHub Public API

---

# Features

* Fetch GitHub public profile using username
* Analyze profile insights
* Store profile data in MongoDB
* Get all analyzed profiles
* Get single analyzed profile

---

# Project Structure

```bash
src/
│
├── app.js
├── config/
├── controllers/
├── models/
├── routes/
├── services/
└── utils/
```

---

# How to Start the Project

## 1. Install Dependencies

```bash
npm install
```

---

## 2. Create Environment Variables

Create `.env` file:

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/Github
```

---

## 3. Run Project

```bash
npm run dev
```

Expected Output:

```bash
MongoDB Connected
Server running on port 5000
```

---

# API Routes

## Analyze GitHub Profile

```http
POST /api/github/analyze/:username
```

Example:

```http
POST http://localhost:5000/api/github/analyze/octocat
```

Purpose:

* Fetch GitHub profile
* Analyze repositories
* Store profile in MongoDB

Request Body:

* No body required

---

## Get All Profiles

```http
GET /api/github/profiles
```

Purpose:

* Fetch all stored GitHub profiles

---

## Get Single Profile

```http
GET /api/github/profiles/:username
```

Example:

```http
GET http://localhost:5000/api/github/profiles/octocat
```

Purpose:

* Fetch one stored GitHub profile by username

---

# Insights Stored

* Username
* Name
* Bio
* Followers
* Following
* Public Repositories
* Total Stars
* Top Language
* Profile URL
* Avatar URL
* Account Creation Date

---

# Database

Database Name:

```bash
Github
```

Collection Name:

```bash
githubprofiles
```

---

# Testing APIs

You can test APIs using:

* Postman
* Thunder Client
* Insomnia

---

# Future Improvements

* JWT Authentication
* Pagination
* Swagger Documentation
* Docker Support
* Redis Caching
* Deployment using Render or Railway

---

# Conclusion

This project demonstrates:

* REST API development
* GitHub API integration
* MongoDB operations
* MVC architecture
* Backend development using Node.js and Express.js

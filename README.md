Project Overview

This is a secure full-stack Task Management Web Application built using Next.js, Tailwind CSS, Node.js, Express, and MongoDB.
It allows authenticated users to create, read, update, and delete their tasks while implementing JWT authentication (access and refresh tokens), validation, and clean architecture following production best practices.

Frontend

Next.js 13+ (App Router)

Tailwind CSS

Axios

React Context API (for authentication state management)

Backend

Node.js

Express

MongoDB with Mongoose

JWT (Access + Refresh tokens)

bcrypt for password hashing

express-validator for validation 

Authentication

User registration and login using JWT.

Access and refresh token mechanism.

Passwords hashed using bcrypt.

Environment variables for all secrets.

Authenticated routes protected on both frontend and backend.

Task Management

Users can create, read, update, and delete their own tasks.

Each task includes:

title

description

status (pending or done)

dueDate

priority (low, medium, high)

Input validation using express-validator or Joi.

Standardized API responses with proper HTTP status codes.

Graceful error handling.

Security

Helmet for HTTP header protection.

CORS configured for frontend origin.

express-rate-limit for brute-force prevention.

Sanitized user input.

Tokens stored securely (HttpOnly cookie or localStorage fallback).

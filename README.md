# Movie Watchlist Web Application

## Project Overview

The Movie Watchlist Web Application is a full stack web application that allows users to search for movies and add them to a personal watchlist. The application fetches movie data such as poster, year, rating, and plot using the OMDB API and stores selected movies in a MongoDB database. Users can also delete movies from their watchlist. This project demonstrates the integration of frontend, backend, and database technologies.

---

## Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### API

* OMDB API (Open Movie Database)

---

## Features

* Search movies by name
* Display movie poster
* Display movie title
* Display release year
* Display IMDb rating
* Display movie plot
* Show streaming platform (simulated)
* Add movie to watchlist
* Delete movie from watchlist
* Store watchlist in MongoDB database
* Single Page Web Application
* Full Stack Implementation

---

## Project Architecture

Frontend (HTML, CSS, JavaScript)
↓
Fetch API Requests
↓
Node.js Server
↓
Express Routes (REST API)
↓
MongoDB Database

---

## REST API Endpoints

| Method | Endpoint    | Description                   |
| ------ | ----------- | ----------------------------- |
| GET    | /watchlist  | Get all movies from watchlist |
| POST   | /add        | Add movie to watchlist        |
| DELETE | /delete/:id | Delete movie from watchlist   |

---

## Database Structure (MongoDB)

**Database Name:** moviewatchlist
**Collection Name:** movies

Each movie document contains:

* title
* year
* poster
* rating
* plot
* platform

---

## How to Run the Project

1. Install Node.js
2. Install MongoDB and start MongoDB service
3. Download or clone the project
4. Open project folder in terminal
5. Install dependencies:

   ```
   npm install
   ```
6. Start the server:

   ```
   node server.js
   ```
7. Open browser and go to:

   ```
   http://localhost:3000
   ```

---

## Project Folder Structure

```
movie-watchlist
│
├── server.js
├── package.json
├── package-lock.json
├── README.md
│
├── public
│   ├── index.html
│   ├── style.css
│   └── script.js
```

---

## Future Enhancements

* User login system
* Favorites list
* Dark mode
* Multiple movie search results
* Real streaming platform API integration
* Movie trailers
* Responsive mobile design
* Deployment on cloud platform

---

## Conclusion

This project demonstrates a full stack web application using HTML, CSS, JavaScript for frontend, Node.js and Express for backend, and MongoDB for database. The application integrates an external API and performs CRUD operations using REST API architecture.

---

## Author

Supriya U
BCA Student

# FITLOG — Workout Library

FITLOG is a responsive workout library web application built with **Next.js, React, TypeScript, and Tailwind CSS**. Users can explore different exercises, view detailed workout information, add exercises to their daily plan, and save workouts for later.

## 🚀 Live Project

* Live Demo: https://fitlog1-tan.vercel.app/
* GitHub Repository: https://github.com/mizu63/FITLOG

## 📌 Project Description

FITLOG is designed as a simple and modern gym companion. Users can browse a workout library, check exercise details, create a personal workout plan, and save their favorite exercises.

The application is fully responsive and works across **mobile, tablet, and desktop** devices.

## ✨ Features

* 🏋️ Browse a complete workout library
* 📋 View detailed information for each workout
* ➕ Add exercises to Today's Plan
* ♡ Save workouts for later
* 🗑️ Remove workouts from the plan or saved list
* 🔢 Display total Plan and Saved workout counts
* ↕️ Sort workouts by duration, calories, or name
* 💾 Store Plan and Saved data using Local Storage
* 📱 Fully responsive design for mobile, tablet, and desktop

## 🛠️ Technologies Used

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **React Context API**
* **Next.js Dynamic Routing**
* **REST API**
* **Local Storage**
* **Git & GitHub**

## 📂 Main Pages

### Home

The landing page introduces FITLOG and provides access to the workout library.

### Workouts

Users can browse different exercises and see basic information such as:

* Exercise name
* Muscle groups
* Equipment
* Duration
* Calories
* Rating

### Workout Details

Each workout has a dynamic details page containing:

* Exercise image
* Description
* Difficulty
* Equipment
* Sets
* Reps
* Duration
* Calories burned
* Rating
* Instructions

### My Plan

Users can manage their selected workouts from one place.

The My Plan page includes:

* Today's Plan
* Saved workouts
* Exercise count
* Total duration
* Total calories
* Workout sorting
* Remove workout option

## 💾 Data Persistence

FITLOG uses **Local Storage** to keep the user's:

* Today's Plan
* Saved workouts

This means the selected workouts remain available even after refreshing the page.

## 🔌 API

Workout data is loaded from the FITLOG REST API:

`https://api.abcz.workers.dev/api/fitlog`

## 📱 Responsive Design

The application is designed to work properly on:

* 📱 Mobile devices
* 📲 Tablets
* 💻 Laptops
* 🖥️ Desktop screens

Tailwind CSS responsive utilities are used to create the responsive layout.

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone YOUR_GITHUB_LINK
```

Go to the project folder:

```bash
cd your-project-folder
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

To run the production server:

```bash
npm start
```

## 🎯 Project Goals

The main goals of FITLOG are:

* Create a clean workout browsing experience
* Practice Next.js dynamic routing
* Practice TypeScript with React
* Manage application state using Context API
* Persist data using Local Storage
* Build a responsive UI with Tailwind CSS
* Create a practical real-world frontend project

## 👨‍💻 Developer

**Md. Mizu Ahmmed Jim**

Frontend Developer | React | JavaScript | Next.js | TypeScript

# YouTube-Clone
This is a simplified "Youtube Clone" web application built using React and fetching data from API url 'https://internship-service.onrender.com/videos?page=2'.
It allows users to view a list of predefined video thumbnails, click on a thumbnail to play the video, and see basic information about the video such as creator's profile picture and creator's handle name.

## API Pagination:
The application utilizes API pagination to fetch videos from the server. Pagination is a technique used to break down large sets of data into smaller, more manageable chunks called pages. To implement pagination, a state named as page is maintained, which is incremented when **next button** is clicked and decremented when **prev button** is clicked. The page value is bounded between 0 and 5.

## React Components:
There are four different components is used to manage different functionalities of application-
### 1. App.js
This is the base components to render all other video components.
### 2. VideoList.js
It maintains a list of videos, page value and selected video. It fetches data from API and render using **VideoThumbnail** component.
### 3. VideoThumbnail.js
It receives a video and selectedVideo as props from VideoList component and 
display a thumbnail of that video. When, user clicks on that thumbnail, it changes the selectedVideo state.
### 4. VideoPlayer.js
It receives a video from VideoList component as props and plays that video using html video element.

## Online App Link:
https://youtube-clone-mahendra.netlify.app/(hosted on netlify)

## Getting Started
To run the YouTube Clone web application on your local machine, please follow these steps:
1. Clone the repository:
git clone https://github.com/MahendraMakad/YouTube-Clone.git
2. Navigate to the project directory:
cd YouTube-Clone
3. Install the dependencies: npm install
4. Start the development server: npm start
5. Open your web browser and visit http://localhost:3000 to access the YouTube Clone web application.


## Features
The YouTube Clone web application provides the following features:
* View a list of predefined video thumbnails.
* Click on a thumbnail to play the video.
* See basic information about the video, such as the title and description.
* Responsive design with an attractive interface.

## Technologies Used
The YouTube Clone web application is built using the following technologies:
* React.js: A JavaScript library for building user interfaces.
* HTML5: The markup language used for structuring the web pages.
* CSS: The style sheet language used for designing the web pages.
* JavaScript: The programming language used for implementing interactivity   and logic.

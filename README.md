# Church Website React Application

Welcome to the Church Website React Application. This project is a fully responsive web application built using the latest stable version of React, designed to showcase the church's information, activities, and media.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [Development Guidelines](#development-guidelines)
- [Responsive Design](#responsive-design)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This application provides a comprehensive view of the church's activities, including general information, leadership details, ministries, media content, and more. It features a responsive design, smooth animations, and a user-friendly interface for both desktop and mobile users.

## Features

- **Responsive Carousel**: Displaying church events and messages.
- **General Overseer Message**: Magazine-style layout.
- **Church Activities Table**: Showcasing weekly activities.
- **Upcoming Events Section**: With a "View All Events" button.
- **Latest News Section**: With dynamic content.
- **Custom Navbar**: Responsive behavior and transparent styling on the homepage.
- **AOS (Animate On Scroll)**: Effects for dynamic content loading.
- **Fully Responsive Design**: Across all devices.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For navigation and routing.
- **Tailwind CSS**: For styling and responsive design.
- **AOS (Animate On Scroll)**: For scroll animations.
- **React Icons**: For icons and UI elements.
- **Node.js**: For running the React development environment.

## Installation

To get started with the Church Website React Application, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/kofikorang12/gospel-website.git
   cd church-website
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```bash
church-website/
│
├── public/                  # Public assets and index.html
├── src/
│   ├── assets/              # Images and other assets
│   ├── components/          # Reusable components
│   │   ├── Navbar.js        # Navbar component
│   │   ├── Carousel.js      # Carousel component
│   │   ├── GeneralOverseerMessage.js  # General Overseer message
│   │   ├── ChurchActivities.js  # Church Activities table
│   │   ├── UpcomingEvents.js    # Upcoming Events section
│   │   ├── NewsArticles.js      # News Articles section
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── Home.js         # Home page
│   │   ├── AboutUs.js      # About Us page
│   │   ├── Leadership.js   # Leadership page
│   │   ├── Ministries.js   # Ministries page
│   │   ├── Media.js        # Media page
│   │   ├── ContactUs.js    # Contact Us page
│   │   └── ...
│   ├── App.js              # Main application component
│   ├── index.js            # Application entry point
│   └── ...
├── .gitignore              # Git ignore file
├── package.json            # Node dependencies and scripts
└── README.md               # Project README
```

## Components Overview

- **Navbar**: Responsive navigation bar with transparent and solid background based on scroll and page location.
- **Carousel**: Image slider with smooth transitions.
- **GeneralOverseerMessage**: Magazine-style layout with an image and text side-by-side.
- **ChurchActivities**: Weekly church activities table with days, activities, and times.
- **UpcomingEvents**: Grid layout with upcoming events and a "View All Events" button.
- **NewsArticles**: Section displaying the latest news in a structured format.

## Development Guidelines

- **Code Style**: Follow the best practices for React development. Use functional components and React hooks where applicable.
- **Styling**: Use Tailwind CSS for styling. Avoid inline styles unless necessary.
- **Responsiveness**: Ensure all components are responsive across different screen sizes.
- **Animations**: Use AOS effects sparingly to enhance user experience.
- **Components**: Create reusable components and avoid code duplication.

## Responsive Design

The application uses Tailwind CSS for responsiveness. The Navbar changes to a hamburger menu on smaller screens. Sections adjust layout according to screen size, ensuring a seamless experience across mobile, tablet, and desktop.

## Deployment

1. **Build the application**:

   ```bash
   npm run build
   ```

2. **Deploy the `build/` folder to your hosting provider**.
3. **Ensure proper routing** by configuring the server to handle client-side routing for React.

## Contributing

We welcome contributions to the Church Website React Application! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

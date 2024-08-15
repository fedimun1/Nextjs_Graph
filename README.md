# Graphs with Next.js

This project is a sample application created to demonstrate how to draw Pie, Line, and Bar graphs using Next.js. It's designed to help the community understand how to integrate `chart.js` and `react-chartjs-2` for dynamic and interactive data visualizations.

## Installation

To get started, clone the repository and install the necessary dependencies:

```bash

npm install chart.js react-chartjs-2
Project Structure

    Create a components Folder
    Inside the src directory, create a folder named components:

    bash

src/
└── components/

Create Chart Components
Inside the components folder, create the following components for each chart type:

    PieChart.tsx: This component will be responsible for rendering a Pie chart.
    BarChart.tsx: This component will be responsible for rendering a Bar chart.
    LineChart.tsx: This component will be responsible for rendering a Line chart.

The structure should look like this:

bash

src/
└── components/
    ├── PieChart.tsx
    ├── BarChart.tsx
    └── LineChart.tsx


[    ![Screenshot from 2024-08-15 09-38-06](https://github.com/user-attachments/assets/75008bfd-2583-4a1b-985a-80bd08bed34c)
](https://private-user-images.githubusercontent.com/84537374/358143025-3d56f0bd-b110-4255-a396-d06d2289b888.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM3MDQ3ODksIm5iZiI6MTcyMzcwNDQ4OSwicGF0aCI6Ii84NDUzNzM3NC8zNTgxNDMwMjUtM2Q1NmYwYmQtYjExMC00MjU1LWEzOTYtZDA2ZDIyODliODg4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODE1VDA2NDgwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJjZGM1NTU3ZTRmMzY4NjUwYWNhZmQ4NjE0YTZmOWYzYWI4NzlhMDM3MWU2MmFlYTNjNGY0MTkyOTQ2ZjczOTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.hSAyuLZHQZcbIZrE9WLBlD8bqjsBUd-uV9hd_ZngATk)

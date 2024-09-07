# React + Flask Image Captioning App

This project integrates a React frontend with a Flask backend to generate image captions using a pre-trained machine learning model. Users can upload images via the React app, which sends the image to the Flask API for processing, and the Flask backend returns a generated caption using the Salesforce BLIP pre-trained model.

## Features

Upload an image from the React frontend.
Flask backend processes the image and generates a caption using a pre-trained image captioning model (BLIP).
Supports CORS to allow communication between the frontend and backend.


### Tech Stack

Frontend: React.js
Backend: Flask (Python)
Machine Learning Model: Salesforce BLIP (via Hugging Face Transformers)
API Requests: Axios (React)
CORS: flask-cors


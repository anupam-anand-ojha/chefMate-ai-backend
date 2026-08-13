# 🍳 ChefMate

ChefMate is an AI-powered recipe generator that helps you discover what you can cook with the ingredients you already have. Simply provide your ingredients and preferences, and ChefMate generates personalized recipe suggestions using Gemini AI.

## ✨ Features

- 🥕 Generate recipes from available ingredients
- 🤖 AI-powered recipe generation using LLMs
- 🍽️ Get 3–5 recipe suggestions
- 📝 Detailed ingredients and cooking steps
- ⏱️ Estimated cooking time
- 📊 Difficulty level
- ❤️ Support for user preferences
- ⚡ Fast REST API

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- Gemini AI
- REST API
- JavaScript (ES Modules)

### Frontend
- React
- Tailwind CSS
- Axios

## 📂 Project Structure

chefMate-backend/
│
├── controllers/
│   └── recipe.controller.js
│
├── prompts/
│   └── recipe.prompt.js
│
├── routes/
│   └── recipe.routes.js
│
├── services/
│   └── ai.service.js
│
├── src/
│   └── app.js
│
├── .env
├── server.js
└── package.json

## 🔄 How It Works

User Ingredients
       ↓
Frontend
       ↓
POST /api/recipe/generate
       ↓
Recipe Controller
       ↓
AI Service
       ↓
JSON Recipe Response
       ↓
Frontend

## 📡 API

### Generate Recipe

POST /api/recipe/generate

### Request Body

{
  "ingredients": [
    "potato",
    "onion",
    "tomato"
  ],
  "preferences": "vegetarian"
}

### Response

{
  "recipes": [
    {
      "name": "Aloo Tomato Curry",
      "description": "A simple and delicious potato and tomato curry.",
      "ingredients": [
        "Potato",
        "Onion",
        "Tomato"
      ],
      "steps": [
        "Chop the vegetables.",
        "Cook the onion until golden.",
        "Add potatoes and tomatoes.",
        "Cook until done."
      ],
      "time": "30 minutes",
      "difficulty": "Easy"
    }
  ]
}

## ⚙️ Installation

Clone the repository:

git clone <your-repository-url>

Go to the project directory:

cd chefMate-backend

Install dependencies:

npm install

Create a .env file:

GEMINI_API_KEY=your_gemini_api_key
PORT=5001

Start the development server:

npm run dev

## 🚀 Future Improvements

- User authentication
- Recipe history
- Favorite recipes
- MongoDB integration
- Personalized recommendations
- Recipe search and filtering
- Nutritional information

## 👨‍💻 Author

Anupam Anand Ojha


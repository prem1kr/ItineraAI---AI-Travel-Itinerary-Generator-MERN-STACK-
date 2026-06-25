# ✈️ ItineraAI - AI Travel Itinerary Generator

ItineraAI is a full-stack MERN application that allows users to upload travel booking documents (flight tickets, hotel reservations, train tickets, etc.), automatically extract travel information using OCR and AI, and generate intelligent travel itineraries powered by Gemini/OpenAI.

---

## 🚀 Features

### Authentication

* JWT Authentication
* User Registration
* User Login
* Protected Routes
* User Profile

### Travel Document Upload

* Upload PDFs
* Upload Images (JPG, PNG, JPEG)
* Multiple File Upload Support
* Upload Progress Tracking

### AI Data Extraction

* OCR Processing
* Travel Information Extraction
* Flight Details Parsing
* Hotel Booking Parsing
* Travel Schedule Extraction

### AI Itinerary Generation

* Generate structured travel plans
* Day-wise itinerary creation
* Timeline generation
* Travel recommendations
* AI-powered trip optimization

### Itinerary Management

* Save itineraries to MongoDB
* View itinerary history
* Delete itineraries
* View itinerary details

### Sharing & Export

* Share itinerary using public links
* Download itinerary as PDF
* Copy shareable URLs

### Responsive UI

* React + Tailwind CSS
* Mobile Friendly
* Dashboard Interface

---

# 🛠 Tech Stack

## Frontend

* React.js
* React Router DOM
* Redux Toolkit
* Axios
* Tailwind CSS
* React Hot Toast
* React Icons
* jsPDF

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* Cloudinary

## AI & OCR

* Google Gemini API
* OpenAI API (Optional)
* OCR Processing

---

# 📁 Project Structure

## Frontend

```text
frontend/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── logos/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── EmptyState.jsx
│   │   │
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx
│   │   │   └── RegisterForm.jsx
│   │   │
│   │   ├── upload/
│   │   │   ├── UploadBox.jsx
│   │   │   ├── UploadProgress.jsx
│   │   │   └── FilePreview.jsx
│   │   │
│   │   ├── itinerary/
│   │   │   ├── ItineraryCard.jsx
│   │   │   ├── DayPlan.jsx
│   │   │   ├── Timeline.jsx
│   │   │   ├── ShareModal.jsx
│   │   │   └── DownloadPDF.jsx
│   │
│   ├── layouts/
│   │   ├── MainLayout.jsx
│   │   └── DashboardLayout.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── UploadDocument.jsx
│   │   ├── GenerateItinerary.jsx
│   │   ├── ItineraryDetails.jsx
│   │   ├── History.jsx
│   │   ├── Profile.jsx
│   │   └── NotFound.jsx
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   └── PrivateRoute.jsx
│   │
│   ├── redux/
│   │   ├── store.js
│   │   └── slices/
│   │       ├── authSlice.js
│   │       ├── uploadSlice.js
│   │       └── itinerarySlice.js
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── uploadService.js
│   │   └── itineraryService.js
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useUpload.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── formatDate.js
│   │   ├── validators.js
│   │   ├── toast.js
│   │   ├── pdfGenerator.js
│   │   ├── aiPrompt.js
│   │   └── uploadParser.js
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── animations.css
│   │   └── custom.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
└── package.json
```

---

## Backend

```text
backend/
│
├── config/
│   ├── db.js
│   ├── cloudinary.js
│   └── gemini.js
│
├── controllers/
│   ├── authController.js
│   ├── uploadController.js
│   ├── itineraryController.js
│   └── userController.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── uploadMiddleware.js
│   ├── validationMiddleware.js
│   └── errorMiddleware.js
│
├── models/
│   ├── User.js
│   ├── BookingDocument.js
│   ├── Itinerary.js
│   └── SharedItinerary.js
│
├── routes/
│   ├── authRoutes.js
│   ├── uploadRoutes.js
│   ├── itineraryRoutes.js
│   └── userRoutes.js
│
├── services/
│   ├── authService.js
│   ├── uploadService.js
│   ├── ocrService.js
│   ├── aiService.js
│   └── itineraryService.js
│
├── utils/
│   ├── generateToken.js
│   ├── aiPrompt.js
│   ├── uploadParser.js
│   ├── validators.js
│   └── responseHandler.js
│
├── uploads/
│   └── documents/
│       └── .gitkeep
│
├── .env
├── package.json
└── server.js
```

---

# ⚙️ Environment Variables

## Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

## Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/prem1kr/TripMind-AI-Gemini-ai-integrated-travel-ticket-pdf-extractor-.git
cd TripMind-AI-Gemini-ai-integrated-travel-ticket-pdf-extractor-
```

## Install Frontend

```bash
cd frontend
npm install
npm run dev
```

## Install Backend

```bash
cd backend
npm install
npm run dev
```

---

# API Endpoints

## Auth

```http
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile
```

## Upload

```http
POST /api/upload
```

## Itinerary

```http
POST   /api/itinerary/generate
GET    /api/itinerary/history
GET    /api/itinerary/:id
DELETE /api/itinerary/:id
POST   /api/itinerary/share/:id
```

## User

```http
GET /api/user/profile
```

---


# Author

**Prem Kumar**
Full Stack Developer
Built using MERN Stack

# Lern Project (Frontend + Backend)

Ye project React (Frontend) aur Express (Backend) ka simple connection demo hai.
Isme frontend Axios use karke backend API call karta hai.

## Project Structure

- `BE/` -> Backend (Express API)
- `FE/` -> Frontend (React + Vite)

## Kya Sikhne Ko Milega

- Backend route kaise banta hai
- Frontend se Axios request kaise bhejte hain
- Loading, error, aur data UI me kaise dikhate hain
- CORS ka use kyun hota hai

## Prerequisites

System me ye installed hona chahiye:

- Node.js (recommended: v18+)
- npm
- Git

Check karne ke liye:

```bash
node -v
npm -v
git --version
```

## 1) Project Clone Kaise Kare

```bash
git clone <YOUR_REPOSITORY_URL>
cd Lern
```

Example:

```bash
git clone https://github.com/username/repo-name.git
cd Lern
```

## 2) Dependencies Install Kaise Kare

### Backend dependencies

```bash
cd BE
npm install
```

### Frontend dependencies

```bash
cd ../FE
npm install
```

## 3) Project Run Kaise Kare

Do alag terminal kholna hai.

### Terminal 1: Backend start

```bash
cd BE
npm run dev
```

Agar `dev` nahi chalana ho to:

```bash
npm start
```

Backend default port: `3000`

### Terminal 2: Frontend start

```bash
cd FE
npm run dev
```

Vite URL usually hota hai: `http://localhost:5173`

Browser me ye URL kholo.
Phir button par click karo: **Fetch Data**
Agar sab sahi hai to backend ka response screen par aa jayega.

## 4) Frontend-Backend Connection Kaise Ho Raha Hai

1. Frontend me Axios GET request jaati hai:
   - URL: `http://localhost:3000/api/hello`
2. Backend route `/api/hello` JSON response bhejta hai.
3. Frontend response ko state me store karta hai.
4. UI me `message`, `success`, aur `time` dikhte hain.

## 5) Important Files Samjho

### Backend

- `BE/App.js`
  - Express app setup
  - CORS enable
  - `/` route (Hello World)
  - `/api/hello` route (JSON response)

- `BE/package.json`
  - Scripts: `dev`, `start`
  - Dependencies: `express`, `cors`

### Frontend

- `FE/src/App.jsx`
  - Axios API call
  - Loading/error/data states
  - Button click se fetch logic

- `FE/src/App.css`
  - UI styling

- `FE/package.json`
  - Scripts: `dev`, `build`
  - Dependency: `axios`

## 6) Common Problems Aur Fix

### Problem: Network Error

Check karo backend chal raha hai ya nahi:

```bash
cd BE
npm run dev
```

### Problem: CORS issue

Ensure karo backend me `cors` middleware laga ho (`app.use(cors())`).

### Problem: Wrong API URL

Frontend me API URL check karo `FE/src/App.jsx` me.

Current fallback URL:

```js
http://localhost:3000
```

## 7) Optional: Environment Variable Setup

Agar aap API URL env se manage karna chahte ho, to `FE/.env` banao:

```env
VITE_API_URL=http://localhost:3000
```

Iske baad frontend restart karo:

```bash
cd FE
npm run dev
```

## 8) Build Kaise Kare

Frontend production build:

```bash
cd FE
npm run build
```

## Quick Start (Short Version)

```bash
git clone <YOUR_REPOSITORY_URL>
cd Lern
cd BE && npm install && npm run dev
# new terminal
cd FE && npm install && npm run dev
```

Ab browser me frontend kholo aur **Fetch Data** click karo.

---

Agar aap is project se dusron ko sikhana chahte ho, to pehle backend route aur frontend Axios flow explain karo. Ye full beginner-friendly API connection example hai.

# 🛠️ Run Instructions for Meli Product Detail App

This project contains both a **backend** (FastAPI) and a **frontend** (Vite + React). The app is fully containerized using Docker Compose and uses mock JSON files as a data source.

---

## ✅ Requirements

* [Docker](https://www.docker.com/) installed
* [Docker Compose](https://docs.docker.com/compose/) installed

---

## 🚀 Run the App

From the root of the project, run:

```bash
docker compose up --build
```

This will:

* Build and start the **backend** (on port `8000`)
* Build and start the **frontend** (on port `5173`)

If you need to stop the app:

```bash
docker compose down
```

To run in detached mode:

```bash
docker compose up --build -d
```

---

## 🌐 Open the App in Browser

Visit:

```text
http://localhost:5173/item-posts/alclick__samsung-galaxy-a55-azul_oscuro-256gb__color--azul_oscuro__memoria--256gb
```

This will load a product detail page using mocked data.

---

## 📦 Folder Structure

```text
meli-product-detail/
├── backend/           # FastAPI backend
│   └── data/          # Static JSON files (articles, sellers, item_posts)
├── frontend/          # React frontend using Vite
├── docker-compose.yml # Multi-service Docker config
├── Dockerfile         # Node-based Dockerfile for frontend
└── run.md             # This file
```

---

## ✨ Notes

* Backend reads data from `backend/data/`
* Frontend is served by Vite (development server)
* This setup is meant for **development and testing** purposes

---

Happy coding! 🧉

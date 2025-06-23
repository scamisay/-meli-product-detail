### 📦 `run.md` – Project Setup Instructions

This guide will help you run the **meli-product-detail** project locally using Docker Compose.

---

### 🛠️ Prerequisites

* [Docker](https://www.docker.com/) installed
* [Docker Compose](https://docs.docker.com/compose/install/) (comes bundled with Docker Desktop)

---

### 🚀 Running the Project

1. Clone this repository:

   ```bash
   git clone https://github.com/your-repo/meli-product-detail.git
   cd meli-product-detail
   ```

2. Run the services:

   ```bash
   docker compose up --build
   ```

3. Access the applications:

   * **Frontend**: [http://localhost:5173](http://localhost:5173)
   * **Backend (API)**: [http://localhost:8000](http://localhost:8000)

---

### 💃 Project Structure

```
.
├── backend/
│   ├── app/                # FastAPI backend
│   └── data/               # JSON data (mounted as volume)
├── frontend/               # React frontend (Vite)
├── docker-compose.yml      # Service orchestration
├── run.md                  # This guide
```

---

### 🧹 Stopping the Services

To stop the project, run:

```bash
docker compose down
```

To rebuild everything from scratch:

```bash
docker compose up --build --force-recreate
```

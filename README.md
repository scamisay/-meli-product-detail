# 🛒 meli-product-detail

This is a self-contained backend + frontend implementation of a product detail page inspired by Mercado Libre, structured with clean architecture and modular components.

---

## ⚡ Quick Start

To run the project locally, follow the instructions in [`run.md`](./run.md).

For deep architectural, data, and API details, see the [documentation in `docs/`](./docs/).

---

## 🧩 Project Overview

The project is designed to simulate a realistic e-commerce product detail page, including images, seller data, variants, payment methods, and delivery options.

### Stack Summary

**Frontend**:

* React
* Vite
* React Router
* CSS Modules

**Backend**:

* Python 3.10
* FastAPI
* Pydantic
* Pytest
* Docker (for local execution)

**Data**:

* File-based storage using structured JSON files inside the `data/` folder

---

## 🧠 Documentation

The documentation is split into the following sections in the `docs/` folder:

* [`frontend.md`](./docs/frontend.md): React component structure and rendering logic
* [`backend.md`](./docs/backend.md): Layered architecture, endpoints, and test strategy
* [`data.md`](./docs/data.md): Entity formats, JSON schema, and relationships

---

## ✅ Good Practices Applied

* All code is structured with **layer separation**: controllers, services, repositories, and utils
* **Enum validation** ensures consistent references for payment/delivery options
* All endpoints are **self-documented with Swagger** thanks to FastAPI
* **Tests included** with >90% coverage
* **Dockerized** for reliable execution on any environment
* Documentation written in Markdown + Mermaid to render well on GitHub

---

## 🔮 Future Ideas

* Introduce a persistent database for dynamic item creation
* Add filtering and sorting to the API
* Use Redis/CDN for image metadata and caching
* Integrate CI workflows for validation and linting

---

> This project was designed as a fullstack coding challenge and showcases clean implementation, reusability, and clarity through solid documentation.

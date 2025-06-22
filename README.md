# Meli Product Detail

This repository hosts the backend system for the **Meli Product Detail** project. It is a modular Python application designed to expose product-related data via a RESTful API.

## Overview

The project provides:

* Access to product detail data (`articles`)
* Seller information (`sellers`)
* Market listings (`item_posts`)
* Associated delivery and payment options

It is intended to power a product detail page similar to that found on e-commerce platforms like Mercado Libre.

## Tech Stack

* **Python 3.10**
* **FastAPI** for building the API
* **Pydantic** for data validation
* **Uvicorn** as the ASGI server

## Project Structure

```
backend/
├── app/
│   ├── controllers/     # HTTP endpoints
│   ├── core/            # Application settings, startup logic
│   ├── domain/         # Domain models and enums
│   ├── repositories/   # Data access logic
│   └── services/       # Business logic
├── data/              # Local sample data (JSON)
└── tests/             # Unit tests
```

## API Documentation

Once the app is running, access the interactive API documentation:

* Swagger UI: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
* ReDoc: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

## How to Run

Execution and environment setup instructions are provided in [`run.md`](./run.md).

## Documentation

Additional documentation is available in the [`doc/`](./doc/) folder.

## License

This project is not licensed. All rights reserved by the author.

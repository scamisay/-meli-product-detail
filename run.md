# run.md

## Requisitos previos

* Tener instalado [Docker](https://www.docker.com/products/docker-desktop/)
* Tener instalado [Docker Compose](https://docs.docker.com/compose/)

## Estructura esperada del proyecto

```
meli-product-detail-main/
├── backend/
│   ├── app/
│   ├── data/
│   ├── requirements.txt
│   └── ...
├── frontend/
│   ├── src/
│   └── ...
├── docker-compose.yml
├── run.md
```

## Levantar el entorno

Desde la carpeta raíz del proyecto:

```bash
docker-compose up --build
```

Esto hará lo siguiente:

* Construirá y levantará el backend (FastAPI) en `http://localhost:8000`
* Construirá y levantará el frontend (Vite + React) en `http://localhost:5173`

## Backend

* El backend se monta con acceso a la carpeta `backend/data` como volumen para poder servir contenido desde ella.
* Si modificás el contenido de `data/`, se refleja directamente.

## Frontend

* El contenedor de frontend utiliza Vite con hot-reload.
* Asegurate que no haya otro proceso usando el puerto 5173.

---

## Parar el entorno

```bash
docker-compose down
```

## Notas adicionales

* Si querés ver los logs:

```bash
docker-compose logs -f
```

* Si querés reconstruir desde cero:

```bash
docker-compose down -v
docker-compose build --no-cache
```

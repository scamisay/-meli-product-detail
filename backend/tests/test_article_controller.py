from fastapi.testclient import TestClient
from app.main import app
import pytest

client = TestClient(app)

ARTICLE_ID = "samsung-galaxy-a55-azul_claro-128gb"
IMAGE_NAME = "1.webp"

def test_get_article_success():
    response = client.get(f"/articles/{ARTICLE_ID}")
    assert response.status_code == 200
    data = response.json()
    assert "title" in data
    assert "short_info" in data

def test_get_article_not_found():
    response = client.get("/articles/no-existe")
    assert response.status_code == 404

def test_get_article_images_success():
    response = client.get(f"/articles/{ARTICLE_ID}/images")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data["images"], list)

def test_get_article_images_not_found():
    response = client.get("/articles/no-existe/images")
    assert response.status_code == 404

def test_get_article_image_success():
    response = client.get(f"/articles/{ARTICLE_ID}/images/{IMAGE_NAME}")
    assert response.status_code == 200
    assert response.headers["content-type"].startswith("image/")

def test_get_article_image_not_found():
    response = client.get(f"/articles/{ARTICLE_ID}/images/no-existe.webp")
    assert response.status_code == 404

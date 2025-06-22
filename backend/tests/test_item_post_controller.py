import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_get_item_post_success():
    response = client.get(
        "/item-posts/alclick__samsung-galaxy-a55-azul_oscuro-256gb__color--azul_oscuro__memoria--256gb"
    )
    assert response.status_code == 200
    data = response.json()

    # Verificamos la estructura básica del response
    assert data["id"].startswith("alclick__samsung")
    assert "article_id" in data
    assert "price" in data
    assert isinstance(data["stock"], int)
    assert isinstance(data["payment_methods"], list)
    assert isinstance(data["delivery_options"], list)

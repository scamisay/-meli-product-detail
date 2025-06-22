from fastapi.testclient import TestClient
from app.main import app
import pytest
import os
import json

client = TestClient(app, raise_server_exceptions=False)

SELLER_ID = "alclick"
SELLER_PATH = f"data/sellers/{SELLER_ID}/data.json"
BACKUP_PATH = f"{SELLER_PATH}.bak"

def test_get_seller_success():
    response = client.get(f"/sellers/{SELLER_ID}")
    assert response.status_code == 200
    data = response.json()
    assert "name" in data
    assert "reputation_level" in data

def test_get_seller_not_found():
    response = client.get("/sellers/inexistente123")
    assert response.status_code == 404

def test_get_seller_invalid_json_returns_500():
    # Backup the original data.json
    os.rename(SELLER_PATH, BACKUP_PATH)
    try:
        # Create an invalid JSON file
        with open(SELLER_PATH, "w", encoding="utf-8") as f:
            f.write("{ invalid json }")

        response = client.get(f"/sellers/{SELLER_ID}")
        assert response.status_code == 500
        assert response.json()["detail"] == "Invalid seller JSON"

    finally:
        # Restore original file
        os.remove(SELLER_PATH)
        os.rename(BACKUP_PATH, SELLER_PATH)

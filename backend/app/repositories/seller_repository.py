import os
import json
from app.core.constants import SELLERS_PATH

DATA_FILENAME = "data.json"

def load_seller_by_id(seller_id: str) -> dict:
    seller_path = os.path.join(SELLERS_PATH, seller_id, DATA_FILENAME)
    with open(seller_path, "r", encoding="utf-8") as file:
        return json.load(file)

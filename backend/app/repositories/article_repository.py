import os
import json
from app.core.constants import ARTICLES_PATH

DATA_FILENAME = "data.json"

def load_article_by_id(article_id: str) -> dict:
    article_path = os.path.join(ARTICLES_PATH, article_id, DATA_FILENAME)
    with open(article_path, "r", encoding="utf-8") as file:
        return json.load(file)
def list_article_image_names_by_id(article_id: str) -> list[str]:
    folder = os.path.join(ARTICLES_PATH, article_id, "images")
    if not os.path.exists(folder):
        raise FileNotFoundError()
    return sorted([
        f for f in os.listdir(folder)
        if f.lower().endswith((".webp", ".jpg", ".png"))
    ])

def resolve_article_image_path(article_id: str, image_name: str) -> str:
    path = os.path.join(ARTICLES_PATH, article_id, "images", image_name)
    if not os.path.isfile(path):
        raise FileNotFoundError()
    return path

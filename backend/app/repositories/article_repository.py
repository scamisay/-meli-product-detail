import os
import json
from app.core.constants import ARTICLES_PATH

DATA_FILENAME = "data.json"

def load_article_by_id(article_id: str) -> dict:
    article_path = os.path.join(ARTICLES_PATH, article_id, DATA_FILENAME)
    with open(article_path, "r", encoding="utf-8") as file:
        return json.load(file)

import os
import json
from app.core.constants import ITEM_POSTS_PATH

def load_item_post_by_id(item_post_id: str) -> dict:
    file_path = os.path.join(ITEM_POSTS_PATH, f"{item_post_id}.json")
    with open(file_path, "r", encoding="utf-8") as file:
        return json.load(file)

from app.core.constants import ITEM_POSTS_PATH
from app.utils.file_repository_utils import build_flat_data_path, load_json_from_path


def load_item_post_by_id(item_post_id: str) -> dict:
    path = build_flat_data_path(ITEM_POSTS_PATH, item_post_id)
    return load_json_from_path(path)

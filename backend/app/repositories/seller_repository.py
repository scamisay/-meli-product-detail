DATA_FILENAME = "data.json"

from app.core.constants import SELLERS_PATH
from app.utils.file_repository_utils import load_json_from_path, build_nested_data_path

def load_seller_by_id(seller_id: str) -> dict:
    path = build_nested_data_path(SELLERS_PATH, seller_id)
    return load_json_from_path(path)

import os
from app.core.constants import ARTICLES_PATH
from app.utils.file_repository_utils import build_nested_data_path, load_json_from_path, \
    list_image_files_from_directory, resolve_file_path_or_fail

DATA_FILENAME = "data.json"
IMAGES_DIR = "images"

def load_article_by_id(article_id: str) -> dict:
    path = build_nested_data_path(ARTICLES_PATH, article_id)
    return load_json_from_path(path)
def list_article_image_names_by_id(article_id: str) -> list[str]:
    """Return list of image file names for a given article."""
    image_dir = os.path.join(ARTICLES_PATH, article_id, IMAGES_DIR)
    return list_image_files_from_directory(image_dir)

def resolve_article_image_path(article_id: str, image_name: str) -> str:
    """Resolve full path to an image file for a given article."""
    image_dir = os.path.join(ARTICLES_PATH, article_id, IMAGES_DIR)
    return resolve_file_path_or_fail(image_dir, image_name)
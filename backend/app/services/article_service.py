from app.repositories.article_repository import load_article_by_id, list_article_image_names_by_id, \
    resolve_article_image_path


def get_article_by_id(article_id: str) -> dict:
    return load_article_by_id(article_id)

def get_article_image_names(article_id: str) -> list[str]:
    return list_article_image_names_by_id(article_id)

def get_article_image_path(article_id: str, image_name: str) -> str:
    return resolve_article_image_path(article_id, image_name)
from app.repositories.article_repository import load_article_by_id

def get_article_by_id(article_id: str) -> dict:
    return load_article_by_id(article_id)

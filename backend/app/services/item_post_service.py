from app.repositories.item_post_repository import load_item_post_by_id, load_all_item_posts


class ItemPostService:
    def __init__(self):
        pass

    def get_item_post(self, item_post_id: str) -> dict:
        return load_item_post_by_id(item_post_id)

    def get_paginated_item_posts(self, limit: int, offset: int) -> list[dict]:
        """
        Return a subset of item posts using offset-based pagination.
        """
        all_items = load_all_item_posts()
        return all_items[offset:offset + limit]
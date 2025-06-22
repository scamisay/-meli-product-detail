from app.repositories.item_post_repository import load_item_post_by_id

class ItemPostService:
    def __init__(self):
        pass

    def get_item_post(self, item_post_id: str) -> dict:
        return load_item_post_by_id(item_post_id)

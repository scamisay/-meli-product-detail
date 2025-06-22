from app.repositories.seller_repository import load_seller_by_id

class SellerService:
    def __init__(self):
        pass

    def get_seller(self, seller_id: str) -> dict:
        return load_seller_by_id(seller_id)

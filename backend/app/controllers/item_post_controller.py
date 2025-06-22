from fastapi import APIRouter, HTTPException
from app.services.item_post_service import ItemPostService

router = APIRouter(prefix="/item-posts", tags=["item_posts"])
service = ItemPostService()

@router.get("/{item_post_id}")
def get_item_post(item_post_id: str):
    try:
        item_post = service.get_item_post(item_post_id)
        return item_post
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="ItemPost not found")

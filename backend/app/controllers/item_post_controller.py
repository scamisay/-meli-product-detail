from fastapi import APIRouter, HTTPException, Query
from app.services.item_post_service import ItemPostService

router = APIRouter()
service = ItemPostService()

@router.get("/{item_post_id}")
def get_item_post(item_post_id: str):
    try:
        item_post = service.get_item_post(item_post_id)
        return item_post
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="ItemPost not found")

@router.get("/")
def get_item_posts_paginated(limit: int = Query(3, gt=0, le=10), offset: int = Query(0, ge=0)):
    """
    Return a paginated list of item posts.
    """
    return service.get_paginated_item_posts(limit=limit, offset=offset)
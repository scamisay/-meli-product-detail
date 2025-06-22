from fastapi import APIRouter, HTTPException
from app.services.seller_service import SellerService

router = APIRouter(prefix="/sellers", tags=["sellers"])
service = SellerService()

@router.get("/{seller_id}")
def get_seller(seller_id: str):
    try:
        seller = service.get_seller(seller_id)
        return seller
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Seller not found")

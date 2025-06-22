from fastapi import APIRouter, HTTPException
from app.services.seller_service import SellerService
import json

router = APIRouter()
service = SellerService()

@router.get("/{seller_id}")
def get_seller(seller_id: str):
    try:
        seller = service.get_seller(seller_id)
        return seller
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Seller not found")
    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail="Invalid seller JSON")

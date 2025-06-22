import os
import json
from fastapi import APIRouter, HTTPException
from app.services.article_service import get_article_by_id

router = APIRouter()

@router.get("/{article_id}")
def read_article(article_id: str):
    try:
        article = get_article_by_id(article_id)
        return article
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Article not found")
    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail="Invalid article JSON")

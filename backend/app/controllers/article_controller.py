import os
import json
from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
from app.services.article_service import get_article_by_id, get_article_image_names, get_article_image_path

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

@router.get("/{article_id}/images")
def list_article_images(article_id: str):
    try:
        images = get_article_image_names(article_id)
        return {"images": images}
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Article not found")

@router.get("/{article_id}/images/{image_name}")
def serve_article_image(article_id: str, image_name: str):
    try:
        image_path = get_article_image_path(article_id, image_name)
        return FileResponse(image_path)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Image not found")
# backend/app/controllers/__init__.py

from fastapi import FastAPI

from . import article_controller, seller_controller, item_post_controller

def register_routers(app: FastAPI):
    app.include_router(article_controller.router, prefix="/articles", tags=["Articles"])
    app.include_router(seller_controller.router, prefix="/sellers", tags=["Sellers"])
    app.include_router(item_post_controller.router, prefix="/item-posts", tags=["Item Posts"])

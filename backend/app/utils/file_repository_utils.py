import os
import json
from typing import Any


def load_json_from_path(file_path: str) -> dict:
    """Safely loads a JSON file and returns its contents as a dictionary."""
    if not os.path.isfile(file_path):
        raise FileNotFoundError(f"File not found: {file_path}")
    with open(file_path, "r", encoding="utf-8") as file:
        return json.load(file)


def build_nested_data_path(base_path: str, entity_id: str, filename: str = "data.json") -> str:
    """Builds a standard nested path: base_path/entity_id/filename."""
    return os.path.join(base_path, entity_id, filename)


def build_flat_data_path(base_path: str, entity_id: str, extension: str = "json") -> str:
    """Builds a standard flat path: base_path/entity_id.extension."""
    return os.path.join(base_path, f"{entity_id}.{extension}")

def list_image_files_from_directory(directory_path: str, valid_extensions: tuple[str, ...] = (".webp", ".jpg", ".png")) -> list[str]:
    """List image files in a directory, filtering by valid extensions."""
    if not os.path.exists(directory_path):
        raise FileNotFoundError(f"Directory not found: {directory_path}")
    return sorted([
        file for file in os.listdir(directory_path)
        if file.lower().endswith(valid_extensions)
    ])


def resolve_file_path_or_fail(directory_path: str, file_name: str) -> str:
    """Construct a file path and ensure it exists."""
    path = os.path.join(directory_path, file_name)
    if not os.path.isfile(path):
        raise FileNotFoundError(f"File not found: {path}")
    return path

def list_json_objects_from_directory(directory_path: str) -> list[dict]:
    """
    Load all JSON files from a flat directory and return them as a list of dicts.
    """
    if not os.path.exists(directory_path):
        raise FileNotFoundError(f"Directory not found: {directory_path}")
    items = []
    for filename in sorted(os.listdir(directory_path)):
        if filename.endswith(".json"):
            path = os.path.join(directory_path, filename)
            with open(path, "r", encoding="utf-8") as f:
                try:
                    items.append(json.load(f))
                except json.JSONDecodeError:
                    continue
    return items

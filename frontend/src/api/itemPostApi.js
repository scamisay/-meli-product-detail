import { API_BASE_URL } from "../config/api.js";

export async function fetchItemPost(id) {
  const res = await fetch(`${API_BASE_URL}/item-posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch item post");
  return res.json();
}

// src/api/sellerApi.js
import { API_BASE_URL } from "../config/api.js";

export async function fetchSeller(id) {
  const res = await fetch(`${API_BASE_URL}/sellers/${id}`);
  if (!res.ok) throw new Error("Failed to fetch seller");
  return res.json();
}

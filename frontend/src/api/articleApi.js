// frontend/src/api/articleApi.js
import { API_BASE_URL } from "../config/api";

/**
 * Fetches the list of image names for a given article.
 * @param {string} articleId
 * @returns {Promise<string[]>}
 */
export async function getArticleImageNames(articleId) {
  const response = await fetch(`${API_BASE_URL}/articles/${articleId}/images`);
  if (!response.ok) {
    throw new Error(`Failed to fetch image names for article ${articleId}`);
  }
  const data = await response.json();
  return data.images;
}

/**
 * Builds the full image URL for a given article and image name.
 * @param {string} articleId
 * @param {string} imageName
 * @returns {string}
 */
export function getArticleImageUrl(articleId, imageName) {
  return `${API_BASE_URL}/articles/${articleId}/images/${encodeURIComponent(imageName)}`;
}

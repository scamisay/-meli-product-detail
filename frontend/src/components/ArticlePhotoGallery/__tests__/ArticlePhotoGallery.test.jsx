import { render, screen } from '@testing-library/react'
import ArticlePhotoGallery from '../ArticlePhotoGallery'

vi.mock('../../../api/articleApi', async () => {
  return {
    getArticleImageNames: () => Promise.resolve(['1.webp']),
    getArticleImageUrl: (articleId, imageName) =>
      `http://mocked-url.com/articles/${articleId}/images/${imageName}`,
  }
})

test('renders ArticlePhotoGallery with one image', async () => {
  render(<ArticlePhotoGallery article={{ id: 'test-article' }} />)

  const image = await screen.findByAltText(/miniatura del producto/i)
  expect(image).toBeInTheDocument()
})

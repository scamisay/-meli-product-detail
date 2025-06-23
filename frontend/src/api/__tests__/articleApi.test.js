// frontend/src/api/__tests__/articleApi.test.js
import { getArticleImageNames } from '../articleApi'

global.fetch = vi.fn()

describe('getArticleImageNames', () => {
  it('returns images array from mocked response', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ images: ['1.webp'] }),
    })

    const result = await getArticleImageNames('mock-article')
    expect(Array.isArray(result)).toBe(true)
  })
})

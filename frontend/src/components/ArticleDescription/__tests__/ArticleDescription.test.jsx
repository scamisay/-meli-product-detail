import { render, screen } from "@testing-library/react"
import ArticleDescription from "../ArticleDescription"

test("renders a basic ArticleDescription", () => {
  render(
    <ArticleDescription
      article={{
        id: "test-article",
        title: "Test Product",
        description: "Esto es una descripción simple.",
        attributes: {}
      }}
    />
  )

  expect(screen.getByText("Esto es una descripción simple.")).toBeInTheDocument()
})

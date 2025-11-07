import { render, screen } from "@testing-library/react";
import Heroes from "../components/Heroes/Heroes";

describe("Heroes component", () => {
  test("should be rendered without props", () => {
    render(<Heroes />)

    expect(screen.getByText(/no heroes/i)).toBeInTheDocument()
    expect(screen.queryByRole("list")).not.toBeInTheDocument()
  });
  test("should be rendered with props", () => {
    let mockHeroes=[
        {id:100,name:"super man",strength:10},
        {id:101,name:"bat man",strength:20},
    ]
    render(<Heroes heroes={mockHeroes} />)

    expect(screen.queryByText(/no heroes/i)).not.toBeInTheDocument()
    expect(screen.queryByRole("list")).toBeInTheDocument()

    let liTags=screen.queryAllByRole("listitem")
    expect(liTags).toHaveLength(2)
    expect(liTags[0].textContent).toContain(mockHeroes[0].name)
  });
  
});



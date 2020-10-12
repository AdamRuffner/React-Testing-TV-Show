import React from "react";
import { render, screen, wait, fireEvent } from "@testing-library/react";
import Episodes from "./Episodes";

describe("Episodes Renders Tests", () => {
    const mockEpisodes = [
      {
        season: 1,
        number: 3,
        summary: "Never seen this episode",
        runtime: 60,
        id: 2,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/132/332039.jpg",
        },
        name: "Cool Episode",
      }
    ];

  test('render without errors and no data', () => {
      render(<Episodes episodes={[]} />);
  });

  test('renders with mock data', () => {
      render(<Episodes episodes={mockEpisodes} />)
      expect(screen.queryAllByTestId('episode')).toHaveLength(0) //only 1 id so length 0 was used
  })
});

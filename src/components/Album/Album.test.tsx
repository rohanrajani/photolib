import { render, screen } from "@testing-library/react";
import { albumMock } from "../../mock/mock";
import AlbumCard from "./Album";
import "@testing-library/jest-dom/extend-expect";

describe("AlbumData Loading", () => {
  it("AlbumCard component", async () => {
    const goToLink = jest.fn();
    render(
      <AlbumCard
        album={albumMock}
        goToLink={() => {
          goToLink();
        }}
      />
    );
    expect(await screen.findByText(albumMock.title)).toBeVisible();
  });
});

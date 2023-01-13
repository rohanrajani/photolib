import { render, screen } from "@testing-library/react";
import { photoMock } from "./mock";
import PhotoCard from "../components/photo";
import "@testing-library/jest-dom/extend-expect";

describe("PhotoData Loading", () => {
  it("PhotoCard component", async () => {
    const handleOpen = jest.fn();
    render(
      <PhotoCard
        photo={photoMock}
        handleOpen={() => {
          handleOpen();
        }}
      />
    );
    expect(await screen.findByText(photoMock.title)).toBeVisible();
  });
});

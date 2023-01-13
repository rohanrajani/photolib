import { render, screen } from "@testing-library/react";
import { photoMock } from "../../mock/mock";
import PhotoCard from "./Photo";
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

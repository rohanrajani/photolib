import { render, screen } from "@testing-library/react";
import { photoMock } from "../../mock/mock";
import PhotoModel from "./PhotoModel";
import "@testing-library/jest-dom/extend-expect";

describe("PhotoModel Loading", () => {
  it("PhotoModel component", async () => {
    const handleClose = jest.fn();
    render(
      <PhotoModel
        img={photoMock}
        open={true}
        handleClose={() => {
          handleClose();
        }}
      />
    );
    expect(await screen.findByText(photoMock.title)).toBeVisible();
  });

  it("PhotoModel closed component", async () => {
    const handleClose = jest.fn();
    render(
      <PhotoModel
        img={photoMock}
        open={false}
        handleClose={() => {
          handleClose();
        }}
      />
    );
    const titletext = screen.queryByText(photoMock.title);
    expect(titletext).toBeNull();
  });
});

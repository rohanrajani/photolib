import { render, screen } from "@testing-library/react";
import { userMock } from "../../mock/mock";
import UserCard from "./User";
import "@testing-library/jest-dom/extend-expect";

describe("UserData Loading", () => {
  it("UserCard component", async () => {
    const goToLink = jest.fn();
    render(
      <UserCard
        user={userMock}
        goToLink={() => {
          goToLink();
        }}
      />
    );
    expect(await screen.findByText(userMock.name)).toBeVisible();
  });
});

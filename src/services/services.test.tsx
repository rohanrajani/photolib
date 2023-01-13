import axios from "axios";
import { getAllUsers } from "./userServices";
import { getUserAlbumList } from "./albemServices";
import { getAlbumPhotoList } from "./photoServices";

import { userMock, albumMock, photoMock } from "../mock/mock";

jest.mock("axios");

describe("All Services", () => {
  it("User Sevice getAllUsers", async () => {
    axios.get = jest.fn().mockReturnValue({ data: [userMock] });
    const res = await getAllUsers();
    expect(axios.get).toBeCalled();
    expect(res).toMatchObject([userMock]);
  });

  it("Album Sevice getUserAlbumList", async () => {
    axios.get = jest.fn().mockReturnValue({ data: [albumMock] });
    const res = await getUserAlbumList(userMock.id.toString());
    expect(axios.get).toBeCalled();
    expect(res).toMatchObject([albumMock]);
  });

  it("Photo Sevice getAlbumPhotoList", async () => {
    axios.get = jest.fn().mockReturnValue({ data: [photoMock] });
    const res = await getAlbumPhotoList(albumMock.id.toString());
    expect(axios.get).toBeCalled();
    expect(res).toMatchObject([photoMock]);
  });
});

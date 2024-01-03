import { lazy } from "react";

const ProfilePage = lazy(
  () =>
    new Promise((res) => {
      //@ts-ignore
      setTimeout(() => res(import("./ProfilePage")), 1000); /// checking for working
    })
);
export default ProfilePage;

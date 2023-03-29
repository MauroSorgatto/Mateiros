import { useRecoilState } from "recoil";
import { AppRouter } from "./App";
import { AccountRouter } from "./Account";
import { userState } from "../state/user";

export const UserRouter = () => {
  const [user] = useRecoilState(userState);

  return <AppRouter />;
};

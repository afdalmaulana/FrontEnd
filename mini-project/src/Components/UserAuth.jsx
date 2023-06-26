import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { keepLogin } from "../redux/reducer/UserReducer";

const UserAuth = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.UserReducer);
  console.log(user);
  useEffect(() => {
    dispatch(keepLogin());
  }, [dispatch]);
  return <>{children}</>;
};
export default UserAuth;

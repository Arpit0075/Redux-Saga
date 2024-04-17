import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Redux/Actions/user";
import Card from "./Card";

const User = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      {users.loading && <p>Loading...</p>}
      {users.length === 0 && !loading && <p>No users available!</p>}
      {error && !loading && <p>{error}</p>}
      {users.length > 0 &&
        users.map((user) => <Card key={user.id} user={user} />)}
    </>
  );
};

export default User;

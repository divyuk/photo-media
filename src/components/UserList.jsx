import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skelton from "./Skelton";

function UserList() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) return <Skelton times={6} className="h-10 w-full" />;

  if (error) return <div>Error in fetching data...</div>;

  return <div>{data.length}</div>;
}

export default UserList;

import { GoTrash } from "react-icons/go";
import { useThunk } from "../hooks/use-thunk";
import Button from "./Button";
import { removeUser } from "../store/thunks/removeUser";
function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  function handleClick() {
    doRemoveUser(user);
  }

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <Button loading={isLoading} onClick={handleClick}>
          <GoTrash />
        </Button>
        {error && <div>Error in deleting user</div>}
        {user.name}
      </div>
    </div>
  );
}

export default UsersListItem;

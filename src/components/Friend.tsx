import {User} from "../models/User.tsx";

type FriendProps = {
  friend: User
}

export const FriendComponent = ({friend}: FriendProps) => {
  return (
    <h3>{friend.id} {friend.name}</h3>
  );
};

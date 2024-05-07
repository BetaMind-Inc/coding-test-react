import {User} from "../models/User.tsx";
import {FriendComponent} from "./Friend.tsx";

type UserProps = {
  user: User
}

export const UserComponent = ({user}: UserProps) => {
  return (
    <>
      <h1> {user.name} </h1>
      {
        user.maybeFriendIds?.map(friend => {
          return (
              <FriendComponent friend={friend}/>
            )
        })
      }
    </>

  );
};

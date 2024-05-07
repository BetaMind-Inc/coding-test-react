import Logo from "/logo.svg";
import "./App.css";
import {useEffect, useState} from "react";
import {User} from "./models/User.tsx";
import {UserComponent} from "./components/User.tsx";

const fetchUser = async () => {
  return await fetch('https://private-e843bc-betamindhiring.apiary-mock.com/users/1/maybe_friends', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())
    .catch(err => console.log(err))
}
const App = () => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    fetchUser()
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
  }, []);

  if (!user) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div>
        <img src={Logo} className="logo" alt="logo" />
      </div>
      <h1>Social Network App</h1>
      <div>
        <h3>Maybe friends?</h3>
        {/*
        TODO: show people who may be friends
        you can get date from the below endpoint:
        https://private-e843bc-betamindhiring.apiary-mock.com/users/1/maybe_friends
      */}
        <UserComponent user={user}/>
      </div>
    </>
  );
};

export default App;

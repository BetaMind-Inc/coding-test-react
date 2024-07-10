import Logo from "/logo.svg";
import "./App.css";
import Error from "./components/Error";
import Loading from "./components/Loading";

const App = () => {
  return (
    <>
      <div>
        <img src={Logo} className="logo" alt="logo" />
      </div>
      <h1>Social Network App</h1>
      <div>
        <h3>Maybe friends?</h3>
        {/*
          TODO: show uniq view seconds, and pls use <Loading /> and <Error />
        
          you can get date from the below endpoint:
          https://private-e843bc-betamindhiring.apiary-mock.com/users/1/maybe_friends
        */}
      </div>
    </>
  );
};

export default App;

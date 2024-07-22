import Logo from "/logo.svg";
import "./App.css";
import { useFriends } from "./hooks/useFriends";
// import { Error } from "./components/Error";
import { Loading } from "./components/Loading";

/**
 * TODO:
 * 1. Show error message by using <Error /> component:
 *   - Enhance useFriends hook to support error handling
 * 2. Change to be able to paginate friends list:
 *   - Enhance useFriends hook to support pagination
 *   - Show list of friends with 2 button Next, Previous for pagination
 */

const App = () => {
  const { users, loading } = useFriends();

  return (
    <>
      <div>
        <img src={Logo} className="logo" alt="logo" />
      </div>
      <h1>Social Network App</h1>
      <div>
        <h3>friends?</h3>
        {loading && <Loading />}
        <div className="friends">
          {users.map((user) => (
            <p key={user.id}>{`${user.firstName} ${user.lastName}`}</p>
          ))}
        </div>

        <div className="pagination">
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
    </>
  );
};

export default App;

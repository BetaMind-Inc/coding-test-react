import Logo from "/logo.svg";
import "./App.css";
import {Error} from "./components/Error";
import {Loading} from "./components/Loading";
import {useState} from 'react';
import {UseFriends} from "./hooks/Friends.tsx";
import {FriendEntity} from "./entities/friends.entity.ts";

/**
 * TODO:
 * 1. Create Custom hook is call useFriends with these features:
 *   - Fetch data from endpoint
 *   - Pagination with data from endpoint, pls take care best practice for pagination
 *   => Here is  endpoint you can use:
 *    - https://dummyjson.com/users?limit=5&skip=0&select=id,firstName,lastName,maidenName,age
 * 2. Apply above custom hook:
 *   - Show list of friends with 2 button Next, Previous for pagination
 *   - Show error message by using <Error /> component, show <Loading /> component while fetching data
 *
 */

const App = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const GetPrevPage = (page: number): number => {
        const dataPage = page - 1
        if (dataPage < 1) {
            return page
        }
        return page - 1;
    }

    const result = UseFriends(currentPage)
    return (
        <>
            <div>
                <img src={Logo} className="logo" alt="logo"/>
            </div>
            <h1>Social Network App</h1>
            <div>
                <h3>friends?</h3>
                { result.isLoading ? <Loading /> : result.friends.map((friend : FriendEntity) => {
                    return (
                        <div key={friend.id}>
                            <div>{ friend.firstName + ' ' + friend.lastName } - { friend.age }</div>
                        </div>
                    );
                }) }

                { result.error && <Error message={result.error} />}

                <div className="pagination">
                    {currentPage > 1 && <button onClick={() => setCurrentPage(GetPrevPage(currentPage))}>Prev</button>}
                    <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                </div>
            </div>
        </>
    );
};

export default App;

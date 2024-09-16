import {useState, useEffect} from 'react';
import {FriendEntity} from "../entities/friends.entity.ts";

export const UseFriends = (page = 1) => {
    const BASE_URL = "https://dummyjson.com/users";
    const [friends, setFriends] = useState<FriendEntity[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const [limit, setLimit] = useState(5)
    const [error, setError] = useState(null)

    async function fetchFriends(page = 1) {
        try {
            let skip = 0
            if (page !== 1) {
                skip = page * limit
            }

            const responses: Response = await fetch(BASE_URL + "?limit=" + limit + "&skip=" + skip + "&select=id,firstName,lastName,maidenName,age")
            const dataRes = await responses.json()
            setFriends(dataRes.users)
            setIsLoading(!isLoading)
            setLimit(dataRes.limit)
        } catch (err: any) {
            setIsLoading(!isLoading)
            setError(err.message)
        }
    }

    useEffect(() => {
        setIsLoading(true)
        fetchFriends(page).then(() => {})
    }, [page]);

    return {isLoading, friends, error}
}

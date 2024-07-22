import { useEffect, useState } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
}

interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

const fetcher = async <T>(url: string) => {
  const res = await fetch(url);
  const json = (await res.json()) as T;
  return json;
};

export const useFriends = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const { users } = await fetcher<UsersResponse>(
        "https://dummyjson.com/users?limit=5&skip=0&select=id,firstName,lastName,maidenName,age"
      );
      setUsers(users);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { users, loading };
};

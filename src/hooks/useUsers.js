import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://e-sheba-server.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  return [users, setUsers];
};

export default useUsers;

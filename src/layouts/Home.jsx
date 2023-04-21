import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  // console.log(users)
  return (
    <div>
      {users.map((val,key) => {
          return (
            <div key={key}>
              <p>{val.email}</p>
            </div>
          );
          
      })}
    </div>
  );
}

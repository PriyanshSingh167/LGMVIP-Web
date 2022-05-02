import React, { useEffect, useState } from "react";
import UserItem from "./UserItem";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    usersData();
  }, []);

  const usersData = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");

    const Userdata = await response.json();
    setUsers(Userdata.data);
    // console.log(data);
  };
  return (
    <div>
      <button
        type="submit"
        className="btn btn-lg btn-primary btn-block"
        onClick={handleClick}
      >
        Show
      </button>
      {show ? (
        <div className="results">
          {users.map((user, index) => (
            <UserItem key={index} user={user} />
          ))}
        </div>
      ) : (
        <h2 className="heading">Click Button above to show items</h2>
      )}
    </div>
  );
}

export default UserResults;

import React, { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";
import { getSubjects } from "../api/subjectApi";
import "../css/Home.css";

function Hero() {
  // creating state variable and setter function
  const [users, setUsers] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    getUsers().then(data => setUsers(data));
    getSubjects().then(data => setSubjects(data));
  }, []);

  return (
    <div>
      <div className="back1">
        <div className="box1">
          hello
        </div>
        <div className="box2">
          <p>
            <code>
              {'<span>Hey I am '}
              {users.length > 0 && <span>{users[0].name}</span>}
              {'</span>'}
            </code>
          </p>
          <h1><code>{'Senior { FULL STACK developer }'}</code></h1>
          <h1><code>{'Web & Machine Learning Developer'}</code></h1>
          <p><code>{'I know technologies like Java, Python, C, C++'}</code></p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

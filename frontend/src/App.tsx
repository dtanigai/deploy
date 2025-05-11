import { useEffect, useState } from 'react';

function App() {
  // const [message, setMessage] = useState('');
  // // const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([
    {
        "email": "tanigai@example.com",
        "id": 1,
        "username": "Tanigaiarassane"
    },
    {
        "email": "ram@example.com",
        "id": 2,
        "username": "Ram"
    }
]);

  useEffect(() => {
  //   // fetch('http://localhost:8080/api/')
  //   //   .then(response => response.json())
  //   //   .then(data => {
  //   //     setMessage(data.message);
  //   //     setLoading(false);
  //   //   })
  //   //   .catch(err => {
  //   //     console.error(err);
  //   //     setLoading(false);
  //   //   });

    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
<h1>User list</h1>
        {users.map((user) =>
        <li key={user?.id}>{user?.username}</li> 
        )}
    </>
    
  );
}

export default App;
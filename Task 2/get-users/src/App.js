import './App.css';
import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";



const App=()=> {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [isError , setError] = useState(false);

  const fetchUsers=async()=>{
    setLoading(true);
  const response = await fetch('https://reqres.in/api/users?page=1')
  if (response.ok) {
    const data = await response.json()
    setUsers(data.data);
    setLoading(false);
    
  } else {
    setError(true);
    setLoading(false);
  }
  }

  return (
    <>
    <div className="navbar">
    <a class="navbar-brand">
        </a>
            <h1>Cafe Coffee Day</h1>
            <form class="d-flex col-3" style={{}}>
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={fetchUsers}
            >
              Get Users
            </button>
          </form>
    </div>
    <div className="container" >
    <div className="row">
      <h3>Regular Customers</h3>
    {isLoading?(<div className="loader"></div>):null}
    {users.map(user=>{
      return(
        <div className="col-sm-4">
        <div className="card" >
            <img src={user.avatar} className="card-img-top" alt="user-image"/>
              <div className="card-body">
               <h5 className="card-title">{user.first_name} {user.last_name}</h5>
               <p className="card-text">Email: {user.email}</p>
              </div>
        </div>
        </div>
        )
    }
    )}
    </div>
    </div>
  </>
  );
  
}

export default App;

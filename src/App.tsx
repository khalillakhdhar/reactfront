import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [users,setUsers]=useState([]);
  const fetchUsers= async () =>{
    axios.get('https://662e208ca7dda1fa378c2077.mockapi.io/user')
    .then(response => {setUsers(response.data)
      console.log(response);
    }

  ).catch(err=>{
    console.log(err)
  });
  }

  useEffect(() => {
   
  fetchUsers();
   }, []);
   const handleDelete = async (id) =>{
    if(confirm('vous voulez supprimer?'))
    {
    axios.delete(`https://662e208ca7dda1fa378c2077.mockapi.io/user/${id}`)
    .then(()=>{console.log("supprimé")
      fetchUsers()
    })
    .catch(err=>{
      console.log(err)
    })
  }
   }
   
  return (
    <>
    <div className="container">
      <h2 className="text-center">Liste des utilisateurs</h2>
      <br></br>
      <table className="table table-bordered">
        <thead>
          <tr >
            <th>nom</th>
            <th>prénom</th>
            <th>Action</th>

          </tr>
          </thead>
          <tbody>
            {
              users.map(user =>
              (
                <tr key={user.id}>
                  <td>{user.nom}</td>
                  <td>{user.prenom}</td>
                  <td><button onClick={()=>handleDelete(user.id)} className="btn btn-danger">supprimer</button></td>

                </tr>
              )

              )
            }
          </tbody>
       
      </table>
    </div>

   
    </>
  )
}

export default App


import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)

    const handleDeleteUser = _id =>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE'
        }
        )
        .then(res =>res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                alert('User deleted successfully');
                const remaining = users.filter(user =>user._id !== _id);
                setUsers(remaining);
            }
        })
    }
    return (
        <div>
            <h3>Total users: {users.length}</h3>

            {
                users.map(user =><p key={user._id}>{user.name}: {user.email} --{user._id}<Link to={`/update/${user._id}`}>Update</Link> <button onClick={() => handleDeleteUser(user._id)}>X</button></p>)
            }
        </div>
    );
};

export default Users;
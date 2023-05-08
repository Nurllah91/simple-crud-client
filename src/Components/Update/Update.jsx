import { useLoaderData } from "react-router-dom";


const Update = () => {

    const updateUser = useLoaderData();

    const handleUpdateUser = event =>{
        event.preventDefault();


        const form = event.target;
        const name = form.name;
        const email = form.email;
    }

    return (
        <div>
            <h2>Update information of {updateUser.name}</h2>

            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" id="name" defaultValue={updateUser.name} />
                <br />
                <input type="email" name="email" id="email" defaultValue={updateUser?.email} />
                <br />
                <input type="submit" value='Update' />
            </form>
        </div>
    );
};

export default Update;
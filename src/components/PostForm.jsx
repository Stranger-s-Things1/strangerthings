import { POST_API_URL } from "../api/api"
import NavBar from "./NavBar"
const handleSubmit = async (e) =>{
     

    // try{
    //     const response = await fetch(`${POST_API_URL}`, {
    //         method: form.method,
    //         headers: {
    //             'Content-Type':'application/json'
    //         },
            
    //     })
    // } catch(error){
    //     console.log(error);
    // }
}

const PostForm = () =>{

    return (
        <>
        <NavBar />
        <form method="POST" onSubmit={handleSubmit}>
            <input name="title" placeholder="Title"/>
            <input name="description" placeholder="Description"/>
            <input name="price" placeholder="Price"/>
            <input name="location" placeholder="location"/>
            <select name="willDeliver" defaultValue={false}>
                <option value={true}>True</option>
                <option value={false}>False</option>
            </select>
            <button>Submit</button>
        </form>
        </>
    )
}

export default PostForm;
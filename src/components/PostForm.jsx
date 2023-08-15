import { POST_API_URL } from "../api/api"
import NavBar from "./NavBar"


const handleSubmit = async (e) =>{  
    
    e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const postData = Object.fromEntries(formData.entries());

    try{
        const response = await fetch(`${POST_API_URL}`, {
            method: form.method,
            headers: {
                'Content-Type':'application/json',
                Authorization : `Bearer ${localStorage.getItem("Token")}`
            },
            body: JSON.stringify({
                post: {
                    "title": `${postData.title}`,
                    "description": `${postData.description}`,
                    "price": `${postData.price}`,
                    "location": `${postData.location}`,
                    "willDeliver": `${postData.willDeliver}`,
                    
                }
            })            
        })
        const result = await response.json();
        console.log(result)
    } catch(error){
        console.log(error);
    }
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
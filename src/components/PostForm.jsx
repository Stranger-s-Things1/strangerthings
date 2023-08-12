import { POST_API_URL } from "../api/api"

const PostForm = () =>{

    return (
        <>
        <form method="POST" onSubmit={handleSubmit}>
            <input placeholder="Title"/>
            <input placeholder="Description"/>
            <input placeholder="Price"/>
            <input placeholder="location"/>
            <select defaultValue={false}>
                <option value={true}>True</option>
                <option value={false}>False</option>
            </select>
        </form>
        </>
    )
}

export default PostForm;
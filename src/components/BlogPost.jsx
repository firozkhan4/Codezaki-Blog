import { useContext } from "react";
import Post from "./Post";
import BlogContext from "../context/BlogContext";
import { useNavigate } from "react-router-dom";



export default function BlogPost() {

    const posts = useContext(BlogContext)
    const navigate = useNavigate()
    const handleBlogPost = (id) => {
        navigate(`/post/${id}`)
    }


    return (
        <div className="w-full flex justify-center mt-5">
            <div className="w-full p-4 grid gap-16 grid-cols-1 lg:grid-cols-2 lg:place-items-center lg:w-[80%]">
                {posts.map((post) => (
                    <Post key={post.node.id} post={post} onClick={() => handleBlogPost(post.node.id)} /> // Pass a function reference to onClick
                ))}
            </div>
        </div>
    );
}

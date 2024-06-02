import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import BlogContext from "../context/BlogContext";
import ReactMarkdown from 'react-markdown'

export default function Blog() {
    const { id } = useParams();
    const posts = useContext(BlogContext);
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const findPost = posts.map((post) => post.id === id)
        setBlog(findPost)
    }, [id, posts]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (

        <head>
            <title>{blog.title}</title>
        </head>

    );
}

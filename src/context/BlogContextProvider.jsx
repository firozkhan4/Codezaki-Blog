import React, { useState, useEffect } from "react";
import BlogContext from "./BlogContext";
import { GET_ALL_POSTS } from "../components/Queries"

const BlogContextProvider = ({ children }) => {

    const [posts, setPosts] = useState([]); // State to hold the list of posts
    const [totalPost, setTotalPost] = useState(2)


    // useEffect hook to fetch posts when the component mounts
    useEffect(() => {
        // Fetch posts and update the state
        GET_ALL_POSTS(totalPost)
            .then((res) => {
                setPosts(res.edges); // Update state with fetched posts

                if (totalPost != res.totalDocuments) {
                    setTotalPost(res.totalDocuments)
                }
            })
            .catch((error) => {
                console.log(error); // Log any errors that occur during fetch
            });
    }, [totalPost]); // Empty dependency array means this effect runs once when the component mounts

    return (
        <BlogContext.Provider value={posts}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider
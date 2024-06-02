import Post from "./Post"; // Importing the Post component
import PropTypes from 'prop-types'; // Importing PropTypes for type-checking

// Defining PropTypes for the BlogPost component
BlogPost.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
            id: PropTypes.string.isRequired, // ID is required and must be a string
            title: PropTypes.string.isRequired, // Title is required and must be a string
            // Add other properties as needed
        }).isRequired
    })).isRequired, // posts prop is required and must be an array of objects with the specified shape
}

// BlogPost component definition
export default function BlogPost({ posts }) {

    return (
        <div className="w-full flex justify-center mt-5"> {/* Container with full width and centered content */}
            <div className="w-full p-4 grid gap-8 grid-cols-1 lg:grid-cols-2 lg:place-items-center lg:w-[80%]"> {/* Grid container for posts */}
                {/* Iterate over posts and render a Post component for each one */}
                {posts.map((post) => (
                    <Post key={post.node.id} post={post} /> // Each Post component must have a unique key
                ))}
            </div>
        </div>
    );
}

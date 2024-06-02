import { IoBookOutline } from "react-icons/io5"; // Importing book icon from react-icons library
import PropTypes from 'prop-types'; // Importing PropTypes for type-checking
import { format } from "date-fns"; // Importing date-fns for date formatting

// Defining PropTypes for the Post component
Post.propTypes = {
    post: PropTypes.object.isRequired // post prop is required and must be an object
}

// Post component definition
export default function Post({ post }) {
    // Destructuring the post object to extract necessary fields
    const { title, brief, coverImage, readTimeInMinutes, publishedAt } = post.node;

    // Formatting the published date to a readable format
    const formattedDate = format(new Date(publishedAt), 'MMMM d, yyyy');

    return (
        <div className="grid gap-3 lg:w-4/5">
            <div className="flex justify-center w-5/5 h-5/5 ">
                <img
                    src={coverImage?.url} // Using coverImage URL if available
                    alt={title} // Providing alt text for accessibility
                    className="rounded-lg overflow-hidden w-full h-full"
                />
            </div>
            <div className="grid gap-2">
                <h2 className="text-3xl font-bold">{title}</h2>
                <span className="flex items-center gap-3 text-gray-500 text-sm">
                    <p>{formattedDate}</p>
                    <span className="flex items-center gap-2">
                        <IoBookOutline />
                        <p>{readTimeInMinutes} min read</p>
                    </span>
                </span>
                <div className="text-lg font-medium text-gray-600">
                    <p>{brief}</p>
                </div>
            </div>
        </div>
    );
}

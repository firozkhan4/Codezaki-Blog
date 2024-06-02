import { useEffect, useState } from "react"; // Importing hooks from React
import NavBar from "./components/NavBar"; // Importing NavBar component
import BlogPost from "./components/BlogPost"; // Importing BlogPost component
import { GET_ALL_POSTS } from "./components/Queries"; // Importing the query function to get all posts
import SearchBox from "./components/SearchBox";


export default function App() {
  const [posts, setPosts] = useState([]); // State to hold the list of posts
  const [totalPost, setTotalPost] = useState(2)
  const [searchTerm, setSearchTerm] = useState("")
  const [showSearchBox, setShowSearchBox] = useState(false)

  const handleSearchTerm = (data) => {
    setSearchTerm(data)
  }

  const handleShowSearchBox = (data) => {
    setShowSearchBox(data)
  }

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
    <>
      <div>
        <div className={`fixed flex justify-center items-center w-full h-screen bg-[#00000054] ${showSearchBox ? 'block' : 'hidden'}`}>
          <SearchBox handleSearchTerm={handleSearchTerm} />
          <div>

          </div>

        </div>
        <NavBar handleShowSearchBox={handleShowSearchBox} /> {/* Render the NavBar component */}
        <BlogPost posts={posts} /> {/* Render the BlogPost component with the fetched posts */}
      </div >
    </>
  );
}

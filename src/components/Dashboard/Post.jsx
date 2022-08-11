import { useEffect, useState } from "react";
import { useAuth } from "../auth/auth";
import moment from "moment";
const Post = ({ lang_id }) => {
  const [posts, setPosts] = useState([]);
  const auth = useAuth();
  const fetchData = async () => {
    const response = await fetch(
      `https://myapi.dataxis.ng//languages/${lang_id}/posts`
    );
    const data = await response.json();
    setPosts(data.posts);
    console.log(data.posts);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {posts && (
        <div className="flex">
          {posts.map((post) => {
            console.log(post.user_id.username);

            const timeago = moment(post.user_id.created_at).fromNow();
            return (
              <div className="details flex">
                <img src="" alt="img" />
                <p>{post.user_id.username}</p>
                <p>{timeago}</p>
              </div>
            );
          })}
          <button>View More</button>
        </div>
      )}
    </>
  );
};

export default Post;

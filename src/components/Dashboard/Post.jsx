import { useEffect, useState } from "react";
import { useAuth } from "../auth/auth";
import { VscComment } from "react-icons/vsc";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import moment from "moment";
import user from "../../img/user.png";

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
    <section className="flex justify-between text-primary">
      {posts && (
        <div className="">
          {posts.map((post) => {
            console.log(post.content);
            const timeago = moment(post.user_id.created_at).fromNow();
            return (
              <>
                <div className="flex my-5">
                  <img src={user} className="ml-3" alt="img" />
                  <p className="mx-2 md:mx-6 text-[#5E5656] font-bold text-[12px] md:text-[16px]">
                    {post.user_id.username}
                  </p>
                  <p>4 days ago</p>
                </div>
                <div className="message h-[124px] md:w-[660px] flex mb-4">
                  <div className="w-[32px] min-h-[124px] border-l-4 border[#5E5656] ml-1 md:ml-8"></div>
                  <div className="w-[32px] min-h-[124px] border-l-3 border-r-8 border[#5E5656] mr-2 md:mr-5 hidden md:inline-block "></div>
                  <p>{post.content}</p>
                </div>
                <div className="flex font-bold ml-1 md:ml-5 text-[10px] md:text-[16px]">
                  <div className="flex mr-4 items-center text-primary">
                    <AiOutlineLike />
                    <span className="ml-3 ">70k</span>
                  </div>
                  <div className="flex mr-4 items-center text-primary">
                    <AiOutlineDislike />
                    <span className="ml-3 ">0</span>
                  </div>
                  <div className="flex mr-4 items-center text-primary">
                    <VscComment />
                    <span className="ml-3 ">Reply</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Post;

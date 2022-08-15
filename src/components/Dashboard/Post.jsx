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
      `https://team6authwikiapi.zurifordummies.com/languages/${lang_id}/posts`
    );
    const data = await response.json();
    setPosts(data.posts);
    // console.log(data.posts);
  };

  useEffect(() => {
    fetchData();
  }, [posts]);

  // calculate time in ago format
  var periods = {
    month: 30 * 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
  };

  function formatTime(timeCreated) {
    var diff = Date.now() - timeCreated;

    if (diff > periods.month) {
      // it was at least a month ago
      return Math.floor(diff / periods.month) + "m";
    } else if (diff > periods.week) {
      return Math.floor(diff / periods.week) + "w";
    } else if (diff > periods.day) {
      return Math.floor(diff / periods.day) + "d";
    } else if (diff > periods.hour) {
      return Math.floor(diff / periods.hour) + "h";
    } else if (diff > periods.minute) {
      return Math.floor(diff / periods.minute) + "m";
    }
    return "Just now";
  }
  // console.log(formatTime(Date.now()));
  // console.log(formatTime(1510507151026));
  // console.log(formatTime(1510517051026));
  // console.log(formatTime(1508189037313));
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
                  <p>{formatTime(post.created_at.date)}</p>
                </div>
                <div className="message py-3 h-[60px] md:w-[660px] flex mb-4">
                  <div className="w-[32px] min-h-[60px] border-l-4 border[#5E5656] ml-1 md:ml-8"></div>
                  <div className="w-[32px] min-h-[60px] border-l-3 border-r-8 border[#5E5656] mr-2 md:mr-5 hidden md:inline-block "></div>
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

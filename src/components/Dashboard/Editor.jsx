import React, { useState, useNavigate } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useAuth } from "../auth/auth";
const Editor = ({ language_id }) => {
  const [content, setContent] = useState("");
  const auth = useAuth();
  function handleSubmit(e) {
    e.preventDefault();
    const posts = { language_id, content };
    console.log(content, auth.token)
    let createPost = async () => {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${auth.token}`);
      let response = await fetch(
        "https://authwikiapi.russelljapheth.name.ng/posts/create",
        {
          method: "post",
          headers: myHeaders,
          body: JSON.stringify({
            language_id,
            content,
          }),
        }
      );
      let data = await response.json();
      console.log(data);
      setContent('')
    };
    createPost();

    //   e.preventDefault();
    //   fetch("https://authwikiapi.russelljapheth.name.ng/posts/create", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       accept: "application/json",
    //     },
    //     body: JSON.stringify(posts),
    //   }).then(async (response) => {
    //     if (response.error === false) {
    //       const validation = await response.json();
    //       console.log(validation);
    //       // setErrors(validation.errors);
    //       // console.log(validation.errors);
    //     }
    //     // else {
    //     //   history("/categories");
    //     // }
    //   });
  }
  // console.log(content);
  return (
    <div className="mt-12 bg-white">
      {/* <CKEditor
        editor={ClassicEditor}
        data=""
        onReady={(editor) => {
          editor.editing.view.change((writer) => {
            writer.setStyle(
              "height",
              "200px",
              editor.editing.view.document.getRoot()
            );
          });
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
          // console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          // console.log( 'Blur.', editor );
        }}
        onFocus={(event, editor) => {
          // console.log( 'Focus.', editor );
        }}
      /> */}
      <form onSubmit={handleSubmit}>
        <textarea
          className="h-[200px] w-full mx-auto p-5"
          name="content"
          placeholder="Enter your Comment here"
          id="content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary md:w-[180px] w-[100px] h-[60px] md:h-[62px] text-white "
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editor;

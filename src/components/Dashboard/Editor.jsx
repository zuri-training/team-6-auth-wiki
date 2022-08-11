import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const Editor = () => {
  return (
    <div className="mt-12 bg-white">
      <CKEditor
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
          // console.log( { event, editor, data } );
        }}
        onBlur={(event, editor) => {
          // console.log( 'Blur.', editor );
        }}
        onFocus={(event, editor) => {
          // console.log( 'Focus.', editor );
        }}
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-[#9B9696] md:w-[180px] w-[100px] h-[60px] md:h-[62px] mt-10 text-primary "
        >
          Comment
        </button>
      </div>
    </div>
  );
};

export default Editor;

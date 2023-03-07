import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uploadFiles } from "../../actions/fileAction";
import Hero from "../layout/Hero";
function UploadFiles() {
  const [upload, setUpload] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(uploadFiles(upload));
  };
  const formDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        console.log(reader.result);
        setUpload(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <Hero text="Upload Your Files Here" />

      <div class="container">
        <div class="max-w-4xl flex items-center justify-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-20">
          <div
            id="profile"
            class="w-auto rounded-lg shadow-2xl bg-white opacity-80 mx-6 lg:mx-0"
          >
            <div class="p-2 md:p-8 text-center lg:text-left">
              <div class="flex justify-start  rounded-full lg:mb-4 shadow-xl mx-auto lg:mx-1 -mt-20 h-48 w-48 bg-cover bg-center">
                <img className="rounded-full" src="/10.jpg" alt="" />
              </div>

              <div class="p-2 md:p-8 text-center lg:text-left">
                <div class="flex justify-center ">
                  <div class="py-4 pr-5">
                    <form
                      action="http://localhost:7000/file/sendfile"
                      method="post"
                      enctype="multipart/form-data"
                    >
                      <input
                        type="file"
                        className="form-control"
                        name="upload"
                        multiple
                      />
                      <input
                        className="bg-green-700 h-10 w-28 text-white rounded-lg hover:bg-green-600"
                        type="submit"
                        value="Upload"
                      />
                    </form>
                  </div>
                </div>
                <p class="text-sm">
                  Need help,feel free to &nbsp;
                  <a href="#" class="font-bold underline hover:text-green-700">
                    contact us
                  </a>{" "}
                  &nbsp; or just use the below links
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadFiles;

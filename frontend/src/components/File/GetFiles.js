import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUploadedFiles } from "../../actions/fileAction";
import Hero from "../layout/Hero";

function GetFiles() {
  const [index, setindex] = useState(0);
  const { files, loading } = useSelector((state) => state.file);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUploadedFiles());
  }, [dispatch]);

  if (files === "You need to add the data") {
    return (
      <>
        <Hero text="Get Your uploaded files here" />
        You have not uploaded any files yet please Upload Your Files
      </>
    );
  } else {
    return (
      <>
        <Hero text="Get Your uploaded files here" />
        <div className="container my-8">
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-400">
              <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Orignail Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    New File Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Your CID
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Uploaded At
                  </th>
                  <th scope="col" className="py-3 px-6">
                    <span className="">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {files &&
                  Array.from(files).map((file) => (
                    <tr class="bg-gray-800 border-gray-700 hover:bg-gray-600">
                      <td class="py-4 px-6">{file.originalfileName}</td>
                      <td class="py-4 px-6">{file.newfileName}</td>
                      <td class="py-4 px-6">{file.cid}</td>
                      <td class="py-4 px-6">
                        {String(file.createdAt).slice(0, 10)}
                      </td>
                      <td class="py-2 px-4 text-right">
                        <a
                          href={`https://${file.cid}.ipfs.w3s.link/${file.newfileName}`}
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2"
                        >
                          {" "}
                          Your File
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <a href="/file/uploadFile" className="outline-none">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Upload Files
            </button>
          </a>
        </div>
      </>
    );
  }
}

export default GetFiles;

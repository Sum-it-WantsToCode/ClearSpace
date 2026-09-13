"use client";

import { UploadButton } from "./uploadthing";

export default function FileUploader() {
  return (
    <UploadButton
      endpoint="workspaceUploader"
      onClientUploadComplete={(res) => {
        console.log("Files uploaded: ", res);
        alert("Upload complete!");
        window.location.reload();
      }}
      onUploadError={(error: Error) => {
        alert(`Upload ERROR! ${error.message}`);
      }}
      appearance={{
        button: "bg-gray-800 dark:bg-gray-700 text-white text-sm px-4 py-2 rounded transition-colors ut-uploading:bg-blue-600 focus-within:ring-2 focus-within:ring-blue-500 after:bg-blue-500",
        allowedContent: "hidden"
      }}
    />
  );
}
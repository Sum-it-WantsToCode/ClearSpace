import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs/server";

const f = createUploadthing();

export const ourFileRouter = {
  // Upload rules
  workspaceUploader: f({ 
    image: { maxFileSize: "4MB", maxFileCount: 5 }, 
    pdf: { maxFileSize: "8MB", maxFileCount: 1 } 
  })
    // Middleware runs on the server before the upload starts
    .middleware(async () => {
      const { userId } = await auth();
      
      // Security Check: Kick out unauthenticated requests
      if (!userId) throw new Error("Unauthorized");

      return { userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("✅ Upload complete for userId:", metadata.userId);
      console.log("🔗 File URL:", file.url);
      
      // Perform additional actions.
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
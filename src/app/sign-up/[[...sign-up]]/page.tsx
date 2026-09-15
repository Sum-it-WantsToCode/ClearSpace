import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-gray-900 dark:text-gray-100 transition-colors duration-300 z-0">
      
      {/* Base Background Color */}
      <div className="fixed inset-0 -z-20 bg-gray-50 dark:bg-[#050505] transition-colors duration-300" />
      
      {/* Top-Left Ambient Blue Glow */}
      <div 
        className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-blue-400/20 dark:bg-blue-900/20 -z-10 pointer-events-none transition-colors duration-300 opacity-70" 
        style={{ filter: "blur(150px)" }}
      />
      
      {/* Bottom-Right Ambient Indigo Glow */}
      <div 
        className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-purple-400/20 dark:bg-indigo-900/20 -z-10 pointer-events-none transition-colors duration-300 opacity-70"
        style={{ filter: "blur(150px)" }} 
      />

      {/* The Clerk Component */}
      <SignUp />
    </main>
  );
}
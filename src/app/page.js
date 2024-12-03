import Image from "next/image";
import Index from "@/modules/dashboard";
import Chats from "@/modules/dashboard/chats";
import Sidebar from "@/modules/dashboard/sidebar/sidebar";
export default function Home() {
  return (
    <>
    <div className="bg-black flex items-center ">
    <Index/>
     <Chats/>
     <Sidebar/>
    </div>
    
    </>
  );
}

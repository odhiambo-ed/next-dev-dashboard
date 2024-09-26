import Image from "next/image";
import Sidebar from "./components/layout/Sidebar";
import TopNavBar from "./components/layout/TopNavBar";
import MainContent from "./components/layout/MainContent";

export default function Home() {
  return (
    <div>
      <h1>Jesus did it again!</h1>
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <TopNavBar />
        <MainContent>
          <h1>Welcome to the Next.js Dev Dashboard</h1>
          {/* Add more content here */}
        </MainContent>
      </div>
    </div>
  );
}


import React from "react";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import Spinner from "./Components/spinner";


export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts();
  },[])
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      
      <Header/>
      <Blogs/>
      <Pagination/>
     
    </div>
    
  );
}

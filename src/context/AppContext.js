import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
//setp 1
export const AppContext= createContext();


 export default function AppContextProvider({children}){

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    //data filling pending
    async function fetchBlogPosts(page=1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);
          } 
        catch (error) {
            
            console.log("Network Error");
            setPage(1);
            setTotalPages(null);
            setPosts([]);
          }
      
          setLoading(false);

    }


    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);

    }
    //sending data
    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
      };


      // sending App.js the value in the AppContext
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;













}
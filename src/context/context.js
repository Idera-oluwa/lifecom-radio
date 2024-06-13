"use client"
import React,{useState, useContext, useEffect} from 'react';

// import {AllArticles, SingleArticle} from '@/queries/articles'
import { getArticles } from '@/promises/article';
import { getBlogs } from '@/promises/news';
import { getPodcasts } from '@/promises/podcast';

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [articles, setArticles] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [podcasts, setPodcasts] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [global, setGlobal] = useState(false)
    const [national, setNational] = useState(false)

    useEffect(() => {
        getArticles().then(result => {
            setArticles(result);
          });
          getBlogs().then(result => {
            setBlogs(result);
            setFilteredBlogs(result)
          });
          getPodcasts().then(result => {
            setPodcasts(result);
          });
    }, [])
    const getGlobal = () => {
      setFilteredBlogs(blogs.filter(blog => blog.category === 'GLOBAL'));
      setGlobal(true)
      setNational(false)
    };
  
    const getNational = () => {
      setFilteredBlogs(blogs.filter(blog => blog.category === 'NATIONAL'));
      setGlobal(false)
      setNational(true)
    };
    const getAllBlogs = () =>{
      setFilteredBlogs(blogs)
      setGlobal(false)
      setNational(false)
    }
    
    
    return(
        <AppContext.Provider value={{articles, blogs, podcasts, getGlobal,getNational,filteredBlogs,getAllBlogs, global,national}}>
           {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppContext, AppProvider};
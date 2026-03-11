import React from 'react'
import { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchPosts } from '../redux/PostSlice'
import Card from '../components/Card'
import Pagination from '../components/Pagination'

const Home = () => {

    const dispatch = useDispatch();
    
    const {posts,loading} = useSelector(state =>state.posts)
    const [page, setPage] = useState(1);
    const perPage = 6;

    useEffect(()=>{
        dispatch(fetchPosts());
        setTimeout(()=>{},5000);
    },[dispatch]);

    if (loading) return <h1>Loading...</h1>;
    
    const start = (page - 1)*perPage;
    const currentPosts = posts.slice(start,start + perPage);

  return (
    <div>
      
   <h1>Posts</h1>

   <div className='grid'>
   
     {currentPosts.map(post=>(
        <Card key = {post.id} post ={post} />
     ))}

   </div>
   <Pagination  total={posts.length} perPage={perPage} currentPage={page} setPage={setPage}/>
    </div>
  )
}

export default Home

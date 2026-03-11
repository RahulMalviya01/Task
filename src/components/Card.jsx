import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../redux/PostSlice'


const Card = ({post}) => {

     const dispatch = useDispatch();

  return (
    <div className='card'>
      
    <button className='delete' onClick={()=>dispatch(deletePost(post.id))}>delete</button>

    <h3>{post.title}</h3>
    <p>{post.body}</p>
    
    </div>
  )
}

export default Card

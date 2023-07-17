import React, { useState } from 'react'

const Posts = () => {
  const [newPost, setnewPost] = useState("")
  const [newUser, setnewUser] = useState("")
  const [postsData, setPostsData] = useState([])
  
  const SubmitForm=(e)=>{
    e.preventDefault()
    console.log(newPost)
    console.log(newUser)
    const Posting={
        newPost,
        newUser
    }
    setPostsData([...postsData,Posting])
    setnewUser("")
    setnewPost("")
  }

  const handleDelete=(id)=>{
      let filteredPosts = postsData.filter((post,index)=>{
          return  index !== id
      })
      setPostsData(filteredPosts)
  }

  return (
    <div> 
        <form onSubmit={SubmitForm}>
            <input type="text" placeholder="Add a username"
            value={newUser}
            onChange={(e) => setnewUser(e.target.value)}
             /><br/><br/>
            <textarea type="text" placeholder="Add a new Post"
            width="500px"
            height="500px"
            value={newPost}
            onChange={(e) => setnewPost(e.target.value)}
             /><br/><br/>
             <button style={{color : "white" , backgroundColor : "black", width : "300px",
            height : "50px", fontSize : "20px"}} type="submit" >create new Post</button>
        </form>
        <h1>Blogs By Authors</h1>
        <div>
            {
                postsData && postsData.map((post,index) => {
                    return (
                        <div key={Date.now()+Math.random()}>
                            <h1>{post.newPost}</h1>
                             <p>Author : {post.newUser}</p>
                             <button onClick={()=> handleDelete(index)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Posts
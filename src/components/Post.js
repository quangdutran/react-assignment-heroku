import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Post = () => {
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(false);
    const[posts,setPosts]=useState([]);
    const[sortedAsc, setSortedAsc]=useState(true);
    const [keyword, setKeyword] = useState('');
    const postsFiltered = posts.filter(post => post.title.toLowerCase()
        .includes(keyword.toLowerCase()));
    const getSortedPosts = () => {
        postsFiltered.sort();
        return sortedAsc ? postsFiltered : postsFiltered.reverse();
    }
    const sortedPosts = getSortedPosts();

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const fetchData = async () => {
          try {
            setLoading(true);
            const {data} = await axios.get(url);
            setLoading(false);
            setPosts(data);
          } catch(err) {
            setError(err.message);
            setLoading(false);
          }    
        };
        fetchData();
      },[]);
    
    const removePost = postId => {
        const temp = [...posts];
        temp.splice(posts.findIndex(post => post.id === postId), 1);
        setPosts(temp);
    };

    return (
        <div>
            {loading ? (<div>Loading</div>) : 
            error ? (<div>Error</div>) :
            (<div>
                
                <input
                className="search-box"
                type="text"
                value={ keyword }
                onChange={ e => setKeyword(e.target.value) }/>
        
               <table className="posts">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th onClick={ () => {setSortedAsc(!sortedAsc)} }>
                            Title
                        </th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    sortedPosts.map(post => (
                        <tr key={ post.id }>
                        <td>{ post.id }</td>
                        <td>{ post.title }</td>
                        <td>
                            <button className="remove-btn" onClick={ () => removePost(post.id) }>Remove</button>
                            <Link to={{ pathname: '/posts/' + post.id, state: post }}>
                                View detail
                            </Link>
                        </td>
                        </tr>
                    ))
                    }
                    </tbody>
                </table> 
            </div>)}
        </div>
    )
}

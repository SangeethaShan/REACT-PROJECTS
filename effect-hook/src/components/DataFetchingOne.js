import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, serError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false)
                setPost(response.data)
                serError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                serError('Something Went Wrong')
            })
    }, [])

    return (
        <div>
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne

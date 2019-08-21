import  {useEffect} from 'react'

function UseDocTitle(count) {

    useEffect(() => {
        document.title = `Count - ${count}`
    }, [count])
}

export default UseDocTitle

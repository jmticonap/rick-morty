import React, {useState, useEffect} from 'react';

const usePaginator = (len) => {
    const [data, setData] = useState([])
    const [pageData, setPageData] = useState([])
    const [index, setIndex] = useState(1)
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        setTotal( Math.ceil( data.length/len ) )
        //TODO: mostrar paginas incompletas.
        const init = len*(index-1)
        const end = (len*(index-1))+len
        setPageData( data.slice(init, data.length>=end?end:data.length))
    },[data])
    useEffect(()=>{
        const init = len*(index-1)
        const end = (len*(index-1))+len
        setPageData( data.slice(init, data.length>=end?end:data.length))
    },[index])

    return {pageData, setData, index, setIndex, total}
};

export default usePaginator;

//q,w,e,r,t,y,u,i,o,p
//0,1,2,3,4,5,6,7,8,9


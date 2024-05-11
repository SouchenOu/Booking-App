import React, { useEffect, useState } from 'react';
import axios from 'axios'

const useFetch = (url) => {
    console.log("url here-->", url);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(()=>{
        console.log("whyyyy!")
        const fetchData = async () =>{
            console.log("enter function");
            setLoading(true);
            try{
                console.log("after url", url);
                const response  = await axios.get(url);
                console.log("just response here-->", response);
                console.log("response-->", response.data);
                setData(response.data);

            }catch(err){
                setError(err);
            }
            setLoading(false);
        }
        fetchData();
    },[url]);

    const reFetch = async () =>{
        setLoading(true);
        try{
            const response = await axios.get(url);
            setData(response.data)

        }catch(err){
            setError(err);
        }
        setLoading(false);
    }

  return {data, loading, error, reFetch}
}

export default useFetch

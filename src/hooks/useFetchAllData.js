import axios from "axios";
import { useState,useEffect } from "react";

function useFetchAllData(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const res = await axios.get(url)
        setData(res.data);
      }catch(error){
        setError("데이터를 가져오는 도중에 에러가 발생했습니다.");
        console.log(error);
      }
    }
    fetchData()
  },[url])

  return [data, error];
}

export default useFetchAllData;


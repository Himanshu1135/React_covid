import React , {useEffect,useState} from 'react'


function Api() {
    const [Data,setData] = useState([]);
    const Getcoviddata = async() =>{
        try{
            const res = await fetch("http://127.0.0.1:8000");
            console.log(res);
            const adata = await res.json();
            // console.log(adata.statewise[0]);
            setData(adata)
        }
        catch(err){
            console.log(err);
        }     
    }

    useEffect(() =>{
        Getcoviddata();
    }, [])

  return (
    <div>
        <h1>🔴 Live</h1>
        <h2>Covid Data</h2>
        <h3>Total active cases {Data.active}</h3>
    </div>
  )
}

export default Api
import { useEffect, useState } from "react";


function Inicio (){

    const [text, setText] = useState([]); 
    // const [info, setInfo] = useState([]);

    useEffect(()=>{
        const url =`https://newsapi.org/v2/everything?q=apple&from=2023-08-20&to=2023-08-20&sortBy=popularity&apiKey=0240c08a06794076b7347d62d446c804`;
        fetch(url)
            .then(res =>res.json())
            .then(date=>{
                setText(date.articles);
                console.log(date.articles);
            })
    },[]);

    // useEffect(()=>{
    //     if(text){
    //     const url =`https://newsapi.org/v2/everything?q=${text}&from=2023-08-20&to=2023-08-20&sortBy=popularity&apiKey=0240c08a06794076b7347d62d446c804`;
    //     fetch(url)
    //         .then(res=>res.json())
    //         .then(date=>{
    //             setInfo(date.article);
    //             console.log(date);
    //         })
    //     }else{
    //         setInfo([]);
    //     }
        
    // },[text]);

    return (
        <div className='container mt-5'>
            <h1>Inicio</h1>
            <div className="row g-2">
                {text.map((text, index) => (
                    <div key={index}>
                        <h2>{text.title}</h2>
                        <p>{text.description}</p>
                        <img className="img-thumbnail" src={text.urlToImage} alt={text.title} />
                    </div>
                ))}
            </div>
            
            
        </div>
    );
}

export {Inicio};
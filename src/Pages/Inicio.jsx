import React, { useEffect, useState } from 'react'

export const Inicio = () => {
  const [text, setText] = useState([]); 

    useEffect(()=>{
        const url =`https://newsapi.org/v2/everything?q=apple&from=2023-08-20&to=2023-08-20&sortBy=popularity&apiKey=0240c08a06794076b7347d62d446c804`;
        fetch(url)
            .then(res =>res.json())
            .then(date=>{
                //slice(0,4) que trae los primero cuatro contenidos del articles
                setText(date.articles.slice(0, 4));
            })
    },[]);


    return (
        <div className='container mt-5'>
            <h1 className="text-center">Inicio</h1>
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

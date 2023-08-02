import React from "react";
import "./Header.css"
import memesData from "../memesData";


function Main() {
    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText:"",
        randomUrl:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMeme , setAllMeme] = React.useState(memesData)

    function handleClick() { 
        const memeArray = allMeme.data.memes // Accessing meme object from memesData.
        const randomNumber = Math.floor(Math.random()*memeArray.length)
        const newUrl = memeArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomUrl: newUrl
        }))
        
    }
    function handleChange(event){
        const {name , value} = event.target
        setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
            })
        )
    }
    
         
    return(
    
        <div>
            <div className="main--container" >
                    
                <input 
                    className="text--input"
                    placeholder="Enter Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    
                />
                <input 
                    className="text--input" 
                    placeholder="Enter Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    
                />
                <button 
                    onClick={handleClick}
                    className="button"
                >Get Meme Image</button>
            </div>
            <div className="meme-container">
                <img src={meme.randomUrl} name="randomUrl" value={meme.randomUrl} className="meme--image" alt="meme"/>    
                <h2 className="meme--text top">{meme.topText}</h2> 
                <h2 className="meme--text bottom">{meme.bottomText}</h2>               
            </div>
        </div>
    )
}
export default Main

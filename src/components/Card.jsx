import React from 'react'

const Card = ({quoteBox, colorRandom, clickButton}) => {

    const styleButton = {
        backgroundColor: colorRandom
    }

    

  return (
    <article className='card'  style={{color:colorRandom}}>
        
        <h2 className='card-quote'> 
        {quoteBox.quote}
            </h2>

        <div className='btn-card'>     
            <p className='card-author' > <em>{quoteBox.author}
                 </em>
            </p>
        </div> 

        <button style={styleButton} 
                className='button'
                onClick={clickButton}>
                &#62;
            </button> 

        </article>

  )
}

export default Card

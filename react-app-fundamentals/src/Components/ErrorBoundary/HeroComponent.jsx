import React from "react"

const HeroComponent = ({ heroName }) => {
    if(heroName === 'Joker'){
        throw new Error('Not a here!!!')
    }
    return (
        <div>
            <h2>{heroName}</h2>
        </div>
    )
}

export default HeroComponent
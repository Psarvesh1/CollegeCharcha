import React from 'react'
import Navigation from './Navigation'
import QuestionCard from './QuestionCard'
const Topic = () => {
    return (
        <div style = {{height: '100vh', width: '100vw', background: '#F5F5F5'}}>
            <Navigation />
            <div style = {{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                <QuestionCard/>
            </div>
        </div>
    )
}

export default Topic

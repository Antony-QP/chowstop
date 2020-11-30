import React from 'react'

export const Stops = ({ stop: stops }) => {
    return (
        <div>
            
        </div>
    )
}

const mapeStateToProps = (state) => {
    stop : state.stop
}

export default connect(mapeStateToProps)(Stops)

import React from 'react';
import { connect } from 'react-redux';


import '../Pagination/Pagination.css';


export const Pagination = ({nextPage, next, prev}) => {
    const isPrevDisabled = !prev ? true : false
    const isNextDisable = !next ? true : false
        return(
            <div className="pagination">
                <button disabled={isPrevDisabled} onClick={() => nextPage(prev)}>prev</button>
                <button disabled={isNextDisable} onClick={() => nextPage(next)}>next</button>
            </div>
        )
    
}

export const mapStateToProps = (state) => ({
    characters: state.charactersReducer,
})

export default connect(mapStateToProps)(Pagination)

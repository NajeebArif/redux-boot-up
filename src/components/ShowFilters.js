import React from 'react'
import { setVisibilityFilter } from '../actions/actions'
import {connect} from 'react-redux'

function ShowFilters({active, filter, setFilter}) {
    const showAll = 'SHOW_ALL'
    const showCompleted = 'SHOW_COMPLETED'
    const showActive = 'SHOW_ACTIVE'
  return (
    <div className='d-flex flex-column gap-2'>
        <button className='btn btn-info' 
        onClick={()=>setFilter(showAll)}>Show All</button>
        <button className='btn btn-info'
        onClick={()=>setFilter(showCompleted)}>Show completed</button>
        <button className='btn btn-info'
        onClick={()=>setFilter(showActive)}>Show incomplete</button>
    </div>
  )
}

// const mapStateToProps = (state, ownProps)=>({
//     active: ownProps.filter === state.filter
// })

const mapDispatchToProps = (dispatch) => ({
    setFilter: (filter)=>{
        dispatch(setVisibilityFilter(filter))
    }
})

export default connect(null, mapDispatchToProps)(ShowFilters)
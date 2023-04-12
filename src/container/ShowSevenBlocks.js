import { connect } from 'react-redux'
import SevenBlocks from '../components/SevenBlocks'
import week from '../toolkitRedux/toolkitSlice3'


  


const mapStateToProps = (state) => {
    return ({
     numberOfWeek: state.week,
    })
}

const mapDispatchToProps = (dispatch)=> {
  
    return ({
      increase: () => dispatch(week.actions.increase()),
      decrease: () => dispatch(week.actions.decrease()),
      currentWeek: () => dispatch(week.actions.currentWeek()),
    })
}


export default connect(
  mapStateToProps,
  mapDispatchToProps)(SevenBlocks)
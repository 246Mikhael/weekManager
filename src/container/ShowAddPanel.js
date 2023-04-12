import { connect } from 'react-redux'
import AddPanel from '../components/addPanel/AddPanel'
import visibleAddPanel from '../toolkitRedux/toolkitSlice1'
import tasks from '../toolkitRedux/toolkitSlice2'

  


const mapStateToProps = (state) => {
    return ({
     valueId: state.visibleAddPanel.visible,
     visibleAdd: state.visibleAddPanel.visibleAdd,
     tasksFromStore: state.tasks.tasks
    })
}

const mapDispatchToProps = (dispatch)=> {
    return ({
      setId: (id)=> dispatch(visibleAddPanel.actions.setVisibleId(id)),
      setTask: (newTask)=> dispatch(tasks.actions.setTask(newTask)),
    
    })
}


export default connect(
  mapStateToProps,
  mapDispatchToProps)(AddPanel)
import { connect } from "react-redux";
import TasksCheckBoxes from "../components/tasksPanel/TasksCheckBoxes";
import tasks from "../toolkitRedux/toolkitSlice2";
import visibleAddPanel from "../toolkitRedux/toolkitSlice1";

const mapStateToProps = (state) => {
    return ({
     tasksFromStore: state.tasks.tasks,
    })
}

const mapDispatchToProps = (dispatch)=> {
  return ({
   changeCheck: (values) => dispatch(tasks.actions.changeCheck(values)),
   deleteTask: (values)=>dispatch(tasks.actions.deleteTask(values)),
   editTask: (values)=> dispatch(tasks.actions.editTask(values)),
   setVisibleAdd: () => dispatch(visibleAddPanel.actions.setVisibleAdd()),
   deleteEmptyDay: (date)=> dispatch(tasks.actions.deleteEmptyDay(date))
  })
}






export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(TasksCheckBoxes)

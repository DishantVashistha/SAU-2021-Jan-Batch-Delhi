import React from "react";
import PropTypes from "prop-types";

class Todolist extends React.Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        todo: PropTypes.string,
        marked: PropTypes.bool,
      })
    ),
  };

  render() {
    const { todos,filterBy, markTaskAsCompleted ,duplicateTask,deleteTask} = this.props;

    return (
      <div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {todos
            ? todos.map((value, index) => {
              //rendering different TodoList based on Filters
              if(filterBy==='show all' || (filterBy==='completed'&& value.marked) || (filterBy==='pending'&& !value.marked) ){
                return (
                  <li key={index} className="TaskRow">
                    <label
                      style={
                        value.marked
                          ? {
                              textDecoration: "line-through",
                            }
                          : {}
                      }
                      className={value.marked ? "checked" : ""}
                    >
                      <input
                        type="checkbox"
                        checked={value.marked}
                        onChange={(event) => markTaskAsCompleted(event, index)}
                      />
                      {value.todo}
                    </label>
                    <button className="hidden" onClick={()=>{deleteTask(index)}} >Delete</button>
                    <button className="hidden" onClick={()=>{duplicateTask(value.todo)}}>Duplicate</button>
                  </li>
                );}
                else{
                  return (
                    <li key={index}></li>
                  );
                }
              })
            : null}
        </ul>
      </div>
    );
  }
}

// const Todolist = (props) => {
//     const { todos, title } = props;

//     return (
//       <div>
//         <h3>{title}</h3>
//         <ul>
//           {todos
//             ? todos.map((todo, index) => {
//                 return <li>{todo}</li>;
//               })
//             : null}
//         </ul>
//       </div>
//     );
// }

export default Todolist;

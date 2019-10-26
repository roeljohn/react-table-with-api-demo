import React, { Fragment } from "react";
import ReactTable from "react-table";
import { GetAllTodos } from "./api/GetAllTodos";
import { PutTodoById } from "./api/PutTodoById";

function App() {

  const [ todos ] = GetAllTodos();

  const renderEditable = (cellInfo) => {
    return  <div
      style={{ backgroundColor: "#fafafa" }}
      contentEditable
      suppressContentEditableWarning
      onBlur={e => {
        const data = [...todos];
        console.log(data)
        data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
        // Put Todo still not working
        // console.log(data[cellInfo.index][cellInfo.column.id]) // new title
        PutTodoById(cellInfo.original.id, data[cellInfo.index][cellInfo.column.id]);
      }}
      dangerouslySetInnerHTML={{
        __html: todos[cellInfo.index][cellInfo.column.id]
      }}
    />;
  };

  return (
    <Fragment>
    <ReactTable
      data={todos}
      columns={[
        {
          Header: "Title",
          accessor: "title",
          Cell: props => renderEditable(props)
        }
      ]}
      defaultPageSize={10}
      className="-striped -highlight"
    />
      {/* {loading ? (
        "Loading..."
      ) : (
        <ul>
          {todos.map(({ id, title }) => (
            <div key={id}>
              {title}
            </div>
          ))}
        </ul>
      )} */}
    </Fragment>
  );
}
export default App;
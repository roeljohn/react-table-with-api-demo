function renderEditable() {
  
    useEffect(() => {
      const editTable = () => {
        <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          // this.setState({ data });
          // // console.log(cellInfo.row.id)
          // console.log(cellInfo.original.id)
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
      };
      editTable();
    });
  
  }
  
  export { renderEditable };
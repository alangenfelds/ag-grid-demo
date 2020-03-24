import React from "react";
import "./App.css";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          headerName: "Make",
          field: "make",
          sortable: true,
          filter: true,
          checkboxSelection: true
        },
        { headerName: "Model", field: "model", sortable: true, filter: true },
        { headerName: "Price", field: "price", sortable: true, filter: true }
      ],
      // rowData: null
      rowData: [
        { make: "Subaru", model: "Forester", price: 34000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Toyota", model: "Celica", price: 35000 }
      ]
    };
  }

  // componentDidMount() {
  //   fetch("https://api.myjson.com/bins/15psn9")
  //     .then(res => res.json())
  //     .then(rowData => this.setState(rowData))
  //     .catch(err => console.log("ERROR: ", err));
  // }

  onButtonClick = () => {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model + ' ' + node.price + ' $').join(', ')
    console.log(selectedDataStringPresentation)
    alert(`Selected Nodes: ${selectedDataStringPresentation}`)
  };

  render() {
    return (
      <div className="ag-theme-balham" style={{ width: 600, height: 600 }}>
        <button onClick={this.onButtonClick}>Get Selected Rows</button>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          rowSelection="multiple"
          onGridReady={params => this.gridApi = params.api}
        />
      </div>
    );
  }
}

export default App;

import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { initialPageSize, TablesProps} from '../config/ITablesConfig';
import { paperDarkSx, dataGridDarkSx } from "../config/TablesStyle";
import { handleDelete, handleEdit } from '../config/TablesActions';
import ReusableIonButton from "./IonButton";

const Tables: React.FC<TablesProps> = ({ columnsDef, rows, pageSizeOptions, resource }) => {
  const columns = [
    ...columnsDef,
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      filterable: false,
      disableReorder: true,
      disableColumnMenu: true,
      width: 90,
      renderCell: (params: any) => (
        <div style={{ display: "flex", gap: 8 }}>
          <ReusableIonButton
            color="tertiary"
            className="small-ion-btn"
            onClick={() => handleEdit(resource,params.row)}
          >
            Edit
          </ReusableIonButton>
          <ReusableIonButton
            color="danger"
            className="small-ion-btn"
            onClick={() => handleDelete(resource,params.row)}
          >
            Del
          </ReusableIonButton>
        </div>
      ),
    },
  ];

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <Paper sx={paperDarkSx}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={pageSizeOptions}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: initialPageSize,
                page: 0,
              },
            },
          }}
          checkboxSelection
          sx={dataGridDarkSx}
        />
      </Paper>
    </div>
  );
};

export default Tables;

// const handleDelete = (row: any) => {
//   // modal opening....
//   // alert('Delete for row: ' + JSON.stringify(row));
//   alert(`Delete for row: ${row.id}`);
//   if(window.confirm(`Are you sure you want to delete row: ${row.id}?`)) {
//     // procceed api call...
//     deleteCommand(row.ID)
//     .then(() => {
//       // refresing the data or remove from the state
//       alert(`Row: ${row.id} deleted successfully.`);
//       window.location.reload();
//     })
//     .catch(error => {
//       alert(`Failed to delete row: ${row.id}. Error: ${error.message}`);
//     });
//   }
// };


/*
import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { initialPageSize, TablesProps } from '../config/ITablesConfig';
import { paperDarkSx, dataGridDarkSx } from "../config/TablesStyle";
import { IonButton } from "@ionic/react";


const Tables: React.FC<TablesProps> = ({ columnsDef, rows, pageSizeOptions }) => {
  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <Paper sx={paperDarkSx}>
                  <IonButton>
        Hello World
      </IonButton>
        <DataGrid
          rows={rows}
          columns={columnsDef}
          pageSizeOptions={pageSizeOptions}
          initialState={{
            pagination: { 
              paginationModel: { 
                pageSize: initialPageSize, page: 0 } },
          }}
          checkboxSelection
          sx={dataGridDarkSx}
        />
      </Paper>
    </div>
  );
};

export default Tables;
*/
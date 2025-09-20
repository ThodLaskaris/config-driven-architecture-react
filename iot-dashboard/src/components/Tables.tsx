import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { initialPageSize} from '../config/TableConfig';
import { Table, TableProps } from '../types/table';
import { paperDarkSx, dataGridDarkSx } from "../config/TablesStyle";
import { handleDelete, handleEdit } from '../config/TableActions';
import ReusableIonButton from "./IonButton";

const Tables: React.FC<TableProps> = ({
  columnsDef,
  rows,
  pageSizeOptions,
  resource,
  onDelete 
}) => {
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
            onClick={() => handleEdit(resource, params.row)}
          >
            Edit
          </ReusableIonButton>
          <ReusableIonButton
            color="danger"
            className="small-ion-btn"
            onClick={() =>
              handleDelete(resource, params.row, () => {
                onDelete?.(); 
              })
            }
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
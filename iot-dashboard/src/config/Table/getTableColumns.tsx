import React from "react";
import ReusableIonButton from "../../components/IonButton";
import Typography from "@mui/material/Typography";
import { GridColDef } from "@mui/x-data-grid";

export function getTableColumns(
  handleEdit: (row: any) => void,
  handleDelete: (row: any) => void,
  columnsDef: GridColDef[]
): GridColDef[] {
  return [
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      filterable: false,
      disableReorder: true,
      disableColumnMenu: true,
      width: 120,
      renderCell: (params: any) => (
        <div style={{ display: "flex", gap: 8 }}>
          <ReusableIonButton
            color="default"
            className="small-ion-btn"
            onClick={() => handleEdit(params.row)}
          >
            <Typography variant="caption">Edit</Typography>
          </ReusableIonButton>
          <ReusableIonButton
            color="danger"
            className="small-ion-btn"
            onClick={() => handleDelete(params.row)}
          >
            <Typography variant="caption">Del</Typography>
          </ReusableIonButton>
        </div>
      ),
    },
    ...columnsDef,
  ];
}
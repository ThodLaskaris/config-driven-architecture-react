import React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { initialPageSize } from "../config/Table/TableHelper";
import { TableProps } from '../types/Table';
import { paperDarkSx, dataGridDarkSx } from "../config/Table/TablesStyle";
import { handleDelete } from "../config/Table/TableActions";
import { getTableColumns } from "../config/Table/getTableColumns";
import { useModal } from "../hooks/useEditModal";
import { useSaveModal } from "../hooks/useSaveModal";
import { updateDevice } from "../services";
import Paper from "@mui/material/Paper";
import TableToolbar from "./TableToolbar";
import Typography from "@mui/material/Typography";
import AppModal from './Modal';
import ReusableIonButton from './IonButton';


const Tables: React.FC<TableProps> = ({ columnsDef, rows, pageSizeOptions, resource, onDelete, refetch }) => {
  const { open, editRow, handleEdit, handleClose } = useModal<any>();

const columns = getTableColumns(
  (row) => handleEdit(row),
  (row) => onDelete?.(row),
  columnsDef // <-- πρόσθεσε το columnsDef!
);

  const { handleSave, save, error } = useSaveModal<any>(
    (row) => updateDevice(row.id, row),

    () => {
      refetch?.();
      handleClose();
    }
  )

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <TableToolbar
        onAdd={() => alert("adding")}
        onExport={() => alert("exporting")}
        data-id='table-toolbar'
      />
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
            data-id='data-grid'
          />
        </Paper>
      </div>
      <AppModal open={open}
        onClose={handleClose}
        data-id='table-edit-modal'>
        <Typography variant="h6">Edit Row</Typography>
        <pre style={{ color: "#fff" }}>{JSON.stringify(editRow, null, 2)}</pre>
        <ReusableIonButton
          data-id='table-save-button'
          onClick={() => handleSave(editRow)}>Save</ReusableIonButton>
        {/* ftiajke koumpi gia json epilogi  */}
      </AppModal>
    </div>
  );
};

export default Tables;




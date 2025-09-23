import React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { ServerPaginationProps } from '../types/Table';
import { paperDarkSx, dataGridDarkSx } from "../config/Table/TablesStyle";
import { getTableColumns } from "../config/Table/getTableColumns";
import { useModal } from "../hooks/useEditModal";
import { useSaveModal } from "../hooks/useSaveModal";
import { updateDevice } from "../services";
import Paper from "@mui/material/Paper";
import TableToolbar from "./TableToolbar";
import Typography from "@mui/material/Typography";
import AppModal from './Modal';
import ReusableIonButton from './IonButton';

const Tables: React.FC<ServerPaginationProps> = ({
columnsDef,rows,pageSizeOptions,onDelete,refetch,page,pageSize,rowCount,onPageChange,onPageSizeChange
}) => {
  const { open, editRow, handleEdit, handleClose } = useModal<any>();

  const columns = getTableColumns(
    (row) => handleEdit(row),
    (row) => onDelete?.(row),
    columnsDef
  );

  const { handleSave } = useSaveModal<any>(
    (row) => updateDevice(row.id, row),
    () => {
      refetch?.();
      handleClose();
    }
  );

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
            pagination
            paginationMode="server"
            paginationModel={{ page, pageSize }}
            rowCount={rowCount}
            onPaginationModelChange={({ page, pageSize }) => {
              if (page !== undefined) onPageChange(page);
              if (pageSize !== undefined) onPageSizeChange(pageSize);
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
      </AppModal>
    </div>
  );
};

export default Tables;
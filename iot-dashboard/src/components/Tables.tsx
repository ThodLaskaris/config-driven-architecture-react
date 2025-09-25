import React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { ServerPaginationProps } from '../types/table';
import { getTableColumns } from "../config/Table/getTableColumns";
import { useModal } from "../hooks/useEditModal";
import TableToolbar from "./TableToolbar";
import ReusableIonButton from './IonButton';
import { create, update } from '../services/apiService';
import { AddForm } from '../config/Modal/Modal';
import AppModal from './Modal';


const Tables: React.FC<ServerPaginationProps> = ({
  columnsDef, rows, pageSizeOptions, onDelete, refetch, page, pageSize, rowCount, onPageChange, onPageSizeChange, resource
}) => {
  const { modalMode, rowData, setRowData, openAdd, openEdit, closeModal } = useModal<any>();
  const columns: GridColDef[] = getTableColumns(openEdit, (row) => onDelete?.(row), columnsDef);

  const handleSave = async (row: any) => {
    try {
      const action = modalMode === 'add' ? () => create(resource, row) : () => update(resource, row.id, row);
      await action();
      closeModal();
      refetch?.();
    } catch (error: any) {
      console.error("Error saving row:", error);
    }
  };

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <TableToolbar
        onAdd={openAdd}
        onExport={() => alert("exporting")}
        data-id='table-toolbar'
      />
      <div style={{ width: "100%", margin: 0, padding: 0 }}>
        <div style={{ background: '#000', borderRadius: 8, padding: 8 }}>
          <DataGrid
            columns={columns}
            rows={rows}
            pagination
            rowCount={rowCount}
            paginationMode="server"
            paginationModel={{ page, pageSize }}
            onPaginationModelChange={({ page, pageSize }) => {
              onPageChange(page);
              onPageSizeChange(pageSize);
            }}
            pageSizeOptions={pageSizeOptions}
            autoHeight
            sx={{ background: '#000', color: '#fff' }}
          />
        </div>
      </div>
      <AppModal open={modalMode !== null} onClose={closeModal}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16
        }}>
          <span style={{ fontWeight: 600, fontSize: 18 }}>
            {modalMode === 'add' ? `Add ${resource}` : `Edit ${resource}`}
          </span>
          <ReusableIonButton
            type="button"
            onClick={() => alert(JSON.stringify(rowData, null, 2))}
            style={{ minWidth: 70, padding: "4px 10px", fontSize: 13, marginLeft: 12 }}
          >
            View as JSON
          </ReusableIonButton>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSave(rowData);
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}
        >
          <AddForm columns={columnsDef} rowData={rowData} setRowData={setRowData} />
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 16 }}>
            <ReusableIonButton type='button' onClick={closeModal}>
              Cancel
            </ReusableIonButton>
            <ReusableIonButton type="submit" data-id='table-save-button'>
              Save
            </ReusableIonButton>
          </div>
        </form>
      </AppModal>
    </div>
  );
};

export default Tables;
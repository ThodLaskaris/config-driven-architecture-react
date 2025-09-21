import { SxProps, Theme } from "@mui/material/styles";

export const paperDarkSx: SxProps<Theme> = {
  height: "calc(100vh - 100px)",
  width: "100%",
  boxShadow: "none",
  backgroundColor: "#000",
  borderRadius: 0,
  overflow: "hidden", // κόβει τυχόν λεπτό «χείλος»
};

export const dataGridDarkSx: SxProps<Theme> = {
  border: 0,
  backgroundColor: "#000",
  color: "#fff",

  // CONTAINER/SCROLLERS/FILLERS
  "& .MuiDataGrid-main": { backgroundColor: "#000" },
  "& .MuiDataGrid-virtualScroller": { backgroundColor: "#000" },
  "& .MuiDataGrid-virtualScrollerRenderZone": { backgroundColor: "#000" },

  // FIX: λευκό filler δεξιά στο header/scrollbar
  "& .MuiDataGrid-scrollbarFiller, & .MuiDataGrid-filler, & .MuiDataGrid-topContainer": {
    backgroundColor: "#000000ff !important",
  },

  // HEADER
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#000",
    color: "#fff",
    borderBottom: "1px solid #111",
  },
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: "#000",
    color: "#fff",
  },
  "& .MuiDataGrid-columnHeaders .MuiSvgIcon-root": {
    color: "#fff",
  },
  "& .MuiDataGrid-columnSeparator": {
    color: "#111",
    opacity: 0.4,
  },

  // CELLS/ROWS
  "& .MuiDataGrid-cell": {
    backgroundColor: "#000",
    // color: "#969696ff",
    color: "#e0e0e0",
    borderBottom: "1px solid #111",
  },
  "& .MuiDataGrid-row": { backgroundColor: "#000" },

  // OVERLAY
  "& .MuiDataGrid-overlay": {
    backgroundColor: "#000",
    color: "#fff",
  },

  // FOOTER/PAGINATION
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: "#000",
    color: "#fff",
    borderTop: "1px solid #111",
  },
  "& .MuiTablePagination-root, & .MuiTablePagination-toolbar, & .MuiTablePagination-select, & .MuiTablePagination-actions svg": {
    color: "#fff",
  },

  // CHECKBOX/COUNTER
  "& .MuiCheckbox-root svg": { color: "#ffffffff" },
  "& .MuiDataGrid-selectedRowCount": { color: "#ff1744" },

  // NO OUTLINES
  "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": { outline: "none" },
  "& .MuiDataGrid-root": { border: "none" },
};
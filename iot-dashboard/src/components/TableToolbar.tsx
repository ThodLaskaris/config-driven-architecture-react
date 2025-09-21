import React from "react";
import ReusableIonButton from "./IonButton";
import Typography from "@mui/material/Typography";

interface TableToolbarProps {
  onAdd: () => void;
  onExport: () => void;
}

const TableToolbar: React.FC<TableToolbarProps> = ({ onAdd, onExport }) => (
  <div style={{ display: "flex", gap: 8, marginBottom: 0 }}>
    <ReusableIonButton color="default" className="small-ion-btn" onClick={onAdd}>
      <Typography variant="caption"> Add</Typography>
    </ReusableIonButton>
    <ReusableIonButton color="default" className="small-ion-btn" onClick={onExport}>
      <Typography variant="caption"> Export</Typography>
    </ReusableIonButton>
  </div>
);

export default TableToolbar;
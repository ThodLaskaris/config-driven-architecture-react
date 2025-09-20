export interface MassDeleteActionProps {
  selectedCount: number;
  onDelete: () => Promise<void>;
  onClearSelection: () => void;
}

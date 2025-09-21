import { functionsMap } from './TableHelper';

export const handleDelete = async (
  resource: string,
  ids: (string | number)[],
  onDeleteSuccess?: () => void
) => {
  const resourceFunctions = functionsMap[resource];
  const deleteFunction = resourceFunctions?.delete;
  if (!deleteFunction || !ids.length) return;

  if (window.confirm(`Are you sure you want to delete ${ids.length} item(s)?`)) {
    try {
      await Promise.all(ids.map(id => deleteFunction(id)));
      alert(`Deleted ${ids.length} item(s)`);
      onDeleteSuccess?.();
    } catch (error: any) {
      alert(`Failed to delete items. Error: ${error.message}`);
    }
  }
};

export const handleDeactivate = async (
  resource: string,
  ids: (string | number)[],
  onDeactivateSuccess?: () => void
) => {
  const resourceFunctions = functionsMap[resource];
  const deactivateFunction = resourceFunctions?.deactivate;
  if (!deactivateFunction || !ids.length) return;
  if (window.confirm(`Are you sure you want to deactivate ${ids.length} item(s)?`)) {
    try {
      await Promise.all(ids.map(id => deactivateFunction(id)));
      alert(`Deactivated ${ids.length} item(s)`);
      onDeactivateSuccess?.();
    } catch (error: any) {
      alert(`Failed to deactivate items. Error: ${error.message}`);
    }
  }
}
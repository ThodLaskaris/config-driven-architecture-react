import { deleteMap } from '../config/ITablesConfig'
export const handleEdit = (resource: string, row: any) => {
  // modal opening....
  // alert('Edit for row: ' + JSON.stringify(row));
  alert(`Edit for row: ${row.id}`);
};

export const handleDelete = (
  resource: string,
  row: any,
  onDeleteSuccess?: (id: string | number) => void) => {

  const deleteFunction = deleteMap[resource];
  const id = row.ID ?? row.id;
  if (!deleteFunction || !id) return;
  if (window.confirm(`Are you sure you want to delete item "${id}"?`)) {
    deleteFunction(id)
      .then(() => {
        alert(`Item: "${id}" deleted successfully.`);
        onDeleteSuccess?.(id);
      })
      .catch(error => {
        alert(`Failed to delete item ${id}. Error: ${error.message}`);
      })
  }
};
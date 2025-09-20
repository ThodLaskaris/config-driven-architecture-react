import { functionsMap } from './TableConfig'
export const handleEdit = (resource: string, row: any) => {
  // modal opening....
  // alert('Edit for row: ' + JSON.stringify(row));
  alert(`Edit for row: ${row.id}`);
};

export const handleDelete = async (
  resource: string,
  ids: (string | number)[],
  onDeleteSuccess?: () => void
) => {
  const deleteFunction = functionsMap[resource];
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
  const deactivateFunction = functionsMap[resource];
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








// export const handleDelete = (
//   resource: string,
//   row: any,
//   onDeleteSuccess?: (id: string | number) => void) => {

//   const deleteFunction = deleteMap[resource];
//   const id = row.ID ?? row.id;
//   if (!deleteFunction || !id) return;
//   if (window.confirm(`Are you sure you want to delete item "${id}"?`)) {
//     deleteFunction(id)
//       .then(() => {
//         alert(`Item: "${id}" deleted successfully.`);
//         onDeleteSuccess?.(id);
//       })
//       .catch(error => {
//         alert(`Failed to delete item ${id}. Error: ${error.message}`);
//       })
//   }
// };

// export const handleMassDelete = async (
//   resource: string,
//   ids: (string | number)[],
//   onDeleteSuccess?: () => void 
// ) => {
//   const deleteFunction = deleteMap[resource];
//   if (!deleteFunction || !ids.length) return;
//   if (window.confirm(`Are you sure you want to delete ${ids.length} items?`)) {
//     try {
//       await Promise.all(ids.map(id => deleteFunction(id)));
//       alert(`Deleted ${ids.length} items`);
//       onDeleteSuccess?.();
//     } catch (error: any) {
//       alert(`Failed to delete items ${ids}. Error: ${error.message}`);
//     }
// }

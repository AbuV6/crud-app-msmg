import { ref } from "vue";

export const tableData = ref<
  {
    id: number;
    name: string;
    age: number;
    phone: number;
    email: string;
    dob: number;
    department: string;
    mealPref: string;
    travelling: string;
  }[]
>([]);

export const selectedRowId = ref<number | null>(null);

// Delete a row from the table
export const deleteRow = (id: number) => {
  tableData.value = tableData.value.filter((row) => row.id !== id);
};

// Populate form with selected row data
export const selectRow = (row: {
  id: number;
  name: string;
  age: number;
  phone: number;
  email: string;
  dob: number;
  department: string;
  mealPref: string;
  travelling: string;
}) => {
  Object.assign(form, row);
  selectedRowId.value = row.id;
};

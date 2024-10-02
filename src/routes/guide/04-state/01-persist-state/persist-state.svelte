<script lang="ts">
  import AgGridSvelte from '$lib/AgGridSvelte.svelte';
  import type { ColDef, GetRowIdFunc } from 'ag-grid-community';
  import 'ag-grid-community/styles/ag-grid.css';
  import 'ag-grid-community/styles/ag-theme-alpine.css';

  const columnDefs: ColDef[] = [
    { headerName: 'Row ID', valueGetter: 'node.id' },
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];

  const rowData = [
    { id: 'c1', make: 'Toyota', model: 'Celica', price: 35000 },
    { id: 'c2', make: 'Ford', model: 'Mondeo', price: 32000 },
    { id: 'c8', make: 'Porsche', model: 'Boxster', price: 72000 },
    { id: 'c4', make: 'BMW', model: 'M50', price: 60000 },
    { id: 'c14', make: 'Aston Martin', model: 'DBX', price: 190000 }
  ];

  const getRowId: GetRowIdFunc = (params) => params.data.id;

  const initialState = {
    columnOrder: {
      orderedColIds: ['model', '0', 'make', 'price']
    }
  };  
</script>

<h2>Persist state</h2>
<div style:height="500px" class="ag-theme-alpine">
  <AgGridSvelte {rowData} {columnDefs} {getRowId} {initialState} 

  onGridReady={(event) => {
    debugger;
  }}
  onColumnMoved={(event) => {
    console.log('Column Moved');

    console.trace('Triggered By:');
  }}/>
</div>

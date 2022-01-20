import TableHeader from './TableHeader';
import './FilesTable.css'
import TableBody from './TableBody';
import { useEffect, useState } from 'react';


const FilesTable = (props) => 
{
    const [tableStruct,setTableStruct] = useState(0)

    async function fetchData(){
        fetch("http://localhost:8080/files").then((response) => {
            return response.json();
          }) .then((data) => {
            const transformedTable = data.map((rowData) => {
              return {
                ...rowData
              };
            });
            setTableStruct(transformedTable);
          });
      }

    useEffect(() => {
        (
          async () => fetchData()
        )()
      }, [props.reloadTable])

    return (
        <>
            <table className="styled-table">
                <TableHeader reloadTable={props.reloadTable} setReloadTable={props.setReloadTable}/>
                {tableStruct && <TableBody filesList={tableStruct} setTableStruct={setTableStruct}/>}
            </table>
        </>
    )
}

export default FilesTable;
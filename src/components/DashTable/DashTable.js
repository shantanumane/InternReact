import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './DashTable.css';
import { Table } from 'reactstrap';
function DashTable(){
    const data=[
        {   
            Deag_down: '',
            date : '10/12/2021',
            Total :'30',
            Deluxe:'20',
            Super_Deluxe:'4',
            Executive_rooms:'3',
            Suite_rate: '1',
            Premium:'1'
        },
        {
            Deag_down: '',
            date : '12/12/2021',
            Total :'35',
            Deluxe:'203',
            Super_Deluxe:'23',
            Executive_rooms:'32',
            Suite_rate: '11',
            Premium:'1'
        },
        {
            Deag_down: '',
            date : '11/12/2021',
            Total :'31',
            Deluxe:'212',
            Super_Deluxe:'24',
            Executive_rooms:'32',
            Suite_rate: '1',
            Premium:'11'
        }
    ]
    const DropRow=()=>{
        <table>
            <tr>
                Hello
            </tr>
        </table>
    }

    const columns=[
            {
                headerName: "DRAG DOWN",field:'Deag_down',resizable:true
            },
            {
                headerName : "DATE",field:'date',sortable:true,filter:true,resizable:true,sizeColumnsToFit:true
            },
            {
                headerName : "TOTAL ROOMS",field:'Total',sortable:true,resizable: true,sizeColumnsToFit:true
            },
            {
                headerName : "DELUXE",field:'Deluxe',filter:true,resizable: true,sizeColumnsToFit:true
            },
            {
                headerName : "SUPER DULEX",field:'Super_Deluxe',filter:true,resizable: true,sizeColumnsToFit:true
            },
            {
                headerName : "EXECUTIVE ROOM",field:'Executive_rooms',filter:true,resizable: true,sizeColumnsToFit:true
            },
            {
                headerName : "SUITE RATE",field:'Suite_rate',filter:true,resizable: true,sizeColumnsToFit:true
            },
            {
                headerName : "PREMINUM",field:'Premium',filter:true,resizable: true,sizeColumnsToFit:true
            }

    ]
    const rowStyle = { background: 'black',};
    const getRowStyle = params => {
        if (params.node.rowIndex % 2 === 0) {
            return { background: 'red' };
        }
    };

    
    
    return(
        
        <div className="align-items-center table-flush ag-theme-alpine " 
                rowStyle={rowStyle} getRowStyle={getRowStyle} field="athlete" 
                pinned="left"   responsive style={{ height: 250, width: 1100 }}>
                
          
            <AgGridReact rowData={data} columnDefs={columns} />
           
        </div>
    )
}

export default DashTable;


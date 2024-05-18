import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { DataGrid } from "@mui/x-data-grid";
import useFetch from '../hookes/useFetch';


const Usercomponent = ({element}) => {
    console.log("element here-->", element);
    const [list , setList] = useState();
    const handleDelete = () =>{

    }
    const { data, loading, error } = useFetch('http://localhost:8000/users');
    console.log("data in admin here-->", data);

    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                <Link to="/users/test" style={{ textDecoration: "none" }}>
                  <div className="viewButton">View</div>
                </Link>
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row._id)}
                >
                  Delete
                </div>
              </div>
            );
          },
        },
      ];
  return (
    <div className='p-[20px]'>
        <div className='flex items-center justify-between gap-[20px]'>
            <p className='text-[30px] font-bold text-gray-400'>Add New User</p>
            <Link className='text-[20px] font-bold rounded-[5px] border-[2px] border-green-700 px-[30px] text-green-700'>Add New</Link>
      

        </div>
        <DataGrid
            className=""
            rows={list}
            columns={element.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            getRowId={(row) => row._id}
      />
        
    </div>
  )
}

export default Usercomponent

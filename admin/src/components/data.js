export const userColumns = [
    { field: "_id", headerName: "ID", width: 70, headerClassName: 'text-[30px] font-bold text-violet-800' },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className='flex items-center gap-2'>
            <img className="w-10 h-10 rounded-full" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
            <span className='text-[20px]  text-gray-800'>{params.row.username}</span>
          </div>
        );
      },
      headerClassName: 'text-[30px] font-bold text-violet-800',
    },
    { field: "email", headerName: "Email", width: 230, headerClassName: 'text-[30px] font-bold text-violet-800' },
    { field: "country", headerName: "Country", width: 100, headerClassName: 'text-[30px] font-bold text-violet-800' },
    { field: "city", headerName: "City", width: 100, headerClassName: 'text-[30px] font-bold text-violet-800' },
    { field: "phone", headerName: "Phone", width: 100, headerClassName: 'text-[30px] font-bold text-violet-800' },
  ];
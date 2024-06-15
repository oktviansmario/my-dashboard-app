import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import "./Table.css"

function Table({ rows, deleteRow, editRow }) {
    return (
        <div className='rounded-3xl px-2 py-3 flex flex-col bg-white '>
            {/* <p>DataTable Page</p>
        <Link to="/" className="underline">go to dashboard</Link> */}
            <strong className='font-semibold text-lg text-black font-sans px-2 py-2'>Development Table</strong>
            <table className='w-full text-gray-700 no-underline overflow-auto'>
                <thead className='bg-white no-underline'>
                    <tr>
                        <th>NAME</th>
                        <th>PROGRESS</th>
                        <th>QUANTITY</th>
                        <th>DATE</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row, idx) => {
                            return <tr key={idx}>
                                <td>{row.name}</td>
                                <td>{row.progress}%</td>
                                <td>{row.quantity}</td>
                                <td>{row.date}</td>
                                <td>
                                    <span className='flex flex-row gap-2'>
                                        <BsFillTrashFill className='delete-btn' onClick={()=> deleteRow(idx)} />
                                        <BsFillPencilFill className="edit-btn" onClick={()=>editRow(idx)} />
                                    </span>
                                </td>
                            </tr>
                        })
                    }
                </tbody>

            </table>
        </div>

    )
}

export default Table
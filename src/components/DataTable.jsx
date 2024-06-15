import React from 'react'
import { useState } from 'react';

import { Link } from 'react-router-dom'
import Table from './Table/Table'
import Modal from './Modal/Modal'
import "./Modal/Modal.css"

function DataTable() {
    const [modalOpen, setmodalOpen] = useState(false);

    const [rows, setRows] = useState([
        { name: "Marketplace", progress: Math.floor(Math.random() * 101), quantity: "2458", date: "12.Jan.2021" },
        { name: "Venus DB PRO", progress: Math.floor(Math.random() * 101), quantity: "1485", date: "21.Feb.2021" },
        { name: "Venus DS", progress: Math.floor(Math.random() * 101), quantity: "1024", date: "13.Mar.2021" },
        { name: "Venus 3D Asset", progress: Math.floor(Math.random() * 101), quantity: "858", date: "24.Jan.2021" },
        { name: "Marketplace", progress: Math.floor(Math.random() * 101), quantity: "258", date: "Oct 24,2022" }

    ]);

    const [rowToEdit, setRowToEdit] = useState(null)

    const handleEditRow = (idx) => {
        setRowToEdit(idx);

        setmodalOpen(true);
    }

    const handleDeleteRow = (targetIndex) => {
        setRows(rows.filter((_, idx) => idx !== targetIndex));
    }

    const handleSubmit = (newRow) => {
        rowToEdit === null ?
            setRows([...rows, newRow]) :
            setRows(rows.map((currRow, idx) => {
                if (idx !== rowToEdit) return currRow;
                return currRow;
            })
            );
    }

    return (
        <div className='flex flex-col gap-4 overflow-visible'>
            <div className='flex gap-4 w-full flex-col'>
                <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
                <div className='flex justify-center'>
                <button className='btn' onClick={() => setmodalOpen(true)}>
                    Add
                </button>
                </div>
                {modalOpen && (
                    <Modal
                        closeModal={() => {
                            setmodalOpen(false)
                            setRowToEdit(null)
                        }}
                        onSubmit={handleSubmit}
                        defaultValue={rowToEdit !== null && rows[rowToEdit]}
                    />)}
            </div>

        </div>
    )
}

export default DataTable
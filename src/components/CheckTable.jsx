import { Checkbox } from '@headlessui/react'
import { TbCheck } from "react-icons/tb";
import React from 'react'
import { useState } from 'react'

const CheckTableData = [
  {
    id: '1',
    name: 'Marketplace',
    date: 'Apr 26,2022',
    quantity: '2458',
    progress: '75.5%',
  },
  {
    id: '2',
    name: 'Venus DB PRO',
    date: 'Jul 20,2022',
    quantity: '1485',
    progress: '35.4%',
  },
  {
    id: '3',
    name: 'Venus DS',
    date: 'Sep 30, 2022',
    quantity: '1024',
    progress: '25%',
  },
  {
    id: '4',
    name: 'Venus 3D Asset',
    date: 'Oct 24, 2022',
    quantity: '858',
    progress: '100%',
  },
  {
    id: '5',
    name: 'Marketplace',
    date: 'Nov 29, 2022',
    quantity: '258',
    progress: '75.5%',
  },
]

const CheckTable = () => {

  const [enabled, setEnabled] = useState(false)
  return (
    <div className='bg-white px-4 py-3 rounded-3xl border border-gray-200 flex-1'>
      <div className='flex flex-col gap-2 '>
        <strong className='text-black font-bold text-lg'>Check Table</strong>
        <div className='mt-3'>
          <table className='w-full text-gray-700 no-underline'>
            <thead className='bg-white no-underline'>
              <tr>
                <td>NAME</td>
                <td>PROGRESS</td>
                <td>QUANTITY</td>
                <td>DATE</td>
              </tr>
            </thead>
            <tbody className='font-semibold no-underline'>
              {CheckTableData.map((order) => (
                <tr key={order.id}>
                  <td className='flex flex-row'>
                    <Checkbox checked={enabled}
                    onChange={setEnabled}
                    className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500 mr-1"
                    >
                    </Checkbox>
                    {order.name}
                  </td>
                  <td>{order.progress}</td>
                  <td>{order.quantity}</td>
                  <td>{order.date}</td>
                </tr>
                ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default CheckTable
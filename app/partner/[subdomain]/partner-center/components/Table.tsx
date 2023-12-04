"use client"
import { TableContainer, Table, Th, Tr, Thead, Td, Tbody } from '@chakra-ui/react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useReducer, useState } from 'react'
import moment from 'moment'

type Person = {
  slug: string
  tema: string
  createdAt: string
  updatedAt: string
  content: any
}

const defaultData: Person[] = [
  {
    slug: 'putraputri',
    content: {"profileBrideName": "Putri Simbolon",
          "profileGroomName": "Putra Nababan", "eventFirstDate": "2023-12-30",},
    createdAt: "2023-12-03T13:05:30.919Z",
    updatedAt: "2023-12-03T23:25:29.595Z",
    tema: "Smooth",
  },
]

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('slug', {
    header: () => 'URL',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor(row => row.content, {
    id: 'Bride Name',
    cell: info => info.getValue().profileBrideName,
    header: () => <span>Pengantin Wanita</span>,
  }),
  columnHelper.accessor(row => row.content, {
    id: 'Groom Name',
    cell: info => info.getValue().profileGroomName,
    header: () => <span>Pengantin Pria</span>,
  }),
  columnHelper.accessor(row => row.content, {
    id: 'Tanggal Acara',
    cell: info => moment(info.getValue().eventFirstDate).format('DD-M-YYYY'),
    header: () => <span>Tanggal Acara Pertama</span>,
  }),
  columnHelper.accessor('tema', {
    header: () => 'Tema',
    cell: info => info.renderValue(),
  }),
  columnHelper.accessor('createdAt', {
    header: () => 'Dibuat Tanggal',
    cell: info => moment(info.renderValue()).format('DD-M-YYYY'),
  })
]

function DataTable({data}: any) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2">
      <TableContainer>
        <Table variant='striped' colorScheme='gray'>
          <Thead>
            {table.getHeaderGroups().map(headerGroup => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map(row => (
              <Tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DataTable;
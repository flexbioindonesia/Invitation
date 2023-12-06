"use client"

import Link from "next/link";
import DataTable from "../components/Table";
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Badge, Box, Button, Heading, useDisclosure, useToast } from "@chakra-ui/react";
import { useGetList, useRemove } from '@/hooks/useUndangan';
import { useRef, useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";

type Undangan = {
  slug: string
  tema: string
  createdAt: string
  updatedAt: string
  content: any,
  action: any
  id: string,
  status_undangan: string,
}

function Page({params}: any) {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({});
  const [deleteId, setDeleteId] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<HTMLInputElement>(null)

  const { data: resList, refetch } = useGetList({
    query: {
      page: 1,
      partnerId: params.subdomain,
    },
    onSuccess: (res: any) => {
      let newData: any = [];
      res?.data?.map((itm: any) => {
        newData.push(
          {...itm.attributes, id: itm.id}
        )
      })
      setData(newData);
      setMeta(res.meta);
    },
    onError: (err: any) => {
      const pesanError = err.response?.data?.error?.message === 'This attribute must be unique' ? 'Link URL sudah terpakai, Silahkan ganti dengan yang lain' : err.response?.data?.error?.message
      toast({
        title: `Gagal Mendapatkan List Undangan: ${pesanError}`,
        status: 'error',
        isClosable: true,
      })
    },
  });

  const columnHelper = createColumnHelper<Undangan>()

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
    }),
    columnHelper.accessor('status_undangan', {
      header: () => 'Status Undangan',
      cell: info => <Badge>{info.renderValue()}</Badge>,
    }),
    columnHelper.accessor('id', {
      header: () => 'Action',
      cell: info => <div className="flex gap-2 item-center"><Button size={'sm'} className="text-red-500" onClick={() => handleDelete(info.renderValue())}>Hapus</Button><Link href={`/partner-center/undangan/${info.row.getValue('slug')}`} className="text-white bg-blue-600 px-2 py-1 rounded-sm text-md" >Edit</Link></div>,
    })
  ];

  const handleDelete = (id: any) => {
    onOpen();
    setDeleteId(id);
  }

  const deleteByParams = useRemove({
    id: deleteId,
    onSuccess: () => {
      toast({
        title: `Sukses Menghapus Undangan`,
        status: 'success',
        isClosable: true,
      });
      onClose();
      refetch();
    },
    onError: (err: any) => {
      toast({
        title: `Gagal Menghapus Undangan`,
        status: 'error',
        isClosable: true,
      })
    },
  });

  const handleOnDelete = () => {
    deleteByParams.mutate({id: deleteId})
  }

  return (
    <>
      <div className="px-4 pb-4 pt-8 relative overflow-hidden">
        <div className="mb-4 px-4 flex item-center justify-between">
          <div>
            <Heading as='h3' size='lg'>
              Undangan
            </Heading>
          </div>
          <div>
            <Link href={'/partner-center/undangan/create'} className="bg-blue-600 px-3 py-3 text-white rounded-md">Create</Link>
          </div>
        </div>
        <div className="flex flex-col overflow-x-auto">
          <Box overflowX="scroll" width={'inherit'}>
            <DataTable data={data || []} columns={columns} />
          </Box>
        </div>
      </div>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Konfirmasi?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Anda yakin akan menghapus data ini?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={onClose}>
              No
            </Button>
            <Button onClick={handleOnDelete} colorScheme='red' ml={3} className="bg-red-500">
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default Page;
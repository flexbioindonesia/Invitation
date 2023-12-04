"use client"

import Link from "next/link";
import DataTable from "../components/Table";
import { Heading, useToast } from "@chakra-ui/react";
import { useGetList } from '@/hooks/useUndangan';
import { useState } from "react";

function Page({params}: any) {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({});
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
        title: `Gagal Menambahkan Undangan: ${pesanError}`,
        status: 'error',
        isClosable: true,
      })
    },
  });
  return (
    <>
      <div className="px-4 pb-4 pt-8">
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
        <div className="flex flex-col">
          <DataTable data={data || []} />
        </div>
      </div>
    </>
  );
}

export default Page;
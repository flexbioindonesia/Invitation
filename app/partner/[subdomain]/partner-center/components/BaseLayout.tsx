"use client"
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "./Sidebar"


export default function BaseLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const path = usePathname();
  if(path === '/partner-center/theme-editor'){
    return (
      <div className='flex-col w-full h-screen'>
        <div className="h-[56px] w-full px-4 flex bg-blue-600 text-white justify-between items-center fixed">
          <p className="font-bold">Partner Theme Editor</p>
        </div>
        <div className='w-full overflow-x-auto h-full'>
          {children}
        </div>
      </div>
    )
  }
  return (
    <div className='flex w-full h-screen'>
			<div className='w-[300px] hidden lg:overflow-y-auto lg:block'>
				<Sidebar />
			</div>
			<div className='w-full overflow-x-auto'>
				{children}
			</div>
		</div>
  )
}
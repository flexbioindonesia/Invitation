"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Cookies from 'js-cookie';

const menu = [
  {
    title: 'Home',
    url: '/partner-center',
    target: '_parent'
  },
  {
    title: 'Undangan',
    url: '/partner-center/undangan',
    childRoute: [
      '/partner-center/undangan/create'
    ],
    target: '_parent'
  },
  {
    title: 'Editor Tema',
    url: '/partner-center/theme-editor',
    childRoute: [
      ''
    ],
    target: '_blank'
  },
]

function Sidebar() {
  const path = usePathname();
  const route = useRouter();
  const isActive = (itm: any) => {
    if(itm.url === path){
      return true;
    }else if(itm.childRoute?.includes(path)){
      return true;
    }else{
      return false;
    }
  }
  const handleLogout = () => {
    Cookies.remove('token');
    route.replace('/login');
  }
  return (
    <>
      <div className="w-full h-full bg-slate-100 relative">
        <div className="flex flex-col text-center py-6">
          <p className="text-xl text-gray-700 font-bold">LOGO</p>
          <p className="text-md text-gray-700 font-normal">Partner Center</p>
        </div>
        <div className="flex flex-col mt-2 px-4 gap-2">
          {
            menu.map((itm, i) => (
              <Link target={itm.target} key={i} href={itm.url} className={`${isActive(itm) && 'bg-blue-600 text-white'} hover:bg-blue-200 rounded-md font-normal px-2 py-2`}>{itm.title}</Link>
            ))
          }
        </div>
        <div className="absolute w-full bottom-0">
          <button className="bg-blue-600 text-white w-full py-2" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
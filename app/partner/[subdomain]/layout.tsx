import type { Metadata, ResolvingMetadata } from 'next'
import { Providers } from '../../provider'
import Cookies from 'js-cookie';
import Login from './login/page'
import { redirect } from 'next/navigation';


type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.subdomain

  // fetch data
// const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  if(id === null){
    return {
      title: `Invitation - Not Found`,
    }
  }

  return {
    title: `Invitation - ${id}`,
    description: `Web khusus ${id}`,
    openGraph: {
    //   images: [dataUser.meta.picture_profile, ...previousImages],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const token = Cookies.get('token');
  // if(!token){
  //   redirect('/login');
  // }
  // if(token){
  //   return (
  //     <Providers>
  //       {children}
  //     </Providers>
  //   )
  // }

  return (
    <Providers>
      {children}
    </Providers>
  )
}

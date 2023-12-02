import type { Metadata, ResolvingMetadata } from 'next'
import Sidebar from './components/Sidebar'

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
    title: `Invitation - Partner Center ${id}`,
    description: `Partner Center khusus ${id}`,
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
  return (
    <div className='flex w-full h-screen'>
			<div className='w-[300px] hidden lg:overflow-y-auto lg:block'>
				<Sidebar />
			</div>
			<div className='w-full'>
				{children}
			</div>
		</div>
  )
}

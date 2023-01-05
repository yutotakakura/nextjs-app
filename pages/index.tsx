import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className="text-20xl bg-orange-500 font-bold underline">
      Hello world!
    </h1>
  )
}

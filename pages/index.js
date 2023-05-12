import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useState } from 'react';
import { useSession, getSession, signOut } from 'next-auth/react';


export default function Home() {

  const { data: session } = useSession();

  // Funcion para poder cerrar session
  function handleSignOut() {
    signOut();
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Pagina de inicio</title>
      </Head>

      {session ? User({ session, handleSignOut }) : Guest()}

    </div>
  )
}


//Guest page => Pagina invitados
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Pagina de invitados</h3>

      <div className='flex justify-center'>
        <Link href={'/login'} className='mt-5'>
          <span className='px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Iniciar sesion</span>
        </Link>
      </div>
    </main>
  )
}

//Autorize User
function User({ session, handleSignOut }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Usuario Autorizado</h3>

      <div className='details'>
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSignOut}
          className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>
          Cerrar sesion
        </button>
      </div>

      <div className='flex justify-center'>
        <Link href={'/profile'} className='mt-5'>
          <span className='px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Pagina Perfil</span>
        </Link>
      </div>
    </main>
  )

}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }


}

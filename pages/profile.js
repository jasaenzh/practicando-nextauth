import Link from "next/link";
import { getSession } from "next-auth/react";


export default function Profile() {

    return (
        <section className="container mx-auto text-center">

            <h3 className=" text-4xl font-bold"> Pagina Profile</h3>

            <Link href={"/"}>Pagina de Inicio</Link>

        </section>
    )
}

export async function getServerSideProps({ req }) {

    const session = await getSession({ req });

    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            }
        }
    }

    // si el usuario esta autenticado
    return {
        props: { session }
    }

}



import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";

export default function Login() {
    return (
        <Layout>
            <Head>
                <title>Inicio session</title>
            </Head>
            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className=" text-gray-800 text-4xl font-bold py-4">Explorer</h1>
                    <p className="w-3/4 mx-auto text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam neque, fuga velit nisi iusto ab beatae? Velit placeat, distinctio accusamus illo ad dolorem aperiam, voluptate odit, sequi voluptatibus pariatur inventore.</p>
                </div>

                {/* form */}
                <form className="flex flex-col gap-5">
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                    </div>
                    {/* Login Bottons */}
                    <div className="input-button">
                        <button type="submit">
                            Iniciar sesion
                        </button>
                    </div>
                    <div className="input-button">
                        <button type="submit">
                            Iniciar sesion con Google
                        </button>
                    </div>
                    <div className="input-button">
                        <button type="submit">
                            Iniciar sesion con Github
                        </button>
                    </div>
                </form>

                {/* bottom */}
                <p className="text-center text-gray-400">
                    No tienes una cuenta?
                    <Link href={'/register'}>
                        <span className=" text-blue-700"> Registrarse</span>
                    </Link>
                </p>

            </section>
        </Layout>
    )
}
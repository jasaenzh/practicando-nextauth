/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
import styles from '../styles/Form.module.css'
import Image from 'next/image';
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";

export default function Login() {
    const [show, setShow] = useState(false);
    return (
        <Layout>
            <Head>
                <title>Inicio session</title>
            </Head>
            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className=" text-gray-800 text-4xl font-bold py-4">Inicia sesion</h1>
                    {/* <p className="w-3/4 mx-auto text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam neque, fuga velit nisi iusto ab beatae? Velit placeat, distinctio accusamus illo ad dolorem aperiam, voluptate odit, sequi voluptatibus pariatur inventore.</p> */}
                </div>

                {/* form */}
                <form className="flex flex-col gap-5">
                    <div className={styles.input_group}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={styles.input_text}
                        />
                        <span className="icon flex items-center px-4">
                            <HiAtSymbol size={25} />
                        </span>
                    </div>
                    <div className={styles.input_group}>
                        <input
                            type={`${show ? 'text' : 'password'}`}
                            name="password"
                            placeholder="Password"
                            className={styles.input_text}

                        />
                        <span className="icon flex items-center px-4" onClick={() => setShow(!show)}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    {/* Login Bottons */}
                    <div className="input-button">
                        <button type="submit" className={styles.button}>
                            Iniciar sesion
                        </button>
                    </div>
                    <div className="input-button">
                        <button type="button" className={styles.button_custom}>
                            Iniciar sesion con Google <Image src={'/asset/google.svg'} width="20" height={20}></Image>
                        </button>
                    </div>
                    <div className="input-button">
                        <button type="button" className={styles.button_custom}>
                            Iniciar sesion con Github <Image src={'/asset/github.svg'} width="20" height={20}></Image>
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
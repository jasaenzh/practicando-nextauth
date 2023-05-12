/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Layout from "/layout/layout";
import Link from "next/link";
import styles from '../styles/Form.module.css'
import Image from 'next/image';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from "react";
import { useFormik } from "formik";
import register_validate from "../lib/validate";

export default function Register() {

    const [show, setShow] = useState({ password: false, cpassword: false });

    // Usando hook formik
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            cpassword: ''
        },
        validate: register_validate,
        onSubmit: onSubmit
    })

    // creo la funcion onSubmit
    async function onSubmit(values) {
        console.log(values)
    }

    return (
        <Layout>
            <Head>
                <title>Registro</title>
            </Head>
            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className=" text-gray-800 text-4xl font-bold py-4">Registrar</h1>
                    {/* <p className="w-3/4 mx-auto text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam neque, fuga velit nisi iusto ab beatae? Velit placeat, distinctio accusamus illo ad dolorem aperiam, voluptate odit, sequi voluptatibus pariatur inventore.</p> */}
                </div>

                {/* form */}
                <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                    <div className={styles.input_group}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className={styles.input_text}
                            {...formik.getFieldProps('username')}
                        />
                        <span className="icon flex items-center px-4">
                            <HiOutlineUser size={25} />
                        </span>
                    </div>
                    {/* Aca se muestran los errores del campo username */}
                    {formik.errors.username && formik.touched.username ? <span className="text-rose-500">{formik.errors.username}</span> : <></>}

                    <div className={styles.input_group}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={styles.input_text}
                            {...formik.getFieldProps('email')}
                        />
                        <span className="icon flex items-center px-4">
                            <HiAtSymbol size={25} />
                        </span>
                    </div>
                    {/* Aca se muestran los errores del campo email */}
                    {formik.errors.email && formik.touched.email ? <span className="text-rose-500">{formik.errors.email}</span> : <></>}

                    <div className={styles.input_group}>
                        <input
                            type={`${show.password ? 'text' : 'password'}`}
                            name="password"
                            placeholder="Password"
                            className={styles.input_text}
                            {...formik.getFieldProps('password')}
                        />
                        <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, password: !show.password })}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    {/* Aca se muestran los errores del campo password  */}
                    {formik.errors.password && formik.touched.password ? <span className="text-rose-500">{formik.errors.password}</span> : <></>}

                    <div className={styles.input_group}>
                        <input
                            type={`${show.cpassword ? 'text' : 'password'}`}
                            name="cpassword"
                            placeholder="Confirm Password"
                            className={styles.input_text}
                            {...formik.getFieldProps('cpassword')}
                        />
                        <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, cpassword: !show.cpassword })}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    {/* Aca se muestran los errores del campo password  */}
                    {formik.errors.cpassword && formik.touched.cpassword ? <span className="text-rose-500">{formik.errors.cpassword}</span> : <></>}

                    {/* Login Bottons */}
                    <div className="input-button">
                        <button type="submit" className={styles.button}>
                            Registrar
                        </button>
                    </div>
                </form>

                {/* bottom */}
                <p className="text-center text-gray-400">
                    Tienes una cuenta?
                    <Link href={'/login'}>
                        <span className=" text-blue-700"> Inicia sesion</span>
                    </Link>
                </p>

            </section>
        </Layout>
    )
}
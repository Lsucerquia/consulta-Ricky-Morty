import Link from "next/link";
import styles from './Layout.module.css'; // Asegúrate de crear este archivo

export default function Layout({children}){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Personajes</h1>

            <main>
                {children}
            </main>
            <br></br>
            <footer className={styles.footer}>
                <p>Footer</p>
                <p>Fin de la consulta</p>
                <Link href="/" className={styles.link}>Regresar a la página principal</Link>
            </footer>
        </div>
    )
}


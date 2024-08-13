import Link from 'next/link';
import styles from './style.module.css';

export const metadata = {
    title: "Rick and Morty API",
    description: "Consulta de personajes",
    keywords: ["p1", "p2"]
};

export default async function Posts() {
    const data = await getData();

    if (!data || !data.results) {
        return (
            <div>
                <h1>Error al cargar los personajes</h1>
                <p>No se pudieron cargar los personajes desde la API. Inténtalo de nuevo más tarde.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Consulta de personajes</h1>
            <br></br>
            <div className={styles.gridContainer}>
                {data.results.slice(0, 20).map(({ id, name, species, gender, status, type, image }) => (
                    <div key={id} className={styles.gridItem}>
                     <Link href={`/characters/${id}`}>Click para ver mas detalles</Link>
                        <img src={image} alt={`Imagen de ${name}`} className={styles.characterImage} />
                        <h3>{name}</h3>
                        <p>Especie: {species}</p>
                        <p>Género: {gender}</p>
                        <p>Tipo: {type || 'N/A'}</p>
                        <p>Estado: {status}</p>
                       
                        <br></br>
                       
                    </div>
                    
                ))}
                  
            </div>
          
        </div>
    );
}

async function getData() {
    try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        if (!res.ok) {
            throw new Error("Hubo un error en la red");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}







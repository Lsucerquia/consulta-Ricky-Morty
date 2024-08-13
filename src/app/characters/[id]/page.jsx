import { notFound } from "next/navigation";

// Genera los parámetros estáticos para las rutas dinámicas
export async function generateStaticParams() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    // `data.results` debe ser un array antes de usar `map`
    return data.results.map((post) => (
        { id: String(post.id) }
    ));
}

// Función que obtiene los datos de un personaje específico
async function getData(id) {
    try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!res.ok) {
            throw new Error("Hubo un error en la red");
        }
        const character = await res.json();
        return character;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// muestra los detalles de un personaje
export default async function Page({ params }) {
    const data = await getData(params.id);
    if (!data) {
        notFound(); // Muestra una página 404 si no se encuentra el personaje
    }
    return (
        <div>
            <h1>{data.name}</h1>
            <img src={data.image} alt={`Imagen de ${data.name}`} style={{ width: '200px', height: '200px' }} />
            <p>Especie: {data.species}</p>
            <p>Género: {data.gender}</p>
            <p>Estado: {data.status}</p>
            <p>Tipo: {data.type || 'N/A'}</p>
            <p>Origen: {data.origin.name}</p>
            <p>Ubicación actual: {data.location.name}</p>
        </div>
    );
}



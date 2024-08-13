

import Link from 'next/link';

export default function Characters() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ color: '#540', fontSize: '24px' }}>Bienvenidos a la consulta de la app de Rick and Morty</h1>
            <br />
            <Link href="/characters">
                <button style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Dar click para ver los personajes
                </button>
            </Link>
        </div>
    );
}



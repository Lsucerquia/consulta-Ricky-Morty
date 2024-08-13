import Image from "next/image"
import Link from "next/link"

export default function PrimerPost(){
    return(
        <div>
            <h1>Este es el primer post</h1>
            <Image src="/imagen/img1.jpg" width={300} height={300} />
            <Link href="/">Ir a la página principal</Link>
            <a href="/ejemplo">Ejemplo con ancla</a>
        </div>
    )
}
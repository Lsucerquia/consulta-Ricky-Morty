import Image from "next/image"

export default function Layout ({children}){
    return(
        <>
         <Image src="/imagen/img1.jpg" width={150} height={150} />
         <main>
            {children}
         </main>
        
        </>

    )

    
}
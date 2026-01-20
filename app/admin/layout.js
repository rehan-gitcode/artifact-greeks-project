import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google"
import AdminHeader from "@/Component/AdminHeader";


// import "./globals.css";



const inter =Inter({subsets:["latin"]})


export const metadata = {

    title: "A Next App",

    description: "A Artifact Greeks WEb",
};

export default function Layout({ children }) {

    return (

        <html lang="en">

            <body className={inter.className}>


           <AdminHeader/>
              
                     {children}
               
               

               

            </body>

        </html>


    );

}


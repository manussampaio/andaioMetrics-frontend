import Link from "next/link";
import { Button } from "./button";
import {abril} from "@/app/layout"

export function TopbarMenu() {
    return (

        <header className="w-full h-20 flex gap-9 p-8 bg-yellow-100 items-center justify-between">
            <div className="flex items-center">
                <img src="/egg.png" className="size-12 m-3"></img>
                <Link href={"/"}>
                    <h1 className={`text-3xl w-70 font-extrabold text-blue-900 ${abril.className}`}>ANDAIO Metrics</h1>
                </Link>
            </div>
            
            <nav className="flex flex-row items-center gap-7.5">
                <div className=" flex gap-6 text-sm text-blue-900">
                    <Link href={"/nova-analise"}>Nova análise</Link>
                    <Link href={"/ver-analises"}>Ver análises</Link>
                </div>
                <div className="flex gap-6">
                    <Link href={"/login"}><Button variant="outline" className="text-orange-400">Login</Button></Link>
                    <Link href={"/autenticacao"}><Button className=" text-white bg-orange-400 hover:bg-orange-600">Cadastrar-se</Button></Link>
                </div>
            </nav>
        </header>

        
    )
}
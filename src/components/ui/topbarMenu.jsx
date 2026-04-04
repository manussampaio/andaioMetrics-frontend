import Link from "next/link";
import { Button } from "./button";

export function TopbarMenu() {
    return (
        <header className="size-full flex flex-row p-8 bg-white">
            <h1 className="text-2xl font-bold">ANDAIO Metrics</h1>
            <nav className="size-full flex flex-row justify-between">
                <div>
                    <Link href={'/'}>Nova análise</Link>
                    <Link href={'/'}>Ver análises</Link>
                </div>
                <div>
                    <Button>Login</Button>
                    <Button>Cadastrar-se</Button>
                </div>
            </nav>
        </header>
    )
}
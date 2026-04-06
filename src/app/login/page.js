import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className=" flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md p-8 bg-white rounded-xl border border-slate-200">
        <h1 className="text-center text-3xl font-bold text-blue-900">Bem-vindo de volta</h1>
        
        <section>
          <div className="flex flex-col gap-2 p-3.5">
            <label className="text-sm font-medium">E-mail</label>
            <input 
              type="email" 
              placeholder="seu@email.com"
              className="w-full p-3 rounded-md border border-slate-300"
            />
          </div>
          <div className="flex flex-col gap-2 p-3.5">
            <label className="text-sm font-medium">Senha</label>
            <input 
              type="password" 
              placeholder="********"
              className="w-full p-3 rounded-md border border-slate-300"
            />
          </div>
          
          <Button className="w-full bg-orange-400 hover:bg-orange-600 text-white p-6 text-lg">
            Entrar
          </Button>
        </section>

        <div className="flex flex-row gap-2 justify-center text-sm m-3">
          <p className="text-slate-500">Não tem uma conta? </p>
          <Link href="/autenticacao" className="text-orange-400 font-bold hover:text-orange-600">
            Cadastre-se
          </Link>
        </div>
      </div>
    </main>
  );
}
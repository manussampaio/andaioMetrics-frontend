import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AutenticacaoPage() {
  return (
    <main className="flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md p-8 bg-white rounded-xl border border-slate-200">
          <h1 className="text-center text-3xl font-bold text-blue-900">Criar Conta</h1>
        
        <section>
          <div className="flex flex-col gap-2 p-3.5">
            <label className="text-sm font-medium">Nome Completo</label>
            <input 
              type="text" 
              placeholder="Seu nome"
              className="w-full p-3 rounded-md border border-slate-300"
            />
          </div>
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
              placeholder="Crie uma senha forte"
              className="w-full p-3 rounded-md border border-slate-300"
            />
          </div>
          
          <Button className="w-full bg-orange-400 hover:bg-orange-600 text-white p-6 text-lg">
            Criar conta
          </Button>
        </section>

        <div className="flex flex-row gap-2 justify-center text-sm m-3">
          <p className="text-slate-500">Já possui uma conta? </p>
          <Link href="/login" className="text-orange-400 font-bold hover:text-orange-600">
            Fazer Login
          </Link>
        </div>
      </div>
    </main>
  );
}
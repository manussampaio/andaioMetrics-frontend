import Image from "next/image"
import { Button } from "@/components/ui/button"
import { abril } from "@/app/layout"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center p-6">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg p-8 m-8">

        <section className="gap-6 items-center">
          
          <div className="mb-8 flex gap-8 flex-col">
            <h2 className={`${abril.className} text-4xl`}>
              Controle completo da qualidade interna dos ovos
            </h2>
          </div>

          <div className="flex flex-row justify-between p-6 ">
            <div className="flex flex-col gap-15">
            <p className="text-gray-500 max-w-md">
              Registre dados como peso da gema, altura da gema e altura da clara
              de forma simples, rápida e confiável.
            </p>

            <div className="flex gap-3">
              <Button className="rounded-full bg-orange-400 hover:bg-orange-500">
                Nova análise
              </Button>

              <Button variant="outline" className="rounded-full text-orange-400">
                Ver análises
              </Button>
            </div>
            </div>

            <Image
              src="/eggs-isolated-white-surface.jpg"
              width={400}
              height={300}
              className="rounded-xl mb-10"
              alt=""
            />
          </div>

        </section>

        <hr />

        <section>
          <h3 className={`${abril.className} text-2xl font-medium flex justify-center mb-8 mt-4`}>Parâmetros analisados</h3>

          <div className="flex justify-evenly gap-4">
            <div className="bg-blue-950 text-white p-4 rounded-2xl text-center">
              <p className="font-medium">Peso da gema</p>
              <p className="text-sm text-gray-200">g</p>
            </div>

            <div className="bg-blue-950 text-white p-4 rounded-2xl text-center">
              <p className="font-medium">Altura da gema</p>
              <p className="text-sm text-gray-200">mm</p>
            </div>

            <div className="bg-blue-950 text-white p-4 rounded-2xl text-center">
              <p className="font-medium">Altura da clara</p>
              <p className="text-sm text-gray-200">mm</p>
            </div>

            <div className="bg-blue-950 text-white p-4 rounded-2xl text-center">
              <p className="font-medium">Índice de qualidade</p>
              <p className="text-sm text-gray-200">calculado</p>
            </div>
          </div>
        </section>

        <section className="flex justify-evenly gap-4 mt-20 mb-8">

          <div className="p-5 rounded-2xl border">
            <p className="font-semibold"> + Nova análise</p>
            <p className="text-sm text-gray-500">
              Registre novos dados de ovos analisados
            </p>
          </div>

          <div className="p-5 rounded-2xl border">
            <p className="font-semibold">📊 Histórico</p>
            <p className="text-sm text-gray-500">
              Consulte análises anteriores
            </p>
          </div>

        </section>

        <hr/>

        <section className="flex flex-row justify-evenly p-4 items-center">

          
          <div className="max-w-xl p-8">
            <h3 className={`${abril.className} text-3xl mb-4`}>
              Sobre o sistema
            </h3>

            <p className="text-gray-500">
              O ANDAIO Metrics foi desenvolvido para auxiliar na análise convencional da qualidade interna
              dos ovos, permitindo o registro de parâmetros físicos importantes para
              controle e pesquisa.
            </p>

            <ul className="mt-4 text-sm">
              <li>✔ Armazenamento de dados</li>
              <li>✔ Organização das análises</li>
              <li>✔ Apoio à tomada de decisão</li>
            </ul>
          </div>

          <Image
            src="/analise-ovo.png"
            width={400}
            height={300}
            className="rounded-xl"
            alt=""
          />

        </section>

        <hr/>

        <footer className="flex justify-center text-sm text-gray-500 pt-6 ">
          <p>© 2026 ANDAIO Metrics</p>
        </footer>

      </div>
    </main>
  )
}
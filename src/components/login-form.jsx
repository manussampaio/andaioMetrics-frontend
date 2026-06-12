"use client"; // ← torna o componente interativo no browser

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function LoginForm({
  className,
  ...props
}) {
  // Estado dos campos
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault(); // impede o comportamento padrão do form (reload da página)
    setError("");
    setLoading(true);

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError("Email ou senha inválidos.");
      return;
    }

    router.push("/dashboard"); // redireciona após login com sucesso
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Bem-vindo de volta!</CardTitle>
          <CardDescription>
            Insira seu email para fazer login na sua conta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="seu@email.com" required />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Senha</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Esqueceu a senha?
                  </a>
                </div>
                <Input id="password" type="password" placeholder="********" required />
              </Field>
              <Field>
                <Button type="submit" disabled={loading} className="bg-orange-400 hover:bg-orange-600">
                  {loading ? "Entrando..." : "Login"}
                </Button>
                <FieldDescription className="text-center">
                  Não tem uma conta? <Link href="/signup">Cadastrar-se</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div >
  );
}


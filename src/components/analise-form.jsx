// frontend/src/components/plan-form.jsx

import { Button } from "./ui/button";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";

export default function AnaliseForm({
    editing,
    form,
    setForm,
    error,
    saving,
    handleSubmit,
}) {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold">
                {editing ? "Editar Análise" : "Nova Análise"}
            </h1>

            <p className="text-muted-foreground mb-6">
                {editing
                    ? "Altere os dados da análise."
                    : "Preencha os dados para criar uma nova análise."}
            </p>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Submit funcionando");
                    handleSubmit(e);
                }}
                className="flex flex-col gap-4"
            >
                <FieldGroup>
                    {error && (
                        <p className="text-sm text-destructive">{error}</p>
                    )}

                    <Field>
                        <FieldLabel>Nome da Amostra</FieldLabel>
                        <Input
                            value={form.nome}
                            placeholder={'Ex: Ovo 7'}
                            onChange={(e) =>
                                setForm({ ...form, nome: e.target.value })
                            }
                        />
                    </Field>

                    <Field>
                        <FieldLabel>Data da Análise</FieldLabel>
                        <Input
                            value={form.data}
                            placeholder={'Ex: 25/06/2024'}
                            onChange={(e) =>
                                setForm({ ...form, data: e.target.value })
                            }
                        />
                    </Field>

                    <Field>
                        <FieldLabel>Peso do Ovo (g)</FieldLabel>
                        <Input
                            type="number"
                            step="0.01"
                            value={form.pesoOvo}
                            placeholder={'Ex: 56.4'}
                            onChange={(e) =>
                                setForm({ ...form, pesoOvo: e.target.value })
                            }
                        />
                    </Field>

                    <Field>
                        <FieldLabel>Peso da Casca (g)</FieldLabel>
                        <Input
                            type="number"
                            step="0.01"
                            value={form.pesoCasca}
                            placeholder={'Ex: 3.6'}
                            onChange={(e) =>
                                setForm({ ...form, pesoCasca: e.target.value })
                            }
                        />
                    </Field>

                    <Field>
                        <FieldLabel>Peso da Gema (g)</FieldLabel>
                        <Input
                            type="number"
                            step="0.01"
                            value={form.pesoGema}
                            placeholder={'Ex: 16.7'}
                            onChange={(e) =>
                                setForm({ ...form, pesoGema: e.target.value })
                            }
                        />
                    </Field>

                    <Button type="submit" disabled={saving}>
                        {saving
                            ? "Salvando..."
                            : editing
                                ? "Salvar Alterações"
                                : "Criar Análise"}
                    </Button>


                </FieldGroup>
            </form>
        </div>
    );
}
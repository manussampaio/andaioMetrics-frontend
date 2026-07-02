"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from "lucide-react";
import CardAnaliseAdmin from "@/components/card-nova-analise";
import AnaliseForm from "@/components/analise-form";

const API = "http://localhost:5500/api/analises";

export default function AnaliseAdmin() {
  const [analise, setAnalise] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [editing, setEditing] = useState(null); // null = criar, objeto = editar
  const [form, setForm] = useState({
    data: "",
    nome: "",
    pesoOvo: "",
    pesoCasca: "",
    pesoGema: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null); // id do analiseo a deletar

  useEffect(() => {
    fetchAnalises();
  }, []);

  async function fetchAnalises() {
    setLoading(true);
    const res = await fetch(API);
    const data = await res.json();
    setAnalise(data);
    setLoading(false);
  }

  function openCreate() {
    setEditing(null);
    setForm({ nome: "", data: "", pesoOvo: "", pesoCasca: "", pesoGema: ""});
    setError("");
    setSheetOpen(true);
  }

  

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const body = {
      nome: form.nome,
      data: form.data,
      pesoOvo: Number(form.pesoOvo),
      pesoCasca: Number(form.pesoCasca),
      pesoGema: Number(form.pesoGema)
    };

    const res = await fetch(editing ? `${API}/${editing.id}` : API, {
      method: editing ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    });

    setSaving(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Erro ao salvar análise.");
      return;
    }

    setForm({
      nome: "",
      data: "",
      pesoOvo: "",
      pesoCasca: "",
      pesoGema: "",
    });

    setSheetOpen(false);
    fetchAnalises();
  }

  async function handleDelete(id) {
    await fetch(`${API}/${id}`, { method: "DELETE", credentials: "include" });
    setConfirmDelete(null);
    fetchAnalises();
  }

  return (
    <div className="flex flex-col gap-6">

      <AnaliseForm
        editing={editing}
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit} 
        saving={saving}
        error={error}
      />
    </div>
  );
}

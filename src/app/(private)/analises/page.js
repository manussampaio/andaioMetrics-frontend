"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import CardAnaliseAdmin from "@/components/card-nova-analise";

const API = "http://localhost:5500/api/analises";

export default function Analises() {
  const [analises, setAnalises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(null)

  useEffect(() => {
    fetchAnalises();
  }, []);

  async function fetchAnalises() {
    setLoading(true);
    const res = await fetch(API);
    const data = await res.json();
    setAnalises(data);
    setLoading(false);
  }


async function handleDelete(id) {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) {
    console.log(await res.text());
    return;
  }

  setConfirmDelete(null);
  fetchAnalises();
}

  return (
    <div className="flex flex-col gap-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">Análises</h1>
        <p className="text-muted-foreground mt-2">
          Confira as análises já realizadas!
        </p>
      </div>

       {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} classnome="h-48 rounded-xl" />
          ))}
        </div>
      ) : analises.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          Nenhuma análise cadastrada ainda.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {analises.map((analise) => (
            <CardAnaliseAdmin
              key={analise.id}
              analise={analise}
              confirmDelete={confirmDelete}
              onDelete={handleDelete}
              onRequestDelete={setConfirmDelete}
              onCancelDelete={() => setConfirmDelete(null)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

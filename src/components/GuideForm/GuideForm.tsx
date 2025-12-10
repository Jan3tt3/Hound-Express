// src/components/GuideForm/GuideForm.tsx
import { useState } from "react";
import { Form, Input, Select, Button } from "./GuideForm.styles";
import type { Guide } from "../../types/Guide";


interface Props {
  onAddGuide: (guide: Guide) => void;
}

export default function GuideForm({ onAddGuide }: Props) {
  const [client, setClient] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [status, setStatus] = useState<Guide["status"]>("Activa");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newGuide: Guide = {
      id: crypto.randomUUID(),
      client,
      origin,
      destination,
      status,
      createdAt: new Date().toISOString(),
    };

    onAddGuide(newGuide);

    // Limpiar formulario
    setClient("");
    setOrigin("");
    setDestination("");
    setStatus("Activa");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Registrar Nueva Guía</h2>

      <Input
        type="text"
        placeholder="Cliente"
        value={client}
        onChange={(e) => setClient(e.target.value)}
        required
      />

      <Input
        type="text"
        placeholder="Origen"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        required
      />

      <Input
        type="text"
        placeholder="Destino"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        required
      />

      <Select
        value={status}
        onChange={(e) => setStatus(e.target.value as Guide["status"])}
      >
        <option value="Activa">Activa</option>
        <option value="En tránsito">En tránsito</option>
        <option value="Entregada">Entregada</option>
      </Select>

      <Button type="submit">Guardar Guía</Button>
    </Form>
  );
}

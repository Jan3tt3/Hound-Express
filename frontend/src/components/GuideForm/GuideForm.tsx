import { useDispatch } from "react-redux";

import { Form, Input, Select, Button } from "./GuideForm.styles";
import { addGuide } from "../../store/guideSlice";
import type { Guide } from "../../types";


export default function GuideForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const now = new Date().toISOString();

    const guide: Guide = {
  id: crypto.randomUUID(),
  client: form.client.value,
  origin: form.origin.value,
  destination: form.destination.value,
  status: form.status.value as Guide["status"],
  createdAt: now,
  lastUpdate: now,
  history: [],
};

    dispatch(addGuide(guide));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} aria-labelledby="form-title">
      <h2 id="form-title">Registro de nueva guía</h2>

      {/* Cliente */}
      <label htmlFor="client">Nombre del cliente</label>
      <Input
        id="client"
        name="client"
        type="text"
        placeholder="Ej. Juan Pérez"
        required
        aria-required="true"
      />

      {/* Origen */}
      <label htmlFor="origin">Origen del envío</label>
      <Input
        id="origin"
        name="origin"
        type="text"
        placeholder="Ej. Villahermosa"
        required
        aria-required="true"
      />

      {/* Destino */}
      <label htmlFor="destination">Destino del envío</label>
      <Input
        id="destination"
        name="destination"
        type="text"
        placeholder="Ej. Cancún"
        required
        aria-required="true"
      />

      {/* Estado */}
      <label htmlFor="status">Estado inicial</label>
      <Select id="status" name="status" aria-label="Seleccionar estado de la guía">
        <option value="Pendiente">Pendiente</option>
        <option value="En tránsito">En tránsito</option>
        <option value="Entregada">Entregada</option>
      </Select>

      {/* Botón */}
      <Button type="submit" aria-label="Guardar nueva guía">
        Guardar guía
      </Button>
    </Form>
  );
}
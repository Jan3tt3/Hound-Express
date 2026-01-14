import { useDispatch } from "react-redux";
import type { Guide } from "../../types/Guide";
import { Form, Input, Select, Button } from "./GuideForm.styles";
import { addGuide } from "../../store/guideSlice";

export default function GuideForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const guide: Guide = {
      id: crypto.randomUUID(),
      client: form.client.value,
      origin: form.origin.value,
      destination: form.destination.value,
      status: form.status.value,
      createdAt: new Date().toISOString(),
    };

    dispatch(addGuide(guide));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="client" placeholder="Cliente" required />
      <Input name="origin" placeholder="Origen" required />
      <Input name="destination" placeholder="Destino" required />

      <Select name="status">
        <option value="Activa">Activa</option>
        <option value="En tránsito">En tránsito</option>
        <option value="Entregada">Entregada</option>
      </Select>

      <Button type="submit">Guardar guía</Button>
    </Form>
  );
}

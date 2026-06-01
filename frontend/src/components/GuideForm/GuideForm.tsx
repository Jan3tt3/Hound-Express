import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { Form, Input, Select, Button } from "./GuideForm.styles";
import api from "../../services/api";
import { fetchGuides } from "../../store/guideSlice";

export default function GuideForm() {
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    const form = e.currentTarget;
    try {
      const payload = {
  trackingNumber: `HX-${Date.now()}`,
  client: form.client.value,
  origin: form.origin.value,
  destination: form.destination.value,
  currentStatus: form.status.value,
};

console.log(payload);
console.log(
  "tracking length:",
  payload.trackingNumber.length
);
      
      await api.post("guides/", {

        trackingNumber: `HX-${Date.now()}`,

        client: form.client.value,

        origin: form.origin.value,

        destination: form.destination.value,

        currentStatus: form.status.value,
      });

      dispatch(fetchGuides());

      form.reset();

    } catch (error: any) {

  console.error("ERROR COMPLETO:", error);

  console.error(
    "RESPUESTA DJANGO:",
    error.response?.data
  );
}
  };


  return (

    <Form onSubmit={handleSubmit} aria-labelledby="form-title">

      <h2 id="form-title">
        Registro de nueva guía
      </h2>

      <label htmlFor="client">
        Nombre del cliente
      </label>

      <Input
        id="client"
        name="client"
        type="text"
        required
      />

      <label htmlFor="origin">
        Origen del envío
      </label>

      <Input
        id="origin"
        name="origin"
        type="text"
        required
      />

      <label htmlFor="destination">
        Destino del envío
      </label>

      <Input
        id="destination"
        name="destination"
        type="text"
        required
      />

      <label htmlFor="status">
        Estado inicial
      </label>

      <Select
        id="status"
        name="status"
      >

        <option value="Pendiente">
          Pendiente
        </option>

        <option value="En tránsito">
          En tránsito
        </option>

        <option value="Entregada">
          Entregada
        </option>

      </Select>

      <Button type="submit">
        Guardar guía
      </Button>

    </Form>
  );
}
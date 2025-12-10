import { Panel, Counter } from "./StatusPanel.styles";
import type { Guide } from "../../types/Guide";

interface Props {
  guides: Guide[];
}

export default function StatusPanel({ guides }: Props) {
  const active = guides.filter((g) => g.status === "Activa").length;
  const transit = guides.filter((g) => g.status === "En tránsito").length;
  const delivered = guides.filter((g) => g.status === "Entregada").length;

  return (
    <Panel>
      <Counter>Activas: {active}</Counter>
      <Counter>En tránsito: {transit}</Counter>
      <Counter>Entregadas: {delivered}</Counter>
    </Panel>
  );
}

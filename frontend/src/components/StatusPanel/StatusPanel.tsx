import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import type { GuideStatus } from "../../types/Guide";
import { Panel, StatCard, StatLabel, StatNumber } from "./StatusPanel.styles";


export default function StatusPanel() {
  const guides = useSelector(
    (state: RootState) => state.guides.guides
  );

  const countByStatus = (status: GuideStatus) =>
    guides.filter((g) => g.status === status).length;

  return (
    <Panel>
      <StatCard>
        <StatNumber>{guides.length}</StatNumber>
        <StatLabel>Total</StatLabel>
      </StatCard>

      <StatCard>
        <StatNumber>{countByStatus("Pendiente")}</StatNumber>
        <StatLabel>Pendientes</StatLabel>
      </StatCard>

      <StatCard>
        <StatNumber>{countByStatus("Activa")}</StatNumber>
        <StatLabel>Activas</StatLabel>
      </StatCard>

      <StatCard>
        <StatNumber>{countByStatus("En tránsito")}</StatNumber>
        <StatLabel>En tránsito</StatLabel>
      </StatCard>

      <StatCard>
        <StatNumber>{countByStatus("Entregada")}</StatNumber>
        <StatLabel>Entregadas</StatLabel>
      </StatCard>
    </Panel>
  );
}

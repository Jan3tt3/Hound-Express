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
    <Panel as="section" aria-labelledby="status-panel-title">
      <h2 id="status-panel-title">Resumen de envíos</h2>

      <ul>
        {/* Total */}
        <li>
          <StatCard as="article" aria-label="Total de guías registradas">
            <StatNumber aria-live="polite">
              {guides.length}
            </StatNumber>
            <StatLabel>Total</StatLabel>
          </StatCard>
        </li>

        {/* Pendientes */}
        <li>
          <StatCard as="article" aria-label="Guías pendientes">
            <StatNumber aria-live="polite">
              {countByStatus("Pendiente")}
            </StatNumber>
            <StatLabel>Pendientes</StatLabel>
          </StatCard>
        </li>

        {/* Activas */}
        <li>
          <StatCard as="article" aria-label="Guías activas">
            <StatNumber aria-live="polite">
              {countByStatus("Activa")}
            </StatNumber>
            <StatLabel>Activas</StatLabel>
          </StatCard>
        </li>

        {/* En tránsito */}
        <li>
          <StatCard as="article" aria-label="Guías en tránsito">
            <StatNumber aria-live="polite">
              {countByStatus("En tránsito")}
            </StatNumber>
            <StatLabel>En tránsito</StatLabel>
          </StatCard>
        </li>

        {/* Entregadas */}
        <li>
          <StatCard as="article" aria-label="Guías entregadas">
            <StatNumber aria-live="polite">
              {countByStatus("Entregada")}
            </StatNumber>
            <StatLabel>Entregadas</StatLabel>
          </StatCard>
        </li>
      </ul>
    </Panel>
  );
}
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import type { GuideStatus } from "../../types/Guide";
import { Panel, StatCard, StatLabel, StatNumber, List, ListItem} from "./StatusPanel.styles";

export const GUIDE_STATUS = {
  PENDING: "Pendiente",
  IN_TRANSIT: "En tránsito",
  DELIVERED: "Entregada",
} as const;

export default function StatusPanel() {
  const guides = useSelector(
    (state: RootState) => state.guides.guides
  );

  const countByStatus = (status: GuideStatus) =>
    guides.filter((g) => g.status === status).length;

  return (
    <Panel as="section" aria-labelledby="status-panel-title">
      <h2 id="status-panel-title">Resumen de envíos</h2>

      <List>
  <ListItem>
    <StatCard>
      <StatNumber $label="Total">{guides.length}</StatNumber>
      <StatLabel>Total</StatLabel>
    </StatCard>
  </ListItem>

  <ListItem>
    <StatCard>
      <StatNumber $label="Pendientes">
  {countByStatus(GUIDE_STATUS.PENDING)}
</StatNumber>
      <StatLabel>Pendientes</StatLabel>
    </StatCard>
  </ListItem>

<ListItem>
    <StatCard>
      <StatNumber $label="En tránsito">
  {countByStatus(GUIDE_STATUS.IN_TRANSIT)}
</StatNumber>
      <StatLabel>En tránsito</StatLabel>
    </StatCard>
  </ListItem>

  <ListItem>
    <StatCard>
      <StatNumber $label="Entregadas">
  {countByStatus(GUIDE_STATUS.DELIVERED)}
</StatNumber>
      <StatLabel>Entregadas</StatLabel>
    </StatCard>
  </ListItem>
</List>
    </Panel>
  );
}
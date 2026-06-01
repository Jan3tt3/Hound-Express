
import type { Guide } from "../../types/Guide";
import {
  Container,
  Title,
  Grid,
  Card,
  Number,
  Label,
} from "./Dashboard.styles";

type Props = { guides: Guide[] };

export default function Dashboard({ guides }: Props) {
  const total = guides.length;
  const inTransit = guides.filter(
    (g) => g.status === "En tránsito"
  ).length;
  const delivered = guides.filter(
    (g) => g.status === "Entregada"
  ).length;

  return (
    <Container>
      <Title>Panel de estado</Title>

      <Grid>
        <Card>
          <Number>{total}</Number>
          <Label>Total</Label>
        </Card>

        <Card>
          <Number>{inTransit}</Number>
          <Label>En tránsito</Label>
        </Card>

        <Card>
          <Number>{delivered}</Number>
          <Label>Entregadas</Label>
        </Card>
      </Grid>
    </Container>
  );
}
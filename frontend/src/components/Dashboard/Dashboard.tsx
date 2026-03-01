import React from 'react'
import styled from 'styled-components'
import { Guide } from '../../types'


const Card = styled.div`
background: ${({ theme }) => theme.colors.surface};
padding: 16px;
border-radius: 8px;
box-shadow: 0 2px 8px rgba(2,6,23,0.06);
`


type Props = { guides: Guide[] }


export default function Dashboard({ guides }: Props) {
const total = guides.length
const inTransit = guides.filter(g => g.status === 'En tránsito').length
const delivered = guides.filter(g => g.status === 'Entregada').length


return (
<Card>
<h3>Panel de estado</h3>
<p>Total: {total}</p>
<p>En tránsito: {inTransit}</p>
<p>Entregadas: {delivered}</p>
</Card>
)
}
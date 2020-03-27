import React from "react"
// eslint-disable-next-line
import { PButton, RButton, Description } from "./styles"

export const PCard = () => (
    <form action="/poker" method="get">
        <PButton type="submit">POKER</PButton>
    </form>
)

export const RCard = () => (
    <form action="/roulette" method="get">
        <RButton type="submit">ROULETTE</RButton>
    </form>
)
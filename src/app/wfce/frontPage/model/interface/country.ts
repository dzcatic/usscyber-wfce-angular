export interface Country {
    id: string,
    name: string,
    alpha2Code: string,
    alpha3Code: string,
    isActive: boolean,
    allowedJoin: boolean,
    allowedBuy: boolean,
    allowedView: boolean,
    continentId: number,
    leagues: null,
    teams: null,
    continents: string[]
  }
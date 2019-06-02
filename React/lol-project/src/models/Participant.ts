import { Stats } from "./Stats";

export interface Participant{
    stats: Stats;
    participantId: number;
    teamId: number;
    spell2Id: number;
    spell1Id: number;
    championId: number;
}
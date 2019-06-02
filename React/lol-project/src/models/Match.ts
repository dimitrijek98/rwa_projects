import { ParticipantIdentities } from "./ParticipantsIdentities";
import { Participant } from "./Participant";

export interface Match{
    participantIdentities: ParticipantIdentities[];
    participants: Participant[];
}
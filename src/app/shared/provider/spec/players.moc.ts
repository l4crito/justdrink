import { Gender, PlayerModel, PlayerPosition } from "src/app/models/player.model";
export const MOCKED_PLAYERS :PlayerModel[]=[
    {
        name: "Chris",
        position: PlayerPosition.LEFT,
        female: false,
        color: "purple",
        assigningPartner: false,
        assigningBan: false,
    },
    {
        name: "Liss",
        position: PlayerPosition.LEFT,
        female: true,
        color: "purple",
        assigningPartner: false,
        assigningBan: false,
    },
    {
        name: "diego",
        position: PlayerPosition.LEFT,
        female: false,
        assigningPartner: false,
        assigningBan: false,
    },
    {
        name: "diana",
        position: PlayerPosition.LEFT,
        female: true,
        assigningPartner: false,
        assigningBan: false,
    },
    {
        name: "jose",
        position: PlayerPosition.LEFT,
        assigningPartner: false,
        assigningBan: false,
    },
]

export const CHRIS_MOCKED_PLAYER:PlayerModel=MOCKED_PLAYERS[0];
export const CHRIS_MOCKED_PARTNER:PlayerModel=MOCKED_PLAYERS[1];

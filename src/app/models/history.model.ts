import { PlayerTaskModel } from "./task.model";

export interface HistoryModel {
    tasks: PlayerTaskModel[];
    round: number | null |undefined;
}

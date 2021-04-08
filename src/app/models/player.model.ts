export interface PlayerModel {
    name?: string;
    shots?: number;
    gender?: Gender;
    like?: Gender;
    highlight?: boolean;
}

export enum Gender {
    MALE = 'HOMBRE',
    FEMA = 'MUJER',
    OTHER = 'OTRO'
}
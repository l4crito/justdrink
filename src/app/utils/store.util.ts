
export function setItem(name: string, value: any) {
    if (!value) {
        localStorage.removeItem(name);
    } else {
        localStorage.setItem(name, JSON.stringify(value));
    }
}

export function getItem(name: string): any {
    const value = localStorage.getItem(name);
    return value ? JSON.parse(value) : null;
}

export enum Names {
    LAST_UPDATE = 'LAST_UPDATE',
    LAST_START = 'LAST_START',
    PLAYERS = 'PLAYERS',
    TASKS = 'TASKS',
    CURRENT_PLAYER = 'CURRENT_PLAYER',
    FIRST_PLAYER = 'FIRST_PLAYER',
    ASSIGNED_TASKS = 'ASSIGNED_TASKS',
    CURRENT_TASK = 'CURRENT_TASK',
    ROUND = 'ROUND',
    PARTNER = 'PARTNER',
    BAN = 'BAN',
    COLORS = 'COLOR',
    BAN_COLORS = 'BAN_COLORS',
    HISTORY = 'HISTORY',
}
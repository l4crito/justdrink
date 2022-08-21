import { TaskType } from "src/app/models/task.model";
import { PlayerProvider } from "../player.provider";
import { CHRIS_MOCKED_PARTNER, CHRIS_MOCKED_PLAYER, MOCKED_PLAYERS } from "./players.moc";
import {  MOCKED_TASKS } from "./tasks.mock";

describe('Player provider', () => {
    let playerProvider: PlayerProvider;
    
    beforeEach(() => { 
        const taskProvider = jasmine.createSpyObj('TaskProvider', ['getTimeDifference']);
        taskProvider.day=13
        playerProvider= new PlayerProvider(taskProvider)
        playerProvider.currentPlayer=null;
     });
  
    it('Should always get its partner, (random  gender)', () => {
        playerProvider.currentPlayer=CHRIS_MOCKED_PLAYER;
        playerProvider.players=MOCKED_PLAYERS;
        MOCKED_TASKS.filter(t=>t.type===TaskType.HOT&& t.task?.includes('(o)')).forEach(task=>{
            playerProvider.verifyTask(task)
            expect(task.taskToPlay).toContain(CHRIS_MOCKED_PARTNER.name)
        });
    });
    it('Should always get its partner, (same gender)', () => {
        playerProvider.currentPlayer=CHRIS_MOCKED_PLAYER;
        playerProvider.players=MOCKED_PLAYERS;
        MOCKED_TASKS.filter(t=>t.type===TaskType.HOT&& t.task?.includes('(a)')).forEach(task=>{
            playerProvider.verifyTask(task)
            expect(task.taskToPlay).toContain(CHRIS_MOCKED_PARTNER.name)
        });
    });
  
  });
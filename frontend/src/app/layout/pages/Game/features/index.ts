import World from "../models/world/world";
import { getCanvasRef } from "../utils/references"
import Character from "../models/character/character"
import Merchant from "../models/character/merchant"
import { createCharacterAsync } from "../transactions/transactions";

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;


export let world = new World();
let character: Character;
let merchant: Merchant = new Merchant("999", false, "Merchant", "Merchant");
//let enemies:Character[] = [new Character()];


const createPlayer = async (playerBreed: string, nickname: string) => {
    const playerId = await createCharacterAsync(playerBreed, nickname);
    character = new Character(playerId, true, playerBreed, nickname);
};

const initializeCanvas = () => {
    canvas = getCanvasRef().canvas;

    // Set 2D context
    ctx = getCanvasRef().ctx;
}

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* DESENHOS AQUI */
    world.draw();
    merchant.draw();
    character.draw();
}

const render = () => {
    if (!!character)
        draw();
        
    window.requestAnimationFrame(render);
} 

export const run = (playerBreed: string, nickname: string) => {
    initializeCanvas();
    
    //Neo4j
    //createPlayer(playerBreed, nickname);
    character = new Character("007", true, playerBreed, nickname);
    render();
}

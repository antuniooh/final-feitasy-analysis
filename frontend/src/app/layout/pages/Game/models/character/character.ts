import IDrawable from "../../common/IDrawable"
import { getCanvasRef } from "../../utils/references"

export default class Character implements IDrawable {
    public width: number = 30
    public height: number = 30
    public color: string = "red"
    public x: number = 100
    public y: number = 100
    public speed: number = 10
    
    constructor () {
        window.addEventListener("keydown", this.move, false);
    }


    draw = () => {
        const canvas = getCanvasRef();
        const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
          
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
    };

    move = (e:KeyboardEvent) => {
        if(e.key === 'a') { 
            this.x -= this.speed;
        }
        if(e.key === 'd') {
            this.x += this.speed;	
        }
        
    }  
}

/*type x = "abc" | "def"
const y:x = "abc"
export const x = 5


function func(a?:number, b?:string): number {
    return 5
}

const func2 = (a:number, b:number) : number =>{
    return 2
} 

const func3 = (a:number, b:number) : number => 2

const func4 = function(a:number, b:number) {return 5}


interface iPLayer extends raca{
    name?:string | number ,
    classe:string | number,
    level?: {car:number, test:string},
    bater: (quant:string) => number,
    defender?(quant:number): boolean
} 

interface raca {
    nome_raca?:string | number,
    desc?:string | number
}

const pl: iPLayer = {
    classe : "aaaaa",
    name: func(),
    level: {car:9, test:"aaaa"},
    bater: (quant:string) => {return 7}
}

pl.bater("aaaa")

let aha:typeof pl

const pl2 = pl?.name ?? 'qqq' + 'c'

export type Character2 = {
    name:string | number,
    classe:string | number
} | string | number

const char: Character2 = {name:"aa", classe:"aa"}

export enum Character {
    name = "Carlinhos",
    classe = "Humano"
}

Character.classe*/
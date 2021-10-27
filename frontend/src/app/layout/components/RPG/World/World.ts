import IDrawable from "../Common/IDrawable"
import {getCanvasRef} from "../References"

export default class World implements IDrawable {
    private floorSize: number[] = [2000, 5] 

    draw(frameCount: number) {
        const canvas = getCanvasRef()
        const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
        ctx.fillStyle = '#000000'

        ctx.beginPath();
        ctx.fillRect(Math.floor(canvas.width/2), Math.floor(canvas.height/2), this.floorSize[0], this.floorSize[1]);
    };
}
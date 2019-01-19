import Game from "../game";
import Ship, { ShipArgs } from "./Ship";

export default class Player extends Ship {
  constructor(args: ShipArgs) {
    super(args);

    // add controls
    this.onUpdate = [
      (game: Game) => {
        this.acceleration[0] = 0;
        this.acceleration[1] = 0;
        if (game.keyboardListener.keyState.w) {
          this.acceleration[1] -= .1;
        }
        if (game.keyboardListener.keyState.a) {
          this.acceleration[0] -= .1;
        }
        if (game.keyboardListener.keyState.s) {
          this.acceleration[1] += .1;
        }
        if (game.keyboardListener.keyState.d) {
          this.acceleration[0] += .1;
        }
        if (this.weapon && game.keyboardListener.keyState[" "]) {
          this.weapon.fire(this, game);
        }
      },
    ];
  }
}
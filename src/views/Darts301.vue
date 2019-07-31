<template>
  <div class="inkpot-darts">
    <div class="darts-301">
      <div class="darts-301-left">
        <div class="total-left">
          Total left:
          <span class="total-left-number">{{ totalLeft }}</span>
        </div>
        <div class="total-left">
          Checkout:
          <span class="total-left-number">{{ checkOut }}</span>
        </div>
        <div class="score">
          Score this round:
          <span class="score-number">{{ scoreThisTurn }}</span>
          <button v-on:click="addTurn()">End turn</button>
        </div>
        <ol class="turns">
          <li class="turn-item" v-for="turn in turns" v-bind:key="turn">{{ turn }}</li>
        </ol>
      </div>
      <div class="darts-301-right">
        <dart-board></dart-board>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DartBoard from "@/components/DartBoard.vue";

@Component({
  components: {
    DartBoard
  }
})

export default class Darts301 extends Vue {
  public dartBoardElements: NodeListOf<Element> | undefined;
  public scoreThisTurn: number = 0;
  public totalLeft: number = 301;
  public turns: string[] = [];
  public checkOut: string = 'No checkout';
  private checkOuts = require('@/assets/checkouts');

  public mounted() {
    this.dartBoardElements = document.querySelectorAll("#dartboard #areas g *");
    if (this.dartBoardElements.length > 0) {
      this.attachClickHandlersToDartBoard();
    }
  }

  public attachClickHandlersToDartBoard() {
    this.dartBoardElements!.forEach(element => {
      element.addEventListener("click", () => {
        this.scoreThisTurn += this.interpretElementIdToNumber(element.id);
        this.getCheckout(this.totalLeft - this.scoreThisTurn);
      });
    });
  }

  public addTurn() {
    this.turns.push(this.createTurnEntry());
    this.totalLeft -= this.scoreThisTurn;
    this.scoreThisTurn = 0;
    this.getCheckout(this.totalLeft);
  }

  public createTurnEntry() {
    return `${this.totalLeft} - ${this.scoreThisTurn} = ${this.totalLeft -
      this.scoreThisTurn}`;
  }

  /*
   * Turns elements like d12 (double 12) into a correct number (ea. 24);
   * returns the value
   */
  public interpretElementIdToNumber(elementId: string): number {
    let scoreMultiplier: number = 1;
    let score: number = 0;

    switch (elementId.substr(0, 1)) {
      case "s":
        scoreMultiplier = 1;
        score = (elementId.match(/\d+/)![0] as any) as number;
        break;
      case "d":
        scoreMultiplier = 2;
        score = (elementId.match(/\d+/)![0] as any) as number;
        break;
      case "t":
        scoreMultiplier = 3;
        score = (elementId.match(/\d+/)![0] as any) as number;
        break;
      case "O":
        // outer bull no multiplier and 25 points
        score = 25;
        break;
      case "B":
        // bull no multiplier and 50 points
        score = 50;
        break;
    }

    return scoreMultiplier * score;
  }

  public addScoreToThisRound(score: number) {
    this.scoreThisTurn = this.scoreThisTurn + score;
  }

  public getCheckout(scoreLeft: number) {
    if (scoreLeft < 40){
      this.checkOut = this.totalLeft - this.scoreThisTurn as any as string;
      return;
    }

    if(this.checkOuts.checkOuts[scoreLeft]){
      this.checkOut = this.checkOuts.checkOuts[scoreLeft];
    } else {
      this.checkOut = 'No checkout';
    }
  }
}
</script>

<style scoped>
.inkpot-darts {
  font-size: 24px;
  text-transform: uppercase;
}

.darts-button-wrapper {
  top: 40px;
  float: right;
}

.darts-301 {
  display: flex;
  flex-wrap: wrap;
}

.darts-301-left,
.darts-301-right {
  flex: 1 0 40%;
  white-space: nowrap;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
}

.darts-301-left {
  text-align: left;
  padding-left: 50px;
  flex: 1 0 39%;
}
.darts-301-right {
  flex: 1 0 60%;
}

.score {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 18px;
}

.score-number {
  margin-left: 12px;
  font-size: 24px;
  width: 60px;
}

.total-left {
  margin-top: 20px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 18px;
}

.total-left-number {
  margin-left: 12px;
  font-size: 24px;
}

button {
  margin-left: 12px;
  background-color: red;
  color: white;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  width: 140px;
  height: 30px;
  cursor: pointer;
}

.turns {
  padding-inline-start: 21px;
  font-size: 18px;
  display: inline-block;
  text-align: left;
}

.turn-item {
  padding-left: 15px;
  font-weight: bold;
}


</style>

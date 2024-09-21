<script lang="ts">
  export let board: number[][];
  const pieceSprites = [
    // white pieces
    "https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png",
    "https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png",
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png",
    "https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png",
    "https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt60.png",
    // black pieces
    "https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png",
    "https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png",
    "https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_kdt60.png",
  ];
</script>

<div class="chess-board" id="main-board">
  {#each board as row, i}
    <div class="rows">
      {#each row as cell, j}
        <div
          class="cell"
          style="background-color: {(i + j) % 2 == 0 ? 'darkgreen' : 'white'};"
        >
          {#if cell > 0}
            <img src={pieceSprites[cell - 1]} alt="Piece" />
          {/if}
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .chess-board {
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    overflow: hidden;
    outline: 2px solid black;
  }

  .rows {
    display: flex;
    flex-direction: row;
  }

  .cell {
    color: black;
    display: flex;
    outline: 2px solid black;

    min-width: 4rem;
    min-height: 4rem;
  }
</style>

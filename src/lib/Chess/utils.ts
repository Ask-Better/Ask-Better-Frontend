import type { HtmlTagDescriptor } from "vite";

interface PixelPosition {
  x: number;
  y: number;
}

type PP = PixelPosition;

const generateRandomPiece = () => {
  return Math.floor(Math.random() * 11.99);
};

const generateRandomRow = () => {
  return Array.from({ length: 8 }, generateRandomPiece);
};

const generateRandomBoard = () => {
  return Array.from({ length: 8 }, generateRandomRow);
};

const indexOfClick = (rect: DOMRect, event: MouseEvent) => {
  const boardPos: PP = { x: rect.left, y: rect.top };
  const mousePos: PP = { x: event.clientX, y: event.clientY };
  const cellSize = rect.width / 8;

  const relativePos: PP = {
    x: mousePos.x - boardPos.x,
    y: mousePos.y - boardPos.y,
  };

  const cellIndex: PP = {
    x: Math.floor(relativePos.x / cellSize),
    y: Math.floor(relativePos.y / cellSize),
  };
  return cellIndex;
};

const clickHandler = (event: MouseEvent) => {
  const board = document.getElementById("main-board");
  if (!board) {
    console.error("Board not found");
    return false;
  }

  const selectedCell: HTMLElement | null = event.target as HTMLElement;
  if (!selectedCell) {
    console.error("Selected cell not found");
    return false;
  }

  const rect = board.getBoundingClientRect();
  const cellIndex: PP = indexOfClick(rect, event);
};

const registerClickHandler = () => {
  if (typeof document === "undefined" || document.readyState !== "complete") {
    console.log("Document not ready");
    return false;
  }
  if (!document.getElementById("main-board")) {
    console.error("Board not found");
    return false;
  }

  document.addEventListener("click", clickHandler);
  console.log("Click handler registered");
  return true;
};

const chessBoardSetup = async () => {
  while (!registerClickHandler()) {
    console.log("Waiting for chessboard to load...");
    await new Promise((r) => setTimeout(r, 500));
  }
};

export { generateRandomBoard, chessBoardSetup };

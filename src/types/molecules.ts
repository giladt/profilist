import type { ReactNode } from "react";

export type Footer = {};

export type Modal = {
  children: ReactNode;
  ref: any;
};

/**
 * Tile
 */
export type TileProps = {
  imageUrl?: string;
  text: string;
  tileSize: number;
  buttonText: ReactNode;
  clickHandler?: () => void;
  buttonClickHandler?: () => void;
};

export type NavbarProps = {};

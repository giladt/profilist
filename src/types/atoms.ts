import { TileProps } from './molecules';
import type { ReactNode, ButtonHTMLAttributes } from "react"

/**
 * Button
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

/**
 * Header
 */
export type HeaderSizes = "sm" | "md" | "lg";

export type HeaderProps = {
  size: HeaderSizes;
  children: ReactNode;
};

export type TextProps = {
  children: ReactNode;
};

export type LogoProps = {
  size: number;
};

export type ProfiCarouselProps = {
  tiles: TileProps[];
  tileSize: number;
  isLoading: boolean;
  handleClick: (id: number) => void;
  handleRemove: (id: number) => void;
};


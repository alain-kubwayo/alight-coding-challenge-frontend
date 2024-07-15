import type { ButtonHTMLAttributes } from "react";

export type Link = {
  id?: number;
  text: string;
  url: string;
  classes: string;
};

export type Camera = {
  classes: string;
};

export type ButtonProps = {
  handleClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  text: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "children">;

export type MicrophoneType = {
  classes: string;
};

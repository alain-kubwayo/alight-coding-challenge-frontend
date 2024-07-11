import type { HTMLAttributes } from "react";

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
  handleClick: HTMLAttributes<HTMLButtonElement>["onClick"];
  text: string;
};

export type MicrophoneType = {
  classes: string;
};

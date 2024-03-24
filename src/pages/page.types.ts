import { ChangeEvent, MouseEvent } from 'react';

export interface IdisplayOnOff {
  isActive: boolean;
}

export interface IHoverPosition {
  isHover: boolean;
}

export interface Idisplay {
  display: string;
  isActive: boolean;
  id: string;
}

export interface BoardDetailHTMLProps {
  isActive: boolean;
  isHover: boolean;
}

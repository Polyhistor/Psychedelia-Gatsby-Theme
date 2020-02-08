export interface OpenerProps {
  open: boolean;
  setOpen: Function;
}

export interface Wrapper {
  children: JSX.Element;
}

export interface StyledMenuProps {
  theme: string;
  open: boolean;
}

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

export interface NavigationInternal {
  internal: NavigationInternalContent;
}

export interface NavigationInternalContent {
  content: string;
}

export interface NavigationLabels {
  link: string;
  label: NavigationLabels;
  subs?: Array<Object>;
  map?: Function;
}

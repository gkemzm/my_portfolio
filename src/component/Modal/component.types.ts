interface ButtonItems {
  label: string;
  onClick: () => void;
}

export interface ModalComponentTypes {
  size: string | number;
  isFull: boolean;
  title: string | any;
  content: string | HTMLDivElement;
  children: any;
  buttons: Array<ButtonItems>;
  isOpen: boolean;
  onBackdropClick: any;
  closeEvent: { isClose: boolean; onClick: () => void };
  backEvent: { isBack: boolean; onClick: () => void };
  noPadding: boolean;
}

export interface ModalContentTypes {
  isFull: boolean;
  title: string | any;
  content: string | HTMLDivElement;
  children: any;
  buttons: Array<ButtonItems>;
  closeEvent: { isClose: boolean; onClick: () => void };
  backEvent: { isBack: boolean; onClick: () => void };
  noPadding: boolean;
}

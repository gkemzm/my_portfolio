interface buttonElementsTypes {
  label: string;
  onClick: () => void;
  appearance: string;
}

export interface ModalComponentTypes {
  size: string | number;
  isFull: boolean;
  title: string | HTMLDivElement | boolean | any;
  content: string | HTMLDivElement | any;
  children: any;
  buttons: Array<buttonElementsTypes>;
  isOpen: boolean;
  onBackdropClicked: any;
  closeEvent: { isClose: boolean; onClick: () => void };
  backEvent: { isBack: boolean; onClick: () => void };
  noPadding: boolean;
}

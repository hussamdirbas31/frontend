import type { Transition, Variant } from 'framer-motion';

export type NavLink = {
  name: string;
  path: string;
};

export type AuthButton = {
  label: string;
  path: string;
  variant: 'primary' | 'secondary';
};

export type NavbarVariants = {
  hidden: Variant;
  visible: Variant & {
    transition?: Transition;
  };
  scrolled?: Variant & {
    transition?: Transition;
  };
};

export type MenuItemVariants = {
  hidden: Variant;
  visible: (i: number) => Variant & {
    transition?: Transition;
  };
  hover?: Variant & {
    transition?: Transition;
  };
  tap?: Variant;
};
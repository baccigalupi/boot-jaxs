import { addClassesToBase } from "@components/presentation-logic";
import { Size } from "@components/types";

export const buildGroupClass = (baseClass: string, size?: Size, propClasses?: string) => {
  const sizeClass = size ? ` btn-group-${size}` : ''
  const sizedBaseClass = addClassesToBase(baseClass, sizeClass)
  return addClassesToBase(sizedBaseClass, propClasses)
}
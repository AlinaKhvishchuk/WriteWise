import { ITEM_HEIGHT, ITEM_PADDING_TOP } from "./constants";
import { Theme } from "@mui/material/styles";

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export function getStyles(
  name: string,
  personName: readonly string[],
  theme: Theme
) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

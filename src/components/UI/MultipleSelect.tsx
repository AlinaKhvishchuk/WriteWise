import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { MenuProps, getStyles } from "./utils";

type MultipleSelectProps = {
  options: string[];
  selectedValues: string[];
  handleChange: (arg: string | string[]) => void;
};

const MultipleSelect = ({
  options,
  selectedValues,
  handleChange,
}: MultipleSelectProps) => {
  const theme = useTheme();

  const handleSelectionChange = (
    event: SelectChangeEvent<typeof selectedValues>
  ) => {
    const {
      target: { value },
    } = event;
    handleChange(value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 280, marginTop: "0" }}>
        <InputLabel id="demo-multiple-chip-label">Filter</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          value={selectedValues}
          multiple
          onChange={handleSelectionChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected: string[]) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value: string) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map((item, idx) => (
            <MenuItem
              key={idx}
              value={item}
              style={getStyles(item, selectedValues, theme)}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelect;

import { colorPalleteObj } from "@/components/my-ui-elements/text/Text";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { type TableNonPagApiProps } from "../TableNonPagApi";
import { themeObj } from "@/main";
import { useState } from "react";

export default function PageSize<TData>({ table }: TableNonPagApiProps<TData>) {
  const [dropdownPageSize, setDropdownPageSize] = useState("");

  const handleChange = (event: SelectChangeEvent): void => {
    const val = event?.target?.value;
    setDropdownPageSize(val);
    const num = Number(val);
    table?.setPageSize(num);
  };

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 150,
        "& .MuiInputLabel-root": {
          color: themeObj?.appTheme,
        },
        "& .MuiOutlinedInput-root": {
          color: themeObj?.appTheme,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: themeObj?.appTheme,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: themeObj?.appTheme,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: themeObj?.appTheme,
          },
        },
        "& .MuiSvgIcon-root": {
          color: themeObj?.appTheme,
        },
      }}
      size="small"
    >
      <Select
        labelId="go-to-page-label"
        id="go-to-page-select"
        value={dropdownPageSize}
        label="Select Page Size"
        input={<OutlinedInput />}
        onChange={handleChange}
        displayEmpty
        renderValue={(selected) => {
          if (!selected) {
            return (
              <em style={{ color: colorPalleteObj?.hint }}>Select Page Size</em>
            );
          }
          return selected;
        }}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={100}>100</MenuItem>
      </Select>
    </FormControl>
  );
}

// Setting value={""} ensures the <Select> stays controlled and avoids errors when no valid option is selected,
// preventing MUI warnings about out-of-range or uncontrolled values.

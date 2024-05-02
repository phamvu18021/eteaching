import { Box } from "@chakra-ui/react";
import React from "react";
//@ts-ignore
import Select, { Styles } from "react-select";

export interface Option {
  value: string;
  label: string;
}

const customStyles: Styles = {
  //@ts-ignore
  option: (provided, state) => ({
    ...provided,
    fontSize: 14,
    color: "black",
    backgroundColor: state.isSelected ? "#F5F7FA" : "white",
    fontWeight: state.isSelected ? "600" : "400",
    "&:hover": {
      backgroundColor: "#F5F7FA"
    }
  }),
  //@ts-ignore
  control: (provided) => ({
    ...provided,
    boxShadow: "none",
    border: "none"
  })
};

export const SelectComponent = ({
  listOp,
  value,
  onChange
}: {
  listOp: Option[];
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (newValue: string) => void;
}) => {
  return (
    <>
      <Box border={"1px solid #D7D9DB"} rounded={"md"}>
        <Select
          options={listOp}
          onChange={(e: any) => onChange(e.value)}
          isSearchable={false}
          styles={customStyles}
          placeholder={value}
        />
      </Box>
    </>
  );
};

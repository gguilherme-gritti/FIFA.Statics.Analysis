import React, {memo} from "react";

/* Material-UI */
import { TextField } from "@mui/material";

const TextInput = ({
    variant = "standard",
    value,
    setValue,
    maxLength,
    onBlur = (e) => {},
    onChange = (e) => {
        if(maxLength){
            e.target.value = e.target.value.substring(0,maxLength);
        }

        setValue(e.target.value);
    },
    ...props
}) => {
    return (
        <TextField 
            {...props}
            variant={variant}
            value={value}
            onChange={(e) => {
                onChange(e);
            }}
            onBlur={(e) => {
                onBlur(e);
            }}
            maxLength={maxLength}
        />
    );
};

export default memo(TextInput);
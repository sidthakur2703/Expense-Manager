import { makeStyles } from "@material-ui/core";
import { REGEX_BACKSLASH } from "picomatch/lib/constants";

export default makeStyles(() => ({
    income: {
        borderBottom: '10px solid rgba(0,255,0,0.5)',
    },
    expense: {
        borderBottom: '10px solid rgba(255,0,0,0.5)',
    }
}));
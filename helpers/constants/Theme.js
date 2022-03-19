import { create } from 'jss';
import { createTheme, jssPreset } from '@material-ui/core/styles';
import rtl from 'jss-rtl';

export const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export const theme = createTheme({
    typography : {
        fontFamily : 'IRANYekan'
    },
    direction: 'rtl',
    overrides : {
        MuiButton : {
            root : {
                fontWeight:'500'
            },
            contained : {
                boxShadow : 'none'
            }
        },
        MuiInputBase: {
            root: {
                fontSize: '14px',
                backgroundColor: '#fff',
                border : 'none',
                outline : 'none',
            }
        },
        MuiFormControl: {
            root: {
                width: '100%',
                direction: 'ltr'
            },
            marginDense: {
                marginTop: '10px',
                marginBottom: '6px'
            }
        },
        MuiFormLabel: {
            root: {
                '&$error ': {
                    color: '#f30045'
                },
                fontSize: '13px'
            }
        },
        MuiSelect: {
            root: {
                direction: 'ltr'
            }
        },
        MuiMenuItem: {
            root: {
                overflowX: 'auto',
                paddingBottom: '12px',
                paddingTop: '12px'
            }
        },
        MuiOutlinedInput: {
            input: {
                padding: '16px 14px 15.5px 15px'
            },
            inputMarginDense: {
                paddingBottom: '15.5px',
                paddingTop: '16px'
            },
            root: {
                border : 'transparent',
                '&$error $notchedOutline': {
                    borderColor: 'transparent',
                    outline : 'none',
                },
                '&.Mui-focused' : {
                    outline : 'none',
                    borderColor : 'transparent',
                },
                borderRadius:'20px',
            }
        },
        MuiInputLabel: {
            outlined: {
                transform: 'translate(10px, 16px) scale(1)',
                fontSize: '16px',
                opacity : '0.8',
                background : '#fff',
                padding : '0 0.75rem',
                '&$marginDense': {
                    transform: 'translate(13px, 16px) scale(1)',
                    fontSize: '16px'
                },
                '&$shrink': {
                    transform: 'translate(5px, -6px) scale(0.75)',
                    fontSize: '16px'
                }
            }
        },
        MuiAutocomplete: {
            inputRoot: {
                padding: '12px 12px 10.5px!important'
            }
        },
    }
});

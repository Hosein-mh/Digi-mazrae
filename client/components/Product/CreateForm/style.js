import styled from 'styled-components';
import { textColor, modalErrorBorder, navbarTextColor, modalBorderColor, submitColor, modalBackground } from '../../../theme';
import customMedia from '../../../style/custom-query';

export const Error = styled.div`
  display: flex;
  justify-content: center;
  color: ${modalErrorBorder};
  
  @media ${customMedia.belowLargestMobile} {
    font-size: .8rem;
  }
`;

export const Container = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${customMedia.aboveSmallestTablet} {
    width: calc(100% - 100px);
    float: left;
  }
`;

export const Root = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  padding: 1rem;
  background-color: ${modalBackground};
  box-shadow: 0px 0px 3px ${modalBorderColor};
  border-radius: 5px;
  min-height: calc(100vh - 100px);
  @media ${customMedia.aboveSmallestPhablet} {
    max-widtH: 600px;
  }

  /* CKEditor styles: */
  --ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;
    --ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);
    --ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
    --ck-spacing-unit: 0.6em;
    --ck-spacing-large: calc(var(--ck-spacing-unit)*1.5);
    --ck-spacing-standard: var(--ck-spacing-unit);
    --ck-spacing-medium: calc(var(--ck-spacing-unit)*0.8);
    --ck-spacing-small: calc(var(--ck-spacing-unit)*0.5);
    --ck-spacing-tiny: calc(var(--ck-spacing-unit)*0.3);
    --ck-spacing-extra-tiny: calc(var(--ck-spacing-unit)*0.16);
    --ck-z-default: 1;
    --ck-z-modal: calc(var(--ck-z-default) + 999);
    --ck-color-base-foreground: ${textColor};
    --ck-color-base-background: transparent;
    --ck-color-base-border: ${modalBorderColor};
    --ck-color-base-action: #61b045;
    --ck-color-base-focus: #6cb5f9;
    --ck-color-base-text: red;
    --ck-color-base-active: #198cf0;
    --ck-color-base-active-focus: #0e7fe1;
    --ck-color-base-error: #db3700;
    --ck-color-focus-border-coordinates: 208,79%,51%;
    --ck-color-focus-border: hsl(var(--ck-color-focus-border-coordinates));
    --ck-color-focus-outer-shadow: #bcdefb;
    --ck-color-focus-disabled-shadow: rgba(119,186,248,0.3);
    --ck-color-focus-error-shadow: rgba(255,64,31,0.3);
    --ck-color-shadow-drop: rgba(0,0,0,0.15);
    --ck-color-shadow-drop-active: rgba(0,0,0,0.2);
    --ck-color-shadow-inner: rgba(0,0,0,0.1);
    --ck-color-button-default-background: transparent;
    --ck-color-button-default-hover-background: #e6e6e6;
    --ck-color-button-default-active-background: #d9d9d9;
    --ck-color-button-default-active-shadow: #bfbfbf;
    --ck-color-button-default-disabled-background: transparent;
    --ck-color-button-on-background: #dedede;
    --ck-color-button-on-hover-background: #r;
    --ck-color-button-on-active-background: #bababa;
    --ck-color-button-on-active-shadow: #a1a1a1;
    --ck-color-button-on-disabled-background: #dedede;
    --ck-color-button-action-background: var(--ck-color-base-action);
    --ck-color-button-action-hover-background: #579e3d;
    --ck-color-button-action-active-background: #53973b;
    --ck-color-button-action-active-shadow: #498433;
    --ck-color-button-action-disabled-background: #7ec365;
    --ck-color-button-action-text: var(--ck-color-base-background);
    --ck-color-button-save: #008a00;
    --ck-color-button-cancel: #db3700;
    --ck-color-switch-button-off-background: #b0b0b0;
    --ck-color-switch-button-off-hover-background: #a3a3a3;
    --ck-color-switch-button-on-background: var(--ck-color-button-action-background);
    --ck-color-switch-button-on-hover-background: #579e3d;
    --ck-color-switch-button-inner-background: var(--ck-color-base-background);
    --ck-color-switch-button-inner-shadow: rgba(0,0,0,0.1);
    --ck-color-dropdown-panel-background: var(--ck-color-base-background);
    --ck-color-dropdown-panel-border: var(--ck-color-base-border);
    --ck-color-input-background: var(--ck-color-base-background);
    --ck-color-input-border: #c7c7c7;
    --ck-color-input-error-border: var(--ck-color-base-error);
    --ck-color-input-text: var(--ck-color-base-text);
    --ck-border-radius: 1rem;
    --ck-color-text: #000;
  .ck.ck-editor {
    width: 100%;
    color: ${textColor};
  }
  .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items {
    flex-wrap: wrap;
  }
  .ck-file-dialog-button {
    display: none;
  }
  .ck-toolbar.ck-toolbar-grouping {
    border-radius: 1rem 1rem 0 0;
  }
`;

export const Title = styled.section `
  font-size: 1.2rem;
  font-weight: 500;
  color: ${textColor};
  margin: 10px 0;
`;

export const Row = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;
export const RowChild = styled.div `
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.lastRow {
    margin-bottom: 100px;
  }
`;

export const FileInput = styled.label `
  width: 100%;
  max-width: 200px;
  overflow: hidden;
  height: 50px;
  cursor: pointer;
  border: 1px solid ${modalBorderColor};
  border-radius: 5rem;
  background-color: transparent;
  color: ${textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;

  &:active {
    transform: scale(.8,.8);
  }
`

export const SubmitButton = styled.button `
  cursor: help;
  width: 100%;
  height: 60px;
  border-radius: 5rem;
  border: none;
  background-color: ${submitColor};
  color: #fff;
  max-width: 200px;
  font-size: 1.1rem;
  font-weight: 400;
`;

export const SelectContainter = styled.div `
  width: 100%;
  border:  1px solid ${modalBorderColor};
  border-radius: 5rem;
  background: transparent;
  padding: 0 1rem;
`;

export const CategorySelection = styled.select `
  width: 100%;
  height: 40px;
  border: none;
  background-color: transparent;
  color: ${textColor};
`;
export const Option = styled.option `
  background-color: ${modalBackground};
`;

export const Label = styled.label `
  color: ${navbarTextColor};
  margin: 0 10px 5px 0;
  font-size: 0.8rem;
`;

export const FormInput = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
`;


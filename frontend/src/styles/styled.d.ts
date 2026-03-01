
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      lightGray: string;
      text: string;
      border: string;
      success: string;
    }
    spacing: {
      sm: string
      md: string
      lg: string
    }
    borderRadius: {
      md: string
      lg: string
    };
  }
}


/*import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      background: string
      lightGray: string
      darkGray: string
      text: string
      white: string
      success: string
      warning: string
      danger: string
    }
    spacing: {
      sm: string
      md: string
      lg: string
    }
    borderRadius: {
      md: string
      lg: string
    }
  }
}*/

import React from "react";
import { ThemeOptions, BreakpointsOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Palette {
		buttonColor: Palette["primary"];
	}

	// allow configuration using `createTheme`
	interface PaletteOptions {
		buttonColor?: PaletteOptions["primary"];
	}

	interface BreakpointOverrides {
		xs?: BreakpointsOptions["xs"];
		fold?: BreakpointsOptions["xs"];
		sm?: BreakpointsOptions["sm"];
		md?: BreakpointsOptions["md"];
		lg?: BreakpointsOptions["lg"];
		xl?: BreakpointsOptions["xl"];
	}
}

declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		buttonColor: true;
	}
}

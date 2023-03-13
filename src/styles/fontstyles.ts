
export const fontFamily = {
  suisse_medium: "Suisse Intl Medium, sans-serif",
  suisse_regular: "Suisse Intl, sans-serif",
  zapf_humanist: "Zapf Humanist,serif",
};


export const fontSmallest = {
  fontSize: "0.79rem",
  lineHeight: 1.5,
  fontWeight: 400,
  fontFamily: fontFamily.suisse_medium,
};
export const fontSmall = {
  fontSize: "1.4rem",
  lineHeight: 1.4,
  fontWeight: 700,
  fontFamily: fontFamily.suisse_regular,
};
export const fontLarge = {
  fontSize: "1.6rem",
  lineHeight: 1.33,
  fontWeight: 400,
  letterSpacing:"0.025em",
  fontFamily: fontFamily.zapf_humanist,
 
};
export const fontMedium = {
  fontSize: "1.6rem",
  lineHeight: 1.7,
  fontWeight: 400,
  fontFamily: fontFamily.suisse_regular,
};


export const textStyles = {
  sm: fontSmall,
  md: fontMedium,
  lg: fontLarge,
  xs: fontSmallest,
  sm2: {
    fontSize: "0.8rem",
    lineHeight: 2,
    fontWeight: 400,
    fontFamily: fontFamily.suisse_regular,
  },
  xs2: {
    fontSize: "0.8rem",
    lineHeight: 2.5,
    fontFamily: fontFamily.suisse_regular,
  },
  sm3: {
    fontSize: "0.8rem",
    lineHeight: 1.5,
  },
  xl: {
    fontSize: "1.9rem",
    lineHeight: 1.33,
    fontWeight: 400,
    letterSpacing: "0.025em",
    fontFamily: fontFamily.zapf_humanist,
  },
  sm4: {
    fontSize: "0.8rem",
    fontWeight: 'normal',
    fontFamily: fontFamily.suisse_medium,
  },
};

export type textTypes = "sm" | "md" | "lg" | "xs" | "sm2" | "xs2" | "sm3" | "xl" | 'sm4';

export enum textEnum {
  sm = "sm",
  md = "md",
  lg = "lg",
  xs = "xs",
  sm2 = "sm2",
  xs2 = "xs2",
  sm3 = "sm3",
  xl="xl",
  sm4 = "sm4",
}
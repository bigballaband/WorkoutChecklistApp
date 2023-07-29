const COLORS = {
    primary: "#30D5C8",
    secondary: "#fff8dc",
    accent: "#E9FBFA"
}

const SIZES = {
    padding: 20,
    borderRadius: 15,
    textBoxRadius: 25,
    h1: 25,
    h2: 22,
    h3: 18
}

const FONTS = {
    h1_semiBold: {fontSize: SIZES.h1, fontFamily: "BacasimeAntique_Semibold"},
    h2_semiBold: {fontSize: SIZES.h2, fontFamily: "BacasimeAntique_Semibold"},
    h3_semiBold: {fontSize: SIZES.h2, fontFamily: "BacasimeAntique_Semibold"},
}

const SHADOW = {
    elevation: 5,
    shadowColor: COLORS.secondary,
    shadowOffset: {width: 2, height: 10},
    shadowRadius: 12,
}
export { COLORS, SIZES, FONTS, SHADOW }
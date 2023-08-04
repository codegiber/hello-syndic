import { palette } from "@/theme/constants"

export const boxStyles = {
    marginTop: "6.375rem",
    width: "34.75rem",
    boxShadow: '0px 0.125rem 1rem 0rem rgba(0, 0, 0, 0.09)',
    borderRadius: '1.5rem',
    padding: "5.625rem 3.75rem",
    boxSizing: "border-box",
    backgroundColor: palette.white,
    zIndex: 2
}

export const mainBox = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflowY: "hidden",
}

export const labelStyle = { marginBottom: "0.75rem" };

export const backgroundImage = { 
    height: "100vh", 
    position: "absolute", 
    width: "100%", 
    bottom: '-28vh' 
}

export const imageElement: any = {
    objectFit: "fill",
    backgroundPosition: "left"
}

export const leftStar: any = {
    objectFit: "fill",
	position: "absolute",
	top: "23%",
	left: "20%"
}

export const rightStar: any = {
    objectFit: "fill",
    position: "absolute",
    top: "40%",
    right: "13%"
}

export const lightStyles: any = {
    objectFit: "fill",
    position: "absolute",
    top: "12%",
    right: "24%"
}

export const btnStyle = { marginTop: "2.25rem" }
import { palette } from "@/theme/constants";
import { Typography, OutlinedInput, Box, Button, InputLabel } from "@mui/material";
import { LoginHeader } from "@/components";
import { mainBox, boxStyles, labelStyle, backgroundImage, imageElement, rightStar, leftStar, lightStyles, btnStyle } from "./styles";
import Image from "next/image";
import { useRouter } from "next/router";

export const Login = () => {
  const router = useRouter()
  const handleSubmit = () => router.push('/dashboard');

  return (
    <Box sx={mainBox}>
      <LoginHeader />
      <Box sx={boxStyles} color={palette.white}>
        <Typography
          variant="h1"
          textAlign="center"
          marginBottom="4rem">
          Se connecter
        </Typography>
        <Box>
          <InputLabel
            size="normal" sx={labelStyle}>Nom d’utilisateur</InputLabel>
          <OutlinedInput placeholder="John Doe" type="text" fullWidth />
        </Box>
        <Box marginTop="2.25rem">
          <InputLabel size="normal" sx={labelStyle} focused>Mot de passe</InputLabel>
          <OutlinedInput placeholder="•••••••••••••" type="password" fullWidth />
        </Box>
        <Button variant="contained" fullWidth sx={btnStyle} onClick={handleSubmit}>Connexion</Button>
      </Box>
      <Box sx={backgroundImage}>
        <Image 
          src="/background.svg" 
          alt="background" 
          fill 
          style={imageElement} />
      </Box>
      <Image
        src="/left_star.svg"
        alt="left-star-icon"
        width={67}
        height={84}
        style={leftStar}
      />
      <Image
        src="/right_star.svg"
        alt="right-star-icon"
        width={67}
        height={84}
        style={rightStar}
      />
      <Image
        src="/light.svg"
        alt="light-icon"
        width={104}
        height={107}
        style={lightStyles} />
    </Box>
  )
}

import React from "react";
import { Container, Typography, Paper, Grid2 } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import EventAvailableSharpIcon from "@mui/icons-material/EventAvailableSharp";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import DownloadSharpIcon from "@mui/icons-material/DownloadSharp";
import WarningAmberSharpIcon from "@mui/icons-material/WarningAmberSharp";
import BenefitsSlider from "./BenefitsSlider";

const benefits = [
    {
      icon: <EventAvailableSharpIcon sx={{ fontSize: "60px", marginBottom: "1rem" }} />,
      title: "Reservá los amenities en segundos",
      description:
        "Desde EntrePisos, podés reservar el SUM, parrillas o cualquier otro espacio compartido de manera rápida y sin conflictos.",
    },
    {
      icon: <ChatBubbleOutlineSharpIcon sx={{ fontSize: "60px", marginBottom: "1rem" }} />,
      title: "Comunicá todo desde la app",
      description:
        "¿Se rompió algo o hay un tema urgente? Avisale al administrador directamente desde la app. ¡Rápido, práctico y sin mails sin responder!",
    },
    {
      icon: <InsertChartOutlinedSharpIcon sx={{ fontSize: "60px", marginBottom: "1rem" }} />,
      title: "Tomá decisiones con encuestas simples",
      description:
        "Decile chau a las discusiones interminables. Ahora podés participar en decisiones importantes con encuestas accesibles para todos los vecinos.",
    },
    {
      icon: <DownloadSharpIcon sx={{ fontSize: "60px", marginBottom: "1rem" }} />,
      title: "Descargá tus expensas al instante",
      description:
        "Tené siempre a mano tus expensas con todos los detalles que necesitás. Desde facturas hasta las formas de pago, todo accesible desde la app.",
    },
    {
      icon: <WarningAmberSharpIcon sx={{ fontSize: "60px", marginBottom: "1rem" }} />,
      title: "Notificaciones directas entre vecinos",
      description:
        "¿Un vecino dejó la puerta abierta o hay un auto mal estacionado? Enviá notificaciones específicas a quien lo necesite, sin molestar al resto del edificio.",
    },
  ];

const Benefits = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container id="beneficios">
            {/* Títulos */}
            <Grid2 container columnSpacing={{ xs: 1, sm: 2, md: 5, lg: 30 }} marginBottom={{ xs: '1.5rem' }} sx={{ paddingTop: "5rem" }}>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: "600",
                            fontSize: "2rem",
                            textAlign: "left",
                            color: theme.palette.primary.main,
                            marginBottom: { xs: '2rem', sm: '1rem' }
                        }}
                    >
                        Preocupate menos y disfrutá más de la tranquilidad
                    </Typography>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: "left",
                            fontSize: '1.2rem',
                            fontWeight: '400'
                        }}
                    >
                        EntrePisos te da las herramientas para que la convivencia en tu edificio
                        sea simple, organizada y sin complicaciones.
                    </Typography>
                </Grid2>
            </Grid2>
  
      {isMobile ? (
        <BenefitsSlider benefits={benefits} />
      ) : (
        <Container sx={{ marginTop: "3.5rem" }} disableGutters>
          <Grid2
            container
            columnSpacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}
            rowSpacing={13}
          >
            {/* Ítem 1 */}
            <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
              <Paper elevation={3} sx={{ padding: "1.5rem", height: "100%" }} square>
                <EventAvailableSharpIcon
                  sx={{ fontSize: "60px", marginBottom: "1rem", display: "flex", fill: '#FF8226' }}
                />
                <Typography variant="h6" sx={{ fontWeight: "600", textAlign: "left", color: theme.palette.primary.main }}>
                  Reservá los amenities en segundos
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "1rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                >
                  Desde EntrePisos, podés reservar el SUM, parrillas o cualquier otro
                  espacio compartido de manera rápida y sin conflictos.
                </Typography>
              </Paper>
            </Grid2>

            {/* Ítem 2 */}
            <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
              <Paper elevation={3} sx={{ padding: "1.5rem", height: "100%" }} square>
                <ChatBubbleOutlineSharpIcon
                  sx={{ fontSize: "60px", marginBottom: "1rem", display: "flex", fill: '#FF8226' }}
                />
                <Typography variant="h6" sx={{ fontWeight: "600", textAlign: "left", color: theme.palette.primary.main }}>
                  Comunicá todo desde la app
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "1rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                >
                  ¿Se rompió algo o hay un tema urgente? Avisale al administrador
                  directamente desde la app. ¡Rápido, práctico y sin mails sin responder!
                </Typography>
              </Paper>
            </Grid2>

            {/* Ítem 3 */}
            <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
              <Paper elevation={3} sx={{ padding: "1.5rem", height: "100%" }} square>
                <InsertChartOutlinedSharpIcon
                  sx={{ fontSize: "60px", marginBottom: "1rem", display: "flex", fill: '#FF8226' }}
                />
                <Typography variant="h6" sx={{ fontWeight: "600", textAlign: "left", color: theme.palette.primary.main }}>
                  Tomá decisiones con encuestas simples
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "1rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                >
                  Decile chau a las discusiones interminables. Ahora podés participar en
                  decisiones importantes con encuestas accesibles para todos los vecinos.
                </Typography>
              </Paper>
            </Grid2>

            {/* Ítem 4 */}
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Paper elevation={3} sx={{ padding: "1.5rem", height: "100%" }} square>
                <DownloadSharpIcon
                  sx={{ fontSize: "60px", marginBottom: "1rem", display: "flex", fill: '#FF8226' }}
                />
                <Typography variant="h6" sx={{ fontWeight: "600", textAlign: "left", color: theme.palette.primary.main }}>
                  Descargá tus expensas al instante
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "1rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                >
                  Tené siempre a mano tus expensas con todos los detalles que necesitás.
                  Desde facturas hasta las formas de pago, todo accesible desde la app.
                </Typography>
              </Paper>
            </Grid2>

            {/* Ítem 5 */}
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Paper elevation={3} sx={{ padding: "1.5rem", height: "100%" }} square>
                <WarningAmberSharpIcon
                  sx={{ fontSize: "60px", marginBottom: "1rem", display: "flex", fill: '#FF8226' }}
                />
                <Typography variant="h6" sx={{ fontWeight: "600", textAlign: "left", color: theme.palette.primary.main }}>
                  Notificaciones directas entre vecinos
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "1rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                >
                  ¿Un vecino dejó la puerta abierta o hay un auto mal estacionado? Enviá
                  notificaciones específicas a quien lo necesite, sin molestar al resto
                  del edificio.
                </Typography>
              </Paper>
            </Grid2>
          </Grid2>
        </Container>
      )}
    </Container>
  );
};

export default Benefits;
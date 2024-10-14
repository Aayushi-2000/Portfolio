import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 700,
}));

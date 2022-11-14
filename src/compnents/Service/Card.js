import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ServiceCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 240,
        border: "1px solid black",
        borderRadius: "60px 12px",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={props.img_}
          sx={{ width: "100%", objectFit: "contain" }}
          alt={props.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight={700}
            lineHeight="27px"
            letterSpacing=" 0em"
            textTransform={"uppercase"}
            whiteSpace={"nowrap"}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontFamily="Montserrat"
            fontSize="13px"
            fontWeight={400}
            lineHeight="23.43px"
            letterSpacing=" 0em"
          >
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

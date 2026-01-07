import { SportsSoccerOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";

const Header = ({ title }) => {
    return (
        <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1
            }}
        >
            {title}
            <SportsSoccerOutlined fontSize="inherit" />
        </Typography>
    )
};

export default Header;
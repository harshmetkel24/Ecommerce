import { Box, Container, Typography } from "@mui/material";

type TProps = {
	videoLink:string;
}
const InnerVideo = ({videoLink}:TProps) => {
    return (
        <>
            <Container sx={{ py: 4 }}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
                    Working
                    </Typography>
                    <Box
						sx={{
							borderRadius: "10px",
							boxShadow: 3,
                            textAlign:'center'
						}}
						py={1}
					>
				
				<video src={videoLink} height="250px" width="100%" controls/>
                </Box>
			</Container>
		</>
	);
};

export default InnerVideo;

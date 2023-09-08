import React, { useState } from "react";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import { Box, Card, Input, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { downloadInstagramVideo } from "./Api";

const HomePage = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoData, setVideoData] = useState(null);


  const handleDownload = async () => {
    if (videoUrl) {
      try {
        const data = await downloadInstagramVideo(videoUrl);
        setVideoData(data);
        if(videoData){
          handleRedirect()
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleRedirect =()=>{
    window.location.replace(videoData.media);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "rgb(229, 246, 253)",
        height:"100vh",
        justifyContent:"center"
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "crimson",
          textAlign: "center",
          padding:"1%"
        }}
      >
        Instagram Reel Video Downloader
      </Typography>
      <Input
        required
        sx={{
          color: "black",
          outline: "0",
          padding: "1%",
          width:"fit-content"
        }}
        placeholder="Paste URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />

      <Card
        sx={{
          margin: "2%",
        }}
      >
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          color="success"
          onClick={handleDownload}
          sx={{
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          Download
        </Button>
      </Card>
    </Box>
  );

};

export default HomePage;

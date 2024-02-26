import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useNavigate } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useEffect, useRef, useState } from "react";
import PauseIcon from "@mui/icons-material/Pause";
import { styled } from "@mui/system";
import Waveform from "./WaveFormElement";
import { Box, Typography, Button } from "@mui/material";

export function VoicePrompt() {
  const navigate = useNavigate();

  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audioBlob, setAudioBlob] = useState<Blob | undefined>();
  const [playing, setPlaying] = useState(false);
  const [isOnPause, setIsOnPause] = useState(true);
  const [pos, setPos] = useState(0);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    if (audioElementRef.current) {
      // Clear the previous audio source when a new recording is available
      audioElementRef.current.src = "";
    }
  }, [audioBlob]);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        const chunks: Blob[] = [];

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            chunks.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(chunks, { type: "audio/wav" });
          setAudioBlob(audioBlob);
        };

        mediaRecorder.start();
        setIsRecording(true);
      })
      .catch((error) => {
        console.error("Error accessing microphone:", error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const playAudio = () => {
    setIsOnPause(false);
    if (audioBlob && audioElementRef.current) {
      const audioBlobUrl = URL.createObjectURL(audioBlob);
      audioElementRef.current.src = audioBlobUrl;
      audioElementRef.current.play();
    }
  };

  const pauseAudio = () => {
    setIsOnPause(true);
    if (audioBlob && audioElementRef.current) {
      const audioBlobUrl = URL.createObjectURL(audioBlob);
      audioElementRef.current.src = audioBlobUrl;
      audioElementRef.current.pause();
    }
  };

  const handleTogglePlay = () => {
    setPlaying(!playing);
  };
  const handlePosChange = (e: any) => {
    setPos(e.originalArgs[0]);
  };

  return (
    <Box
    bgcolor="primary.contrastText"
    className="pt-[30px] w-full min-h-[calc(100vh-69px)] flex flex-row justify-center"
  >
    <Box
      bgcolor="primary.contrastText container"
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <Typography variant="h5">
        Turn on the microphone and press the button when you are ready
        </Typography>
    

      <div
        style={{
          fontSize: 20,
          marginTop: "20px",
        }}
      >
        <Typography variant="h6">Attempt to describe a convict in details</Typography>

        {audioBlob && (
          <div
            style={{
              position: "relative",
              // overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: "absolute",
                zIndex: 10000,
                color: "white",
                top: 47,
              }}
            >
              {isOnPause ? (
                <PlayArrowIcon
                  sx={{
                    fontSize: 35,
                    cursor: "pointer",
                  }}
                  onClick={playAudio}
                />
              ) : (
                <PauseIcon
                  sx={{
                    fontSize: 35,
                    cursor: "pointer",
                  }}
                  onClick={pauseAudio}
                />
              )}
            </div>

            
            <div
              style={{ maxWidth: "95%", position: "relative", left: "10px" }}
            >
              {/*@ts-ignore */}
              <Waveform audio={audioBlob} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100px",
                width: "100%",
                backgroundColor: "rgb(137, 137, 137)",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                position: "relative",
                top: "-109px",
                right: -0,
              }}
            ></div>
          </div>
        )}
      </div>
      {!audioBlob && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100px",
            width: "100%",
            backgroundColor: "rgb(137, 137, 137)",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          {!isRecording ? (
            <KeyboardVoiceIcon
              sx={{
                fontSize: 40,
                cursor: "pointer",
              }}
              onClick={startRecording}
            />
          ) : (
            <StopCircleIcon
              sx={{
                fontSize: 40,
                cursor: "pointer",
              }}
              onClick={stopRecording}
            />
          )}
          <Typography>{isRecording ? "Stop" : "Record"}</Typography>
        </div>
      )}

      <div
        style={{
          height: "1px",
          backgroundColor: "none",
          width: "100%",
        }}
      />

      {audioBlob && (
        <audio
          ref={audioElementRef}
          controls
          style={{
            display: "none",
          }}
        />
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignSelf: "center",
        }}
      >
        <Button variant="outlined" onClick={() => navigate("/text-result")}>
          Save
        </Button>
        <Button onClick={() => setAudioBlob(undefined)}>Re-enter</Button>
        <Button onClick={() => navigate("/home")}>Back</Button>
        </div>
    </Box>
    </Box>
  );
}

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GroupsIcon from '@mui/icons-material/Groups';

export function MainAdmin() {
  const navigate = useNavigate();
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
          <Button
            onClick={() => navigate(-1)}
            sx={{
              borderRadius: 100,
            }}
          >
            <ArrowBackIcon />
          </Button>
          Welcome to the Admin Dashboard
        </Typography>
        <Typography variant="h6">Choose where to navigate:</Typography>
        <div className="flex flex-col gap-3 ">
          <div
            className="px-2 w-full h-[50px] flex flex-row items-center cursor-pointer no-underline	border-2	"
            onClick={() => navigate("/admin-criminal")}
          >
            <Typography variant="h6" className="flex flex-row items-center gap-2">
              <PersonAddAlt1Icon /> <span>Insert Criminal</span>
            </Typography>
          </div>
          <div
            className="px-2 w-full h-[50px] flex flex-row items-center cursor-pointer no-underline border-2	"
            onClick={() => navigate("/admin-policeman")}
          >
            <Typography variant="h6" className="flex flex-row items-center gap-2" items-center>
              <LocalPoliceIcon /><span>Insert Policeman</span> 
            </Typography>
          </div>
          <div
            className="px-2 w-full h-[50px] flex flex-row items-center cursor-pointer no-underline	border-2	"
            onClick={() => navigate("/list-criminals")}
          >
            <Typography variant="h6" className="flex flex-row items-center gap-2">
              <FormatListBulletedIcon /><span> List Criminals</span>
            </Typography>
          </div>

          <div
            className="px-2 w-full h-[50px] flex flex-row items-center cursor-pointer no-underline	border-2	"
            onClick={() => navigate("/list-users")}
          >
            <Typography variant="h6" className="flex flex-row items-center gap-2">
              <GroupsIcon /><span> List Users</span>
            </Typography>
          </div>
        </div>
      </Box>
    </Box>
  );
}

import { Button, ButtonGroup, Paper, Stack, Tooltip } from "@mui/material";
import NumberSpinner from "../components/inputs/numberSpinner";
import { useState } from "react";

export const GameSettings = () => {
    const [playerCount, setPlayerCount] = useState<number | null>(null);

  return (
    <Paper variant="outlined" sx={{p:2}}>
        <Stack spacing={2} sx={{ width: "100%" }}>
            <ButtonGroup>
                <Tooltip title="Running tally of time for all turns" placement="bottom">
                    <Button>Count Up</Button>
                </Tooltip>
                <Tooltip title="Total time for the game counted down" placement="bottom">
                    <Button>Count Down</Button>
                </Tooltip>
                <Tooltip title="Fixed time per turn" placement="bottom">
                    <Button>Timer</Button>
                </Tooltip>
            </ButtonGroup>

            <NumberSpinner 
                label="Number of Players" 
                size="small"
                value={playerCount}
                onValueChange={(value) => setPlayerCount(value)}
            />

            {playerCount !== null && (
                <Stack spacing={1}>
                    {Array.from({ length: playerCount }, (_, index) => (
                        <NumberSpinner
                            key={index}
                            label={`Player ${index + 1} Time`}
                            size="small"
                        />
                    ))}
                </Stack>
            )}
        </Stack>
    </Paper>
  );
}
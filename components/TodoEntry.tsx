import { Checkbox, CloseButton, Text, Grid, createStyles } from "@mantine/core";
import { useState } from "react";

const useStyle = createStyles(() => ({
  entry: {
    display: "flex",
  },
}));

export default function TodoEntry({ task, index, toggleTask }: any) {
  const { classes } = useStyle();

  const [checked, setChecked] = useState(false);

  return (
    <Grid>
      <Grid.Col span="auto">
        <Checkbox
          label={
            <>
              <Text strikethrough={checked} size="xl">
                {task.taskName}
              </Text>
            </>
          }
          radius="lg"
          size="lg"
          checked={task.done}
          onChange={(event) => toggleTask(task)}
        />
      </Grid.Col>

      <Grid.Col span="content">
        <CloseButton title="Delete task" size="xl" iconSize={20} />
      </Grid.Col>
    </Grid>
  );
}

// onClick={() => { removeTask(index) }}
// setChecked(event.currentTarget.checked

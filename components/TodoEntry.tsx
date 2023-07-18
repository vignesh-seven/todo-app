import { Checkbox, CloseButton, Text, Grid } from "@mantine/core";
import { useState } from "react";

export default function TodoEntry({ task, index, toggleTask }: any) {

  const [checked, setChecked] = useState(false);

  return (
    <Grid>
      <Grid.Col span="auto">
        <Checkbox
          label={
            <>
              <Text strikethrough={task.done} size="xl">
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

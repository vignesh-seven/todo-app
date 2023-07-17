import { Checkbox, CloseButton, Text, Grid, createStyles } from '@mantine/core';
import { useState } from 'react';

const useStyle = createStyles(() => ({
  "entry": {
    display: "flex",
  },
}))


export default function TodoEntry({ taskName, removeTask, index }: any) {

  const { classes } = useStyle()

  const [checked, setChecked] = useState(false);

  return <Grid>
    <Grid.Col span="auto">
      <Checkbox
        label={
          <>
            <Text strikethrough={checked} size="xl">{taskName}</Text>
          </>
        }
        radius="lg"
        size="lg"

        checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)}
      />
    </Grid.Col>

    <Grid.Col span="content">

      <CloseButton onClick={() => { removeTask(index) }} title="Delete task" size="xl" iconSize={20} />
    </Grid.Col>
  </Grid>
}

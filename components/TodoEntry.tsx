import { Checkbox, CloseButton, Text, Grid, Box } from "@mantine/core";

export default function TodoEntry({
  task,
  index,
  toggleTask,
  removeTask,
}: any) {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        textAlign: "center",
        padding: theme.spacing.sm,
        borderRadius: theme.radius.md,
        cursor: "pointer",

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[1],
        },
      })}
    >
      <Grid align="center">
        <Grid.Col span="auto" onClick={(event) => toggleTask(index)}>
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
            onChange={(event) => toggleTask(index)}
          />
        </Grid.Col>

        <Grid.Col span="content">
          <CloseButton
            onClick={(e) => {
              removeTask(index);
            }}
            title="Delete task"
            size="xl"
            iconSize={20}
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
}

// onClick={() => { removeTask(index) }}
// setChecked(event.currentTarget.checked

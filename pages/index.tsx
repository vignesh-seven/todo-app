import Head from "next/head";
import { Inter } from "next/font/google";
import {
  Paper,
  Button,
  Divider,
  TextInput,
  Grid,
  Flex,
  createStyles,
  rem,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import TodoEntry from "../components/TodoEntry";
import { useState } from "react";
// import styles from '@/styles/Home.module.css'

interface Task {
  taskName: string;
  done: boolean;
}

const inter = Inter({ subsets: ["latin"] });

const useStyle = createStyles(() => ({
  wrapper: {
    maxWidth: rem(500),
    // height: rem(180),

    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function Home() {
  const { classes } = useStyle();

  // let tasks: string[] = [
  //   "hello",
  //   "there",
  //   "welcome"
  // ]

  const [tasks, setTasks] = useState<Task[]>([
    {
      taskName: "hello",
      done: false,
    },
    {
      taskName: "there",
      done: false,
    },
    {
      taskName: "welcome",
      done: false,
    },
  ]);

  const form = useForm({
    initialValues: { taskName: "" },

    // functions will be used to validate values at corresponding key
    validate: (values) => ({
      taskName: values.taskName.length < 1 ? "Please enter a task" : null,
    }),
    clearInputErrorOnChange: true,
  });

  function addTask(newTaskName: string) {
    if (!newTaskName) return;

    setTasks([
      ...tasks,
      {
        taskName: newTaskName,
        done: false,
      },
    ]);

    // newTaskRef.current.value = ""
    form.reset();
  }

  function removeTask(taskIndex: number) {
    setTasks(
      tasks.filter((task, i) => {
        return i !== taskIndex;
      })
    );
  }

  function toggleTask(taskIndex: number) {
    // function toggleTask(task: any) {
    const new_tasks = tasks.map((obj, i) => {
      if (i == taskIndex) {
        obj.done = !tasks[taskIndex].done;
      }
      return obj;
    });
    setTasks(new_tasks);
  }

  // let newTasks = tasks.filter((task) => {
  //   return task !== taskName
  // })

  // console.log(newTasks)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Todo app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Paper p="md" className={classes.wrapper}>
          <Flex
            mih={50}
            // bg="rgba(0, 0, 0, .3)"
            gap="xs"
            justify="center"
            // align="center"
            direction="column"
            wrap="wrap"
          >
            {tasks.map((task, i) => (
              <TodoEntry
                task={task}
                key={i}
                index={i}
                toggleTask={toggleTask}
                removeTask={removeTask}
              />
            ))}
          </Flex>
          <Divider my="lg" />
          <form onSubmit={form.onSubmit((e) => addTask(e.taskName))}>
            <Grid>
              <Grid.Col span="auto">
                <TextInput
                  {...form.getInputProps("taskName")}
                  placeholder="Task name"
                  variant="filled"
                  radius="xs"
                  size="lg"
                  // className={classes.flexGrow}
                />
              </Grid.Col>

              <Grid.Col span="content">
                <Button type="submit" radius="xs" size="lg">
                  Add
                </Button>
              </Grid.Col>
            </Grid>
          </form>
        </Paper>
      </main>
    </>
  );
}

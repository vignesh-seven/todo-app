import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Text, Paper, Button, Divider, TextInput, Grid, createStyles, rem } from '@mantine/core';
import { useForm } from '@mantine/form'

import TodoEntry from '../components/TodoEntry'
import { useRef, useState } from 'react';
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const useStyle = createStyles(() => ({
  "wrapper": {
    maxWidth: rem(500),
    // height: rem(180),

    marginLeft: 'auto',
    marginRight: 'auto'
  },

}))

export default function Home() {

  const { classes } = useStyle()

  // let tasks: string[] = [
  //   "hello",
  //   "there",
  //   "welcome"
  // ]

  const [tasks, setTasks] = useState<string[]>([
    "hello",
    "there",
    "welcome"
  ])

  const form = useForm({
    initialValues: { taskName: '' },

    // functions will be used to validate values at corresponding key
    validate: (values) => ({
      taskName: values.taskName.length < 1
        ? 'Please enter a task' : null

    }),
    clearInputErrorOnChange: true
  });

  function addTask(newTaskName: string) {

    if (!newTaskName) return

    setTasks([
      ...tasks,
      newTaskName
    ])

    // newTaskRef.current.value = ""
    form.reset()
  }

  function removeTask(taskIndex: number) {
    setTasks(tasks.filter((task, i, array) => {
      return i !== taskIndex
    }))


    // let newTasks = tasks.filter((task) => {
    //   return task !== taskName
    // })

    // console.log(newTasks)

  }




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

          {
            tasks.map((task, i) => (
              <TodoEntry taskName={task} key={i} index={i} removeTask={removeTask} />
            ))
          }

          <Divider my="lg" />
          <form onSubmit={form.onSubmit((e) => addTask(e.taskName))}>
            <Grid>
              <Grid.Col span="auto">
                <TextInput
                  {...form.getInputProps('taskName')}
                  placeholder="Task name"
                  variant="filled"
                  radius="xs"
                  size="lg"
                  // className={classes.flexGrow}
                />
              </Grid.Col>

              <Grid.Col span="content">
                <Button type="submit" radius="xs" size="lg" >
                  Add
                </Button>
              </Grid.Col>
            </Grid>
          </form>
        </Paper>
      </main>
    </>
  )
}

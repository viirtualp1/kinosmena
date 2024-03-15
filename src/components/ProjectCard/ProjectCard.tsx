import { Button, Title, Text, Input, Textarea, Menu } from '@mantine/core';

export function ProjectCard() {



  return (
    <div className="container content" style={{ minHeight: '95vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
      <div style={{ padding: 'auto' }}>
        <Title order={3}>Карточка проекта</Title>

        <div style={{ margin: '1rem 0' }}>
          <Text size="lg" fw={400}>Название</Text>
          <Input size="md" radius="lg" placeholder="Мой проект" />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <Text size="lg" fw={400}>Описание</Text>
          <Textarea size="md" radius="lg" rows={3} placeholder="Путешествие между временами..." />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <div
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <p>Дата начала</p>
            <Textarea
              cols={10}
              radius="lg"
              maxLength={10}
              placeholder="дд.мм.гггг"
              autosize
              minRows={1}
              maxRows={1}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p>Дата окончания</p>
            <Textarea
              cols={10}
              radius="lg"
              maxLength={10}
              placeholder="дд.мм.гггг"
              autosize
              minRows={1}
              maxRows={1}
            />
          </div>
        </div>

        {/*Две нижние кнопки */}
        {/*Две нижние кнопки */}
        {/*Две нижние кнопки */}

        <div style={{ display: 'flex', flexDirection: 'column' }}>

          <Menu  width={200} shadow="md">
            <Menu.Target>
              <Button variant="default" radius='lg'>Расчетные показатели</Button>
            </Menu.Target>

            <Menu.Dropdown>

              <Menu.Item component="a" href="/">
                Текст
              </Menu.Item>
              <Menu.Item
                component="a"
                href="/"
                target="_blank"
              >
                Текст
              </Menu.Item>

              <Menu.Item
                component="a"
                href="/"
                target="_blank"
              >
                Текст
              </Menu.Item>

              <Menu.Item
                component="a"
                href="/"
                target="_blank"
              >
                Текст
              </Menu.Item>

            </Menu.Dropdown>

          </Menu>

          <Button fullWidth radius='lg' style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>Сохранить</Button>


        </div>
      </div>
    </div>
  );
}
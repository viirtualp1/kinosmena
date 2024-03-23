/*import { Grid, Button } from '@mantine/core'*/
import React from 'react'
import classes from './User.module.scss'
/*import project from '../../assets/images/icons/project.svg'*/

interface UserProps {
  firstName: string
  lastName: string
  hasProjects: boolean
}

const User: React.FC<UserProps> = ({ firstName, lastName, hasProjects }) => {
  return (
    <div className="container content" style={{ padding: '24px' }}>
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}
      >
        <div style={{ marginRight: 10 }}>
          <img
            src="user-icon.png"
            alt="User Icon"
            style={{ width: 32, height: 32 }}
          />
        </div>
        <p>
          {firstName} {lastName}
        </p>
      </div>
      <div>
        <div className={classes.button__parent}>
          <div className={classes.column}>
            <div className={classes.button__project}>
              <button
                style={{ backgroundColor: 'rgb(5, 148, 250)', width: '76px'}}
                onClick={() => console.log('Button 1 clicked')}
              >
                Создать проект
              </button>
            </div>
            <div className={classes.button__archiv}>
              <button                
                style={{ backgroundColor: 'rgb(54, 58, 67)', width: '76px'}}
                onClick={() => console.log('Button 2 clicked')}
              >
                Архивные проекты
              </button>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.button__report}>
              <button                
                style={{ backgroundColor: 'rgb(54, 58, 67)' }}
                onClick={() => console.log('Button 3 clicked')}
              >
                Получить отчет
              </button>
            </div>
          </div>
        </div>

        <p>Активные проекты</p>
        {hasProjects ? (
          <div className={classes.projects}>
            <button>Проект</button>
            <button>Проект</button>
            <button>Проект</button>
            {/* Здесь могут быть компоненты для отображения активных проектов */}
          </div>
        ) : (
          <p>Здесь пока пусто, создайте проект</p>
        )}
      </div>
    </div>
  )
}

export default User
/*export function User() {
  return (
    <div >
     <Flex
      mih={150}
      bg="rgba(0, 0, 0, .3)"
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
    </div>
  )
}*/

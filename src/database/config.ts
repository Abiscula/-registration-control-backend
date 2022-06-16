import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'src/database/data.sqlite'
})

export async function startDB() {
  try {
    await sequelize.sync()
    console.log('Database is connected')
    
    return 200

  }catch(err) {
    console.log(err)
  }
}
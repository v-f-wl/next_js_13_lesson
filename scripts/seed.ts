const { PrismaClient } = require('@prisma/client')

const db = new PrismaClient()

async function main(){
  try{
    await db.category.createMany({
      data: [
        {name: 'Популярные люди'},
        {name: 'Кино'},
        {name: 'Музыка'},
        {name: 'Игры'},
        {name: 'Животные'},
        {name: 'Философия'},
        {name: 'Наука'},
      ]
    })
  }catch(error){
    console.log('Error', error)
  }finally{
    await db.$disconnect()
  }
}

main()
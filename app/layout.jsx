import '@/asserts/styles/global.css'

export const metadata = {
    title:'Property plues| Rental services',
    description: 'A rental services app',
    keywords:['javascript','house','renting']
}

const MainLayout = ({children}) => {
  return (
   <html lang="en">
     <body>
        
     <div>{children}</div>
     </body>
   </html>
  )
}

export default MainLayout
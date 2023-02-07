import { Stack } from "@mui/material"
import { categories } from "../utils/constants"



const Sidebar = ({selectedCategory, setSelectedCategory}) => {

  return (
    <Stack
        direction='row'
        sx= {{
            overflowY: 'auto',
            height: {sx: 'auto',md: '95%'},
            flexDirection: {md: 'column'}
        }}    
    >
        {
            categories.map(c => (
                <button className="category-btn" 
                        style={{background: c.name === selectedCategory && '#FC1503', color: 'white'}} 
                        key={c.name}
                        onClick={() => setSelectedCategory(c.name)}
                >
                    <span style={{color: c.name === selectedCategory ? 'white' : 'red', marginRight: '15px', fontSize: '17px'}}>{c.icon}</span>
                    <span style={{opacity: c.name === selectedCategory ? '1' : '1'}}>{c.name}</span>
                </button>
            ))
        }
    </Stack>
  )
}

export default Sidebar
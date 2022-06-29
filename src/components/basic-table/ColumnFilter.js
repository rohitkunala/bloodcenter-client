import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <span>
     <br/><SearchIcon onClick={handleOpen} fontSize="small"/>
      { open && <input
        value={filterValue || ''}
        onChange={e => setFilter(e.target.value)}
      />}
    </span>
  )
}
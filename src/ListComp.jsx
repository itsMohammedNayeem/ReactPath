import Item from './Item'

export const ListComp = ({ items, handleToggle }) => {
  return (
    <div className='flexC list'>
      {items?.map(item => (
        <Item key={item} item={item} handleToggle={handleToggle} />
      ))}
    </div>
  )
}

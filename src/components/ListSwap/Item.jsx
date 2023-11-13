const Item = ({ item, handleToggle }) => {
  return (
    <label key={item}>
      <input type='checkbox' onChange={() => handleToggle(item)} />
      {item}
    </label>
  )
}

export default Item


export const SectionSchema = ({children, id, col = 'col-auto'}) => {
  return (
    <div className={`bg-white text-dark p-4 rounded m-3 ${col}`} id={id}>
      {children}
    </div>
  )
}

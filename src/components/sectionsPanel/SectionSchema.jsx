
export const SectionSchema = ({children, id}) => {
  return (
    <div className="bg-white text-dark p-4 rounded m-4 element" id={id} name={id}>
      <h2>Prueba</h2>
      {children}
    </div>
  )
}

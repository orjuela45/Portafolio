
export const SectionSchema = ({children, id}) => {
  return (
    <div className="bg-white text-dark p-4 rounded m-4 element" id={id}>
      {children}
    </div>
  )
}

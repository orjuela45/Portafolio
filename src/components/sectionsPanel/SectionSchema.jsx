
export const SectionSchema = ({children, id}) => {
  return (
    <div className="bg-white text-dark p-4 rounded m-3 col-xl-auto col-xxl-5" id={id}>
      {children}
    </div>
  )
}

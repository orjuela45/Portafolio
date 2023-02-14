export const Image = ({url, alt}) => {
  return (
    <>
      <img src={url} className="rounded-circle img-fluid" alt={alt}></img>
    </>
  )
}

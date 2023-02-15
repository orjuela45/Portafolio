export const Image = ({url, alt, width}) => {
  return (
    <>
      <img width={width} src={url} className="rounded-circle img-fluid" alt={alt}></img>
    </>
  )
}

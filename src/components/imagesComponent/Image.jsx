export const Image = ({url, alt, width, className = "rounded-circle img-fluid"}) => {
  return (
    <>
      <img width={width} src={url} className={className} alt={alt}></img>
    </>
  )
}

// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {updateDetails} = props
  const {title, description, publishedDate} = updateDetails

  return (
    <li>
      <div className="first">
        <div className="second">
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
        </div>
        <p className="time">{publishedDate}</p>
      </div>
      <hr className="horizontal-line" />
    </li>
  )
}
export default BlogItem

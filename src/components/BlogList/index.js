// Write your JS code here

import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div>
      <ul className="list-item">
        {blogsList.map(each => (
          <BlogItem key={each.id} updateDetails={each} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList

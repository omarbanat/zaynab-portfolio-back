const express= require('express')
const router = express.Router()
const {readBlogByID, readAllBlogs, createBlog,deleteBlogByID,}=require('../controllers/blogsController')


router.get('/', readAllBlogs )

router.post('/', createBlog)

router.delete('/:id', deleteBlogByID )

router.get('/:id', readBlogByID )

// router.route('/blogs').get(readAllBlogs).post(createBlog)
// router.route('/blogs/:ID').put(editBlog).delete(deleteBlog)
// router.get('/blogs/:ID', readBlogByID )

module.exports = router;
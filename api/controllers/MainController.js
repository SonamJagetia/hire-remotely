module.exports = {

	index: function (req, res, next) {
		Post.find()
		.where({active: true})
		.sort({createdAt: 'desc'})
		.exec(function foundPosts (err, posts) {
			if (err) return next(err);
			res.view({
				posts: posts
			});
		});
	},
    
	careers: function (req, res) {
		res.redirect('/jobs');
	}
  
};

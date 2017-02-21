exports.DATABASE_URL = 'mongodb://ryrankin:Mn7u5g5a223@ds157459.mlab.com:57459/mongo-blog-api' ||
						process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://localhost/blogs';
exports.PORT = process.env.PORT || 8080;
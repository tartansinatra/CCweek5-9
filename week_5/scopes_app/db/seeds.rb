Post.delete_all
Category.delete_all

c1 = Category.create name: "Category One"
c2 = Category.create name: "Category Two"

p1 = Post.create name: "Post One", is_published: true, created_at: Date.parse('2015-12-03'), category: c1
p2 = Post.create name: "Post Two", is_published: true, category: c2
p3 = Post.create name: "Post Three", is_published: false, category: c1
p4 = Post.create name: "Post Four", is_published: false, category: c2



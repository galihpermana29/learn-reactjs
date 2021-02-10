import { Link } from "react-router-dom"

const BlogList = ({blogs, title, handleDelete}) => {
   // Menggunakan props

   // Nah tujuan menggunakan props itu biar komponennya lebih reuseable bisa digunakan di semua page, tinggal panggil tagnya saja, tanpa perlu menulis lagi logik dari code yang sama.
   // nah, kita buat aja function baru, yang me return template html yang ingin kita jadikan reuseable. Nah bagaimana jika ternyata templatenya menampilkan data? seperti kasus dibawah ini?

   // Kita gunakan props, jadi function ini menerima sebuah argument yang berasal dari komponen yang memanggilnya

   //Home.js
   // <BlogList blogs={blogs}/> properti blogs itu akan mengirimkan variabel blogs yang ada pada Home.js, lalu diterima oleh function ini BlogList lalu kita destructure langsung. Ingat bahwa properti blogs yang mengirimkan variabel blogs itu dan diterima oleh props pada function BlogList, akan menjadi sebuah objek, makanhya kita destructure objek pada parameter dari functionnya

   // memanggil tagnya
   // <BlogList blogs={blogs} title="Untitled"/>

   // menerima propsnya pada function
   // const BlogList = (props) => { const blogs = props.blogs; const title = props.title} atau bisa juga
   // const BlogList = ({blogs, title}) => {console.log(blogs, title)}

   // Propsnya juga bisa menerima sebuah argument berupa function. jadi pada saat memanggil tagnya, tinggal mengirimkan saja props misal handleDelete={handleDelete} seperti pada Home.js

	return (
		<div className="blog-list">
         <h2>{title}</h2>
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
               {/* Lalu pada bagian ini, kita bungkus dengan Link yang to="/blogs/blog.id" jadi kalau di klik, maka akan menuju ke url dengan path /blogs/blog.idnya berapa*/}
               <Link to={`/blogs/${blog.id}`}> 
                  <h2>{blog.title}</h2>
                  <p>Written by {blog.author} </p>
               </Link>
               <button onClick={() => handleDelete(blog.id)}>Delete</button>
				</div>
			))}
		</div>
	);
};

export default BlogList;

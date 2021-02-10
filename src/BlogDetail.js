import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

// Untuk membuat blogs detail yang kalo di klik menampilkan detail isi dari blogsnya

// lihat pada app.js bagian route yang blogdetail
{/* <Route path="/blogs/:id">
   <BlogDetail/>
</Route> */}

// maksud dari path="/blogs/:id" adalah, berapapun id nya akan tergenerate sendiri, tinggal menyesuaikan nanti pada bagian data nya. Jadi kalau kita tulis di url nya misal http://localhost:8000/blogs/2 maka tampilkan komponen BlogDetail

// untuk menampilkan data sesuai dengan url yang di tulis atau bagian title yang di klik, pertama kita butuh hooks dari router nya dengan import { useParams }

const BlogDetail = () => {
   // jika url nya http://localhost:8000/blogs/2, lalu panggil method useParams() akan mereturn id = 2, makanya kita destructuring
	const { id } = useParams();
   // Lalu gunakan custom hooks yang kita buat tadi useFetch() yang akan mem-fetch berdasarkan id yang diminta melalui klik atau mengetikkan urlnya
	const { data: blog, isPending, isFailed, handleDelete } = useFetch(
		`http://localhost:8000/blogs/${id}`
	);
	console.log(blog);
	return (
		<div className="blog-detail">
			{isFailed && <div>{isFailed}</div>}
			{isPending && <div>Loading...</div>}
			{blog && (
				<div>
					<h2 className="title">{blog.title}</h2>
					<p className="body">{blog.body}</p>
					<p className="author">author: {blog.author}</p>
				</div>
			)}
		</div>
	);
};

export default BlogDetail;

// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
	const { data: blogs, isPending, isFailed, handleDelete } = useFetch('http://localhost:8000/blogs')
	return (
		<div className="home">
			{isFailed && <div>{isFailed}</div>}
			{/* Kondisi ketika loading, jadi buat state yang true, kalau isPending itu true munculkan div yang tulisannya loading, kalau data sudah berhasil di fetch maka setIsPending(false) agar tulisan loading tidak muncul */}
			{isPending && <div>Loading....</div>}
			{/* Kalau props blog dikirim langsung, maka null lah yang akan di kirimkan dan akan terjadi eror, karena fetching itukan async jadi butuh beberapa saat untuk mendapatkan datanya, makanyan diambil default valuenya yaitu null. untuk mengatasi kita bisa kasih logic &&
			 */}
			{blogs && (
				<BlogList
					blogs={blogs}
					title="All Blogs!"
					handleDelete={handleDelete}
				/>
			)}
			{/* Cara bacanya adalah, kalau blogs === false, maka yang di sebelah kanan gabakal di eksekusi atau ditampilkan. Kalau blogs === true, maka lanjut kesebelah kanan atau mengeksekusi nya. */}
		</div>
	);
};

export default Home;

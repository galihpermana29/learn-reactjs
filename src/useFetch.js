import { useEffect, useState } from 'react';
// membuat custom hooks agar fetch ini bisa digunakan pada setiap komponen

// namanya harus use....
const useFetch = (url) => {
   // ambil state yang tadi ada pada home.js
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [isFailed, setIsFailed] = useState(false);

   const handleDelete = (id) => {
		const newBlogs = data.filter((blog) => blog.id !== id);
		setData(newBlogs);
	};

	useEffect(() => {
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw Error('Could not fetch the endpoints');
				}
				return res.json();
			})
			.then((data) => {
				setData(data);
				setIsPending(false);
			})
			.catch((err) => {
				setIsFailed(err.message);
				setIsPending(false);
			});
	}, [url]); // akan di eksekusi setiap url yang dikirimkan berbeda

   // mereturn sebua objek yaitu data, isPending, isFailed, handleDelete
	return { data, isPending, isFailed, handleDelete };
};

export default useFetch;
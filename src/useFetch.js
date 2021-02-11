import { useEffect, useState } from 'react';

const useFetch = (url) => {
	// ambil state yang tadi ada pada home.js
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [isFailed, setIsFailed] = useState(false);

	const handleDelete = (id) => {
		const newBlogs = data.filter((blog) => blog.id !== id);
		setData(newBlogs);
      fetch(`http://localhost:8000/blogs/${id}`, {
         method: "DELETE"
      }).then(() => {
         alert('Successfully Deleted')
      })
	};

	useEffect(() => {
		// Jika data belum selesai di fetch, dan kita pindah ke newblog page, maka akan terjadi eror karena dia akan tetap berusaha mengupdate state ketika fetch selesai tetapi kan kita gunakan function ini pada komponen Home.js, ketika kita sudah pindah ke Create.js atau newBlog berarti kan komponennya sudah unmounted atau sudah gaada, itulah yang bikin eror nya

		// caranya, kita buat abortController
		const abortCont = new AbortController();
		// variabel abortCont jika di console menghasilkan objek yang ada properti signalnya

		// pada method fetch(url, kasih opsi yang berupa objek {signal: abortCont.signal})
		fetch(url, { signal: abortCont.signal })
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
				// handle eror jika err.name disebabkan oleh karena kita menghentikan fetchnya atau namanya "AbortError" maka jangan update statenya
				if (err.name === 'AbortError') {
					console.log('Fetch aborted');
				} else {
					setIsFailed(err.message);
					setIsPending(false);
				}
			});

		// return abortCont.abort() kasih method abort() agar fetch di aborted
		return () => abortCont.abort();
	}, [url]); // akan di eksekusi setiap url yang dikirimkan berbeda

	// mereturn sebua objek yaitu data, isPending, isFailed, handleDelete
	return { data, isPending, isFailed, handleDelete };
};

export default useFetch;

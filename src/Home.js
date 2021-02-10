import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {
	// let name = 'Galih';
   // console.log(useState('Galih'))
   
   // Menggunakan useState hook, jadi ketika di klik, akan merubah data yang ada pada htmlnya (misalnya begitu). nah sesuatu yang seperti itu membutuhkan variabel yang reactive, sehingga ketika terjadi perubahan akan merender ulang template html yang sudah ada.

   // import {useState} from 'react', lalu gunakan useState() seperti function biasa, yang mana dia mereturn sebuah array, value yang pertama adalah parameternya dan value yang kedua adalah function yang bisa merubah value yang pertama itu. seperti di bawah ini
   // let [name, setName] = useState('Galih');
	// const handleClickOne = (e) => {
	// 	setName('Permana');
   // };

   const [blogs, setBlogs] = useState(null)

    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id)
      setBlogs(newBlogs)
    }

    // useEffect(), akan tereksekusi setiap kali rendering, nah untuk mencustom kapan dia di eksekusi adalah pada parameter kedua tambahkan dependencies atau value yang akan di lihat jika ada perubahan maka di eksekusi 
    const [name, setName] = useState('Permana')
    useEffect(() => {
       fetch('http://localhost:8000/blogs')
         .then(res => res.json())
         .then(data => {
            setBlogs(data)
         })
    }, []) // akan di eksekusi sekali saja

	return (
		<div className="home">
         {/* Kalau props blog dikirim langsung, maka null lah yang akan di kirimkan dan akan terjadi eror, karena fetching itukan async jadi butuh beberapa saat untuk mendapatkan datanya, makanyan diambil default valuenya yaitu null. untuk mengatasi kita bisa kasih logic &&
         */}
         {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>}
         {/* Cara bacanya adalah, kalau blogs === false, maka yang di sebelah kanan gabakal di eksekusi atau ditampilkan. Kalau blogs === true, maka lanjut kesebelah kanan atau mengeksekusi nya. */}
		</div>
	);
};

export default Home;

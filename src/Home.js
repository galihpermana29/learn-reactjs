import { useState } from 'react';
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

   const [blogs, setBlogs] = useState([
      { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
      { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

	return (
		<div className="home">
         <BlogList blogs={blogs} title="All Blogs!"/>
         {/* reuseable components, doing filtering on the props */}
         <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's Blogs"/>

			{/* <p>{name}</p> */}
			{/* if the function doesnt passing an argument */}
			{/* <button onClick={handleClickOne}>Click Me</button> */}
			{/* <button onClick={(e) => {
            handleClickTwo('Galih', e)
         }}>Click Me Again</button> */}
		</div>
	);
};

export default Home;

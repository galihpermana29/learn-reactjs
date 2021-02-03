import { useState } from 'react';
const Home = () => {
	// let name = 'Galih';
   console.log(useState('Galih'))
   
   // Menggunakan useState hook, jadi ketika di klik, akan merubah data yang ada pada htmlnya (misalnya begitu). nah sesuatu yang seperti itu membutuhkan variabel yang reactive, sehingga ketika terjadi perubahan akan merender ulang template html yang sudah ada.

   // import {useState} from 'react', lalu gunakan useState() seperti function biasa, yang mana dia mereturn sebuah array, value yang pertama adalah parameternya dan value yang kedua adalah function yang bisa merubah value yang pertama itu. seperti di bawah ini
   let [name, setName] = useState('Galih');
	const handleClickOne = (e) => {
		setName('Permana');
	};

	return (
		<div className="home">
			<h2>Homepage</h2>
			<p>{name}</p>
			{/* if the function doesnt passing an argument */}
			<button onClick={handleClickOne}>Click Me</button>
			{/* <button onClick={(e) => {
            handleClickTwo('Galih', e)
         }}>Click Me Again</button> */}
		</div>
	);
};

export default Home;

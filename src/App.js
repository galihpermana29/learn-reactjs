import './App.css';

function App() {
   // jadi pada react, kita buat nya itu komponen, yang mana misal navbar, kita buat jadi sebuah komponen, nah komponen itu kita buat dalam function, contohnya kaya komponen App ini. yang mana didalam function itu, kita bisa menuliskan apapun sintak js sperti biasanya, dan me return sebuah JSX atau html template yang berupa js.

   // jangan lupa untuk bisa merender komponennya kedalam DOM, kita export dulu komponennya, lalu di bagian yang mau kita import, kita import aja komponen tadi. persis kaya js biasa
   
   // nah untuk menampilkan data yang dinamis, kita cukup kasih {namaVariabel} pakai kurung kurawal aja. ini bisa digunakan kecuali untuk object dan boolean
   const user = 'Galih';
   const greetings = `Halo ${user}`;
   const age = 19;
   const prodi = 'Teknik Komputer';
   const khs = ['A', 'A', 'A'];
   const ips = 4.0;
   const univLink = 'https://siam.ub.ac.id/'

	return (
		<div className="App">
			<div className="content">
				<h1>Biodata Mahasiswa</h1>
            <h2>{greetings}</h2>
            <p>Nama : {user}</p>
            <p>Umur : {age}</p>
            <p>Universitas : <a href={univLink} target="_blank">Univ Brawijaya</a></p>
            <p>Prodi : {prodi}</p>
            <p>Hasil Studi : {khs}</p>
            <p>IPS : {ips}</p>
			</div>
		</div>
	);
}

export default App;

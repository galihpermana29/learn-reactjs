// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Create from './Create';
import BlogDetail from './BlogDetail';

// Untuk bisa ganti ganti page, kita butuh reactRouter yang mana harus di install dulu npm install react-router-dom@5
// Lalu gunakan Router untuk membungkus elemennya, lalu gunakan switch jika bagian dari elemen tersebut yang ingin diganti ganti. Jangan lupa tambahkan tag route dahulu beserta pathnya yang mengarah ke tujuannya.

// keyword exact itu digunakan agar dia hanya match jika namanya sama bukan beberapa saja yang sama
// tanpa exact, /create === /. dengan exact, /create !== / sehingga respon yang dikembalikan bisa sesuai dengan pathnya.

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/create">
							<Create />
						</Route>
						<Route path="/blogs/:id">
							<BlogDetail/>
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;

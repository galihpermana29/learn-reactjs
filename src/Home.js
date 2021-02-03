const Home = () => {
	const handleClickOne = (e) => {
		console.log('No argument passed to this function, Hello!', e);
	};

   const handleClickTwo = (userName, e) => {
      console.log(`Hello, ${userName}, there is an argument passed to this function`, e)
   }




	return (
		<div className="home">
			<h2>Homepage</h2>
			{/* if the function doesnt passing an argument */}
			<button onClick={handleClickOne}>Click Me</button>
			<button onClick={(e) => {
            handleClickTwo('Galih', e)
         }}>Click Me Again</button>
		</div>
	);
};

export default Home;

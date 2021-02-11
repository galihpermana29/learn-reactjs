import { useState } from 'react';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('Mario');

	return (
		<div className="create">
			<h2>Add a New Blog</h2>
			<form action="">
				<label htmlFor="">Blog Title:</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label htmlFor="">Blog Body:</label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<label htmlFor="">Blog Author:</label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="Mario">Mario</option>
					<option value="Yoshi">Yoshi</option>
				</select>
				<button>Add Blog</button>
			</form>
		</div>
	);
};

export default Create;

import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('Mario');
   const [isPending, setIsPending] = useState(false)
   const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = {
			title,
			body,
			author,
		};
      setIsPending(true)
		fetch('http://localhost:8000/blogs', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog),
		}).then(() => {
         setIsPending(false)
         setTitle('')
         setBody('')
         history.push('/') // menggunakan state useHistory untuk redirect ke halaman home page, jika di console (history) akan bayak sekali method yang bisa digunakan
         alert('New Blog Successfully Added')
         
      }).catch((err) => {
         alert('Failed Adding a New Blog', err.message)
      })
	};
	return (
		<div className="create">
			<h2>Add a New Blog</h2>
			<form onSubmit={handleSubmit}>
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
				{!isPending && <button>Add Blog</button>}
				{isPending && <button disabled>Wait a bit second...</button>}
			</form>
		</div>
	);
};

export default Create;

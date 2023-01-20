import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate(-1);
		}, 4000);
	}, []);
	return (
		<div className='container'>NotFound -- we bring you back to the last page in 4 seconds</div>
	);
}

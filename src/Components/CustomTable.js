function CustomTable({ titles, callback }) {
	return (
		<table className="table table-zebra table-fixed w-full text-center whitespace-pre-wrap">
			<thead className="">
				<tr>
					{titles.map((title, index) => (
						<th key={index}>{title}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{callback().map((item, index) => (
					<tr key={index}>{item}</tr>
				))}
			</tbody>
		</table>
	);
}

export default CustomTable;

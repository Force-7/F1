import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="flex max-w-full bg-base-300  bg-gradient-to-r from-base-300 to-gray-700 ">
			{/* Hamburger */}

			<div className="visible absolute md:invisible navbar">
				<div className="dropdown text-5xl navbar-start">
					<label tabIndex="0" className="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</label>
					<ul
						tabIndex="0"
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<Link
							to="/LastRace"
							className="btn btn-ghost text-primary normal-case text-xl"
						>
							Races
						</Link>
						<Link
							to="/Drivers"
							className="btn btn-ghost text-accent normal-case text-2xl"
						>
							Drivers
						</Link>
						<Link
							to="/Standings"
							className="btn btn-ghost text-accent normal-case text-2xl"
						>
							Ranking
						</Link>
					</ul>
				</div>
				<div className="navbar-center">
					<Link
						to="/"
						className="btn btn-ghost text-accent normal-case text-2xl bg-base-100"
					>
						<img
							src="./Formula.png"
							alt="Formula 1 Icon"
							className="object-cover h-14 w-24 "
						/>
					</Link>
				</div>
				<div className="navbar-end"></div>
			</div>

			{/* NAVBAR */}

			<div className="navbar invisible md:visible">
				<div className="navbar-start justify-around">
					<Link
						to="/LastRace"
						className="btn btn-ghost text-accent normal-case text-2xl"
					>
						Races
					</Link>
					{/* <Link
            to="/LastRace"
            className="btn btn-ghost text-accent normal-case text-2xl"
          >
            Races
          </Link> */}
				</div>

				<div className="navbar-center">
					<Link
						to="/"
						className="btn btn-ghost text-accent normal-case text-2xl bg-base-100"
					>
						<img
							src="./formula.png"
							alt="Formula 1 Icon"
							className="object-cover h-14 w-24 "
						/>
					</Link>
				</div>

				<div className="navbar-end justify-around">
					<Link
						to="/Drivers"
						className="btn btn-ghost text-accent normal-case text-2xl"
					>
						Drivers
					</Link>

					<Link
						to="/Standings"
						className="btn btn-ghost text-accent normal-case text-2xl"
					>
						Ranking
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;

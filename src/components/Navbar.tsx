import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

import { useAccount, useConnect, useDisconnect } from "wagmi";
window.open = (function (open) {
	return function (url, _, features) {
		return open.call(window, url, "_blank", features);
	};
})(window.open);



const Navbar = () => {
    const account = useAccount();
	const { connectors, connect, status, error } = useConnect();
	const { disconnect } = useDisconnect();
	const [toggleDropdown, setToggleDropdown] = React.useState(false);

	const handleToggleDropdown = () => {
		setToggleDropdown(!toggleDropdown);
	};

	return(
			<div className="sticky top-0 flex justify-between items-center px-5 mb-2 ">
				<div className="navbar__logo h-[100px] w-[100px] flex justify-center items-center">
					<img src="./opinionX_logo-removebg-preview.png" alt="logo" />
				</div>
				
				<ConnectButton />
				<div className="relative">
					<button onClick={handleToggleDropdown} className="px-5 py-2 bg-violet-400 rounded-xl text-white flex justify-between items-center">
						Select Wallet 
						<span className={`transform ${toggleDropdown ? 'rotate-180' : ''} transition-transform`}> ▼</span>
					</button>
					<div className="absolute right-0 mt-2 w-60 bg-violet-400 text-white rounded-xl shadow-lg overflow-hidden z-50">
					{toggleDropdown && (
						<>
							<div className="px-2 py-3">
								<h2 className="text-xl font-bold underline">Account</h2>
								<br />
								<div>
									<span className="font-bold">status: </span>{account.status}
									<br />
									<span className="font-bold">addresses:</span> {JSON.stringify(account.addresses)}
									<br />
									<span className="font-bold">chainId:</span> {account.chainId}
								</div>

								{account.status === "connected" && (
									<button className="px-5 py-2 bg-red-500 rounded w-full" type="button" onClick={() => disconnect()}>
										Disconnect
									</button>
								)}
							
								<h2 className="font-bold">Connect: </h2>
								{connectors.map((connector) => (
									<button
										className="px-4 mx-5 my-1 bg-violet-900"
										key={connector.uid}
										onClick={() => connect({ connector })}
										type="button"
									>
										{connector.name}
									</button>
								))}
								<div className="mt-2">{status}</div>
								<div className="text-orange-300">{error?.message}</div>
							</div>

						</>
						)}
					</div>

				</div>
			</div>
		)
}

export default Navbar;
import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
window.open = (function (open) {
	return function (url, _, features) {
		return open.call(window, url, "_blank", features);
	};
})(window.open);


interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({ }) => {
    const account = useAccount();
	const { connectors, connect, status, error } = useConnect();
	const { disconnect } = useDisconnect();
	const [toggleDropdown, setToggleDropdown] = React.useState(false);

	const handleToggleDropdown = () => {
		setToggleDropdown(!toggleDropdown);
	};

	return(
			<div className="flex flex-col justify-between items-center px-5 my-2 mb-2 bg-violet-900">
				<div className="navbar__logo bg-violet-400 h-[100px] w-[100px]">
					<img src="./opinionX_logo-removebg-preview.png" alt="logo" />
				</div>
				
				<div className="relative">
					<button onClick={handleToggleDropdown} className="px-5 py-2">
						Select Wallet
					</button>
					<div className="absolute -top-full right-0 bg-violet-400 text-white rounded-xl overflow-hidden w-60 navbar__links z-50">
					{toggleDropdown && (
						<>
							<div className="mx-2 my-2">
								<h2 className="text-3xl font-bold underline">Account</h2>

								<div>
									status: {account.status}
									<br />
									addresses: {JSON.stringify(account.addresses)}
									<br />
									chainId: {account.chainId}
								</div>

								{account.status === "connected" && (
									<button type="button" onClick={() => disconnect()}>
										Disconnect
									</button>
								)}
							
								<h2>Connect</h2>
								{connectors.map((connector) => (
									<button
										className="px-4 mx-5 my-2 bg-violet-900 rounded-full"
										key={connector.uid}
										onClick={() => connect({ connector })}
										type="button"
									>
										{connector.name}
									</button>
								))}
								<div>{status}</div>
								<div>{error?.message}</div>
							</div>

						</>
					)}
				</div>
				</div>
			</div>
		)
}

export default Navbar;
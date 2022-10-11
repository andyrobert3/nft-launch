const BASE_IPFS_URL = 'https://gateway.pinata.cloud/ipfs'

export const resolveIpfsLink = (
	ipfsLink
) => {
	if (typeof ipfsLink !== "string") return ipfsLink;
	const regex =
		/^(?:(?:(?:ipfs:\/\/ipfs\/)|(?:ipfs:\/\/))?((Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})\/?.*))/;
	const [_, ipfsHash] = ipfsLink.match(regex) || [];

	return (ipfsHash ? `${BASE_IPFS_URL}/${ipfsHash}` : ipfsLink);
};

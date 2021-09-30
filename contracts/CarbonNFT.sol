
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CarbonNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    mapping(address => bool) public Issued;

    constructor() public ERC721("Carbon Credit NFT", "CarbonNFT") {}

    // use sender address as URI for gurantee of fixed address
    function claimItem(string memory tokenURI)
        public
        returns (uint256)
    {
        require(Issued[msg.sender]!=true, "CarbonNFT already issued to this address")
        // require(_tokenIds<=10000)
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        Issued[msg.sender]=true; // mark boolean issued status
        return newItemId;
    }
}

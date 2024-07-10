// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Turf is ERC721{

    struct Nft{
        uint256 nftID;
        string img;
        uint256 startTime;
        uint256 endTime;
    }

    struct availableTurf
    {
        uint256 amount;
        string timings;
        string location;
        address payable turfOwner;
        string name;
        uint256 ID;
        string img;
    }

    constructor() ERC721("Turf","TRF"){}

    uint256 counter = 0;
    uint256 counters = 0;
    mapping(uint256 => availableTurf) public IDtoTurf;

    modifier onlyTurfOwner(uint256 ID){
        require(msg.sender == IDtoTurf[ID].turfOwner,"you are not the owner of this turf");
        _;
    }

    function createTurf (uint256 amount,string memory timings, string memory location,address payable owner,string memory name,string memory img) public {
        availableTurf memory newTurf;
        newTurf.amount = amount;
        newTurf.timings = timings;
        newTurf.location = location;
        newTurf.turfOwner = owner;
        newTurf.name = name;
        newTurf.ID = counter;
        newTurf.img = img;
        counter++;
        IDtoTurf[newTurf.ID] = newTurf;
    }

    function payOwner(uint256 ID) internal{
        require(IDtoTurf[ID].amount == msg.value,"enter only the specified amount");
        (IDtoTurf[ID].turfOwner).transfer(msg.value);
    }

    function deleteTurf(uint256 ID) external onlyTurfOwner(ID) {
        delete IDtoTurf[ID];
    }

    function bookTurf(address user,uint256 ID,uint256 startTime,uint256 endTime) external payable {
        Nft memory newNft;
        newNft.img = IDtoTurf[ID].img;
        newNft.startTime = block.timestamp + startTime;
        newNft.endTime = newNft.startTime + endTime;
        newNft.nftID = counters;
        counters++;

        _safeMint(user,newNft.nftID);
        IDtoTurf[ID].turfOwner.transfer(msg.value);
        payOwner(ID);
    }
}
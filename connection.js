require("dotenv").config();
const { ethers } = require("ethers");
const contractAddresss = "0xdeef88ee36e885e2a75b0ec592b8bb9460e2152b";
const provider = new ethers.providers.JsonRpcProvider("https://rpc-amoy.polygon.technology/");
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const ABI = [{
        "inputs": [{
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "timings",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "location",
                "type": "string"
            },
            {
                "internalType": "address payable",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "img",
                "type": "string"
            }
        ],
        "name": "createTurf",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "ID",
            "type": "uint256"
        }],
        "name": "deleteTurf",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC721IncorrectOwner",
        "type": "error"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ERC721InsufficientApproval",
        "type": "error"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "approver",
            "type": "address"
        }],
        "name": "ERC721InvalidApprover",
        "type": "error"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "operator",
            "type": "address"
        }],
        "name": "ERC721InvalidOperator",
        "type": "error"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }],
        "name": "ERC721InvalidOwner",
        "type": "error"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "receiver",
            "type": "address"
        }],
        "name": "ERC721InvalidReceiver",
        "type": "error"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "sender",
            "type": "address"
        }],
        "name": "ERC721InvalidSender",
        "type": "error"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "ERC721NonexistentToken",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "ID",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            }
        ],
        "name": "selectTurf",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "getApproved",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "IDtoTurf",
        "outputs": [{
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "timings",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "location",
                "type": "string"
            },
            {
                "internalType": "address payable",
                "name": "turfOwner",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "ID",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "img",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "ownerOf",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
        }],
        "name": "supportsInterface",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "tokenURI",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }
];

const contract = new ethers.Contract(contractAddresss, ABI, wallet);

async function createTurf(Amount, timings, location, owner, name, img) {
    const gasPrice = await provider.getGasPrice();
    const tx = await contract.createTurf(Amount, timings, location, owner, name, img, { gasPrice: gasPrice });
    await tx.wait();
    console.log("turf created successfully!!");
}

async function payowner(ID, amount) {
    const gasPrice = await provider.getGasPrice();
    const tx = await contract.payOwner(ID, { value: ethers.utils.parseEther(amount.toString()) }, { gasPrice: gasPrice });
    await tx.wait();
    console.log("payment done!!");
}

async function deleteTurf(ID) {
    const gasPrice = provider.getGasPrice();
    const tx = await contract.deleteTurf(ID, { gasPrice: gasPrice }, {});
    await tx.wait();
    console.log("turf deleted!!");
}

async function bookTurf(user, ID, startTime, endTime, amount) {
    try {
        // Fetch the turf details to get the specified amount
        const turf = await contract.IDtoTurf(ID);
        const specifiedAmount = turf.amount;

        // Ensure the amount matches the specified amount
        if (amount.toString() !== specifiedAmount.toString()) {
            console.error("Error: The amount specified does not match the required amount for the turf.");
            return;
        }

        const gasPrice = await provider.getGasPrice();
        const gasLimit = 3000000;
        const tx = await contract.selectTurf(user, ID, startTime, endTime, {
            gasPrice: gasPrice,
            gasLimit: gasLimit,
            value: amount
        });
        const receipt = await tx.wait();
        console.log("Turf booked successfully!!");
    } catch (error) {
        console.error("Error booking turf:", error);
        if (error.receipt && error.receipt.status === 0) {
            // Extract the revert reason from the transaction receipt
            const revertReason = await contract.provider.call({
                to: contract.address,
                data: error.transaction.data
            }, error.receipt.blockNumber);
            console.error("Revert reason:", revertReason);
        }
    }
}

function weiToEther(wei) {
    return ethers.utils.formatEther(wei);
}

async function allTurfs(id) {
    const turf = await contract.IDtoTurf(id);
    console.log(`Turf ID: ${turf.ID.toNumber()}`);
    console.log(`Amount: ${weiToEther(turf.amount)} ETH`);
    console.log(`Timings: ${turf.timings}`);
    console.log(`Location: ${turf.location}`);
    console.log(`Turf Owner: ${turf.turfOwner}`);
    console.log(`Name: ${turf.name}`);
    console.log(`Image: ${turf.img}`);
}

//allTurfs(0);

//console.log(contract.interface.functions);
bookTurf("0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", 0, 1, 3, ethers.utils.parseEther("0.123"));
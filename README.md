# Foundry Dev Tool

## Background
[Foundry](https://github.com/foundry-rs/foundry) is an innovative smart contract development toolkit for EVM-compatible chains, offering substantial performance benefits over traditional frameworks like Hardhat.

[Cast](https://book.getfoundry.sh/cast/?highlight=cast#how-to-use-cast), a component of Foundry, is a powerful command-line tool that facilitates Ethereum RPC calls.

## Overview
This project introduces a graphical user interface (GUI) to execute Cast commands more efficiently and intuitively than manual CLI input. It aims to streamline the developer experience by reducing the complexity involved in executing Ethereum RPC calls.

## Features
- **UI-Based Interaction**: Execute RPC calls by providing parameters through a user-friendly interface and directly observe the results.
- **Minimal Inputs Required**: The only necessary parameters to initiate a call are the contract address and the function name with its return type.
- **Enhanced Customizability**: Users can input additional parameters such as argument values and types, contract ABI, or specific block numbers to obtain more tailored responses.

Upon submission, the application executes the Cast command one directory level above the current directory, captures the CLI response, and displays it on the frontend UI.
![UI Screenshot](/public/home.png)




## Getting started
1. Clone the project
```bash
git clone https://github.com/rilwan99/Foundry-ui.git
```

2. Install required packages
```bash
npm install
```

3. Start the development server
```bash
npm run dev
``` 

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
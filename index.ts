// CREATE THE CLIENTS
const publicClient = createPublicClient({
  transport: http("https://rpc.goerli.linea.build/"),
  chain: lineaTestnet
})
 
const chain = "linea-testnet" // find the list of chain names on the Pimlico verifying paymaster reference page
const apiKey = "e2d8634c-c611-46d0-b4b8-a26d66465998" // REPLACE THIS
 
const bundlerClient = createClient({
  transport: http(`https://api.pimlico.io/v1/${chain}/rpc?apikey=${apiKey}`),
  chain: lineaTestnet
}).extend(bundlerActions).extend(pimlicoBundlerActions)
 
const paymasterClient = createClient({
  // ⚠️ using v2 of the API ⚠️ 
  transport: http(`https://api.pimlico.io/v2/${chain}/rpc?apikey=${apiKey}`),
  chain: lineaTestnet
}).extend(pimlicoPaymasterActions)

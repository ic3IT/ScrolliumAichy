"use client";

import {
  useWallet,
  WalletReadyState,
  Wallet,
  isRedirectable,
  WalletName,
} from "@aptos-labs/wallet-adapter-react";
import { cn } from "@/utils/styling";
import { ConnectWallet, ThirdwebProvider } from "@thirdweb-dev/react";

const buttonStyles = "nes-btn is-primary";

export const WalletButtons = () => {
  const { wallets, connected, disconnect, isLoading } = useWallet();

  if (connected) {
    // TODO: make network dropdown change network in global state
    return (
      <div className="flex flex-row">
        <select
          id="Network"
          className="bg-gray-50 text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          style={{ marginRight: "15px" }}
        >
          <option value="Devnet">Devnet</option>
          <option selected value="Testnet">
            Testnet
          </option>
          <option value="Mainnet">Mainnet</option>
        </select>
        <div
          className={cn(buttonStyles, "hover:bg-blue-700 btn-small")}
          onClick={disconnect}
        >
          Disconnect
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={cn(buttonStyles, "opacity-50 cursor-not-allowed")}>
        Loading...
      </div>
    );
  }

  return <ConnectWallet/>;
};

  /**
   * If we are on a mobile browser, adapter checks whether a wallet has a `deeplinkProvider` property
   * a. If it does, on connect it should redirect the user to the app by using the wallet's deeplink url
   * b. If it does not, up to the dapp to choose on the UI, but can simply disable the button
   * c. If we are already in a in-app browser, we don't want to redirect anywhere, so connect should work as expected in the mobile app.
   *
   * !isWalletReady - ignore installed/sdk wallets that don't rely on window injection
   * isRedirectable() - are we on mobile AND not in an in-app browser
   * mobileSupport - does wallet have deeplinkProvider property? i.e does it support a mobile app
   */
 
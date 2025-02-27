import { useState } from "react"
import classnames from "classnames"

import { useOnMountHistory } from "../../context/hooks/useOnMount"

import { Devices } from "../../context/commTypes"
import Divider from "../../components/Divider"

// Assets & icons
import ledger from "../../assets/images/icons/ledger.svg"
import trezor from "../../assets/images/icons/trezor.svg"
import keystone from "../../assets/images/icons/keystone.svg"
import { ButtonWithLoading } from "../../components/button/ButtonWithLoading"
import { Classes } from "../../styles"

import HardwareWalletSetupLayout from "./SetupLayout"
import OpenExplorerIcon from "../../components/icons/OpenExplorerIcon"

const HardwareWalletVendorsPage = () => {
    const history = useOnMountHistory()
    const [selectedVendor, setSelectedVendor] = useState<Devices>()
    const next = () => {
        history.push({
            pathname:
                selectedVendor !== Devices.KEYSTONE
                    ? "/hardware-wallet/connect"
                    : "/hardware-wallet/keystone-connect",
            state: { vendor: selectedVendor },
        })
    }
    return (
        <HardwareWalletSetupLayout
            title="Connect Hardware Wallet"
            subtitle="Select a Hardware Wallet you'd like to use with BlockWallet."
        >
            <div className="flex flex-col">
                <div className="flex flex-row space-x-4 items-center justify-evenly p-8">
                    <button
                        type="button"
                        onClick={() => setSelectedVendor(Devices.LEDGER)}
                        className={classnames(
                            "bg-white rounded-md p-4 w-1/2 flex flex-col items-center justify-center space-y-3 cursor-pointer border hover:border-primary-blue-default",
                            selectedVendor === Devices.LEDGER
                                ? "border-primary-blue-default"
                                : "border-primary-100"
                        )}
                        style={{ height: "120px" }}
                    >
                        <img
                            src={ledger}
                            alt="Connect Ledger"
                            className="h-8"
                        />
                    </button>
                    <button
                        type="button"
                        onClick={() => setSelectedVendor(Devices.TREZOR)}
                        className={classnames(
                            "bg-white rounded-md justify-center p-4 w-1/2 flex flex-col items-center group space-y-3 cursor-pointer border  hover:border-primary-blue-default",
                            selectedVendor === Devices.TREZOR
                                ? "border-primary-blue-default"
                                : "border-primary-100"
                        )}
                        style={{ height: "120px" }}
                    >
                        <img
                            src={trezor}
                            alt="Connect Trezor"
                            className="h-8"
                        />
                    </button>
                    <button
                        type="button"
                        onClick={() => setSelectedVendor(Devices.KEYSTONE)}
                        className={classnames(
                            "bg-white rounded-md justify-center p-4 w-1/2 flex flex-col items-center group space-y-3 cursor-pointer border  hover:border-primary-300",
                            selectedVendor === Devices.KEYSTONE
                                ? "border-primary-300"
                                : "border-primary-100"
                        )}
                        style={{ height: "120px" }}
                    >
                        <img src={keystone} alt="Connect Keystone" />
                    </button>
                </div>
                <Divider />
                <div className="p-8 w-full flex space-x-5">
                    <ButtonWithLoading
                        label={"Continue"}
                        buttonClass={classnames(Classes.button, "h-14")}
                        onClick={next}
                        disabled={!selectedVendor}
                    />
                </div>
                <div className="w-full flex-row items-center block text-center">
                    <a
                        className="text-black hover:text-primary-300 cursor-pointer inline-block mb-4"
                        href="https://help.blockwallet.io/hc/en-us/articles/6670564432657-How-do-Hardware-Wallets-Work-"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="How do Hardware Wallets work?"
                    >
                        <OpenExplorerIcon className="inline-block" />
                        <span className="ml-2 font-semibold">
                            How do Hardware Wallets work?
                        </span>
                    </a>
                </div>
            </div>
        </HardwareWalletSetupLayout>
    )
}

export default HardwareWalletVendorsPage

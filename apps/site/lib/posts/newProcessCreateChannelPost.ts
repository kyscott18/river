import { SignMessageModalUIOptions } from '@privy-io/react-auth'
import { Hash, Hex } from 'viem'
import { relayPost } from '@/lib'
import { getTxnInclusion } from '@/lib'
import {
  getExpiration,
  remove0xPrefix,
  generateMessageHash,
  encodeCreateChannelMsgBody,
} from 'scrypt'


export async function newProcessCreateChannelPost({
  signer,
  name,
  description,
  rid,
  pathsToRevalidate,
  privySignMessage,
}: {
  signer: Hex
  name: string
  description: string
  rid: bigint
  pathsToRevalidate?: string[]
  privySignMessage: (
    message: string,
    uiOptions?: SignMessageModalUIOptions | undefined,
  ) => Promise<string>
}): Promise<boolean> {
  // Declare constants/params
  const msgTimestamp: bigint = getExpiration() // gives 120s buffer
  const msgType: number = 3
  const msgBody = await encodeCreateChannelMsgBody({
    name: name,
    description: description,
    admins: [rid],
    members: [],
  })
  if (!msgBody?.msgBody) return false
  // generate hash to include in post
  const messageHash = generateMessageHash({
    rid: rid,
    timestamp: msgTimestamp,
    msgType: msgType,
    msgBody: msgBody.msgBody,
  })
  const msgHashForSig = remove0xPrefix({ bytes32Hash: messageHash })
  const sig = (await privySignMessage(msgHashForSig)) as Hash

  const post = {
    signer: signer,
    message: {
      rid: rid,
      timestamp: msgTimestamp,
      msgType: msgType,
      msgBody: msgBody.msgBody,
    },
    hashType: 1,
    hash: messageHash,
    sigType: 1,
    sig: sig,
  }
  
  try {
    const relayResponse = await relayPost(post)

    if (relayResponse.success) {

      const transactionHash = relayResponse.hash
  
      const txnInclusion = await getTxnInclusion(transactionHash)

      if (txnInclusion) {
        return true 
        
      } else {
        console.error("Transaction was not included successfully.")
        return false 
      }
    } else {
      console.error("Relay Post was not successful.")
      return false 
    }
  } catch (error) {
    console.error("Error relaying post:", error)
    return false 
  } 
}
'use server'

import { type Hash } from 'viem'
import {
  addresses,
  channelSchema,
  encodeAccess101,
  encodeChannel301,
  nodeRegistryABI,
} from 'scrypt'
import { publicClient } from '@/config/publicClient'
import { walletClient } from '@/config/walletClient'

interface CreateChannelProps {
  userId: bigint
  adminIds: bigint[]
  memberIds: bigint[]
  channelUri: string
}

export async function createChannel({
  userId,
  adminIds,
  memberIds,
  channelUri,
}: CreateChannelProps) {
  const accessControlMessage = encodeAccess101({ adminIds, memberIds })

  const channelUriMessage = encodeChannel301({ channelUri })

  // TODO: Determine why writing with a simulated request fails

  // const { request } = await publicClient.simulateContract({
  //   address: addresses.nodeRegistry.opGoerli,
  //   abi: nodeRegistryABI,
  //   functionName: 'register',
  //   args: [
  //     userId,
  //     channelSchema,
  //     [
  //       accessControlMessage?.msgBody as Hash,
  //       channelUriMessage?.msgBody as Hash,
  //     ],
  //   ],
  // })

  const registerChannelHash = await walletClient.writeContract({
    address: addresses.nodeRegistry.opGoerli,
    abi: nodeRegistryABI,
    functionName: 'register',
    args: [
      userId,
      channelSchema,
      [
        accessControlMessage?.msgBody as Hash,
        channelUriMessage?.msgBody as Hash,
      ],
    ],
  })

  console.log('Register channel hash:', registerChannelHash)
}
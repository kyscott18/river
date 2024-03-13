import type { Hash, Hex } from 'viem'

export type Message = {
  rid: bigint
  timestamp: bigint
  msgType: number
  msgBody: Hash
}

export type Post = {
  signer: Hex
  message: Message
  hashType: number
  hash: Hash
  sigType: number
  sig: Hash
}

export enum ChannelDataTypes {
  NONE = 0,
  NAME_AND_DESC = 1,
}

export enum ChannelAccessTypes {
  NONE = 0,
  ROLES = 1,
}

export enum ItemDataTypes {
  NONE = 0,
  STRING_URI = 1,
}

export enum ItemAccessTypes {
  NONE = 0,
  ROLES = 1,
}

export enum MessageTypes {
  NONE = 0, // 0
  CREATE_ITEM = 1, // 1
  UPDATE_ITEM = 2, // 2
  CREATE_CHANNEL = 3, // 3
  UPDATE_CHANNEL = 4, // 4
  ADD_ITEM_TO_CHANNEL = 5, // 5
  REMOVE_ITEM_FROM_CHANNEL = 6, // 6
}

export enum ChannelRoleTypes {
  NONE = 0, // 0
  MEMBER = 1, // 1
  ADMIN = 2, // 2
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IdRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const idRegistryABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_initialOwner', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'CHANGE_RECOVERY_ADDRESS_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'NAME',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'REGISTER_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'TRANSFER_AND_CHANGE_RECOVERY_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'TRANSFER_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'recovery', internalType: 'address', type: 'address' }],
    name: 'changeRecoveryAddress',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'recovery', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'sig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'changeRecoveryAddressFor',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'rid', internalType: 'uint256', type: 'uint256' }],
    name: 'custodyOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'disableTrustedOnly',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'domainSeparatorV4',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'structHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'hashTypedDataV4',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'idCounter',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'idOf',
    outputs: [{ name: 'rid', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'toSig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'recover',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'recoveryDeadline', internalType: 'uint256', type: 'uint256' },
      { name: 'recoverySig', internalType: 'bytes', type: 'bytes' },
      { name: 'toDeadline', internalType: 'uint256', type: 'uint256' },
      { name: 'toSig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'recoverFor',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'rid', internalType: 'uint256', type: 'uint256' }],
    name: 'recoveryOf',
    outputs: [{ name: 'recovery', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'recovery', internalType: 'address', type: 'address' }],
    name: 'register',
    outputs: [{ name: 'rid', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'recovery', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'sig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'registerFor',
    outputs: [{ name: 'rid', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_trustedCaller', internalType: 'address', type: 'address' },
    ],
    name: 'setTrustedCaller',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'toSig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transfer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'recovery', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'sig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transferAndChangeRecovery',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'recovery', internalType: 'address', type: 'address' },
      { name: 'fromDeadline', internalType: 'uint256', type: 'uint256' },
      { name: 'fromSig', internalType: 'bytes', type: 'bytes' },
      { name: 'toDeadline', internalType: 'uint256', type: 'uint256' },
      { name: 'toSig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transferAndChangeRecoveryFor',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'fromDeadline', internalType: 'uint256', type: 'uint256' },
      { name: 'fromSig', internalType: 'bytes', type: 'bytes' },
      { name: 'toDeadline', internalType: 'uint256', type: 'uint256' },
      { name: 'toSig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transferFor',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'trustedCaller',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'trustedOnly',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'useNonce',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'custodyAddress', internalType: 'address', type: 'address' },
      { name: 'rid', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'verifyRidSignature',
    outputs: [{ name: 'isValid', internalType: 'bool', type: 'bool' }],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'recovery',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ChangeRecoveryAddress',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'DisableTrustedOnly' },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferStarted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Recover',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'recovery',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Register',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldCaller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newCaller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetTrustedCaller',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  { type: 'error', inputs: [], name: 'EnforcedPause' },
  { type: 'error', inputs: [], name: 'ExpectedPause' },
  { type: 'error', inputs: [], name: 'Has_Id' },
  { type: 'error', inputs: [], name: 'Has_No_Id' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'InvalidSignature' },
  { type: 'error', inputs: [], name: 'Invalid_Address' },
  { type: 'error', inputs: [], name: 'Only_Trusted' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'SignatureExpired' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  { type: 'error', inputs: [], name: 'Unauthorized' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Item
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const itemABI = [
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'exportItem',
    outputs: [
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'hasId', internalType: 'bool', type: 'bool' },
      { name: 'id', internalType: 'int256', type: 'int256' },
      { name: 'channelId', internalType: 'int256', type: 'int256' },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Message
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const messageABI = [
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'exportMessage',
    outputs: [
      { name: 'msgType', internalType: 'uint32', type: 'uint32' },
      { name: 'msgBody', internalType: 'bytes', type: 'bytes' },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Post
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const postABI = [
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'exportPost',
    outputs: [
      { name: 'userId', internalType: 'uint256', type: 'uint256' },
      { name: 'sigType', internalType: 'uint8', type: 'uint8' },
      { name: 'sig', internalType: 'bytes', type: 'bytes' },
      { name: 'version', internalType: 'uint16', type: 'uint16' },
      { name: 'expiration', internalType: 'uint64', type: 'uint64' },
      { name: 'messageArray', internalType: 'bytes[]', type: 'bytes[]' },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PostGateway2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const postGateway2ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: '',
        internalType: 'struct IPostGateway2.Post',
        type: 'tuple',
        components: [
          { name: 'signer', internalType: 'address', type: 'address' },
          {
            name: 'message',
            internalType: 'struct IPostGateway2.Message',
            type: 'tuple',
            components: [
              { name: 'rid', internalType: 'uint256', type: 'uint256' },
              { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
              {
                name: 'msgType',
                internalType: 'enum IPostGateway2.MessageTypes',
                type: 'uint8',
              },
              { name: 'contents', internalType: 'bytes', type: 'bytes' },
            ],
          },
          { name: 'hashType', internalType: 'uint16', type: 'uint16' },
          { name: 'hash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'sigType', internalType: 'uint16', type: 'uint16' },
          { name: 'sig', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'post',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'posts',
        internalType: 'struct IPostGateway2.Post[]',
        type: 'tuple[]',
        components: [
          { name: 'signer', internalType: 'address', type: 'address' },
          {
            name: 'message',
            internalType: 'struct IPostGateway2.Message',
            type: 'tuple',
            components: [
              { name: 'rid', internalType: 'uint256', type: 'uint256' },
              { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
              {
                name: 'msgType',
                internalType: 'enum IPostGateway2.MessageTypes',
                type: 'uint8',
              },
              { name: 'contents', internalType: 'bytes', type: 'bytes' },
            ],
          },
          { name: 'hashType', internalType: 'uint16', type: 'uint16' },
          { name: 'hash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'sigType', internalType: 'uint16', type: 'uint16' },
          { name: 'sig', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'postBatch',
    outputs: [],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'NewPost',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RiverValidatorV1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const riverValidatorV1ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_riverOperator', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'riverOperator',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'updateOperator',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'status', internalType: 'bool', type: 'bool' },
    ],
    name: 'validate',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'statuses', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'validateBatch',
    outputs: [],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OperatorUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'status', internalType: 'bool', type: 'bool', indexed: true },
    ],
    name: 'Validate',
  },
  { type: 'error', inputs: [], name: 'Array_Length_Mismatch' },
  { type: 'error', inputs: [], name: 'Only_Operator' },
] as const

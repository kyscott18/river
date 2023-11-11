// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import {Test, console2} from "forge-std/Test.sol";

import {NodeRegistry} from "imp/NodeRegistry.sol";

contract NodeRegistryTest is Test {       

    //////////////////////////////////////////////////
    // CONSTANTS
    //////////////////////////////////////////////////   

    address constant MOCK_USER = address(0x123);
    uint256 constant ADMIN_ID = 1;
    address constant ADMIN_ID_OWNER = address(0x47);
    bytes constant ZERO_BYTES = new bytes(0);
    bytes32 constant ZERO_BYTES32 = keccak256(new bytes(0));
    bytes32 constant PUB_SCHEMA = 0xF36F2F0432F99EA34A360F154CEA9D1FAD45C7319E27ADED55CC0D28D0924068;
    bytes32 constant CHANNEL_SCHEMA = 0x08B83A3AFF9950D7F88522AC4A172BD8405BE30B0D3B416D42FD73C30AC27C9F;
    bytes constant ipfsExample = abi.encode("ipfs/bafybeiczsscdsbs7ffqz55asqdf3smv6klcw3gofszvwlyarci47bgf354");

    //////////////////////////////////////////////////
    // PARAMETERS
    //////////////////////////////////////////////////   

    NodeRegistry nodeRegistry;

    //////////////////////////////////////////////////
    // SETUP
    //////////////////////////////////////////////////   

    // Set-up called before each test to clear 0 -> 1 gas costs for counter storage
    function setUp() public {
        nodeRegistry = new NodeRegistry();  
        bytes[] memory array = new bytes[](1);
        array[0] = ZERO_BYTES;
        nodeRegistry.register(ZERO_BYTES32, array);
    }    
    
    //////////////////////////////////////////////////
    // PUBLICATION TESTS
    //////////////////////////////////////////////////    

    /*
    *
     REGISTER
    *
    */

    function test_pub_register() public {
        // Prep input data
        bytes[] memory messages = new bytes[](2);
        uint256[] memory members = new uint256[](2);
        members[0] = 2;
        members[1] = 3;
        // MESSAGE:     101_Access_AdminWithMembers
        // FORMAT:      (userId, msgType, msgBody)
        messages[0] = abi.encode(1, 101 ,abi.encode(1, members));
        // MESSAGE:     201_Pub_SetUri
        // FOMRAT:      (userId, msgType, msgBody)
        messages[1] = abi.encode(1, 201, abi.encode("yourIpfsStringHere"));
        // Calculate post increment node count
        uint256 expectedCount = nodeRegistry.nodeCount() + 1;
        vm.startPrank(MOCK_USER);        
        // Checks if topics 1, 2, 3, non-indexed data and event emitter match expected emitter + event signature + event values
        vm.expectEmit(true, true, true, true, address(nodeRegistry));    
        // Emit event with expected value
        emit NodeRegistry.Register(MOCK_USER, PUB_SCHEMA, expectedCount, messages);        
        // Call `register()` on nodeRegistry
        nodeRegistry.register(PUB_SCHEMA, messages);
        // Check storage updated correctly
        assertEq(nodeRegistry.nodeCount(), expectedCount);
    }        

    function test_pub_batchRegister() public {
        uint256 batchQuantity = 5;
        uint256 expectedCount = nodeRegistry.nodeCount() + batchQuantity;
        vm.startPrank(MOCK_USER);
        nodeRegistry.registerBatch(
            generateBytes32ArrayData(batchQuantity),
            generateBatchData(batchQuantity)
        );
        assertEq(nodeRegistry.nodeCount(), expectedCount);
    }

    /*
    *
     UPDATE
    *
    */

    function test_pub_update() public {
        // Prep input data
        bytes[] memory messages = new bytes[](2);
        uint256[] memory members = new uint256[](2);
        members[0] = 2;
        members[1] = 3;
        // MESSAGE:     101_Access_AdminWithMembers
        // FORMAT:      (userId, msgType, msgBody)
        messages[0] = abi.encode(1, 101 ,abi.encode(1, members));
        // MESSAGE:     201_Pub_SetUri
        // FOMRAT:      (userId, msgType, msgBody)
        messages[1] = abi.encode(1, 201, abi.encode("yourIpfsStringHere"));
        // Calculate node count
        uint256 expectedCount = nodeRegistry.nodeCount();   
        vm.startPrank(MOCK_USER);        
        // Checks if topics 1, 2, 3, non-indexed data and event emitter match expected emitter + event signature + event values
        vm.expectEmit(true, true, false, true, address(nodeRegistry));    
        // Emit event with expected value
        emit NodeRegistry.Update(MOCK_USER, expectedCount, messages);        
        // Call `update()` on nodeRegistry
        nodeRegistry.update(1, messages);
        // Check storage updated correctly
        assertEq(nodeRegistry.nodeCount(), expectedCount);
    }        

    function test_pub_batchUpdate() public {
        uint256 batchQuantity = 5;
        uint256 expectedCount = nodeRegistry.nodeCount();
        vm.startPrank(MOCK_USER);
        nodeRegistry.updateBatch(
            generateUint256ArrayData(batchQuantity),
            generateBatchData(batchQuantity)
        );
        assertEq(nodeRegistry.nodeCount(), expectedCount);
    }    

    /*
    *
     UTILS
    *
    */

    function generateBatchData(uint256 quantity) public pure returns (bytes[][] memory batchData) {                   
        batchData = new bytes[][](quantity);
        uint256[] memory admins = new uint256[](1);
        admins[0] = 2;
        uint256[] memory members = new uint256[](2);
        members[1] = 3;
        uint256 userId = 1;
        uint256 msgType = 101;
        for (uint256 i; i < quantity; ++i) {            
            batchData[i] = new bytes[](2);            
            batchData[i][0] = abi.encode(userId, msgType, abi.encode(admins, members));
            batchData[i][1] = abi.encode(userId, msgType, abi.encode(ipfsExample));
        }
    }            

    //////////////////////////////////////////////////
    // CHANNEL TESTS
    //////////////////////////////////////////////////   

    /*
    *
     REGISTER
    *
    */

    /*
    *
     UPDATE
    *
    */

    //////////////////////////////////////////////////
    // HELPERS
    //////////////////////////////////////////////////  

    function generateBytes32ArrayData(uint256 quantity) public pure returns (bytes32[] memory schemas) {                   
        schemas = new bytes32[](quantity);
        for (uint256 i; i < quantity; ++i) {
            schemas[i] = PUB_SCHEMA;
        }
    }        

    function generateUint256ArrayData(uint256 quantity) public pure returns (uint256[] memory ids) {                   
        ids = new uint256[](quantity);
        for (uint256 i; i < quantity; ++i) {
            ids[i] = 1;
        }
    }         

    function generateEmptyData(uint256 quantity) public pure returns (bytes[] memory batchData) {                   
        batchData = new bytes[](quantity);
        for (uint256 i; i < quantity; ++i) {
            batchData[i] = new bytes(0);
        }
    }                       
}
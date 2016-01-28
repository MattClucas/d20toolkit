<?php
    // REMOVE BEFORE GOING TO PRODUCTION
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    // constants for response error codes
    const ERROR_NONE                = null;                     // when there is no error
    const ERROR_ROOM_ALREADY_EXISTS = "ROOM_ALREADY_EXISTS";    // when trying to create a room that already exists
    const ERROR_PASSWORD_INCORRECT  = "PASSWORD_INCORRECT";     // when entering the wrong password to join a room
    const ERROR_ROOM_DOES_NOT_EXIST = "ROOM_DOES_NOT_EXIST";    // when trying to join a room that does not exist
    const ERROR_BAD_REQUEST_DATA    = "BAD_REQUEST_DATA";       // when the request to this page is not how we expect it
    const ERROR_DATABASE_ISSUE      = "DATABASE_ISSUE";         // when a mysql error happens

    // constants for POST request parameters
    const REQUEST_TYPE          = "type";
    const REQUEST_ROOM_NAME     = "name";
    const REQUEST_ROOM_PASSWORD = "pass";
    const REQUEST_USER          = "user";
    const REQUEST_RANDOM        = "rand";
    const REQUEST_OPEN          = "open";

    // constants for JSON response parameters
    const RESPONSE_SUCCESS      = "isSuccessful";
    const RESPONSE_ERROR_CODE   = "errorCode";
    const RESPONSE_ROOM_MEMBERS = "roomMembers";
    const RESPONSE_ROOM_NAME    = "roomName";

    // constants for types of messages
    const TYPE_CREATE_ROOM  = "CREATE";
    const TYPE_JOIN_ROOM    = "JOIN";
    const TYPE_LEAVE_ROOM   = "LEAVE";
    const TYPE_PING_ROOM    = "PING";

    // this is so that the client side also knows the interface keywords
    // a stringified object of all the constants declared above
    $INTERFACE_CONSTANTS = json_encode(array(
        "ERROR_NONE"                => ERROR_NONE,
        "ERROR_ROOM_ALREADY_EXISTS" => ERROR_ROOM_ALREADY_EXISTS,
        "ERROR_PASSWORD_INCORRECT"  => ERROR_PASSWORD_INCORRECT,
        "ERROR_ROOM_DOES_NOT_EXIST" => ERROR_ROOM_DOES_NOT_EXIST,
        "ERROR_BAD_REQUEST_DATA"    => ERROR_BAD_REQUEST_DATA,
        "ERROR_BAD_REQUEST_DATA"    => ERROR_BAD_REQUEST_DATA,
        "ERROR_DATABASE_ISSUE"      => ERROR_DATABASE_ISSUE,
        "REQUEST_TYPE"              => REQUEST_TYPE,
        "REQUEST_ROOM_NAME"         => REQUEST_ROOM_NAME,
        "REQUEST_ROOM_PASSWORD"     => REQUEST_ROOM_PASSWORD,
        "REQUEST_USER"              => REQUEST_USER,
        "REQUEST_RANDOM"            => REQUEST_RANDOM,
        "REQUEST_OPEN"              => REQUEST_OPEN,
        "RESPONSE_SUCCESS"          => RESPONSE_SUCCESS,
        "RESPONSE_ERROR_CODE"       => RESPONSE_ERROR_CODE,
        "RESPONSE_ROOM_MEMBERS"     => RESPONSE_ROOM_MEMBERS,
        "RESPONSE_ROOM_NAME"        => RESPONSE_ROOM_NAME,
        "TYPE_CREATE_ROOM"          => TYPE_CREATE_ROOM,
        "TYPE_JOIN_ROOM"            => TYPE_JOIN_ROOM,
        "TYPE_LEAVE_ROOM"           => TYPE_LEAVE_ROOM,
        "TYPE_PING_ROOM"            => TYPE_PING_ROOM
    ));
?>

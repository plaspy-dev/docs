---
slug: /tramigo/t23/configuration
id: t23-configuration
sidebar_label: Configuration
title: Tramigo - T23 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Tramigo T23 configuration with Plaspy server settings and SMS commands
keywords:
  - Tramigo T23 configuration
  - Tramigo T23 setup
  - Tramigo T23 Plaspy
  - Tramigo GPS tracker configuration
  - T23 server configuration
  - T23 SMS setup
  - vehicle tracking configuration
  - fleet tracking setup
  - GPRS tracker setup
  - Plaspy tracker configuration
---

# Tramigo - T23 Configuration

This page describes the public configuration context for using the Tramigo T23 with the Plaspy platform. It explains the shared Plaspy server settings and shows the common manufacturer side commands and steps that are publicly available for preparing a T23 device to report to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the configuration tools vendors provide. Where available we include the Tramigo T23 SMS commands published in public documentation so you can apply them in the order shown.

## Configuration Overview

This configuration process prepares a Tramigo T23 to communicate reliably with Plaspy by setting the device GPRS/APN parameters and the Plaspy server endpoint. For the T23, public configuration often uses SMS commands to set the APN, reporting mode and the GPRS server connection.

- Set operator APN and credentials so the T23 can establish a GPRS data session
- Configure the device to report position updates and heartbeat intervals to Plaspy
- Point the device to the Plaspy server endpoint and port so data reaches the platform
- Validate device connectivity and check configuration using status commands
- Ensure persistent reporting so the tracker appears in Plaspy and is available for monitoring

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

All devices in Plaspy use the same port and Plaspy will detect the device protocol automatically when the device establishes a connection to the server.

## Typical Requirements Before Setup

- A powered T23 device with an active SIM card that has GPRS data enabled and SMS capability
- Knowledge of the mobile operator APN and optionally APN username and password
- Access to Tramigo configuration method such as SMS commands or the vendor configuration tool
- A Plaspy account and the necessary device identification details to add the tracker in the platform
- Basic tools to send SMS commands to the device from a phone or SMS gateway if using SMS configuration

## How This Tracker Connects to Plaspy

The Tramigo T23 sends position data and device events to the configured Plaspy server endpoint and port using GPRS. After setting the APN and server connection, the tracker establishes a data session and transmits updates according to the reporting rules configured on the device.

- The tracker is configured to report to the shared Plaspy server endpoint and port
- Data and event reporting use the device GPRS connection to reach Plaspy
- The device may use TCP or UDP transport depending on the selected setting during configuration
- Plaspy will automatically detect the tracker protocol when the connection is established
- Regular status and reporting messages allow Plaspy to display the device on the platform

## Common Configuration Workflow

1. Access the official Tramigo configuration method for the T23 such as the SMS command interface or vendor software.  
2. Set the operator APN and optional credentials so the device can initiate GPRS. Enter the carrier APN in the command form.  
3. Point the device to d.plaspy.com or 54.85.159.138 as the server address.  
4. Set the server port to 8888.  
5. Choose UDP or TCP transport on the device if required by the configuration method.  
6. Apply or save the configuration and restart the device if the device firmware requires a reboot to apply changes.  
7. Validate that the device reports to Plaspy by checking the device online status in your Plaspy account or by using the device Status command.

## Example Configuration Commands

The Tramigo T23 provides an SMS based configuration flow in public documentation. The following commands are presented in the order they are commonly applied. Preserve the placeholders when inserting your operator credentials.

- Set the operator APN and optional username and password
```text
GPRS,APN,{{apn}},{{apnu}},{{apnp}}
```
Explanation: Replace {{apn}} with your carrier APN. Use {{apnu}} and {{apnp}} if your operator requires APN username and password. If not required leave the placeholders empty or omit if the device accepts a shorter form.

- Turn on FIND reporting with a 1 minute reporting interval
```text
R,10,F,1,1,1,35
```
Explanation: This command configures reporting behavior. Keep the exact command as provided by Tramigo documentation.

- Set ACK Ping response off
```text
Set,GPRSPingResponse,0
```

- Set GPRS message ACK off
```text
Set,GPRSMsgResponse,0
```

- Set the GPRS server to the Plaspy IP address and port with transport selection
```text
GPRS,Connect,54.85.159.138,8888,tcp
```
Explanation: This example uses the Plaspy server IP and port and selects tcp as transport. You may substitute d.plaspy.com in place of the IP if preferred, and choose udp if the device and your installation require UDP.

- Verify settings
```text
Status
```
Explanation: The Status command checks current device parameters and is commonly used to validate that the APN and server settings were applied.

## Configuration Notes

- SMS based setup is a common public method for the T23. Use a phone or SMS gateway that can send the exact command strings.  
- Some firmware versions may accept server domain names like d.plaspy.com instead of the IP. Use whichever format is supported by your device firmware.  
- Choose TCP or UDP transport based on installer preference and network reliability. Plaspy supports both on the same port and performs automatic protocol detection.  
- Confirm APN, username, and password with your SIM provider before applying commands, since incorrect APN settings prevent GPRS connections.  
- If reporting does not appear in Plaspy after configuration, check device power, SIM data allowance, and GPRS registration before reapplying commands or rebooting the device.

## Why Use Plaspy with This Configuration

Using the Tramigo T23 with Plaspy gives you a straightforward route to vehicle visibility and operational monitoring. With the public SMS commands and shared Plaspy server settings, technicians can configure devices consistently so they report reliably to the platform for real time tracking and event handling.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer details verify current information at the Tramigo site http://www.tramigo.net/ since manufacturer configuration methods and firmware behavior can change over time.

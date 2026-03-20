---
slug: /eelink/k9/configuration
id: k9-configuration
sidebar_label: Configuration
title: EElink - K9 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for EElink K9 to connect to Plaspy using shared server settings and SMS based setup guidance
keywords:
  - EElink K9 configuration
  - EElink K9 setup
  - EElink K9 server configuration
  - K9 GPS tracker Plaspy
  - Plaspy tracker configuration
  - EElink GPS setup
  - K9 SMS commands
  - EElink APN settings
  - vehicle tracking configuration
  - GPS platform setup
---

# EElink - K9 Configuration

This page covers the public configuration context for using the EElink K9 GPS tracker with Plaspy. It explains the shared server settings Plaspy requires, shows the common SMS commands published for the K9, and describes the practical steps to prepare the device for use with Plaspy. Use this page as a starting point for integrating the K9 with Plaspy while confirming device specifics with the manufacturer.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The EElink K9 commonly supports SMS based configuration and GPRS reporting, so this guide focuses on using the public SMS commands and the Plaspy server endpoint to enable tracking and visibility in the platform.

## Configuration Overview

The goal of K9 configuration for Plaspy is to prepare the tracker to report location and status reliably to the Plaspy platform and to validate that the device is visible in the account. This typically involves setting network parameters, pointing the device to Plaspy server endpoints, and verifying reporting behavior.

- Configure the device APN so it can use GPRS data for reporting
- Set the Plaspy server endpoint and port so the tracker sends telemetry to Plaspy
- Choose transport protocol if required by the device and save the configuration
- Validate connectivity and reporting so the device appears in Plaspy
- Use SMS commands if firmware or installation limits access to local configuration tools

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport can be configured for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port 8888 for reporting

## Typical Requirements Before Setup

- A charged and powered EElink K9 with working battery installed
- An active SIM card with a data plan and the correct APN for the mobile operator
- Ability to send and receive SMS messages to the K9 for SMS based configuration
- Access to the official EElink configuration commands or software as provided by the vendor
- Confirmation of the device firmware version and any manufacturer specific command differences

## How This Tracker Connects to Plaspy

The EElink K9 is configured to report location and event data to Plaspy by pointing the device to the shared Plaspy server endpoint and port. The tracker uses the configured APN to establish a GPRS data session and then sends telemetry packets to the server. Plaspy receives those packets on the same port for all supported devices and selects the correct protocol parser automatically.

- The tracker sends periodic location updates to the Plaspy server endpoint
- Event reporting such as SOS, geo fence, or speed alarms are forwarded to Plaspy
- The device is set to use d.plaspy.com or the Plaspy IP address and port 8888
- Packets may be sent using UDP or TCP depending on device configuration
- Plaspy receives data on a single shared port and detects the protocol for parsing

## Common Configuration Workflow

1. Access the official EElink configuration method or software and review the published SMS command list or tool documentation.
2. Ensure the SIM is active and the correct APN is known for the operator.
3. Enter the Plaspy server endpoint as either d.plaspy.com or 54.85.159.138.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the tracker and send any required SMS commands.
6. Restart the device if the manufacturer instructions or firmware require a reboot to apply settings.
7. Validate that the device reports to Plaspy and appears in your Plaspy account or that the tracker returns status via SMS.

## Example Configuration Commands

The EElink K9 supports SMS based configuration with the following public commands. Send these commands as SMS messages to the tracker SIM number in the order required. The reset command is optional and typically used for initial setup or when recovering from unknown settings.

1. Optional initial factory reset
```text
FACTORY#
```
2. Set the time zone to UTC 0
```text
GMT,E,0#
```
3. Set the APN for your mobile operator
```text
APN,[apn],[apnu],[apnp]#
```
- [apn] is the operator APN name
- [apnu] is the APN username placeholder if your operator requires it
- [apnp] is the APN password placeholder if your operator requires it
- If your operator does not require username or password, send only APN,[apn]#

4. Set the GPRS server using the Plaspy domain and port
```text
SERVER,1,d.plaspy.com,8888#
```
5. Or set the GPRS server using the Plaspy IP and port
```text
SERVER,0,54.85.159.138,8888#
```
6. Set the position update interval for periodic reporting (example 60 seconds)
```text
TIMER,60#
```
7. Query current parameters to verify settings
```text
PARAM#
```

## Configuration Notes

- SMS based setup is commonly used for the K9; confirm SMS command syntax against your device firmware version.
- Use the SERVER command with either d.plaspy.com or 54.85.159.138 paired with port 8888 as shown above.
- Choose UDP or TCP according to installation needs; both transports are supported for port 8888 but selection is device specific.
- APN placeholders [apn], [apnu], and [apnp] must be replaced with your mobile operator credentials where required.
- Different firmware revisions or vendor customizations can change command names or parameter order; always verify against EElink documentation.

## Why Use Plaspy with This Configuration

Configuring the EElink K9 to report to Plaspy gives organizations and individual users a consistent endpoint for location and event data, centralized visibility across devices, and the ability to monitor operational status and alarms in one platform. Using the shared Plaspy server settings simplifies onboarding since Plaspy accepts device telemetry on a single port and automatically detects supported protocols.

To learn more about Plaspy and supported configurations visit https://www.plaspy.com. For the latest EElink K9 specific command references, firmware notes, and manufacturer guidance verify current information at https://www.eelink.com.cn/ as device behavior and setup methods can change over time.

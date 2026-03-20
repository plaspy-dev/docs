---
slug: /carscop/cctr_622/configuration
id: cctr_622-configuration
sidebar_label: Configuration
title: Carscop - CCTR-622 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance to connect Carscop CCTR-622 to Plaspy with server settings and example SMS commands
keywords:
  - Carscop CCTR-622 configuration
  - Carscop CCTR-622 setup
  - Carscop GPS tracker Plaspy
  - CCTR-622 server configuration
  - CCTR-622 setup for Plaspy
  - GPS tracker SMS configuration
  - vehicle tracking platform setup
  - tracker APN and SMS commands
  - Plaspy server configuration
  - personal tracker configuration
---

# Carscop - CCTR-622 Configuration

This page documents the public configuration context for using the Carscop CCTR-622 tracker with Plaspy. It collects practical, platform-focused setup guidance and the published SMS commands used by this model so you can point the device at the Plaspy backend and validate connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tooling; where applicable this page includes the CCTR-622 SMS command examples that are publicly available and notes about applying them safely.

## Configuration Overview

This configuration process prepares the Carscop CCTR-622 to communicate with the Plaspy fleet platform by setting network parameters, server endpoint, and keeping the device online for reporting. The examples below are taken from the public CCTR-622 command set and focus on enabling GPRS reporting to the Plaspy endpoint.

- Configure APN and optional APN credentials so the tracker has mobile data access for GPRS reporting.
- Set the GPRS server to the Plaspy endpoint so the device sends location data to Plaspy.
- Choose UDP or TCP transport on the device if required and use the common Plaspy port.
- Enable persistent online reporting so the tracker maintains a session for timely updates.
- Optionally restore factory settings or set time zone as part of initial provisioning.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the tracker:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and automatically detects the correct protocol for each tracker.

## Typical Requirements Before Setup

- A charged and functional CCTR-622 device with access to SMS commands or the manufacturer configuration tool.
- A valid SIM card with data enabled and the correct APN for the mobile operator.
- Knowledge of the APN name and optional APN username and password for your operator.
- Access to the official Carscop configuration documentation or vendor support for firmware specific instructions.
- Basic ability to send SMS commands from a mobile phone to the tracker or access to the manufacturer software that issues the same commands.

## How This Tracker Connects to Plaspy

The CCTR-622 can be configured to report its location to Plaspy using mobile data GPRS reporting to the shared Plaspy endpoint. Once configured the device will send location and status updates to the server and be visible in Plaspy for monitoring and event handling.

- The tracker uses the configured APN to attach to the mobile operator and open GPRS.
- It reports to the Plaspy server endpoint either by domain or IP address.
- The tracker sends data to Plaspy on port 8888 using either UDP or TCP depending on your selection.
- Plaspy receives the incoming connection and automatically detects the device protocol for correct parsing.
- After successful setup the device will appear in Plaspy and begin sending periodic updates.

## Common Configuration Workflow

1. Access the official Carscop configuration method or vendor software, or prepare to send SMS commands from a phone according to the CCTR-622 public guidance.
2. Enter the Plaspy server information using either the domain d.plaspy.com or the IP 54.85.159.138.
3. Set the server port to 8888 as Plaspy uses the same port for all devices.
4. If the device requires a transport selection choose UDP or TCP as appropriate.
5. Configure APN and optional APN credentials so the tracker can use GPRS.
6. Apply or save the configuration and restart the tracker if the device recommends a reboot.
7. Validate that the device reports to Plaspy and appears in the platform, confirming communication and correct protocol detection.

## Example Configuration Commands

The Carscop CCTR-622 supports SMS based configuration. The following commands are the publicly provided SMS commands and preserve placeholders and the default password shown in the manufacturer examples. Send these commands by SMS to the device number. The sample default device password used in these commands is 123456.

- Optional initial factory reset (use only when needed)
```text
RESET*123456
```

- Set the time zone to UTC 0
```text
TIMEZONE*123456*+00
```

- Set the operator APN
```text
APN*123456*[apn]
```
Explanation: replace [apn] with your mobile operator APN name.

- Set the APN username and password (only if your operator requires them)
```text
USERNAME*123456*[apnu]*[apnp]
```
Explanation: replace [apnu] with the APN username and [apnp] with the APN password. Include this command only if required by your operator.

- Set the GPRS server to Plaspy using the server IP and port
```text
IP*123456*54.85.159.138,8888
```
This command points the tracker directly to the Plaspy server IP and port 8888. You can use d.plaspy.com instead of the IP if the device supports domain names in the IP command.

- Keep the tracker online for continuous reporting
```text
KEEPONLINE*123456
```

Note: The RESET command is typically used as an initial step or when a full factory restore is required. Confirm before using it in production devices.

## Configuration Notes

- The exact SMS syntax and behavior can vary by firmware version; confirm your device firmware and test commands on one unit first.
- If the device supports domain names in server settings you may use d.plaspy.com instead of the IP 54.85.159.138.
- Choose UDP or TCP according to installer preference and device support; Plaspy will accept either and auto detect the protocol.
- APN username and password fields are optional and only needed for networks that require authentication.
- SMS based setup is shown here because it is the publicly published method for this model; if you have manufacturer tools use them for bulk or remote provisioning.

## Why Use Plaspy with This Configuration

Connecting the Carscop CCTR-622 to Plaspy centralizes tracking data into a single platform, making it easier to monitor location, receive alerts, and integrate device data with operational workflows. For personal and small fleet use the combination of simple SMS configuration and standardized Plaspy server settings helps reduce setup complexity and speeds deployment.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration methods, firmware behavior, and the latest manufacturer details at the Carscop site http://www.carscop.com/. Manufacturer specifications and setup methods can change over time so always confirm current instructions with Carscop before large scale deployments.

---
slug: /yulongda/tk103/configuration
id: tk103-configuration
sidebar_label: Configuration
title: YulongDa - TK103 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for YulongDa TK103 when used with Plaspy including server settings and example SMS commands
keywords:
  - YulongDa TK103 configuration
  - YulongDa TK103 setup
  - TK103 Plaspy integration
  - TK103 server configuration
  - GPS tracker configuration Plaspy
  - vehicle tracking TK103
  - TK103 SMS setup
  - Plaspy tracker settings
  - GPS platform setup
  - tracker reporting configuration
---

# YulongDa - TK103 Configuration

This page explains the public configuration context for using the YulongDa TK103 GPS tracker with Plaspy. It collects the essential, publicly available settings and example commands you can use to point a TK103 to Plaspy so the device can report location and basic events. Where manufacturer commands are publicly documented, those are included as practical examples.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this guide to apply the common Plaspy endpoint settings and to understand the typical workflow for configuring a TK103 for use on the Plaspy platform.

## Configuration Overview

This configuration readies the TK103 to communicate with Plaspy by setting the network APN, the Plaspy server endpoint, and sensible reporting intervals so the device appears and reports reliably in the platform.

- Configure the device APN to enable cellular data or SMS based setup as required by the tracker.
- Point the tracker to the Plaspy server endpoint either by domain or IP and set the platform port.
- Choose a transport mode if the tracker requires selecting between UDP and TCP.
- Set movement and stopped reporting intervals so the tracker sends updates at the desired frequency.
- Validate connectivity so the device can be discovered and visualized inside Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so manual protocol mapping is typically not required

Note that all devices in Plaspy use the same port. Use 8888 when configuring the TK103 for the platform.

## Typical Requirements Before Setup

- A powered and accessible TK103 with sufficient battery or vehicle power connected
- A valid SIM card with data or SMS capability and a correct APN for the mobile operator
- Knowledge of the device SMS password or access to the manufacturer configuration tool
- Access to the publicly documented SMS commands or the vendor configuration software
- Ability to receive device responses and to confirm device reporting in Plaspy

## How This Tracker Connects to Plaspy

When configured for Plaspy, the TK103 sends data to the shared Plaspy endpoint and port so the platform can ingest position and event messages. Plaspy will automatically detect the tracker protocol and process incoming messages.

- The tracker is set to report to d.plaspy.com or to the IP 54.85.159.138 on port 8888
- Depending on firmware, the tracker will use UDP or TCP transport on port 8888 as configured
- Position updates and device events are forwarded to Plaspy where they become visible in the platform
- Plaspy automatically detects the protocol used by the TK103 so no separate protocol selection is required inside Plaspy
- Proper APN and cellular connectivity are required for the tracker to establish a GPRS connection to the Plaspy server

## Common Configuration Workflow

1. Access the official YulongDa TK103 configuration method such as the manufacturer SMS commands or vendor software.
2. Ensure the device APN is set for the installed SIM so GPRS or SMS commands work correctly.
3. Enter the Plaspy endpoint using either d.plaspy.com or 54.85.159.138.
4. Set port 8888 as the device server port and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the tracker according to the manufacturer procedure.
6. Restart the device if required by the device firmware to activate the new settings.
7. Validate that the TK103 successfully reports to Plaspy and appears in the platform.

## Example Configuration Commands

The following example SMS commands are taken from public device configuration guidance for the TK103. These commands assume the device SMS password is 000000 which is the common initial factory password for many TK103 units. Replace placeholders with your operator APN and optional APN username and password if required.

- Set the operator APN
  - APN only form
  ```
  *APN#000000#[apn]#
  ```
  - APN with username and password form
  ```
  *APN#000000#[apn]#[apnu]#[apnp]#
  ```
  Explanation of placeholders
  - [apn] is the mobile operator APN required for GPRS data
  - [apnu] is the optional APN username if your operator requires it
  - [apnp] is the optional APN password if your operator requires it

- Set the GPRS server to Plaspy by IP and port
```
*IP#000000#54.85.159.138#8888#
```
  You can use the domain d.plaspy.com instead of the IP if the device supports domain names.

- Set movement reporting interval to 60 seconds
```
XT60
```

- Set stopped reporting interval to 60 seconds
```
NXT60
```

Send these SMS commands from an authorized phone number to the TK103 according to manufacturer instruction. The order above is recommended: configure APN first, then server settings, then reporting intervals. If your device requires a different password than 000000 replace it in each command.

## Configuration Notes

- Some TK103 firmware versions may use slightly different SMS syntax or require a different initial password. Verify the command format for your device firmware.
- Configuration can be done by SMS or via manufacturer configuration tools where available. Use the method recommended by the vendor.
- Choose UDP or TCP based on installer preference and compatibility. Plaspy accepts both transports on port 8888.
- Use d.plaspy.com or 54.85.159.138 with port 8888. All Plaspy devices use the same port and the platform will detect the tracker protocol automatically.
- After applying settings, confirm the device is reporting by checking the Plaspy platform for incoming position messages.

## Why Use Plaspy with This Configuration

Using the YulongDa TK103 with Plaspy gives a straightforward way to centralize vehicle visibility and event reporting. By pointing the tracker to the shared Plaspy endpoint and setting sensible reporting intervals, organizations can monitor vehicle movements, receive alerts, and maintain operational oversight across a mixed fleet of devices.

To learn more about Plaspy visit https://www.plaspy.com. Please verify the latest device specific configuration methods and firmware behavior on the manufacturer site at http://www.yulongdatechnology.com because manufacturer specifications and setup steps can change over time.

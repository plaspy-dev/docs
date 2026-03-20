---
slug: /eelink/tk319_h/configuration
id: tk319_h-configuration
sidebar_label: Configuration
title: EElink - TK319‑H Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the EElink TK319 H to report to Plaspy using SMS or GPRS server settings
keywords:
  - EElink TK319-H configuration
  - EElink TK319-H setup
  - TK319 H Plaspy configuration
  - Plaspy device setup
  - MoveLink EELINK configuration
  - EElink GPS tracker setup
  - vehicle tracker configuration
  - fleet tracking configuration
  - TK319 H server configuration
  - GPS tracker Plaspy integration
---

# EElink - TK319‑H Configuration

This page documents the public configuration context for using the EElink TK319‑H tracker with the Plaspy platform. It focuses on the practical server and setup information that you can apply or verify when preparing a TK319‑H device to report location and telemetry to Plaspy. Where manufacturer commands are publicly available they are included as examples and preserved in their original order.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary with firmware version, hardware revision, installation type, and vendor configuration tools. The TK319‑H supports SMS based configuration and GPRS server settings shown below, but always verify device specifics against manufacturer documentation and your device firmware.

## Configuration Overview

The goal of this configuration flow is to prepare the TK319‑H to communicate reliably with Plaspy and to validate that the device appears in the platform. The public commands included below show a common SMS based setup path used by installers and support teams.

- Configure the device APN so it can use mobile data for GPRS connections to Plaspy.
- Point the device to the Plaspy server using the shared server endpoint and port.
- Set an appropriate reporting interval so Plaspy receives updates at the desired cadence.
- Optionally restore factory defaults or verify parameters to ensure a clean configuration state.
- Validate connectivity and confirm the device appears and reports correctly in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure UDP or TCP on port 8888 if the device requires a transport selection
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged and correctly installed TK319‑H with access to its SMS command interface or manufacturer configuration tool
- An active SIM card provisioned for mobile data and SMS on the device where required
- Correct APN information from the mobile operator to enable GPRS data connectivity
- Access to the device installer or administrator to send SMS commands or use the vendor configuration tool
- Basic knowledge of the device firmware version and access to EElink official documentation for model specific instructions
- A way to monitor the device after configuration to confirm it reports to Plaspy

## How This Tracker Connects to Plaspy

When configured for Plaspy, the TK319‑H reports its position and telemetry to the shared Plaspy server endpoint and port. Plaspy ingests position updates, alarms, and status messages and uses automatic protocol detection to parse the device messages.

- The device sends location and telemetry to d.plaspy.com or directly to 54.85.159.138 on port 8888
- Plaspy accepts connections over UDP or TCP and will receive reports on the shared port 8888
- Alarms and status messages such as ignition or motion events are forwarded to Plaspy for visibility and alerts
- Plaspy displays live positions and stores historical trips for fleet monitoring and reporting

## Common Configuration Workflow

1. Access the official EElink configuration method for your device type, for example SMS commands or the EElink management tool as documented by the manufacturer
2. Configure the operator APN using the APN command and any optional APN username or password placeholders if required by your carrier
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 and set the port to 8888
4. Choose UDP or TCP if the tracker requires a transport selection during server setup
5. Apply or save the configuration on the tracker and wait for confirmation messages where applicable
6. Restart the device if required by the manufacturer or after changing server settings
7. Validate that the TK319‑H is reporting to Plaspy by checking device activity in the platform and confirming position updates

## Example Configuration Commands

To set the tracker send the following commands by SMS messages in the order listed. These are public example commands extracted from the device configuration guidance. Label and timing for SMS commands may vary by SIM and region.

- Optional factory reset or initial setup
```
FACTORY#
```

- Set the time zone to UTC 0
```
GMT,E,0#
```

- Set the operator APN. Replace the placeholders as needed
```
APN,[apn]# 
```
If your operator requires an APN username and password include them as shown
```
APN,[apn],[apnu],[apnp]#
```
Note: [apn] is the operator access point name. [apnu] and [apnp] are optional APN username and password fields.

- Set the GPRS server to use the Plaspy domain and port
```
SERVER,1,d.plaspy.com,8888#
```
or set the server using Plaspy IP and port
```
SERVER,0,54.85.159.138,8888#
```

- Set the update interval to report every 60 seconds
```
TIMER,60#
```

- To check current parameter settings
```
PARAM#
```

## Configuration Notes

- SMS based configuration is a common and supported method for the TK319‑H but manufacturer tools or device firmware may provide alternate methods; check EElink documentation for options
- Firmware revisions and hardware variants can change exact command formats or available parameters; verify the command syntax against your device firmware
- TCP and UDP are both supported transports; choose the transport that matches your network and installer preference and configure the device accordingly on port 8888
- Plaspy uses the same port for all supported devices and automatically detects the protocol, so use 8888 as the target port for Plaspy integrations
- Use the PARAM# verification command after configuration to confirm the device parameters and server settings

## Why Use Plaspy with This Configuration

Using the TK319‑H with Plaspy gives organizations consistent visibility into vehicle location, telemetry, and alarm events. The TK319‑H sends position updates and status changes to the shared Plaspy server endpoint so fleet managers can monitor activity, receive event notifications, and act quickly when incidents occur.

To learn more about Plaspy and how device integrations are managed visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and manufacturer guidance verify information on the official EElink site https://www.eelink.com.cn/ as methods and behavior can change with firmware and product revisions.

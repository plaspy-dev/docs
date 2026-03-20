---
slug: /queclink/gl320mg/configuration
id: gl320mg-configuration
sidebar_label: Configuration
title: QuecLink - GL320MG Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for QuecLink GL320MG tracking with Plaspy using shared server settings and SMS commands
keywords:
  - QuecLink GL320MG configuration
  - QuecLink GL320MG setup
  - GL320MG Plaspy configuration
  - QuecLink tracker setup
  - asset tracker configuration
  - GPS tracker server settings
  - vehicle tracking configuration
  - LTE asset tracker setup
  - QuecLink GL300 series configuration
  - Plaspy tracker configuration
---

# QuecLink - GL320MG Configuration

This page documents the public configuration context for using the QuecLink GL320MG with the Plaspy platform. It focuses on the practical server settings and the publicly available setup commands often used to point GL320MG devices at Plaspy so the tracker can report location and events to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware revision, hardware revision, installation type, and vendor configuration tools. Where available, this page includes the QuecLink SMS command examples that are commonly used for initial device setup; always verify commands against your device firmware and official QuecLink documentation.

## Configuration Overview

The goal of configuring a GL320MG for Plaspy is to prepare the tracker so it reliably connects to the Plaspy server and appears in the platform for tracking and event monitoring. The public configuration workflow typically sets the network APN, points the device at Plaspy's server endpoint and port, and adjusts reporting intervals or alarm inputs as needed.

- Configure the device to use the correct mobile data APN and credentials so it can reach Plaspy.
- Set the GPRS/GSM server parameters to point at Plaspy so telemetry is delivered to the platform.
- Adjust reporting intervals and input/alert configuration to match your monitoring needs.
- Validate connectivity by confirming the device reports to Plaspy after applying settings.
- Use the example SMS commands below as a starting point and adapt placeholders like APN to your SIM provider.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support UDP or TCP (Plaspy accepts either on the configured port)  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A working cellular SIM that has mobile data enabled and the correct APN for your network operator.  
- Access to the device and the method required to send configuration commands (SMS in the examples below or the manufacturer's configuration tool).  
- The device must have sufficient battery or external power during configuration and reboot operations.  
- Knowledge of the device password if it is required to accept configuration commands (the examples below use the default password provided in public configuration examples).  
- Confirmation of the device firmware revision and compatibility with the example commands before applying changes.

## How This Tracker Connects to Plaspy

QuecLink GL320MG devices report location and device events to the Plaspy server endpoint and port so the platform can display live position and status. Once the device is configured with Plaspy server settings, it will establish a GPRS connection and transfer telemetry to the shared Plaspy endpoint.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com on port 8888.  
- Transport can be selected as UDP or TCP depending on device firmware and installer preference.  
- Plaspy automatically detects the tracker protocol so no manual protocol selection is required in the platform.  
- The device sends periodic position updates and configured event notifications to Plaspy for visibility and monitoring.  
- Plaspy’s use of a single port across devices simplifies device provisioning and server configuration.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for your device and firmware (SMS commands, QuecLink tools, or vendor provisioning software).  
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server configuration.  
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).  
4. Choose UDP or TCP on the device if a transport selection is required.  
5. Configure the device APN and credentials required by your SIM provider.  
6. Apply or save the configuration and restart the device if required by the manufacturer.  
7. Validate that the device reports to Plaspy by checking the platform for device activity and live updates.

## Example Configuration Commands

The GL320MG can be configured using SMS commands. The following public commands are provided as common examples. These commands use the device password queclink as shown in public examples. Replace placeholders such as {{apn}}, {{apnu}}, and {{apnp}} with values from your mobile operator.

1. Optional initial step: Restore factory settings (run only if you need a clean factory state)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC+0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN (replace placeholders with your operator values)
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} = your operator APN name  
- {{apnu}} = APN username if required by the operator (leave blank if not required)  
- {{apnp}} = APN password if required by the operator (leave blank if not required)

4. Set the GPRS server to Plaspy using domain and IP with port 8888 (Plaspy accepts UDP or TCP on this port)
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- This command includes both the domain d.plaspy.com and the IP 54.85.159.138 and configures port 8888.

5. Set the position update interval to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Note: These commands are public examples used for GL320MG provisioning in many installations. Verify syntax and parameters against your device firmware and current QuecLink documentation before use.

## Configuration Notes

- SMS-based configuration is shown above because these commands are publicly available examples; some installations use QuecLink PC tools or vendor provisioning systems instead.  
- Different firmware versions or GL300 series revisions can change command syntax or supported parameters. Confirm commands with the firmware release notes.  
- Choose UDP or TCP according to installer preference and network behavior; Plaspy will accept either on port 8888 and automatically detect the protocol.  
- Use the device password present on your tracker or provided by your vendor; public examples use the default password queclink.  
- Always test the device after applying settings to confirm it reports to d.plaspy.com or 54.85.159.138 on port 8888.

## Why Use Plaspy with This Configuration

Configuring the QuecLink GL320MG to report to Plaspy gives organizations real-time visibility into assets and devices using a consistent server endpoint and port. The GL320MG’s long battery life and global LTE connectivity make it well suited for asset and vehicle monitoring, and pointing devices at Plaspy centralizes telemetry for monitoring, notifications, and operational oversight.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device-specific configuration details, firmware behavior, and manufacturer instructions verify information on the official QuecLink website https://www.queclink.com/.

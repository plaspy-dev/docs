---
slug: /coban/tk102/configuration
id: tk102-configuration
sidebar_label: Configuration
title: Coban - TK102 Configuration
sidebar_class_name: menu_item_tracker
description: Coban TK102 configuration guide for Plaspy server settings and SMS commands to connect the tracker to Plaspy
keywords:
  - Coban TK102 configuration
  - Coban TK102 server configuration
  - TK102 setup Plaspy
  - Coban GPS tracker configuration
  - TK102 GPRS setup
  - TK102 SMS configuration
  - GPS tracker server setup
  - vehicle tracking platform setup
  - fleet tracking TK102
  - tracker TCP UDP configuration
---

# Coban - TK102 Configuration

This page documents the public configuration context for using the Coban TK102 tracker with Plaspy. It focuses on the practical server settings and SMS based commands commonly used to prepare a TK102 for reporting to Plaspy. The content draws on public TK102 configuration commands and shows how to point the device at the Plaspy server so the tracker becomes visible in the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Where available, this page includes sample SMS commands that are publicly used for TK102 devices; always confirm any critical changes against the manufacturer documentation.

## Configuration Overview

The goal of configuring a TK102 for Plaspy is to prepare the device to send GPRS location and status messages to the Plaspy endpoint, validate that the tracker can connect over the mobile network, and ensure the device appears in the Plaspy platform for monitoring and reporting.

- Point the TK102 to the Plaspy server domain or IP so data is routed to Plaspy
- Configure APN and any required APN credentials so the device can use GPRS
- Select the transport mode (UDP or TCP) and set the shared Plaspy port
- Verify the device is reporting by using the TK102 verification command or observing the device in Plaspy
- Optionally adjust reporting interval and protocol options for power or data use optimization

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These are the public Plaspy endpoint values you will use when configuring the TK102. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

## Typical Requirements Before Setup

- A charged and powered Coban TK102 device installed or accessible for setup
- A mobile SIM with GPRS data enabled and the operator APN information
- Knowledge of the TK102 default password used by SMS commands (public examples use 123456)
- Ability to send and receive SMS to and from the device for SMS based configuration
- Access to the official Coban configuration instructions or manual for your specific firmware or model revision
- A test plan to validate connectivity after configuration, such as checking device status in Plaspy

## How This Tracker Connects to Plaspy

The TK102 is configured to send location and status information to the shared Plaspy server endpoint and port using the device GPRS connection. Once directed to the correct endpoint and transport, Plaspy receives the tracker data and makes it available on the platform for monitoring and alerts.

- The tracker uses the APN credentials to establish a GPRS data session
- Device is configured to send data to d.plaspy.com or 54.85.159.138 on port 8888
- Transport is set to UDP or TCP depending on the TK102 command used and your preference
- Plaspy receives the incoming connection on the shared port and auto detects the protocol
- Once data is received, the device appears in Plaspy for live tracking and event reporting

## Common Configuration Workflow

1. Access the official Coban configuration method for your unit, typically the SMS command interface or manufacturer tool for your firmware.
2. Enter the Plaspy server address by using d.plaspy.com or the IP 54.85.159.138 as instructed by your device configuration method.
3. Set the port to 8888 in the device settings.
4. Choose UDP or TCP if the tracker requires a transport selection and enable GPRS mode.
5. Configure APN and any APN username and password required by your SIM operator.
6. Apply or save the configuration and restart the device if the device or instructions require a reboot.
7. Validate the device reports to Plaspy by using the TK102 check command or by verifying the device is visible in Plaspy.

## Example Configuration Commands

The TK102 commonly supports SMS based configuration. Sample public commands are shown below in the order they are typically applied. The tracker default password used in these examples is 123456. Replace placeholders and values as required for your environment.

- Optional initial factory reset (use only when required)
```
begin123456
```

- Set the time zone to UTC 0
```
time zone123456 0
```

- Set the operator APN
```
apn123456 [apn]
```
Note: Replace [apn] with your mobile operator APN string.

- Set the APN username and password
```
up123456 [apnu] [apnp]
```
Note: Replace [apnu] and [apnp] with the APN username and password if required. Leave blank or omit if not needed by the operator.

- Set the GPRS server to the Plaspy IP and port
```
adminip123456 54.85.159.138 8888
```
You can also use the Plaspy domain where supported by the device instead of the numeric IP: d.plaspy.com (device support for domain names varies by firmware).

- Set the position update interval example
```
fix060s060s***n123456
```
This command is a public example for configuring reporting intervals; keep the original format when applying.

- Switch to GPRS mode and select transport
```
gprs123456,1,1
```
This example may set specific GPRS mode parameters for UDP or TCP depending on firmware. Alternatively some devices accept:
```
gprs123456
```

- Check current device settings
```
check123456
```

- Enable extended protocol or sensor reporting (example for digital sensor or fuel reporting)
```
protocol123456 18
```

Preserve the default password 123456 in these example commands unless you have previously changed the device password. If you change the device password, replace 123456 with the current password in each command.

## Configuration Notes

- SMS based setup is common for the TK102; confirm your device accepts domain names or requires numeric server IPs for the adminip command.
- Firmware versions and hardware revisions can change command formats and available parameters. Verify commands against the manual for your unit.
- When available, use the Plaspy domain d.plaspy.com or the numeric IP 54.85.159.138 with port 8888; Plaspy supports UDP and TCP transports and will detect the tracker protocol automatically.
- If the device supports both SMS and a USB or software configuration utility, choose the method recommended by your installer or firmware notes.
- Consider changing the tracker default password after initial configuration to secure the device and record any changes for future maintenance.

## Why Use Plaspy with This Configuration

Configuring a Coban TK102 to report to Plaspy provides a straightforward path to real time visibility and operational monitoring for vehicles and assets. Using the shared Plaspy server endpoint and port simplifies setup across multiple devices and lets Plaspy handle protocol detection so trackers are integrated quickly into monitoring workflows.

To learn more about Plaspy and supported device integration, visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and official documentation from the manufacturer, verify details at https://www.coban.net/.

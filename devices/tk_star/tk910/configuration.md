---
slug: /tk_star/tk910/configuration
id: tk910-configuration
sidebar_label: Configuration
title: TK-Star - TK910 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for TK Star TK910 with Plaspy including required server settings SMS commands and configuration workflow
keywords:
  - TK Star TK910 configuration
  - TK910 Plaspy setup
  - TK Star GPS tracker configuration
  - TK910 server configuration
  - TK910 tracking software setup
  - TK910 GPS platform setup
  - Plaspy tracker configuration
  - vehicle tracking setup TK910
  - GPS tracker SMS commands
  - fleet tracking TK910
---

# TK-Star - TK910 Configuration

This page covers the public configuration context required to connect a TK-Star TK910 tracker to the Plaspy platform. It summarizes the Plaspy server settings you must apply, lists common prerequisites, and shows the publicly documented SMS commands used by many TK910 units to prepare the device for GPRS reporting to Plaspy.

Plaspy uses shared server settings across supported devices and it automatically detects the tracker protocol when the device sends data to the Plaspy endpoint. Manufacturer side setup steps may vary by firmware, hardware revision, installation type, or vendor tools, so treat the commands and workflow here as practical public guidance rather than exhaustive manufacturer instructions.

## Configuration Overview

This configuration process prepares the TK910 to communicate with Plaspy over GPRS so location, alarms, and historical tracks are visible in the Plaspy platform. The steps shown are based on publicly available SMS command sequences for the TK910 and the shared Plaspy server settings.

- Configure the device to report to Plaspy server d.plaspy.com or the equivalent Plaspy server IP.
- Ensure the tracker has working GPRS connectivity and the operator APN is set.
- Set the tracker upload interval and transport mode so location reports reach Plaspy reliably.
- Validate communication in Plaspy to confirm the protocol is detected and data is received.
- Optionally perform a factory restore before first configuration when required by the installation.

## Plaspy Server Settings

- Server domain d.plaspy.com as the primary Plaspy endpoint for device reporting.
- Server IP 54.85.159.138 as the numeric Plaspy endpoint used in some device commands.
- Port 8888 used by Plaspy for all supported devices.
- Transport support for UDP or TCP depending on tracker firmware and configuration option.
- Plaspy automatically detects the tracker protocol when the device connects to the server using the shared port.

## Typical Requirements Before Setup

- A working SIM card with mobile data enabled and sufficient credit or data allowance for GPRS.
- Access to the device installer method supported by the TK910 such as SMS setup or the official configuration tool.
- Knowledge of the carrier APN and, if required, APN username and password for the SIM.
- Power and a stable vehicle installation to avoid interruptions during configuration.
- Access to the device default password when required for SMS commands the default password in public TK910 examples is 123456.

## How This Tracker Connects to Plaspy

The TK910 is configured to send location and event data over GPRS to the Plaspy server endpoint and port so the Plaspy backend can ingest and process the data for live monitoring and historical playback.

- The device is set with the Plaspy server address either as the domain d.plaspy.com or as the numeric IP 54.85.159.138.
- Reports are sent to Plaspy on port 8888 so the platform can receive telemetry and event messages.
- The tracker uses either UDP or TCP as the transport depending on the device setting; Plaspy supports both.
- Plaspy automatically detects the protocol and parses the incoming tracker messages so no per device protocol selection is required in the platform.
- Once reporting begins, location fixes and alarms are forwarded to the Plaspy dashboard for visibility, alerts, and historical track storage.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the TK910, or prepare to send SMS commands from a phone authorized for device setup.
2. Enter d.plaspy.com or 54.85.159.138 as the server address in the device settings or using the SMS server command.
3. Set the port to 8888 in the tracker configuration.
4. Choose UDP or TCP if the device requires selection of transport mode.
5. Apply or save the configuration on the device and wait for confirmation that settings were accepted.
6. Restart the device if required by the device or installer instructions.
7. Validate that the device reports to Plaspy and that the platform detects the tracker protocol and begins showing location and event data.

## Example Configuration Commands

The TK910 commonly accepts SMS based configuration commands. The example commands below are provided in the same order as many TK910 public guides. The default device password shown in public documentation is 123456. Replace placeholders and values where indicated before sending.

- Optional initial factory restore command
```text
begin123456
```
- Set the operator APN using your carrier APN placeholder
```text
apn123456 {{apn}}
```
- Set the APN username if your carrier requires it
```text
apnuser123456 {{apnu}}
```
- Set the APN password if your carrier requires it
```text
apnpasswd123456 {{apnp}}
```
- Set the GPRS server to the Plaspy server IP and port
```text
adminip123456 54.85.159.138 8888
```
Note: the public example uses the Plaspy server IP. Some devices accept a domain name instead of an IP. If the tracker firmware supports a domain you can use d.plaspy.com in place of the numeric IP where applicable.
- Set the location upload interval to 60 seconds
```text
upload123456 60
```
- Switch the device to GPRS reporting mode
```text
gprs123456
```

Placeholders explanation
- {{apn}} represents the carrier APN string required for GPRS.
- {{apnu}} represents the APN username when required by the mobile operator.
- {{apnp}} represents the APN password when required by the mobile operator.

If your installation requires a different upload interval, change the numeric value in the upload command accordingly. The restore command begin123456 is typically optional and should only be used when performing a factory reset as part of initial setup.

## Configuration Notes

- Firmware differences may require slightly different command syntaxes or support additional commands. Check the TK-Star documentation for firmware specific guidance.
- SMS based setup is a common public method for the TK910 but some installers use manufacturer tools or wired configuration interfaces when available.
- Choose UDP or TCP according to device support and network reliability. Plaspy accepts both and automatically detects the tracker protocol on port 8888.
- The Plaspy platform uses the same port for all devices so applying port 8888 is required for compatibility with Plaspy ingestion.
- If using the adminip command with a numeric IP, ensure the IP matches 54.85.159.138 or use d.plaspy.com where supported by the device.

## Why Use Plaspy with This Configuration

Using the TK910 with Plaspy provides consolidated visibility for location, alarms, and historical routes that fleet managers and vehicle owners rely on for real time monitoring and incident response. The shared Plaspy server settings and automatic protocol detection simplify onboarding multiple devices by reducing per device platform configuration.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration details and the latest firmware guidance with the manufacturer at https://www.tk-star.com/. Manufacturer specifications and setup methods can change over time so confirm the current instructions on the official TK Star site.

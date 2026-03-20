---
slug: /thingsys/ls500/configuration
id: ls500-configuration
sidebar_label: Configuration
title: ThingSys - LS500 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ThingSys LS500 with Plaspy server settings and SMS commands for basic setup
keywords:
  - ThingSys LS500 configuration
  - ThingSys LS500 setup
  - LS500 Plaspy configuration
  - LS500 server setup
  - ThingSys GPS tracker configuration
  - LS500 SMS commands
  - Plaspy tracker configuration
  - vehicle tracking LS500
  - fleet tracking ThingSys LS500
  - LS500 GPRS configuration
---

# ThingSys - LS500 Configuration

This page covers the public configuration context for using the ThingSys LS500 with the Plaspy platform. It collects the practical settings and SMS-based commands that are publicly available for preparing the LS500 to report to Plaspy. Where manufacturer tools or firmware provide different methods, those are noted; the goal is to make the Plaspy-specific server settings and a common SMS workflow easy to follow.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The LS500 description and the provided SMS commands are the basis for the examples on this page; verify any device-specific variations in the official ThingSys documentation when necessary.

## Configuration Overview

This configuration process prepares the LS500 to communicate location and operational data with Plaspy by setting the network endpoint, transport, APN, timing, and reporting interval. The LS500 can be configured by SMS commands in many deployments, and the examples below use the publicly available SMS command format and the Plaspy server values.

- Point the device to the shared Plaspy server so Plaspy can receive location and event data.
- Configure APN and optional APN credentials so the device has GPRS connectivity for reporting.
- Set the transport and port to the Plaspy endpoint to ensure data is delivered to the correct listener.
- Configure reporting interval and timezone so timestamps and position updates match your needs.
- Validate connectivity so the device becomes visible and operational inside Plaspy.

## Plaspy Server Settings

Use these public Plaspy connection settings when configuring the LS500:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol at the server side
- All devices in Plaspy use the same port for reporting

## Typical Requirements Before Setup

- A powered and installed LS500 unit with access to its configuration interface or SMS command capability.
- An active SIM card with data and SMS enabled compatible with local cellular networks.
- Knowledge of the device default password if applying SMS configuration. The sample commands below use 123456 as the default password.
- Access to an SMS sender (mobile phone or SMS gateway) to send configuration commands to the tracker.
- The device should have reliable GPS reception and network coverage to complete initial registration and reporting.
- Manufacturer documentation or tools for advanced configuration or firmware-specific instructions.

## How This Tracker Connects to Plaspy

The LS500 is configured to send its position and device events to the shared Plaspy server endpoint and port. Once the APN and server are set, the tracker will establish a GPRS connection and push updates according to the configured interval and transport.

- The tracker targets the Plaspy endpoint d.plaspy.com or the server IP 54.85.159.138 on port 8888.
- Choose UDP or TCP transport according to the device option; Plaspy accepts either and detects the protocol automatically.
- The device reports at the configured interval so Plaspy can display location history and live status.
- Successful registration and first reports confirm the device is visible in the Plaspy platform.
- Event reporting and operational monitoring are driven by the LS500 firmware and the reporting interval set during configuration.

## Common Configuration Workflow

1. Access the official ThingSys configuration method for the LS500, such as the SMS command interface or a manufacturer setup tool.
2. Ensure the SIM is inserted, the device is powered, and the unit has basic network connectivity.
3. Enter the Plaspy server address either as the domain d.plaspy.com or the server IP 54.85.159.138 in the device settings.
4. Set the port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Configure the APN, username, and password for your mobile operator if required by your SIM.
6. Apply or save the configuration and restart the device if the device or documentation recommends a reboot.
7. Validate that the device reports to Plaspy by checking server-side logs or the Plaspy platform for the first successful position/message.
8. Adjust reporting interval and timezone as needed, then confirm ongoing visibility in Plaspy.

## Example Configuration Commands

The LS500 supports SMS-based configuration. The following commands are extracted from public device configuration content and presented in order. The sample commands use the device default password 123456. Change the password and placeholders to match your deployment.

- Optional initial or factory reset (only use if you need to restore factory defaults):
```text
FACTORY*123456
```
- Set the time zone to UTC plus zero:
```text
TIMEZONE*123456*+00
```
- Set the operator APN. Replace [apn] with your operator APN:
```text
APN*123456*[apn]
```
- Set the APN username and password. Replace [apnu] and [apnp] with your APN credentials:
```text
USERNAME*123456*[apnu]*[apnp]
```
- Set the GPRS server to the Plaspy server IP and port. This sets the device to report to Plaspy at the required port:
```text
IP*123456*54.85.159.138,8888
```
- Set the update/reporting interval. Example sets interval to 60 seconds:
```text
INTERVAL*123456*060
```

Notes on placeholders and verification:
- [apn] is the operator APN string required for GPRS data connections.
- [apnu] and [apnp] are optional APN username and password fields if the operator requires authentication.
- The example above uses the server IP and the explicit port value as shown. You may alternatively enter d.plaspy.com in manufacturer tools that accept a domain name.
- The public content includes a verification note to check settings for TCP; ensure the transport selection matches your configuration choice.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or supported commands. Verify exact SMS formats with ThingSys documentation for your device firmware version.
- The LS500 supports SMS-based configuration in the public examples here; some installations may prefer wired configuration tools or a manufacturer app if available.
- Choose TCP or UDP based on your deployment needs; Plaspy accepts both and performs automatic protocol detection at the server side.
- Keep the default password known and, after initial setup, change the device password through the supported method if device security requires it.
- When using domain names like d.plaspy.com, confirm DNS resolution is available in the device environment or fall back to the server IP 54.85.159.138 if DNS is not available.

## Why Use Plaspy with This Configuration

Using the ThingSys LS500 with Plaspy gives fleets and operators a clear, consistent server endpoint to receive location and event data. Configuring the LS500 to point at d.plaspy.com or 54.85.159.138 on port 8888 enables fast onboarding because Plaspy uses the same port for all devices and automatically detects the tracker protocol. This reduces per-device server configuration differences and simplifies large scale deployment.

To learn more about Plaspy and how it can work with devices like the LS500, visit https://www.plaspy.com. For the latest device specific commands, firmware behavior, or hardware revision details, please confirm current information on the official ThingSys website https://www.thingsys.com/. Manufacturer specifications and configuration methods can change over time so verifying the latest documentation is recommended.

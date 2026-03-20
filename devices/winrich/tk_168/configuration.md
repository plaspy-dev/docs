---
slug: /winrich/tk_168/configuration
id: tk_168-configuration
sidebar_label: Configuration
title: Winrich - TK-168 Configuration
sidebar_class_name: menu_item_tracker
description: Practical setup guide for Winrich TK-168 integration with Plaspy including public SMS commands and server settings
keywords:
  - Winrich TK-168 configuration
  - Winrich TK-168 setup
  - TK-168 Plaspy configuration
  - TK-168 server configuration
  - Winrich GPS tracker setup
  - Plaspy tracker configuration
  - GPS tracker SMS commands
  - vehicle tracking configuration
  - TK-168 GPRS setup
  - fleet tracking integration
---

# Winrich - TK-168 Configuration

This page describes the public configuration context for using the Winrich TK-168 tracker with Plaspy. It compiles the known, publicly available setup steps and SMS commands that prepare the TK-168 to report location and telemetry to Plaspy for live monitoring and historical replay. Use this guide to understand the general process and the Plaspy server settings you will apply to the device.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The TK-168 supports SMS and GPRS modes and can be configured by SMS commands as shown below; always compare this public guidance with the manufacturer documentation for any device-specific variations.

## Configuration Overview

Configuring the TK-168 for Plaspy prepares the tracker to communicate reliably with the Plaspy platform and verifies that location and telemetry are visible in your account. The steps below focus on making sure the device has the correct APN and server endpoint, choosing transport, and validating connectivity.

- Set the device APN and credentials so the TK-168 can establish a GPRS data session to send reports to Plaspy.
- Point the tracker to the Plaspy server endpoint so telemetry arrives at the platform for real time view and alerts.
- Choose transport (UDP or TCP) if required by the device and save the settings so the device uses the correct protocol.
- Configure reporting interval and event settings so the tracker sends the desired frequency of position updates.
- Verify settings and check device status using the device verification commands to confirm connectivity with Plaspy.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and installed TK-168 unit with access to the vehicle power harness or bench power for initial configuration.
- A working SIM card with data enabled and the correct APN settings for the mobile operator.
- SMS capability on the SIM for SMS based configuration if you will use SMS commands to program the device.
- Access to the Winrich SMS command list or the official manufacturer configuration method for your firmware revision.
- Basic knowledge of your operator APN and any optional APN username or password values represented by placeholders such as {{apn}}, {{apnu}}, and {{apnp}}.
- Network coverage in the installation area to allow GPRS registration and data reporting.

## How This Tracker Connects to Plaspy

When configured, the TK-168 sends location and telemetry to the shared Plaspy server endpoint and port so the device becomes visible and manageable in the platform. Plaspy ingests those incoming messages, determines the tracker protocol automatically, and exposes the data for live tracking, alerts, and historical analysis.

- The tracker is set to report to the Plaspy server domain or IP and the shared port used by all Plaspy devices.
- Reports are sent over the chosen transport (UDP or TCP) on port 8888 according to the device configuration.
- Plaspy automatically detects the tracker protocol and decodes messages for live map position and telemetry.
- Platform features such as alerts, route replay, and reporting become available once the device successfully registers and sends data.
- Device events configured on the tracker (for example SOS or immobilizer events) are forwarded to Plaspy as they occur.

## Common Configuration Workflow

1. Access the official Winrich configuration method for your unit, typically SMS commands or the vendor tool recommended by the manufacturer.
2. Confirm or enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138 depending on the device command format.
3. Set the port to 8888; remember Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Configure the APN and any optional username or password so the device can establish a GPRS session.
6. Apply or save the configuration and restart the tracker if required by the device or as recommended by Winrich.
7. Validate connectivity by checking the device reports to Plaspy and using device verification commands to confirm settings and status.

## Example Configuration Commands

The TK-168 can be configured by sending SMS messages to the device. The commands below are the public SMS commands commonly used for initial setup. Preserve placeholders and replace them with your operator values where indicated.

- Factory reset (optional initial step)
```text
940#
```

- Set the time zone to UTC+0
```text
801#W0#
```

- Set the operator APN
```text
802#{{apn}}#{{apnu}}#{{apnp}}#
```
Note: Keep the placeholders {{apn}}, {{apnu}}, and {{apnp}} as shown. Replace {{apn}} with your mobile operator APN. If your operator does not require a username or password, you can leave {{apnu}} and {{apnp}} empty or omit those fields according to the device command syntax.

- Set the GPRS server to Plaspy by IP and port
```text
803#54.85.159.138#8888#
```
You may alternatively set the server by domain if the device accepts domains instead of IP addresses; d.plaspy.com is the Plaspy server domain.

- Set the update interval to 60 seconds
```text
730#60#
```

- Check current settings
```text
886#
```

- Check device status
```text
902#
```

These commands are provided in the public Winrich command set. Apply them in the order appropriate for your installation; a factory reset is optional and typically used only when required to clear previous settings.

## Configuration Notes

- SMS based configuration is a supported method for the TK-168; ensure the device SMS control number is reachable and that the SIM has SMS enabled.
- Firmware versions and hardware revisions can change command syntax or supported features; always confirm commands against the device firmware documentation.
- When choosing UDP versus TCP, consider network reliability and operator behavior; Plaspy supports both transports and will detect the protocol automatically.
- The Plaspy server uses the same port for all devices, so use port 8888 consistently when configuring different trackers for the platform.
- Verify APN credentials carefully; incorrect APN settings prevent GPRS registration and block data reporting to Plaspy.

## Why Use Plaspy with This Configuration

Configuring the TK-168 to report to Plaspy provides live location visibility, event reporting, and historical data in a single platform that automatically recognizes the tracker protocol. For fleets and vehicle owners, this integration makes it straightforward to collect GPS positions, monitor events such as SOS or immobilizer activations, and run operational reports without complex per-device server arrangements.

To learn more about Plaspy and how your fleet can benefit from unified tracking and reporting, visit https://www.plaspy.com. For the most current device specific setup methods, firmware behaviors, and manufacturer details, verify the official Winrich documentation at http://www.winrichgroup.com/en/.

---
slug: /winrich/tk103/configuration
id: tk103-configuration
sidebar_label: Configuration
title: Winrich - TK103 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Winrich TK103 for Plaspy real time tracking with shared server settings and SMS setup guidance
keywords:
  - Winrich TK103 configuration
  - Winrich TK103 setup
  - Winrich TK103 server configuration
  - Winrich TK103 GPS platform setup
  - Plaspy compatibility
  - GPS tracker configuration
  - vehicle tracking setup
  - TK103 GPRS configuration
  - TK103 SMS commands
  - fleet tracking configuration
---

# Winrich - TK103 Configuration

This page documents the public configuration context for connecting the Winrich TK103 to the Plaspy tracking platform. It collects the practical, publicly available setup steps and commands used to point a TK103 at Plaspy and to validate basic reporting over GPRS or SMS where supported.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools. The TK103 supports SMS and GPRS configuration methods; the example SMS commands provided below are public and illustrate the common flow to set APN, the Plaspy server, reporting interval, and verification checks.

## Configuration Overview

The goal of the configuration process is to prepare the TK103 to communicate reliably with Plaspy so the device appears and updates on the platform. For TK103 devices this commonly means verifying power and cellular connectivity, applying APN and server settings, and checking that the device sends position updates to Plaspy.

- Configure APN and GPRS parameters so the TK103 can use mobile data for real time reporting.
- Point the tracker to the shared Plaspy server endpoint so position fixes arrive on the platform.
- Set the reporting interval to meet operational needs and battery or data constraints.
- Use SMS checks or device status queries to confirm settings and live reporting.
- Validate visibility in Plaspy after configuration to ensure platform maps and alerts receive data.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port across supported devices

These values are the public Plaspy endpoint settings you will use when configuring the TK103. The device may be set using either the domain or the IP address where supported, and the transport can be UDP or TCP on port 8888.

## Typical Requirements Before Setup

- Device powered and installed or temporarily powered for configuration
- Active SIM card with a data plan and SMS capability inserted into the tracker
- Correct APN credentials for the mobile operator available for the APN configuration
- Ability to send and receive SMS to the device for SMS based configuration commands
- Access to the manufacturer documentation or terminal tool to confirm command syntax and firmware behavior
- A Plaspy account or administrator access to validate the tracker after it starts reporting

## How This Tracker Connects to Plaspy

When a TK103 is configured for Plaspy, it sends location and status messages over GPRS/Internet to the shared Plaspy server endpoint and port. If GPRS is unavailable, the TK103 can use SMS for essential notifications and configuration verification as supported by the device.

- The tracker reports position fixes to the Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888
- Data transport uses UDP or TCP depending on the device configuration and network conditions
- Plaspy automatically detects the tracker protocol when data arrives to route and interpret messages
- The platform presents live positions, alerts, and historical playback once reporting is validated
- SMS remains a useful fallback channel for configuration, status checks, and emergency alerts

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software and review model specific command syntax or tools.
2. Ensure the SIM card is active and set the operator APN on the TK103.
3. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138.
4. Set the port to 8888 as the device GPRS server port.
5. Choose UDP or TCP if the device requires a transport protocol selection.
6. Apply or save the configuration and restart the device if required by the firmware.
7. Validate that the device reports to Plaspy by checking platform maps, alerts, or by using device status commands.
8. Use verification SMS commands if available to confirm settings on the tracker before full deployment.

## Example Configuration Commands

The TK103 supports SMS based configuration. The following public commands show the common order used to prepare a device for Plaspy. Send these as plain SMS messages to the tracker SIM number.

1. Optional initial factory reset (use only when needed before configuration)
```text
940#
```

2. Set the time zone to UTC 0
```text
801#W0#
```

3. Set the operator APN
```text
802#{{apn}}#{{apnu}}#{{apnp}}#
```
- {{apn}} is the network access point name for the SIM operator
- {{apnu}} is the APN username if required by the operator
- {{apnp}} is the APN password if required
- If your operator only needs an APN, send the APN and omit username and password parameters as supported by your device

4. Set the GPRS server to Plaspy using the Plaspy server IP and port
```text
803#54.85.159.138#8888#
```
- If the TK103 firmware supports domain names you can replace the IP with d.plaspy.com:
```text
803#d.plaspy.com#8888#
```

5. Set the update interval to 60 seconds
```text
730#60#
```

6. Check current settings on the device
```text
886#
```

7. Check device status
```text
902#
```

Preserve the order above where initial network and server settings are required before enabling frequent reporting. Use the manufacturer documentation to confirm exact SMS formatting for your firmware version.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available features; confirm commands against the device firmware you have installed.
- The TK103 supports SMS based configuration as shown above; SMS is useful for remote setups or when temporary access to a terminal is not available.
- Choose UDP or TCP based on network reliability and operator behavior; Plaspy accepts either transport on port 8888 and will auto detect protocol.
- Ensure APN credentials are correct for the SIM operator to allow the tracker to establish a GPRS session.
- Test with short reporting intervals first, then adjust to the production interval to balance data usage and operational needs.

## Why Use Plaspy with This Configuration

Using the TK103 with Plaspy provides an operationally simple path to real time vehicle visibility and alerting. Configuring the tracker to report to Plaspy’s shared endpoint and port lets fleet managers view live location updates, receive alarms, and review historical tracks from a centralized platform without per device server setup complexity.

To learn more about Plaspy and how it supports trackers like the Winrich TK103 visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so please verify the latest setup information on the official Winrich site http://www.winrichgroup.com/en/ before large scale deployments.

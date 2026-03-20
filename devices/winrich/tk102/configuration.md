---
slug: /winrich/tk102/configuration
id: tk102-configuration
sidebar_label: Configuration
title: Winrich - TK102 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Winrich TK102 using Plaspy server settings and SMS commands for GPRS reporting
keywords:
  - Winrich TK102 configuration
  - Winrich TK102 setup
  - TK102 Plaspy configuration
  - TK102 GPS tracker setup
  - Winrich TK102 server settings
  - TK102 SMS commands
  - TK102 GPRS configuration
  - Winrich tracker Plaspy
  - vehicle tracking TK102
  - GPS platform configuration
---

# Winrich - TK102 Configuration

This page documents the public configuration context for using the Winrich TK102 (TK102B) tracker with the Plaspy platform. It collects the practical server settings and SMS commands that are commonly published for the TK102 family and explains how those settings are applied so the device can report to Plaspy.

Plaspy uses a shared server endpoint and port across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so use the SMS commands and sequence shown here as a practical reference and double-check manufacturer documentation for device-specific nuances.

## Configuration Overview

The goal of this configuration is to prepare the TK102 to reliably send location and status data to Plaspy, verify connectivity, and make the device visible in the Plaspy platform. For the TK102 this typically means using SMS-based configuration to set the APN and GPRS reporting target, plus a reporting interval that fits your use case.

- Configure the device APN so it can establish GPRS data connectivity for reporting to Plaspy.
- Set the GPRS server and port so the TK102 sends packets to Plaspy's shared endpoint.
- Tune the position update interval to balance timeliness and data usage.
- Optionally perform a factory reset or timezone adjustment before the main configuration for a consistent baseline.
- Verify the device configuration and check real-time status using the provided verification SMS commands.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the TK102 for reporting:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (choose the transport the device requires)
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and automatically detects the tracker protocol to simplify configuration.

## Typical Requirements Before Setup

- A powered and functioning TK102 device with access to SMS command configuration or the official configuration tool.
- A SIM card active for both SMS and GPRS data with subscriber APN information available.
- An SMS-capable phone or configuration tool to send the SMS commands shown below.
- Basic information such as the correct APN and optional APN username and password for the mobile operator.
- Access to the official Winrich documentation or installer tools for reference.

## How This Tracker Connects to Plaspy

When configured, the TK102 sends its location and status data by establishing GPRS connectivity and reporting to Plaspy's shared server endpoint and port. Plaspy then receives and interprets the incoming messages using automatic protocol detection so the device can appear in the platform without per-device port changes.

- The tracker is set to use a GPRS server address that points to Plaspy (IP or domain).
- The device delivers position updates at the configured reporting interval to the Plaspy endpoint.
- If GPS positioning is unavailable, the TK102 can fall back to GSM based positioning for continued reporting.
- Plaspy detects the tracker protocol automatically and processes incoming packets on the shared port.
- Transport (UDP or TCP) is selected on the device side if required by the firmware.

## Common Configuration Workflow

1. Access the official Winrich configuration method for your TK102 device (SMS commands or the vendor's configuration tool) and confirm the device is powered and has a working SIM.
2. Optionally perform a factory reset to start from a known state.
3. Enter the operator APN and any APN credentials the SIM requires.
4. Enter the Plaspy server address by using either d.plaspy.com or 54.85.159.138 and set the port to 8888.
5. Choose UDP or TCP on the device if the device requires a transport selection.
6. Apply or save the configuration and restart the device if the device requires a reboot for changes to take effect.
7. Validate that the device reports to Plaspy using the device verification commands and confirm visibility in the Plaspy platform.

## Example Configuration Commands

The Winrich TK102 accepts SMS commands for configuration. Below are the commonly published SMS commands in the order they are often applied. Keep placeholders as shown and replace them with your operator values.

- Factory reset (optional initial step):
```text
940#
```

- Set the time zone to UTC 0:
```text
801#W0#
```

- Set the operator APN. Replace the placeholders with your operator APN values. The APN username and password are optional and only required by some providers:
```text
802#{{apn}}#{{apnu}}#{{apnp}}#
```
Explanation of placeholders:
- {{apn}} = your mobile operator APN
- {{apnu}} = APN username if required by the operator
- {{apnp}} = APN password if required by the operator

- Set the GPRS server to Plaspy using the public IP and port shown in this guide:
```text
803#54.85.159.138#8888#
```
If your device supports domain names instead of IP addresses you may use:
```text
803#d.plaspy.com#8888#
```
(Use whichever format your firmware accepts.)

- Set the position update interval to 60 seconds:
```text
730#60#
```

- Verification commands:
```text
886#
```
(Use this to check configured settings.)

```text
902#
```
(Use this to request device status.)

Follow the command order above when order is important. Send each SMS from the device's authorized phone number according to the manufacturer's command authorization method.

## Configuration Notes

- SMS-based configuration is the public method shown here; some variants or firmware revisions may additionally support configuration through a USB tool or vendor software.
- Keep the APN placeholders {{apn}}, {{apnu}}, and {{apnp}} exactly as template fields when preparing commands; replace them with operator values when sending.
- Some firmware accepts domain names while others require an IP address; use the format your device and firmware support.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, so the only required server target values are the domain or IP and the port 8888.
- If your device supports choosing UDP or TCP, test the transport that gives reliable packet delivery for your network conditions.

## Why Use Plaspy with This Configuration

Using Plaspy with the Winrich TK102 lets organizations consolidate GPS reporting from many tracker models using a shared server endpoint and a single port. That simplifies deployment and ongoing management, since Plaspy automatically detects the tracker protocol and processes incoming device data for location visibility, event monitoring, and operational oversight.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific setup steps, firmware notes, and manufacturer details verify the latest information on the Winrich website http://www.winrichgroup.com/en/ .

---
slug: /xirgo/xt21/configuration
id: xt21-configuration
sidebar_label: Configuration
title: Xirgo - XT21 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xirgo XT21 with Plaspy server settings and SMS commands for integration
keywords:
  - Xirgo XT21 configuration
  - XT21 Plaspy setup
  - Xirgo XT21 setup
  - XT21 server configuration
  - Xirgo tracker configuration
  - XT21 GPS tracker setup
  - Xirgo XT21 SMS configuration
  - XT21 asset tracker configuration
  - Plaspy device configuration
  - XT21 LTE tracker setup
---

# Xirgo - XT21 Configuration

This page covers the public configuration context for using the Xirgo XT21 tracker with Plaspy. It shows the shared Plaspy server settings and provides practical guidance for preparing the XT21 to report location and basic telemetry to the Plaspy platform. Where available, example commands from the device manufacturer are provided in their public form so you can apply them using the vendor supported configuration method.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. The XT21 supports SMS based configuration commands as part of its public configuration options; this page explains how those commands map to the Plaspy server settings and outlines a typical setup workflow.

## Configuration Overview

The goal of configuration is to point the XT21 at Plaspy, verify connectivity, and ensure the device reports the telemetry Plaspy requires for location, event detection, and battery monitoring. Use the shared Plaspy server values below and the manufacturer configuration method you have available to make the tracker visible in your Plaspy account.

- Set the tracker APN and GPRS server so the device can establish a cellular data link to Plaspy.
- Configure the server endpoint and port so the XT21 sends position and telemetry to Plaspy.
- Verify transport selection (UDP or TCP) if the device requires an explicit choice.
- Confirm the device is reporting GPS fixes, digital input events, and battery voltage to the platform.
- Validate visibility in Plaspy and confirm event alerts and telemetry match expectations.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the XT21. These values are the public, shared settings used by Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and performs automatic protocol detection to simplify tracker onboarding.

## Typical Requirements Before Setup

- Access to the XT21 configuration method supported by the installer or vendor such as SMS commands or the manufacturer configuration tool.
- Active LTE SIM card with a data plan compatible with the device and APN settings for the network operator.
- Power to the XT21 and a stable installation or bench power source for initial provisioning.
- Ability to send SMS commands from a phone or SMS gateway if using SMS based configuration.
- Your Plaspy account or provisioning details to confirm the device appears in the platform after configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the XT21 establishes a cellular data connection and transmits location fixes and telemetry to the shared Plaspy server endpoint and port. Plaspy ingests the device data and maps digital input events and battery telemetry into the platform for monitoring and alerts.

- The tracker is pointed at the Plaspy server domain or IP and uses port 8888 for all device traffic.
- The XT21 sends periodic GPS position updates and telemetry over LTE to Plaspy.
- Digital input events and battery voltage readings are reported to Plaspy for alerts and analytics.
- Plaspy uses automatic protocol detection so the platform recognizes the tracker protocol once the device connects.
- Visibility, alerts, and historical playback are available in Plaspy once communications are established.

## Common Configuration Workflow

1. Access the official Xirgo configuration method provided to you by the vendor such as SMS commands, the vendor web tool, or the official configuration utility.
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the server IP 54.85.159.138 as required by the device tool.
3. Set port 8888 for the device server setting so the XT21 sends data to the correct Plaspy port.
4. Choose UDP or TCP if the device requires an explicit transport selection and save that choice.
5. Configure the operator APN and any SIM credentials so the tracker can register on the cellular network.
6. Apply or save the configuration and restart the device if the manufacturer instructions require a reboot.
7. Validate the device reports to Plaspy and check that location, digital input events, and battery telemetry are visible in the Plaspy platform.

If your configuration method is SMS based, include the SMS commands shown in the Example Configuration Commands section below following the manufacturer instructions.

## Example Configuration Commands

The following commands are the public SMS configuration commands provided in the Xirgo XT21 model configuration. Send these SMS messages from an authorized phone number to the device in the order shown.

1. Set the operator APN. Replace the placeholders with your operator values:
```text
+XT:1002,[apnu],[apnp],[apn]
```
- [apnu] is the APN username if required by your carrier.
- [apnp] is the APN password if required by your carrier.
- [apn] is the APN name for the cellular operator.

2. Set the GPRS server to point to Plaspy using port 8888 and the Plaspy server IP:
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
- This command configures the device to use port 8888 and the Plaspy server IP 54.85.159.138. Preserve the argument order as required by the device firmware.

If you prefer to use the domain rather than the IP and the manufacturer tool allows it, enter d.plaspy.com as the server address instead of the IP. The exact SMS format for using a domain may vary by firmware.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available parameters. Verify the exact SMS format for your firmware before sending commands.
- Plaspy accepts connections on port 8888 for all devices and automatically detects the tracker protocol, which reduces the need for manual protocol selection in many setups.
- Choose UDP or TCP depending on the device options and installer preference; some installations prefer UDP for lightweight reporting while others opt for TCP for session reliability.
- SMS based configuration is supported for the XT21 as shown above, but many installers use vendor tools or provisioning services when managing multiple devices.
- If you use the APN placeholders [apn], [apnu], and [apnp], confirm carrier APN credentials with your mobile operator.

## Why Use Plaspy with This Configuration

Using the XT21 with Plaspy gives organizations straightforward asset visibility and basic telemetry for remote assets. With shared Plaspy server settings and automatic protocol detection, deploying many XT21 units is simplified, letting operations teams focus on installation and validation rather than per device server customization.

To learn more about Plaspy and how it handles device onboarding and fleet visibility visit https://www.plaspy.com. Please verify the latest manufacturer configuration details and firmware behavior at the official Xirgo site https://xirgo.com/ since device specific methods and command formats can change over time.

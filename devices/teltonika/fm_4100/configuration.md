---
slug: /teltonika/fm_4100/configuration
id: fm_4100-configuration
sidebar_label: Configuration
title: Teltonika - FM 4100 Configuration
sidebar_class_name: menu_item_tracker
description: Configure a Teltonika FM 4100 for use with Plaspy including server settings and example SMS command
keywords:
  - Teltonika FM 4100 configuration
  - Teltonika FM 4100 setup
  - FM 4100 Plaspy
  - FM 4100 tracker configuration
  - Teltonika GPS configuration
  - vehicle tracking setup
  - GPS tracker configuration
  - Plaspy server configuration
  - fleet tracking setup
  - FM 4100 server settings
---

# Teltonika - FM 4100 Configuration

This page documents the public configuration context for using the Teltonika FM 4100 with Plaspy. It collects the practical, platform‑level values and shows example commands that are commonly used to point a device to Plaspy so the tracker can report location and I O data over the mobile network. The guidance here focuses on the settings Plaspy requires and how to apply them using publicly available manufacturer style commands.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tooling. The FM 4100 supports GSM based bearers such as GPRS and SMS, so configuration may be done via SMS or the manufacturer configuration tools depending on your workflow.

## Configuration Overview

Configuring the FM 4100 for Plaspy prepares the device to send its location and event data to Plaspy's shared server endpoint and port. The goal is to set the device APN and server values, select the transport if required, save the settings, and verify the tracker appears in the Plaspy platform.

- Enter or confirm APN credentials so the device can use the mobile data channel
- Point the tracker to Plaspy using the shared server endpoint and port
- Choose UDP or TCP transport on the device if prompted by the configuration tool
- Apply and save settings then restart the device as required to activate the connection
- Validate the device is reporting to Plaspy so it becomes visible on the platform

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- Note that all devices in Plaspy use the same port 8888 for data collection

## Typical Requirements Before Setup

- Device powered and accessible for configuration either in the vehicle or on the bench
- A working SIM with a valid mobile data plan and APN credentials for the target network
- Access to the Teltonika configuration method you plan to use such as SMS commands or the manufacturer configuration tool
- Basic information for Plaspy account verification so you can confirm the device appears on the platform after setup
- A way to restart the device after applying new settings
- If using SMS configuration, ensure the sending phone number can reach the device

## How This Tracker Connects to Plaspy

When configured correctly, the FM 4100 sends its location and event data to the shared Plaspy server endpoint at d.plaspy.com or the IP 54.85.159.138 using port 8888. Plaspy receives the connection on the same port for all supported devices and automatically determines the tracker protocol, simplifying device onboarding.

- The device uses GSM data (GPRS) to open a TCP or UDP session to Plaspy at d.plaspy.com port 8888
- The tracker transmits position reports and configured event messages to the Plaspy endpoint
- Plaspy detects the protocol automatically when the device connects on port 8888
- Once connected, the device becomes visible and reportable inside Plaspy for monitoring and alerts
- SMS can be used to send configuration commands to the FM 4100 when supported by your workflow

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software you prefer, for example SMS, FMB configuration tools, or Teltonika configurator applications.
2. Enter the Plaspy server as either d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 — Plaspy uses the same port for all devices.
4. Choose UDP or TCP if your device requires selecting a transport protocol.
5. Provide APN credentials using the appropriate parameter or field so the tracker can use GPRS.
6. Apply or save the configuration and restart the device if required by the manufacturer procedure.
7. Validate that the FM 4100 is reporting to Plaspy and visible in your Plaspy account or device list.

## Example Configuration Commands

To configure the basic parameters on your Teltonika FM 4100 by SMS, use the manufacturer style setparam command. This public example sets APN parameters and points the device to Plaspy.

- Example SMS command to set APN and Plaspy server values

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Notes on the placeholders and values in the example above
  - [apn] should be replaced with your mobile network APN name
  - [apnu] should be replaced with the APN username if required by your operator
  - [apnp] should be replaced with the APN password if required by your operator
  - 2004 is set to d.plaspy.com to point the device to the Plaspy server
  - 2005 is set to 8888 which is the port Plaspy uses for all devices
  - The example includes parameter 2006; consult Teltonika documentation for exact parameter mapping for transport or mode selection if needed

If you use Teltonika software instead of SMS, enter the equivalent values for APN, server domain d.plaspy.com (or IP 54.85.159.138), and port 8888 in the appropriate fields.

## Configuration Notes

- Firmware and hardware revisions may change parameter codes or configuration workflows; always check Teltonika documentation for the parameters relevant to your unit.
- The FM 4100 supports SMS based configuration as shown above, but many operators prefer using the official Teltonika configuration tools for bulk or field installations.
- Choose TCP or UDP according to your operational needs; Plaspy accepts either protocol on port 8888 and detects the protocol automatically.
- Confirm APN credentials with your mobile operator before applying settings to ensure the device can open a GPRS session.
- After applying settings, allow time for the device to register on the mobile network and establish a session to d.plaspy.com or 54.85.159.138.

## Why Use Plaspy with This Configuration

Using the Teltonika FM 4100 with Plaspy gives organizations a straightforward way to collect location and event data from vehicles and remote assets using a consistent server endpoint and port. The shared Plaspy server approach simplifies onboarding across multiple devices because all devices use the same port and Plaspy automatically detects the tracker protocol when a connection is established.

To learn more about Plaspy and how to onboard devices at scale visit https://www.plaspy.com. For the latest device specific configuration parameters, firmware notes, and manufacturer instructions verify current information at https://www.teltonika-gps.com/ as device setup methods and parameter mappings may change over time.

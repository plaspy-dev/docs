---
slug: /suntech/st8300/configuration
id: st8300-configuration
sidebar_label: Configuration
title: Suntech - ST8300 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST8300 tracking devices and Plaspy compatibility with practical setup steps
keywords:
  - Suntech ST8300 configuration
  - Suntech ST8300 setup
  - Suntech ST8300 Plaspy
  - ST8300 server configuration
  - ST8300 SMS setup
  - Suntech GPS tracker configuration
  - ST8300 APN settings
  - ST8300 fleet tracking
  - Suntech tracking platform setup
  - ST8300 configuration guide
---

# Suntech - ST8300 Configuration

This page covers the public configuration context for using the Suntech ST8300 Series tracker with Plaspy. It gathers the practical server settings, SMS command examples, and workflow guidance needed to prepare the device to report to the Plaspy platform. Use this guide to understand how to point an ST8300 device at the Plaspy endpoint and validate connectivity before onboarding the device into fleet monitoring.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The ST8300 supports SMS-based configuration as one public option; where the manufacturer provides software or OTA provisioning, follow those vendor tools for bulk deployments and firmware maintenance.

## Configuration Overview

The configuration process prepares the ST8300 to communicate reliably with Plaspy and ensures the device sends location and event data to the platform endpoint. Publicly available SMS commands can set APN, server address, port, and reporting intervals; these are commonly used during initial installation or troubleshooting.

- Configure the device APN and authentication so it has cellular data access.
- Point the device to the Plaspy server domain or IP and the shared Plaspy port.
- Select transport (UDP or TCP) when required by device firmware.
- Set reporting intervals to match the desired visibility and data plan.
- Validate the device is visible in Plaspy and that location and event messages are received.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These settings are the public Plaspy endpoint values to use when configuring any supported device, including the ST8300 Series.

## Typical Requirements Before Setup

- A powered and functioning ST8300 device with access to its SMS number or manufacturer configuration tool.
- An active cellular SIM with data enabled and the correct APN values for the operator.
- The device IMEI available so you can compute the device identifier used in SMS commands.
- Access to manufacturer documentation or configuration interface for your specific firmware revision.
- A coverage area with cellular service for LTE Cat.1 or 2G fallback depending on the device variant.
- Administrative access to Plaspy to confirm device appearance after configuration.

## How This Tracker Connects to Plaspy

The ST8300 is configured to report GNSS fixes and device events to the shared Plaspy server endpoint and port. Plaspy ingests the incoming telemetry and automatically detects the protocol used by the tracker so no per-device protocol selection is required on the platform side.

- The device sends periodic location updates to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device firmware or installer selection.
- Plaspy automatically detects the tracker protocol and processes incoming messages.
- Reports include location and device event messages that Plaspy displays in real time.
- Successful configuration enables visibility for live monitoring and historical reporting in Plaspy.

## Common Configuration Workflow

1. Access the official Suntech configuration method for your device and firmware, such as SMS commands or the vendor configuration tool provided by Suntech.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138 where the device asks for a server endpoint.
3. Set the device port to 8888 as Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection in its configuration interface.
5. Configure the APN and any required authentication and save or apply the settings on the device.
6. Restart the device if the manufacturer recommends it or if the device requires a reboot to apply network/server changes.
7. Validate that the device reports to Plaspy by checking the Plaspy interface for the device ID and recent messages.

If you are using SMS-based configuration, include the SMS command step in the workflow and confirm delivery and acceptance of each command before proceeding to validation.

## Example Configuration Commands

The ST8300 public configuration supports SMS commands. The device ID used in these commands is the last 6 digits of the IMEI excluding the final check digit. For example, if the IMEI is 123456789012345 where the last digit is a check digit, the device ID would be 901234 according to the manufacturer example. Compute device_id by removing the IMEI last digit and taking the final six digits of the remaining sequence.

Important placeholders
- {{device_id}} = last 6 digits of IMEI excluding the final IMEI digit (compute per example above).
- {{apn}} = your cellular operator APN.
- {{apnu}} = APN username if required by operator; leave blank if not needed.
- {{apnp}} = APN password if required by operator; leave blank if not needed.

1) Set the operator APN and GPRS server
- Use authentication flag 1 if you include {{apnu}} or {{apnp}} otherwise use 0.

```
SA200NTW;{{device_id}};02;1;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```

Or if no APN username/password:

```
SA200NTW;{{device_id}};02;0;{{apn}};;;54.85.159.138;8888;;;;
```

2) Set the update interval to 60 seconds
- This command sets reporting intervals and common timing parameters.

```
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

3) Check current settings (verification command)

```
SA200CMD;{{device_id}};02;PresetA
```

Notes on sending commands
- Send these lines as SMS messages to the device phone number associated with the SIM in the tracker.
- Replace placeholders with the actual device_id and APN values for your deployment.
- The order is important: set APN/server first, then reporting intervals, then verify settings.

## Configuration Notes

- Firmware differences and hardware variants (for example ST8300, ST8300R, ST8300RE, ST8300RP) may affect available commands and exact behaviors; always confirm with the manufacturer for your specific variant and firmware.
- If the device interface requires a transport choice, remember UDP and TCP are both supported by Plaspy; select the transport required by your local network or installer preference.
- SMS-based configuration is practical for single units or initial provisioning, but vendor tools, OTA provisioning, or batch methods may be more efficient for fleet rollouts.
- Ensure the APN authentication flag matches whether you provide an APN username or password; an incorrect flag may prevent data connections.
- Plaspy uses the same port 8888 for all devices and automatically detects the tracker protocol, so point the device to d.plaspy.com or 54.85.159.138 and use port 8888.

## Why Use Plaspy with This Configuration

Using Plaspy with Suntech ST8300 devices gives organizations a consistent server endpoint and detection workflow for ingesting location and event data. With Plaspy handling protocol detection and a single shared port value, installers and administrators can standardize device configuration steps across mixed fleets and quickly validate device visibility in the platform.

To learn more about Plaspy and how it works with compatible trackers visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify current information on the official Suntech site http://www.suntechint.com/

---
slug: /eelink/gpt18/configuration
id: gpt18-configuration
sidebar_label: Configuration
title: EElink - GPT18 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configuring the EElink GPT18 GPS tracker for use with Plaspy servers and SMS setup
keywords:
  - EElink GPT18 configuration
  - EElink GPT18 setup
  - GPT18 Plaspy configuration
  - Plaspy server settings
  - GPS tracker configuration
  - wearable GPS tracker setup
  - GPT18 SMS configuration
  - Plaspy compatibility guide
  - GPS platform setup
  - device server configuration
---

# EElink - GPT18 Configuration

This page documents the public configuration context for using the EElink GPT18 wearable GPS tracker with Plaspy. It summarizes the shared server settings Plaspy requires, explains the typical setup steps you can take on the device or by SMS, and shows the public example commands that are commonly used to point a GPT18 at Plaspy for location and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer-side setup steps can vary by firmware release, hardware revision, installation type, and vendor software. The GPT18 supports remote configuration by server, mobile app, or SMS, so this guide focuses on the practical, public configuration steps that align with Plaspy server settings.

## Configuration Overview

This configuration process prepares the GPT18 to send location and event telemetry to Plaspy, enables monitoring in the Plaspy platform, and provides simple verification commands to confirm connectivity. Where available, the device can be configured by SMS using the manufacturer commands shown in the example section.

- Configure the device server and transport so the tracker reports to Plaspy
- Provide the correct APN and cellular parameters to enable data connectivity and SMS management
- Validate reporting and device visibility in Plaspy after applying settings
- Use SMS commands for quick on-site configuration or the manufacturer app when available
- Save and restart the tracker to ensure settings take effect and begin telemetry to Plaspy

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the GPT18:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections

All Plaspy devices use the same port and Plaspy will detect the tracker protocol automatically once the tracker reports to the server endpoint above.

## Typical Requirements Before Setup

- A charged and powered GPT18 device ready for configuration
- An active SIM card in the device with data and SMS enabled and the correct APN for the mobile operator
- Access to the official EElink configuration method such as SMS commands, the EElink app, or the vendor provisioning tool
- Knowledge of the operator APN and any required APN username or password values
- A Plaspy account or Platform access where the device will be managed and monitored
- Ability to send and receive SMS from the device during on-site setup if using SMS-based configuration

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GPT18 sends its location and event data to the shared Plaspy server endpoint and port so the device becomes visible in the Plaspy platform for monitoring and alerting. Plaspy receives telemetry and applies automatic protocol detection to interpret the tracker data.

- The tracker reports location and event updates to d.plaspy.com or the Plaspy server IP at 54.85.159.138 using port 8888
- Transport can be either UDP or TCP depending on tracker firmware or provisioning choices
- Plaspy automatically detects the tracker protocol when the device connects to the server endpoint
- Device events such as SOS, low battery, and geofence alerts appear in Plaspy once reporting is established
- Reconfiguring the device server to the Plaspy endpoint and restarting the device typically begins telemetry flows into the platform

## Common Configuration Workflow

1. Access the official EElink configuration method for the GPT18 (SMS commands, vendor app, or configuration tool).
2. Enter the server address as d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 (Plaspy uses the same port for all devices).
4. Choose transport UDP or TCP if the device requires a transport selection during setup.
5. Provide the operator APN and any APN username or password placeholders required by your carrier.
6. Apply or save the configuration and restart the device if required by the firmware.
7. Validate that the device reports to Plaspy and appears in your Plaspy console or monitoring view.

If you prefer SMS provisioning, follow the listed SMS steps in the example commands section to apply the server, APN, timer, and verification commands.

## Example Configuration Commands

The GPT18 supports SMS-based configuration. The public example commands below are sent by SMS to the device and preserved in the order recommended by the manufacturer. Labeling notes follow each command. Placeholders such as [apn], [apnu], and [apnp] should be replaced with your mobile operator APN values where required.

1. Optional factory reset (use only when needed for initial provisioning)
```
FACTORY#
```

2. Set the time zone to UTC 0
```
GMT,E,0#
```

3. Set the operator APN
```
APN,[apn],[apnu],[apnp]#
```
- [apn] is the operator APN string
- [apnu] is the APN username if required by the carrier
- [apnp] is the APN password if required by the carrier
- If username or password are not needed, omit those placeholders according to the device command format

4. Set the GPRS server by domain (recommended)
```
SERVER,1,d.plaspy.com,8888#
```

5. Alternatively set the GPRS server by IP
```
SERVER,0,54.85.159.138,8888#
```

6. Set the tracking update interval to 60 seconds
```
TIMER,60#
```

7. Check current parameter settings
```
PARAM#
```

Use the domain form to point to d.plaspy.com or the IP form to point to 54.85.159.138. Both use port 8888 and the device can be configured for UDP or TCP transport when required.

## Configuration Notes

- Firmware and hardware revisions may change exact SMS command syntax or available parameters; always verify commands against the device firmware version in the manufacturer documentation.
- The GPT18 supports SMS provisioning, which is useful for field setup when app or PC tools are not available.
- Choose UDP or TCP based on installation preferences or carrier behavior. Both transports are supported and Plaspy will detect the tracker protocol automatically.
- Ensure that the APN and any APN credentials are correct before attempting GPRS server configuration to avoid connectivity failures.
- After applying settings, a device restart or power cycle may be required for the new server and APN settings to take effect.

## Why Use Plaspy with This Configuration

Configuring the EElink GPT18 to report to Plaspy gives caregivers and monitoring teams a straightforward way to receive location, SOS alerts, and device status from a compact wearable tracker. Plaspy’s shared server endpoint and automatic protocol detection simplify provisioning and let you manage visibility, alerts, and reporting centrally for multiple devices and device types.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup guidance with the manufacturer at https://www.eelink.com.cn/.

---
slug: /sentar/elderly/configuration
id: elderly-configuration
sidebar_label: Configuration
title: Sentar - Elderly Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for the Sentar Elderly GPS watch showing Plaspy server settings, SMS commands, and practical steps to connect the device
keywords:
  - Sentar Elderly configuration
  - Sentar Elderly setup
  - Sentar Elderly Plaspy
  - Sentar GPS watch configuration
  - Elderly GPS tracker setup
  - Plaspy server configuration
  - GPS tracker SMS commands
  - Wearable tracker configuration
  - Plaspy compatible device setup
  - Sentar tracker configuration
---

# Sentar - Elderly Configuration

This page describes the public configuration context for using the Sentar Elderly GPS watch with Plaspy. It focuses on the practical server settings, preparatory checks, and the manufacturer supplied SMS commands that are commonly used to point the device to Plaspy for centralized tracking and alerting. Use this guide to understand what to apply on the device side before registering and monitoring the watch in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects tracker protocols when the device connects. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools; the Sentar sample SMS commands below reflect common public commands and a default device password shown in the manufacturer sample.

## Configuration Overview

The goal of the configuration process is to prepare the Sentar Elderly watch to reliably send location and event data to the Plaspy platform and to confirm connectivity so the device appears and reports correctly in Plaspy. For this model, public setup often uses SMS commands sent to the device from a management phone, though vendor software may also be available.

- Point the tracker to the Plaspy server endpoint so uplinks arrive at the correct host and port.
- Configure APN and GPRS settings so the watch can use cellular data for reporting.
- Validate connectivity and protocol detection so Plaspy receives position updates and events.
- Optionally perform a factory reset and basic timezone or upload interval adjustments as part of initial provisioning.
- Confirm the watch appears in Plaspy and reports regular updates after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com should be used when the device accepts a DNS host.
- Server IP 54.85.159.138 can be used when an IP address is required by the device.
- Port 8888 is the Plaspy listening port and is used for all devices in Plaspy.
- Transport support for UDP or TCP is available; the device may be configured to use either UDP or TCP on port 8888.
- Plaspy performs automatic protocol detection when the device connects so the correct tracker protocol is resolved by the platform.

## Typical Requirements Before Setup

- A charged Sentar Elderly device with a working SIM card and mobile data access for GPRS/4G uplink.
- Access to the device control method provided by the manufacturer such as SMS commands or vendor configuration tools.
- Knowledge of the device password used for SMS configuration (manufacturer sample uses 123456 as the default).
- APN credentials from the mobile operator if the device requires explicit APN, username, or password entries.
- A device management phone able to send SMS commands to the tracker or equivalent provisioning tool.

## How This Tracker Connects to Plaspy

When configured, the Sentar Elderly GPS watch sends periodic position updates and key events over the cellular network to the shared Plaspy server endpoint and port. Plaspy receives these messages, automatically detects the device protocol, and maps the incoming data to the registered device for live visibility and alerts.

- The watch reports location updates and status messages to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport may be UDP or TCP depending on the device setting; either can be selected during setup.
- Plaspy automatically detects the tracker protocol so minimal protocol selection is required on the platform side.
- Events such as SOS presses and basic telemetry are forwarded to Plaspy for alerting and history.
- Once connected, the device is visible in Plaspy where position history and recent events are available for monitoring.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS commands from a management phone as provided by Sentar.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138 in the device configuration.
3. Set the device port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP for transport if the device requires explicit transport selection.
5. Configure APN, username, and password placeholders as needed for the mobile operator so the watch can use cellular data.
6. Apply or save the configuration and restart the device if the device firmware or process requires a reboot.
7. Validate that the device reports to Plaspy by checking device visibility and recent position updates in the Plaspy platform.

## Example Configuration Commands

The Sentar manufacturer sample shows SMS commands used to configure the tracker. These are public example commands and should be sent as SMS messages to the device number. The sample commands use the device password 123456 as the default.

1. Factory reset (optional initial step)
```text
pw,123456,factory#
```

2. Set the time zone to UTC 0
```text
pw,123456,lz,0,0#
```

3. Check the MCC and MNC (IMSI)
```text
pw,123456,imsi#
```

4. Set the operator APN where {{apn}} is the APN name, {{apnu}} is the APN username, {{apnp}} is the APN password, and xxxyy represents MCC and MNC concatenated
```text
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```
- Explanation: replace {{apn}}, {{apnu}}, and {{apnp}} with your operator APN values. The xxxyy placeholder stands for operator numeric codes that may be required by this command format.

5. Set GPRS server to the Plaspy server IP and port (as provided in the manufacturer sample)
```text
pw,123456.ip,54.85.159.138,8888#
```

6. Set upload interval to 300 seconds
```text
pw123456,upload,300#
```

7. Check current settings
```text
pw,123456,ts#
```

Note: The commands above are presented in the exact public samples supplied by the manufacturer. If a command does not work as expected, consult the official Sentar documentation for exact syntax for your firmware revision.

## Configuration Notes

- Manufacturer SMS commands and exact syntax can vary by firmware version or regional hardware revisions; always confirm with the device manual for your unit.
- The device sample uses SMS provisioning; vendor tools or a configuration app may offer an alternate setup path for the same settings.
- The default device password in the sample is 123456. Change default passwords where possible after provisioning for security.
- TCP and UDP are both supported for transport; choose the transport required by your deployment and set the device to use that transport on port 8888.
- A factory reset is typically optional and should only be used when starting from a device with unknown settings or when recommended by the manufacturer.

## Why Use Plaspy with This Configuration

Configuring the Sentar Elderly watch to report to Plaspy gives caregivers and monitoring services a single point to see live location, receive SOS alerts, and review recent device history. Using shared Plaspy server settings simplifies provisioning across multiple devices because all devices use the same port and Plaspy automatically detects the tracker protocol when the device connects.

To learn more about Plaspy and how to manage compatible devices, visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and official command syntax, verify the manufacturer documentation at http://www.sentarsmart.com/ because setup methods and device behavior can change over time.

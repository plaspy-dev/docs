---
slug: /sentar/d39/configuration
id: d39-configuration
sidebar_label: Configuration
title: Sentar - D39 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Sentar D39 smartwatch showing Plaspy server settings and SMS commands for setup and verification
keywords:
  - Sentar D39 configuration
  - Sentar D39 setup
  - Sentar D39 server configuration
  - Sentar D39 Plaspy
  - D39 GPS tracker
  - D39 smartwatch configuration
  - Plaspy tracker setup
  - GPS tracker configuration
  - wearable GPS tracker setup
  - child GPS watch configuration
---

# Sentar - D39 Configuration

This page covers the public configuration context for using the Sentar D39 smartwatch with Plaspy. It summarizes the practical server settings and the publicly available SMS commands from the device documentation that are commonly used to point the tracker to the Plaspy service and verify connectivity. Use this guide to understand the core steps needed to register a D39 device with Plaspy while preserving manufacturer commands and placeholders as published.

Plaspy uses shared server settings across supported devices and automatically detects tracker protocols, but exact manufacturer setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The D39 documentation includes SMS based commands and default credentials that are useful for initial provisioning, so treat those commands as manufacturer-published examples and confirm details against the device firmware and vendor documentation when possible.

## Configuration Overview

The goal of configuration is to prepare the D39 to communicate reliably with Plaspy and to confirm that the device is visible and reporting in the Plaspy platform. The steps below focus on pointing the device to Plaspy, validating connectivity, and enabling ongoing uploads so the watch appears on Plaspy dashboards.

- Set the D39 to use Plaspy server settings so location and status reports reach the platform.
- Apply APN and GPRS parameters so the device can use cellular data for uploads.
- Choose UDP or TCP transport and set the shared Plaspy port so uploads match platform expectations.
- Validate device reporting and review status with a verification command or by checking Plaspy visibility.
- Optionally perform a factory reset or timezone adjustment during initial provisioning if required.

## Plaspy Server Settings

Use the following server settings when configuring the D39 for Plaspy. These are the publicly documented Plaspy connection values used for all supported devices.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be configured on the device
- Plaspy automatically detects the tracker protocol so the server will accept compatible device messages

Note: Plaspy uses the same port for all devices, and its protocol detection removes the need to specify a protocol type beyond transport selection if the tracker requires it.

## Typical Requirements Before Setup

- A charged D39 device with access to its SMS or manufacturer configuration interface.
- A working SIM card with data enabled and the correct APN for the mobile operator.
- An SMS capable phone or provisioning tool to send configuration commands if using SMS configuration.
- Knowledge of the device default password (manufacturer sample shows 123456) and instructions to change it after setup.
- Access to the official Sentar configuration documentation or vendor support for firmware specific behavior.
- Confirmation that the target environment has cellular coverage compatible with the device bands.

## How This Tracker Connects to Plaspy

The D39 transmits positional and status information to the Plaspy server endpoint and port so that location, alerts, and device telemetry appear in Plaspy dashboards. Configuration directs the watch to send periodic uploads to the shared Plaspy endpoint and to use either UDP or TCP transport as required.

- The watch uploads GPS and assisted positioning fixes to the Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888.
- The D39 can be configured to use UDP or TCP transport depending on firmware and installer preference.
- Plaspy receives the uploads and automatically detects the tracker protocol for correct parsing and display.
- SOS or alert events reported by the device are forwarded into Plaspy for immediate visibility.
- Periodic uploads and status reports allow monitoring of battery and connectivity in Plaspy.

## Common Configuration Workflow

1. Access the official Sentar configuration method for the D39 (SMS provisioning commands or the vendor tool) as described in the manufacturer documentation.
2. Send or enter the APN details for the device operator and confirm GPRS connectivity so the device can use mobile data.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 into the device configuration.
4. Set the server port to 8888 and choose UDP or TCP transport if the device requires a transport selection.
5. Apply or save the configuration on the device and restart the device if the device or vendor docs recommend a reboot.
6. Verify that the device reports to Plaspy by using the device verification command or checking that the device is visible on Plaspy dashboards.
7. Change the default device password from 123456 to a secure password after successful registration, following Sentar guidance.

## Example Configuration Commands

The Sentar D39 documentation includes SMS commands that may be used for provisioning. Below are the publicly published commands in the same order they were provided. Respect manufacturer guidance and confirm the exact syntax on your device's firmware before sending commands.

- Factory reset (optional initial step)
```text
pw,123456,factory#
```

- Set the time zone to UTC+0
```text
pw,123456,lz,0,0#
```

- Check the MCC and MNC (IMSI related check)
```text
pw,123456,imsi#
```

- Set the operator APN. The command includes placeholders for APN values and an operator code section
```text
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```
Explanation of placeholders:
- {{apn}} — primary APN name for the mobile operator
- {{apnu}} — APN username if required by the operator, or blank if not used
- {{apnp}} — APN password if required by the operator, or blank if not used
- xxxyy — placeholder in the published command indicating combined MCC and MNC digits used by the device

- Set GPRS server to Plaspy by IP and port (as published)
```text
pw,123456.ip,54.85.159.138,8888#
```
Note: The published command string contains the literal sequence shown above from the manufacturer content. Verify whether your firmware expects commas or different separators.

- Set upload interval to 300 seconds (5 minutes)
```text
pw123456,upload,300#
```
Note: This upload command was published in the manufacturer content; confirm exact syntax for your firmware as some variants include a comma after the password.

- Check current settings
```text
pw,123456,ts#
```

Important: The manufacturer sample uses 123456 as the default device password in published examples. Change the device password after provisioning where supported.

## Configuration Notes

- SMS based provisioning is included in the public manufacturer examples; use an SMS capable phone and follow vendor guidance for timing and retries.
- Firmware and hardware revisions can alter required command syntax or supported commands. Always confirm syntax against the device firmware release notes.
- Plaspy accepts UDP and TCP on port 8888 for all devices; choose UDP or TCP on the device only if the device requires a transport selection.
- Keep APN, APN username, and APN password placeholders accurate for the operator; incorrect APN settings will prevent GPRS uploads.
- After initial provisioning, verify device visibility in Plaspy and change the default password where supported.

## Why Use Plaspy with This Configuration

Using the Sentar D39 with Plaspy brings real-time location and alert reporting into a consolidated monitoring environment, which is useful for parents, caregivers, and organizations that need continuous visibility and incident awareness. The combination of multi-mode positioning and cellular uploads enables timely location updates, while Plaspy's ingestion of device reports provides a single place for alerts, history, and status monitoring.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. For the most current device specific instructions, firmware notes, and manufacturer commands, review the official Sentar documentation at http://www.sentarsmart.com/ as manufacturer procedures and firmware behavior can change over time.

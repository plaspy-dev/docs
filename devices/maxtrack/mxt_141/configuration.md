---
slug: /maxtrack/mxt_141/configuration
id: mxt_141-configuration
sidebar_label: Configuration
title: Maxtrack - MXT-141 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Maxtrack MXT-141 to report to Plaspy using public server settings and SMS configuration examples
keywords:
  - Maxtrack MXT-141 configuration
  - Maxtrack MXT-141 setup
  - MXT-141 Plaspy configuration
  - Maxtrack GPS tracker configuration
  - MXT-141 SMS setup
  - tracker server configuration
  - vehicle tracking setup
  - Maxtrack configuration guide
  - Plaspy server settings
  - GPS platform integration
---

# Maxtrack - MXT-141 Configuration

This page documents the public configuration context for using the Maxtrack MXT-141 with the Plaspy fleet platform. It consolidates the Plaspy server settings you need, explains the common configuration workflow, and includes the public SMS configuration command provided for the MXT-141 so you can prepare the device to report to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Where possible this page uses the public MXT-141 SMS configuration example provided by the manufacturer and highlights the fields you will commonly need to set.

## Configuration Overview

The goal of this configuration is to prepare the MXT-141 to send telemetry and status reports to Plaspy so the device is visible and manageable in the platform. The public SMS command shown later is a common manufacturer-provided method to push server and APN settings to the tracker.

- Set the tracker to report to the Plaspy server endpoint and port so data reaches the platform.
- Configure APN and authentication placeholders if required by the device firmware.
- Validate transport selection and connectivity so packets arrive at Plaspy.
- Confirm the device is reporting and visible in Plaspy after applying settings.
- Use the manufacturer SMS command as an efficient way to provision devices when supported.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when data is received
- Note that Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- Access to the MXT-141 configuration method recommended by Maxtrack such as SMS provisioning or the official Maxtrack software
- A phone or tool capable of sending SMS commands to the tracker if using SMS setup
- Knowledge of the device ID (trackerID) as required by the manufacturer SMS command
- Awareness of the device password; the public example uses the default password 0000
- A functioning mobile network connection for the tracker so the SMS or network configuration takes effect
- Confirmation of the APN values for the SIM on the device if required by your operator

## How This Tracker Connects to Plaspy

When configured, the MXT-141 reports location and device data to the shared Plaspy server endpoint and port. Plaspy receives the incoming data and automatically detects the device protocol so the tracker can be recognized without custom server-side port mapping.

- The tracker sends periodic or event-based telemetry to the Plaspy endpoint at d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on how the tracker firmware is configured
- Plaspy detects the protocol automatically so the platform can parse incoming messages
- Once connected the device becomes visible in Plaspy for monitoring and operational oversight
- Validation of reporting confirms the device is communicating successfully with Plaspy

## Common Configuration Workflow

1. Access the official Maxtrack configuration method for your unit such as the documented SMS provisioning format or the vendor software.
2. Prepare the server endpoint value by entering either d.plaspy.com or 54.85.159.138 according to the method you are using.
3. Set the port to 8888 in the tracker configuration.
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Provide APN and any authentication placeholders if required and apply or save the configuration.
6. Restart the device if the manufacturer recommends it or if the device requires a reboot to apply settings.
7. Validate that the device reports to Plaspy and appears in the platform; check connectivity and initial telemetry.

## Example Configuration Commands

The MXT-141 can be configured by sending an SMS batch command to the device. The manufacturer-provided sample uses the device default password 0000 and includes placeholders for the tracker ID and APN values. Preserve placeholders when you assemble the command for your device.

- The public SMS batch command example (as provided by the manufacturer):

```
0000,{{trackerID}},2,0,[apn],[apnu],[apnp],54.85.159.138,8888,,.
```

Notes about the command:
- 0000 is the device password in the public example. This is the default password shown in the manufacturer sample.
- {{trackerID}} is a placeholder you must replace with the device ID assigned to your tracker.
- [apn], [apnu], and [apnp] are placeholders for APN, APN username, and APN password respectively; fill these with values required by the mobile operator if needed.
- The command contains the Plaspy server IP 54.85.159.138 and the port 8888 as provided in the public configuration example.
- If your installation method accepts a domain name, you may substitute d.plaspy.com for the IP when appropriate; confirm with the device documentation whether the tracker accepts domain names in SMS configuration.

## Configuration Notes

- The MXT-141 public example shows SMS-based provisioning; follow Maxtrack guidance for SMS formatting and sending procedure.
- Default passwords are often used in public examples; change the device password in production installations according to your security policy.
- Firmware and vendor tools can change the required command format or available fields; always check the device documentation for your firmware version.
- Choose UDP or TCP based on your deployment preferences and device firmware capabilities; Plaspy will automatically detect the protocol when data arrives.
- All devices use port 8888 on Plaspy so you do not need to use different ports per device on the server side.

## Why Use Plaspy with This Configuration

Configuring the MXT-141 to report to Plaspy provides a straightforward path to centralized tracking, visibility, and operational monitoring. Using the shared Plaspy server settings and the manufacturer SMS provisioning example enables consistent device onboarding and helps reduce per-device configuration complexity.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device-specific configuration methods, firmware notes, and manufacturer details verify information on the official Maxtrack site https://maxtrack.com.br.

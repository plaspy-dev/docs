---
slug: /meitrack/t622l_f9/configuration
id: t622l_f9-configuration
sidebar_label: Configuration
title: Meitrack - T622L-F9 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting Meitrack T622L F9 to Plaspy with example SMS commands and server settings
keywords:
  - Meitrack T622L F9 configuration
  - Meitrack T622L F9 setup
  - Meitrack GPS tracker configuration
  - Plaspy server setup
  - vehicle tracker configuration
  - T622L F9 SMS commands
  - fleet tracking platform setup
  - GPS tracker server configuration
  - Meitrack setup guide
  - tracking software configuration
---

# Meitrack - T622L-F9 Configuration

This page covers the public configuration context for using the Meitrack T622L-F9 tracker with Plaspy. It focuses on the practical server settings and the common setup flow required to point the tracker to Plaspy so the device can report locations and events to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary depending on firmware, hardware revision, installation type, and the vendor tools used. The guidance here is grounded in public configuration commands and the standard Plaspy server information provided for device integration.

## Configuration Overview

Configuring the T622L-F9 for Plaspy prepares the tracker to send its location and event data to the Plaspy platform and ensures visibility in the fleet dashboard. The model supports SMS based configuration commands in public documentation, and the process normally involves setting the GPRS server details, timing, and event reporting rules.

- Set the device GPRS server entry to Plaspy so the tracker forwards data to the platform
- Configure the reporting interval and time zone so data arrives at predictable times
- Enable or adjust event reporting so alerts are visible inside Plaspy
- Use SMS commands or the official manufacturer tool to apply settings and save the configuration
- Verify the device is visible and reporting to Plaspy after applying configuration

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device preference
- Plaspy automatically detects the tracker protocol when the device connects

All devices connected to Plaspy use the same port and Plaspy will detect which protocol the tracker is using so you do not need to provide a protocol identifier to the platform.

## Typical Requirements Before Setup

- Device is powered and able to receive SMS if you will use SMS commands for configuration
- A data capable SIM provisioned with the correct APN and any required credentials
- Access to the manufacturer configuration method such as SMS commands or the Meitrack configuration tool
- Knowledge of the current device password if it has been changed from the factory default
- A plan for validating the tracker after configuration to confirm it is reporting to Plaspy
- Basic understanding of whether the tracker should use UDP or TCP for transport

## How This Tracker Connects to Plaspy

The T622L-F9 is configured to report to the shared Plaspy server endpoint and port so location updates and configured events are visible on the platform. Plaspy receives the device connection and automatically detects the protocol to interpret incoming messages.

- The tracker sends GPRS data to d.plaspy.com or the numeric server IP 54.85.159.138 on port 8888
- You can choose UDP or TCP as the transport when the device requires a selection
- Periodic position reports and event messages are delivered to Plaspy for processing
- Plaspy groups incoming device messages and maps them to the correct device profile using protocol detection
- Validating the device in Plaspy confirms that data is received and parsed correctly

## Common Configuration Workflow

1. Access the official Meitrack configuration method such as SMS commands or the Meitrack software tool to edit device settings
2. Enter the Plaspy server using d.plaspy.com or the numeric IP 54.85.159.138 in the device server settings
3. Set the server port to 8888 which is the shared port used by Plaspy for all devices
4. Choose UDP or TCP transport if the device requires you to select one
5. Apply or save the configuration on the tracker using the manufacturer method
6. Restart the device if the device requires a reboot to apply network settings
7. Validate that the tracker reports to Plaspy by checking device activity in the platform

## Example Configuration Commands

The T622L-F9 can be configured via SMS commands. The following public commands are provided in the manufacturer documentation. The device default password shown below is 0000. Keep placeholders such as {{apn}}, {{apnu}}, and {{apnp}} and replace them with your SIM carrier APN, APN username, and APN password when required.

- Optional initial factory reset using the default device password 0000
```text
0000,F11
```

- Set the GPRS server to Plaspy using the numeric server IP and port plus the SIM APN
```text
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
Explanation: {{apn}} is the SIM card data APN. {{apnu}} and {{apnp}} are optional APN username and APN password placeholders if your carrier requires them.

- Set the time zone to UTC 0
```text
0000,B36,0
```

- Set the upload interval to every 1 minute
```text
0000,A12,6,0
```

- Set event reporting configuration as shown in public documentation
```text
0000,C03,0
```

Preserve the order above when following the manufacturer example, and replace the placeholders with your actual APN values. If you changed the device password from the factory default 0000, use the current password instead.

## Configuration Notes

- Firmware or hardware revisions may change command syntax or available options; always verify commands against the device firmware release notes
- SMS based setup is supported by the public commands shown here and can be used when the device cannot be accessed via a configuration tool
- When available choose UDP or TCP based on your network needs; the device and Plaspy will operate with either transport, and Plaspy will automatically detect protocol
- Use the same port 8888 for all devices when pointing them to Plaspy to ensure correct routing
- Keep the device password secure and update it from the factory default if required by your security policy
- Test the configuration and confirm the device appears in Plaspy before completing installation

## Why Use Plaspy with This Configuration

Using Plaspy with the Meitrack T622L-F9 provides a straightforward path to consolidated fleet visibility and operational monitoring. By pointing the tracker to the shared Plaspy server endpoint and port, organizations can centralize location reports and event data from the device and benefit from Plaspy protocol detection and device handling.

To learn more about Plaspy and how it integrates with compatible trackers visit https://www.plaspy.com. For the latest device specific commands, firmware notes, or changes to configuration methods verify details on the manufacturer website https://www.meitrack.com/ where Meitrack publishes official documentation and updates.

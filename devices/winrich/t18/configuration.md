---
slug: /winrich/t18/configuration
id: t18-configuration
sidebar_label: Configuration
title: Winrich - T18 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring Winrich T18 with Plaspy servers for GPS tracking and alerts
keywords:
  - Winrich T18 configuration
  - Winrich T18 setup
  - T18 server configuration
  - T18 Plaspy integration
  - Winrich GPS watch setup
  - T18 tracking software configuration
  - Plaspy tracker setup
  - GPS tracker configuration
  - personal safety tracker setup
  - wearable GPS configuration
---

# Winrich - T18 Configuration

This page covers the public configuration context for using the Winrich T18 GPS tracking watch with the Plaspy platform. It collects the practical details and public commands you can use to point a T18 device to Plaspy servers so the device can report location, SOS alerts, and telemetry into the Plaspy environment.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol used by a device. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools; where available this page includes the Winrich T18 SMS commands commonly used for configuration so you can apply the Plaspy server values.

## Configuration Overview

Configuring a T18 for Plaspy focuses on preparing the device to communicate with the Plaspy server endpoint and verifying that it reports correctly. For the T18 this often means using the device SMS configuration method to set network and reporting parameters and then confirming visibility in Plaspy.

- Set the device GPRS server to the Plaspy server address and port so the T18 sends location and event data to Plaspy.
- Configure the device APN and any SIM related parameters so the T18 can establish data connections.
- Choose the transport protocol (UDP or TCP) on the device if required and use Plaspy port 8888 which is common across all devices.
- Validate settings using the T18 verification commands and confirm the device appears in the Plaspy dashboard.
- Adjust reporting interval and timezone on the device to match your monitoring needs and local time context.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note: All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol, so you only need to set the server address and port on the device and choose a transport if the device requires one.

## Typical Requirements Before Setup

- A charged and accessible T18 device with a working SIM card that can register on the GSM network.
- An APN and any APN username or password required by the SIM operator for GPRS data.
- Ability to send SMS to the device for SMS based configuration or access to the manufacturer configuration tool if provided.
- Access to the device documentation or the manufacturer support site to confirm model specific command format.
- A Plaspy account and permission to add or verify devices in the Plaspy platform for final validation.

## How This Tracker Connects to Plaspy

The Winrich T18 transmits position and event data over GSM to the Plaspy endpoint you configure on the device. Once the device is pointed at the Plaspy server and port, Plaspy processes the telemetry and exposes it in the platform for real time monitoring, alerting, and history playback.

- The T18 reports GPS and LBS location updates to the Plaspy server endpoint.
- SOS and other event alerts are sent from the T18 to Plaspy and then surfaced to authorized users.
- Device telemetry such as battery level and periodic location updates are forwarded to Plaspy for operational monitoring.
- The tracker is configured to report to the shared Plaspy server endpoint and port so it becomes visible in the Plaspy dashboard.
- Plaspy automatically detects the tracker protocol so no additional protocol selection is needed on the server side.

## Common Configuration Workflow

1. Access the official Winrich configuration method for the T18, commonly SMS commands sent to the watch or a manufacturer provided tool.
2. Enter the Plaspy server address by configuring either d.plaspy.com or the server IP 54.85.159.138 on the device.
3. Set the device port to 8888, noting that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP on the device if the T18 requires a transport selection for GPRS reporting.
5. Apply and save the configuration on the device; for SMS methods this means sending the appropriate command sequence.
6. Restart the device if required by the manufacturer to apply new network settings.
7. Validate that the device reports to Plaspy by checking device visibility and incoming location updates in the Plaspy platform.

If you use SMS to configure the device, send the commands in the order recommended by the manufacturer and confirm each step with the device verification commands.

## Example Configuration Commands

The Winrich T18 supports SMS based configuration. Below are the common public SMS commands in the order recommended for initial setup. Preserve and replace placeholders where required.

- Factory reset (optional initial step)
```text
940#
```

- Set the time zone to UTC 0
```text
801#W0#
```

- Set the operator APN
Note: Replace {{apn}} with your mobile operator APN. If your operator requires an APN username and password, include {{apnu}} and {{apnp}} as provided by your operator.
```text
802#{{apn}}#{{apnu}}#{{apnp}}#
```

- Set the GPRS server to Plaspy server IP and port
```text
803#54.85.159.138#8888#
```

- Set the update interval to 60 seconds
```text
730#60#
```

- Check current settings
```text
886#
```

- Check device status
```text
902#
```

Send each SMS command to the T18 from an authorized number. Where the APN command supports empty username or password fields, omit the username and password placeholders if your operator does not require them.

## Configuration Notes

- The T18 supports SMS based configuration as shown above; confirm that your installer or provisioning workflow includes SMS provisioning rights and the device has GSM coverage.
- Firmware differences and hardware revisions can change command behavior or required syntax. If a command fails, verify the device firmware revision and consult the manufacturer documentation.
- Choose UDP or TCP according to your installer preference; Plaspy accepts both but the transport selection is made on the device side if required.
- Remember that Plaspy uses the same port 8888 for all devices and automatically detects device protocol, so server address and port are the primary server side values to apply.
- If you are using an operator APN that requires authentication, include the APN username and password in the APN command as placeholders shown.

## Why Use Plaspy with This Configuration

Using the Winrich T18 with Plaspy provides a straightforward path to continuous location visibility, SOS alert handling, and event monitoring for caregivers and institutions. Configuring the watch to report to Plaspy centralizes alerts, history playback, and monitoring so supervisors can respond to incidents quickly while keeping a reliable record of device telemetry.

To learn more about Plaspy and how it supports wearable trackers like the Winrich T18, visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup details on the Winrich website http://www.winrichgroup.com/en/.

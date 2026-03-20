---
slug: /coban/bn_401d/configuration
id: bn_401d-configuration
sidebar_label: Configuration
title: Coban - BN-401D Configuration
sidebar_class_name: menu_item_tracker
description: Coban BN-401D setup and server details for Plaspy compatible tracking and alerts
keywords:
  - Coban BN-401D configuration
  - BN-401D Plaspy setup
  - Coban tracker configuration
  - BN-401D server configuration
  - motorcycle GPS tracker setup
  - Plaspy device setup
  - GPS tracker SMS commands
  - BN-401D APN settings
  - vehicle tracking configuration
  - Coban GPS platform setup
---

# Coban - BN-401D Configuration

This page documents the public configuration context for using the Coban BN-401D with the Plaspy platform. It focuses on the practical steps and public settings you will apply on the device so it can report location, alarms, and telemetry into Plaspy for monitoring and playback. The guidance here is based on the BN-401D description and the publicly available SMS configuration commands for this model.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer-side setup steps can vary by firmware, hardware revision, installation type, or vendor tools. The BN-401D supports SMS configuration and GPRS reporting and may be configured to use UDP or TCP on the Plaspy server port shown below. Always confirm device behavior against the manufacturer documentation when in doubt.

## Configuration Overview

This configuration process prepares the BN-401D to communicate reliably with Plaspy, verifies connectivity, and ensures the device is visible in the Plaspy dashboard. The public SMS commands for the BN-401D make it straightforward to set APN, server endpoint, transport mode, and reporting intervals from a mobile phone or an installer tool that sends SMS to the device.

- Send APN and authentication details so the tracker can register on the mobile data network.
- Set the Plaspy server endpoint and port so the device forwards telemetry to Plaspy.
- Choose UDP or TCP transport and enable GPRS reporting for consistent updates.
- Verify the device password and check settings to confirm registration and telemetry flow.
- Validate that location, alarms, and state updates appear in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and installed BN-401D with access to its SMS configuration interface or installer tool.
- An active SIM card with data enabled and correct APN credentials for the mobile operator.
- A phone or SMS service capable of sending configuration SMS commands to the device.
- Knowledge of the device password (the public default password shown in the commands below is 123456 unless changed).
- Basic wiring and power verification so the tracker has stable 12 V to 24 V vehicle power during configuration.
- Access to manufacturer documentation or vendor guidance for hardware specific notes and wiring.

## How This Tracker Connects to Plaspy

The BN-401D is configured to send GPS positions, alarm events, and device state to the Plaspy server endpoint so the platform can display live positions, replay tracks, and trigger alerts. Use the shared Plaspy server endpoint and port so Plaspy can ingest and automatically detect the tracker protocol for processing.

- The tracker is set to report to the Plaspy server domain or IP and port for GPRS delivery.
- Device alarms such as SOS, shock, and power events are forwarded to Plaspy as event messages.
- Position updates are transmitted at configured intervals so Plaspy can display real-time location and track history.
- Plaspy receives device state information for monitoring battery and external power.
- The platform detects the tracker protocol automatically once the device connects to the Plaspy server endpoint.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or SMS based setup instructions provided by Coban or your vendor.
2. Ensure the BN-401D is powered, the SIM is inserted, and you have the operator APN and credentials ready.
3. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 into the device configuration.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration and, if required, send the SMS commands to activate GPRS reporting.
6. Restart the device if indicated by the manufacturer or after major configuration changes.
7. Validate that the device reports to Plaspy and that positions and events appear in the platform.

## Example Configuration Commands

The BN-401D supports SMS configuration commands. The public sample commands below use the device default password 123456. Preserve the placeholders [apn], [apnu], and [apnp] when substituting your mobile operator values.

- Optional initial factory reset (use only when needed)
```text
begin123456
```

- Set the time zone to UTC 0
```text
time zone123456 0
```

- Set the operator APN (replace [apn] with your operator APN)
```text
apn123456 [apn]
```

- Set the APN username and password (replace [apnu] and [apnp] with operator credentials)
```text
up123456 [apnu] [apnp]
```

- Set the GPRS server to the Plaspy server IP and port
```text
adminip123456 54.85.159.138 8888
```

- Set a reporting interval sample (example command used by this model to schedule periodic fixes)
```text
fix060s060s***n123456
```

- Switch to GPRS mode and choose transport (sample options shown)
```text
gprs123456,1,1
```
or a simpler variant
```text
gprs123456
```

- Check current device settings
```text
check123456
```

- Enable enhanced protocol or extra sensor reporting for improved digital sensor status
```text
protocol123456 18
```

Notes on placeholders and commands
- [apn] is the mobile operator APN string required for data connectivity.
- [apnu] and [apnp] are the APN username and password where the operator requires authentication; many operators use empty values.
- The example adminip command above sets the device to report to the Plaspy server IP 54.85.159.138 on port 8888. You may alternatively use the domain d.plaspy.com if your device resolves domain names via DNS.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available options; verify commands against the device firmware you have installed.
- TCP versus UDP: choose the transport that best fits your network and installer preference. Plaspy accepts either and will detect the protocol automatically once the device connects.
- SMS based setup is supported for the BN-401D but may be replaced by an installer tool or configuration software provided by Coban or resellers.
- Keep the device password secure; the public default shown in the sample commands is 123456 and should be changed in production if supported.
- Always verify APN details with the mobile operator to ensure the device can establish data connections.

## Why Use Plaspy with This Configuration

Using the BN-401D with Plaspy provides a practical way to centralize location, alarm, and device state monitoring for motorcycles and small vehicles. The BN-401D's LTE first design with 2G fallback and the ability to configure reporting via SMS or GPRS makes it suitable for concealed installations and fleet scenarios where remote telemetry and immobilizer controls are valuable.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration methods, firmware behavior, and manufacturer instructions at the official Coban website https://www.coban.net/ to ensure your setup matches current product documentation.

---
slug: /meitrack/tc68l_e/configuration
id: tc68l_e-configuration
sidebar_label: Configuration
title: Meitrack - TC68L/E Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Meitrack TC68L E showing Plaspy server settings and example SMS commands
keywords:
  - Meitrack TC68L E configuration
  - Meitrack TC68L E setup
  - TC68L E server configuration
  - TC68L E Plaspy setup
  - Meitrack OBD tracker configuration
  - Plaspy device configuration
  - TC68L E SMS commands
  - TC68L E GPRS setup
  - Meitrack tracker Plaspy compatibility
  - vehicle GPS tracker configuration
---

# Meitrack - TC68L/E Configuration

This page covers the public configuration context for using the Meitrack TC68L/E tracker with Plaspy. It collects the essential Plaspy server settings and presents example manufacturer commands where publicly available so you can prepare the device to report into Plaspy for live tracking and telemetry.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TC68L/E supports SMS and GPRS configuration methods documented below, and the example SMS commands shown are based on publicly available manufacturer content.

## Configuration Overview

Preparing a TC68L/E for Plaspy ensures the device can send GNSS position and OBD telemetry to the Plaspy platform and be visible in your Plaspy workspace. The configuration process usually sets the server endpoint, transport, data reporting intervals, and any required APN credentials for cellular data.

- Set the device to report to the Plaspy server endpoint so Plaspy receives location and telemetry.
- Configure GPRS or SMS settings including APN credentials when required by the mobile network.
- Choose the transport protocol (UDP or TCP) and ensure the device points to Plaspy port 8888.
- Verify reporting intervals and event settings so telemetry appears in Plaspy as expected.
- Validate the device is active in Plaspy and that position updates and OBD metrics are visible.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the TC68L/E:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Confirm the TC68L/E is powered and installed in the vehicle OBD II port or otherwise powered according to the manufacturer instructions.
- Ensure the device has an active cellular SIM and that the mobile operator APN information is available.
- Have a way to send SMS commands to the device or access the official manufacturer configuration tool or portal.
- Know the device password if different from the factory default; the example commands below use the default password 0000 as shown in public manufacturer content.
- Confirm network coverage for GPRS data so the tracker can reach the Plaspy server.
- Access to the official Meitrack documentation or vendor-provided configuration utilities for firmware specific instructions.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the TC68L/E sends GNSS location and OBD telemetry to the shared Plaspy server endpoint and port. Plaspy receives the device data and associates it with your account so you can monitor position, vehicle diagnostics, and event alerts.

- The tracker reports position and telemetry to d.plaspy.com (or the equivalent IP 54.85.159.138) on port 8888.
- Transport can be UDP or TCP depending on the device settings; the device may be configured with either protocol on port 8888.
- Plaspy automatically detects the tracker protocol so the platform can ingest telemetry from the device without manual protocol mapping.
- Data reporting intervals and event rules determine how frequently positions and OBD metrics appear in Plaspy.
- After successful configuration, the device becomes visible in Plaspy dashboards for live tracking, history playback, and alerting.

## Common Configuration Workflow

1. Access the official Meitrack configuration method for the TC68L/E, such as SMS commands, the vendor web tool, or a configuration utility supplied by your vendor.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device GPRS/server settings.
3. Set the device port to 8888 as Plaspy uses this port for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection; both are supported to reach Plaspy.
5. Add APN credentials if required by your SIM carrier using the appropriate configuration field or SMS command placeholders.
6. Apply or save the configuration on the device and restart the tracker if required by the manufacturer.
7. Validate that the device reports to Plaspy by checking for incoming positions and telemetry in your Plaspy account.

## Example Configuration Commands

The following example SMS commands are taken from public manufacturer configuration content for the TC68L/E. They show a typical sequence used to prepare the device for GPRS reporting to Plaspy. The sample uses the device default password 0000 as shown in the public content. If your device uses a different password, replace the initial 0000 with the correct password.

1. Optional initial factory reset or to restore defaults (label as optional initial setup):
```
0000,F11
```

2. Set the GPRS server to Plaspy. This command sets server type 2 with the Plaspy server IP, port, and APN. The APN placeholders must be replaced with your carrier values. Username and password are optional and shown here as placeholders.
```
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
- {{apn}} = your mobile operator APN
- {{apnu}} = APN username if required by your operator (optional)
- {{apnp}} = APN password if required by your operator (optional)

3. Set the time zone to UTC 0:
```
0000,B36,0
```

4. Set the reporting interval to every 1 minute (example public command for 1 minute update):
```
0000,A12,6,0
```

5. Configure event reporting (example public command included by manufacturer):
```
0000,C03,0
```

Notes about the example commands:
- Keep the command order when performing an initial setup if you want to restore defaults then apply server settings and reporting rules.
- The default password 0000 is used in these examples because it is shown in public manufacturer content. Replace it if your device has a different password.
- If you prefer to configure using the Meitrack configuration tool or a vendor portal, apply the same server domain/IP, port, transport, and APN values there.

## Configuration Notes

- SMS based setup is supported by the TC68L/E according to public manufacturer content, but vendor tools and firmware updates can add alternative configuration methods.
- Firmware versions and hardware revisions may change command syntax or available parameters; verify the exact commands for your device firmware.
- Choose UDP or TCP based on your network and reliability needs; both transports are accepted by Plaspy on port 8888.
- Keep APN credentials ready when configuring GPRS; missing or incorrect APN settings will prevent the device from sending data to Plaspy.
- If you perform a factory reset, reapply the Plaspy server settings and reporting rules afterwards.

## Why Use Plaspy with This Configuration

Using the Meitrack TC68L/E with Plaspy provides straightforward OBD II plug-and-play telemetry and positioning reporting into a single platform. This combination can speed deployment for fleet, rental, and car share services by reducing installation time while providing continuous visibility into vehicle location and diagnostics.

To learn more about Plaspy and how it supports device connectivity and telemetry workflows, visit https://www.plaspy.com. For the most current device specific configuration details, firmware behavior, and manufacturer commands confirm the latest documentation at https://www.meitrack.com/ before applying changes.

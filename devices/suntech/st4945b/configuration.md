---
slug: /suntech/st4945b/configuration
id: st4945b-configuration
sidebar_label: Configuration
title: Suntech - ST4945B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST4945B with Plaspy server settings commands and practical setup steps
keywords:
  - Suntech ST4945B configuration
  - Suntech ST4945B setup
  - Suntech configuration Plaspy
  - GPS tracker setup Plaspy
  - ST4945B server configuration
  - ST4945B tracking software configuration
  - GPS platform setup Plaspy
  - asset tracker configuration guide
  - LTE Cat M1 tracker setup
  - NB IoT tracker configuration
---

# Suntech - ST4945B Configuration

This page documents the public configuration context for using the Suntech ST4945B tracker with Plaspy. It explains the Plaspy server settings and provides practical guidance based on the publicly available device configuration snippet included with this model. The ST4945B is a rugged LTE Cat M1 / NB‑IoT asset tracker designed for long term low power monitoring and is compatible with Plaspy out of the box.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The ST4945B can be configured using SMS commands as shown below or via official Suntech configuration tools depending on your deployment and available interfaces.

## Configuration Overview

This configuration process prepares the ST4945B to send GNSS positions and telemetry to Plaspy and validates connectivity so the device becomes visible in the Plaspy platform. The example configuration shown below comes from the device public configuration snippet and uses SMS commands to set APN and the Plaspy server endpoint.

- Configure the device network APN and GPRS server to enable mobile data.
- Point the tracker to the Plaspy server using the shared Plaspy endpoint and port.
- Set the reporting interval so the device transmits updates at the required cadence.
- Verify settings and confirm the device reports to Plaspy for live tracking and history playback.
- Use the device IMEI to derive the internal device ID required by Suntech SMS commands.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol so the platform can ingest TCP or UDP streams

## Typical Requirements Before Setup

- A working SIM card installed in the ST4945B with active mobile data and SMS capability for SMS based configuration.
- The device IMEI to derive the Suntech device ID used in SMS commands.
- APN, APN username, and APN password details from your mobile operator where required.
- Access to the official Suntech configuration method or SMS interface to send configuration commands.
- A Plaspy account or device registration on Plaspy so reported devices are visible after setup.
- A reliable power source or fully charged battery during configuration to prevent interruptions.

## How This Tracker Connects to Plaspy

When configured, the ST4945B sends GNSS positions and telemetry to the shared Plaspy server endpoint and port. Plaspy ingests those TCP or UDP streams and maps the device by its reporting ID so you get real time visibility and event reporting on the platform. The common flow is simple and repeatable across deployments.

- The tracker reports to the Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- Data may be sent over UDP or TCP depending on device settings and network conditions.
- Plaspy automatically detects the protocol and parses telemetry for dashboard and alerting functions.
- Regular position updates and event messages allow history playback and rule based notifications.
- Verification commands or status queries can confirm the device is pointing at the Plaspy server.

## Common Configuration Workflow

1. Access the official Suntech configuration method or SMS based setup instructions provided by the manufacturer or your vendor.
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device network settings.
3. Set the server port to 8888 as the single shared port used by Plaspy for all devices.
4. Choose the transport protocol UDP or TCP if the device requires an explicit transport selection.
5. Configure APN, APN username, and APN password fields as required by your mobile operator.
6. Apply or save the configuration and restart the device if required by the firmware or tool.
7. Validate the device is reporting to Plaspy by checking device status in Plaspy and using the device verification command shown below.

## Example Configuration Commands

The ST4945B public configuration uses SMS to set network and reporting parameters. The device ID used in commands is the six digits taken from the IMEI excluding the final digit. For example, if the IMEI is 123456789012345 the device ID is 901234.

- Placeholders used in the commands
  - [device_id] the six digit device ID derived from the IMEI as described above
  - [apn] the operator APN
  - [apnu] the APN username if required
  - [apnp] the APN password if required

1) Set the operator APN and Plaspy GPRS server
Send this SMS to the device phone number. The fourth numeric field should be 1 if you supply an APN username or password, otherwise use 0.

```
SA200NTW;[device_id];02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

If you do not need APN authentication, use:

```
SA200NTW;[device_id];02;0;[apn];;;54.85.159.138;8888;;;;
```

2) Set the periodic update interval to 60 seconds
This command sets reporting frequency values and related timing fields. Adjust only if your deployment needs different intervals.

```
SA200RPT;[device_id];02;60;60;60;3;0;0;0;0;0
```

3) Check current settings on the device
Use this verification command to request the PresetA configuration back from the device.

```
SA200CMD;[device_id];02;PresetA
```

Notes about sending commands
- Send the SMS messages to the phone number of the SIM inside the ST4945B.
- Replace [device_id], [apn], [apnu], and [apnp] with your values.
- The server host in these commands uses the Plaspy IP 54.85.159.138 and port 8888 as required by Plaspy.

## Configuration Notes

- Firmware and hardware revisions can alter command formats or available fields. Always verify the exact SMS syntax for your device firmware.
- The ST4945B supports SMS based configuration as shown, but some deployments use Suntech configuration tools or a maintenance server for bulk provisioning.
- Choose UDP or TCP based on your site requirements and note that Plaspy will accept either and auto detect the protocol.
- Ensure APN credentials are correct; incorrect APN settings are the most common cause of connectivity failures.
- Because Plaspy uses the same port for all devices, the key items to change per device are the device ID and APN fields.

## Why Use Plaspy with This Configuration

Using the ST4945B with Plaspy gives organizations long life telemetry and resilient connectivity for assets in harsh outdoor deployments. Pointing the tracker to Plaspy with the settings above makes the device immediately available for real time monitoring, event alerts, and historical playback while preserving low power operation and robust connectivity fallbacks.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific setup instructions, firmware clarifications, and command syntax verify details on the manufacturer website http://www.suntechint.com/ since manufacturer documentation and firmware behavior can change over time.

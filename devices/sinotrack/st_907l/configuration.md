---
slug: /sinotrack/st_907l/configuration
id: st_907l-configuration
sidebar_label: Configuration
title: SinoTrack - ST-907L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for SinoTrack ST-907L and Plaspy server integration with practical setup steps
keywords:
  - SinoTrack ST-907L configuration
  - SinoTrack ST-907L setup
  - ST-907L Plaspy
  - SinoTrack configuration guide
  - Plaspy tracker setup
  - GPS tracker configuration
  - vehicle tracking setup
  - ST-907L server configuration
  - SinoTrack GPS platform setup
  - Plaspy compatibility guide
---

# SinoTrack - ST-907L Configuration

This page provides the public configuration context for using the SinoTrack ST-907L with Plaspy. It describes the practical, manufacturer-provided commands and server settings you can use to point the device at Plaspy and validate connectivity so the tracker appears in your Plaspy account. Where available, we include the SMS commands and steps published for the ST-907L.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The ST-907L modelConfiguration shows SMS based commands and the RCONF verification ID used by SinoTrack to confirm device parameters before you complete registration in Plaspy.

## Configuration Overview

This configuration process prepares the ST-907L to communicate reliably with Plaspy using the platform's shared server endpoint and port. The typical goal is to configure APN and GPRS settings, point the device at Plaspy, confirm the device identity with RCONF, and validate that position and event data arrive in the platform.

- Configure device APN and GPRS server settings so the tracker can open a data session to Plaspy.
- Point the device to the Plaspy server endpoint so telemetry and position reports are sent to the central account.
- Validate the tracker ID via the RCONF response so Plaspy can link the unit to your account.
- Enable regular position reporting intervals to ensure live visibility and history in Plaspy.
- Confirm transport selection (UDP or TCP) if the device requires explicit selection before testing.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888 — Plaspy uses the same port for all supported devices
- Transport support: UDP or TCP can be used on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered and installed ST-907L unit with access to the unit's SMS command interface or manufacturer configuration tool.
- A working SIM card with data enabled and correct APN settings for the mobile operator.
- Access to the device owner or installer documentation from SinoTrack for model specific commands and firmware notes.
- A Plaspy account and the ability to identify the tracker in the platform after it reports.
- A test environment or safe location to reboot and validate the device without interrupting operations.

## How This Tracker Connects to Plaspy

The ST-907L is configured to report location and event data to Plaspy by setting the device GPRS server parameters to the Plaspy endpoint and enabling GPRS mode. Once configured, the unit opens a data connection and the platform receives GNSS fixes, alarms, and other telemetry so the device becomes visible on the Plaspy dashboard.

- Device sends periodic position reports to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on the tracker configuration; Plaspy accepts both and performs automatic protocol detection.
- Plaspy processes incoming messages and associates the tracker using the ID shown by the device RCONF response.
- Event and alarm reports such as power loss, vibration, and immobilizer actions are forwarded to Plaspy for alerts and history.
- Regular update intervals allow live map tracking, route history, and operational monitoring inside Plaspy.

## Common Configuration Workflow

1. Access the official SinoTrack configuration method for the device, typically SMS commands or vendor software per the manufacturer documentation.
2. Configure the device APN with your operator settings so it can establish GPRS data connectivity.
3. Enter d.plaspy.com or 54.85.159.138 into the device GPRS server settings as the Plaspy endpoint.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device and, if required, switch the unit to GPRS mode or reboot the tracker.
6. Restart the device if recommended by the manufacturer to ensure the new settings take effect.
7. Validate the device reports to Plaspy by checking for the unit ID via RCONF and confirming the unit appears in your Plaspy account.

## Example Configuration Commands

The following public SMS commands are provided in the modelConfiguration for SinoTrack units. Preserve command order when applying them and send them from the authorized phone number according to SinoTrack guidance.

- Optional initial reset (use only if you need to restore factory defaults before configuration):
```
RESET
```

- Set the time zone to UTC 0:
```
8960000E00
```

- Set the APN for your mobile operator (replace placeholders as needed):
```
8030000 [apn] [apnu] [apnp]
```
Explanation: [apn] is the operator APN, [apnu] is the APN username if required, and [apnp] is the APN password if required. Omit or leave placeholders blank per your operator requirements.

- Set up the GPRS server to point to Plaspy using the server IP and port:
```
8040000 54.85.159.138 8888
```
Note: You may instead enter the server domain d.plaspy.com in operator tools that accept hostnames. Plaspy accepts connections on port 8888 for all devices.

- Set update interval when movement is detected or tracking on:
```
8050000 60
```

- Set update interval when tracking is off or for other interval modes:
```
8090000 60
```

- Switch the device to GPRS mode:
```
7100000
```

- Verify current settings and device identification (RCONF returns device parameters including the ID used by Plaspy):
```
RCONF
```

Send these commands exactly as provided by SinoTrack SMS procedures. If your operator or device uses hostname instead of IP, you can set d.plaspy.com via supported configuration tools; otherwise use the server IP shown above.

## Configuration Notes

- SMS based configuration is documented for the ST-907L; manufacturer tools or newer firmware may offer alternative configuration interfaces.
- Firmware and hardware revisions can change command formats or available parameters; always verify command compatibility with the device firmware you have installed.
- Choose UDP or TCP based on installer preference; Plaspy accepts both and automatically detects the protocol when the device connects on port 8888.
- Keep APN placeholders [apn], [apnu], and [apnp] available to replace with your mobile operator values; missing or incorrect APN prevents GPRS connectivity.
- Use the RCONF verification command to confirm the device ID and server settings before attempting to register or locate the device in Plaspy.

## Why Use Plaspy with This Configuration

Using the ST-907L with Plaspy gives organizations centralized visibility over vehicles and assets with minimal configuration. Pointing the tracker at Plaspy and confirming the RCONF ID provides fast integration into real-time dashboards, alerting workflows, and route history reporting that help operations teams improve response times and reduce theft risk.

To learn more about Plaspy and how it works with compatible trackers, visit https://www.plaspy.com. For the latest device specific instructions, firmware notes, and manufacturer details for the SinoTrack ST-907L, confirm current information at the official manufacturer site https://www.sinotrackgps.com/.

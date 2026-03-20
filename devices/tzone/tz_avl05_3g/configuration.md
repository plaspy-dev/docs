---
slug: /tzone/tz_avl05_3g/configuration
id: tz_avl05_3g-configuration
sidebar_label: Configuration
title: TZone - TZ-AVL05 3G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for TZone TZ-AVL05 3G tracking with Plaspy server settings and example SMS commands
keywords:
  - TZone TZ-AVL05 3G configuration
  - TZone TZ-AVL05 3G setup
  - TZ-AVL05 3G server configuration
  - TZ-AVL05 3G Plaspy
  - Plaspy tracker configuration
  - TZone GPS tracker setup
  - vehicle tracking TZ-AVL05 3G
  - TZone tracker APN settings
  - TZone GPRS configuration
  - TZ-AVL05 3G SMS commands
---

# TZone - TZ-AVL05 3G Configuration

This page provides public configuration context for using the TZone TZ-AVL05 3G GPS tracker with the Plaspy platform. It collects the practical server settings and the commonly used SMS configuration commands to prepare the device to report location and alarm data to Plaspy. Use this guide together with the device manual and vendor instructions when performing an installation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware revision, hardware variant, installation type, and vendor configuration tools. The TZ-AVL05 3G supports SMS and GPRS configuration methods and the commands below reflect commonly used public SMS commands for GPRS setup and reporting.

## Configuration Overview

The goal of this configuration flow is to point the TZ-AVL05 3G at Plaspy and verify that it reports regularly and reliably. The process prepares the tracker for data sessions, ensures the operator APN is correct, and enables regular position uploads so the device becomes visible in Plaspy.

- Configure the tracker with the mobile operator APN so it can establish a GPRS connection.
- Set the reporting interval so the device sends periodic position updates to Plaspy.
- Configure the GPRS server address and port to point to Plaspy using the same shared port used by all devices.
- Activate GPRS mode so the tracker initiates data sessions rather than only using SMS.
- Validate connectivity and confirm the device appears on Plaspy with expected update frequency.
- Use SMS or the manufacturer tool to make these changes depending on the device's firmware and installer workflow.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be used; choose the transport if the device requires selection
- Plaspy automatically detects the tracker protocol and all devices use the same port for reporting

## Typical Requirements Before Setup

- A powered TZ-AVL05 3G device with access to its SMS or configuration interface
- An active SIM card with data enabled and the correct APN for the mobile operator
- Access to the official TZone configuration guide or installer software for reference
- Basic SMS sending ability from a mobile phone or a configuration tool to send setup commands
- Knowledge of the device password if it differs from the factory value used in SMS commands
- A Plaspy account or administrator access on the platform to confirm the device appears after configuration

## How This Tracker Connects to Plaspy

The TZ-AVL05 3G is configured to initiate GPRS sessions and post position and alarm data to the shared Plaspy server endpoint and port. Once set to use the Plaspy server and the correct APN, the tracker will regularly transmit position updates so the device is visible within the Plaspy platform.

- The tracker opens a connection to d.plaspy.com or 54.85.159.138 on port 8888.
- Data transport can be UDP or TCP depending on device settings and installer preference.
- Plaspy automatically detects the tracker protocol so the same server endpoint and port are reused across devices.
- Periodic position updates and alarms are sent to Plaspy according to the device reporting interval.
- Successful configuration allows operational monitoring, event reporting, and location history within Plaspy.

## Common Configuration Workflow

1. Access the official TZone configuration method such as the device SMS commands or the vendor configuration tool and review the device manual.
2. Enter the Plaspy server by name or IP using d.plaspy.com or 54.85.159.138 in the server field.
3. Set the server port to 8888, which is the shared port used by Plaspy for all devices.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Configure the operator APN and any APN username or password placeholders if required by your operator.
6. Apply or save the configuration and, if needed, restart the device to activate the new network settings.
7. Validate that the tracker reports to Plaspy by checking for incoming data or position updates on the platform.

## Example Configuration Commands

The TZ-AVL05 3G can be configured by sending SMS commands to the device. The commands below are supplied in the order typically used for initial GPRS setup. Replace placeholders where necessary.

1. Set the operator APN
   - Command format (replace {{apn}} and other placeholders as required):
   ```sms
   *000000,011,{{apn}}{{#if apnu}},{{apnu}}{{/if}}{{#if apnp}},{{apnp}}{{/if}}#
   ```
   - Explanation: Replace {{apn}} with your mobile operator APN. If your APN requires a username or password, provide {{apnu}} and {{apnp}} respectively. If the device password has been changed from the factory value, replace the leading 000000 with the current device password.

2. Set the update interval to 60 seconds
   ```sms
   *000000,018,60,999#
   ```
   - Explanation: This sets the reporting interval to 60 seconds; the 999 parameter may relate to specific reporting modes per manufacturer documentation.

3. Set the GPRS server to Plaspy (IP and port)
   ```sms
   *000000,015,0,54.85.159.138,8888#
   ```
   - Explanation: This command points the device to Plaspy using the server IP and port. You can substitute d.plaspy.com for the IP if the firmware resolves domain names reliably.

4. Activate GPRS mode
   ```sms
   *000000,016,1#
   ```
   - Explanation: Enables GPRS mode so the device uses the configured GPRS server for reporting.

Note: The initial numeric sequence in these examples (000000) is commonly the device password used in SMS commands. If your device password has been changed, use the current password. Keep placeholders such as {{apn}}, {{apnu}}, and {{apnp}} and replace them with operator-specific values.

## Configuration Notes

- Firmware and hardware revisions can change command formats and supported parameters; always confirm commands on the official TZone documentation for your firmware version.
- SMS based configuration is commonly supported on this model; ensure the SIM can send and receive SMS and has data enabled for GPRS.
- When choosing TCP versus UDP, consider network reliability and platform configuration; Plaspy supports both and will detect protocol automatically.
- If the device supports using a domain name instead of an IP, d.plaspy.com can be used in place of 54.85.159.138, but verify DNS resolution on the device firmware.
- Keep a record of any password changes on the device since SMS commands typically require the current device password prefix.

## Why Use Plaspy with This Configuration

Configuring the TZ-AVL05 3G to report to Plaspy gives operators a straightforward path to centralized location visibility, alarm monitoring, and fleet oversight. Using the shared Plaspy server settings simplifies deployments because the platform uses the same port across devices and automatically detects the tracker protocol, minimizing per-device protocol selection work.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific details, firmware commands, and manufacturer procedures verify information on the official TZone site http://www.tzonedigital.com/ as manufacturer specifications and setup methods can change over time.

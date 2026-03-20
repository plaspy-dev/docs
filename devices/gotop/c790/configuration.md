---
slug: /gotop/c790/configuration
id: c790-configuration
sidebar_label: Configuration
title: GOTOP - C790 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the GOTOP C790 GPS tracker to Plaspy using shared server settings and practical setup steps
keywords:
  - GOTOP C790 configuration
  - GOTOP C790 setup
  - GOTOP C790 server configuration
  - GOTOP C790 Plaspy
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet management tracking
  - tracking platform configuration
  - GPRS GPS tracker setup
  - C790 configuration guide
---

# GOTOP - C790 Configuration

This page covers the public configuration context for using the GOTOP C790 tracker with the Plaspy platform. It summarizes the practical server settings and setup workflow needed to point a C790 tracker at Plaspy so the device can report location and events. The C790-Y is a compact vehicle GPS tracker that uses GPS and Beidou satellite positioning together with GPRS communication to provide real time location tracking, and it includes features such as remote fuel cut, ACC detection, alarms, SOS, geofence alerts, and driving history storage.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary depending on firmware version, hardware revision, installation type, and vendor configuration tools. Use the information here to apply the public Plaspy server values and validate connectivity; also review the official GOTOP documentation for device-specific configuration details and the latest firmware behavior.

## Configuration Overview

This configuration process prepares the GOTOP C790 to communicate with Plaspy so the tracker appears in the platform and reports location and event data reliably. The steps focus on updating the device server target, confirming transport settings, and verifying data is received by Plaspy.

- Configure the C790 to send data to the Plaspy server endpoint so location and alarms arrive at the platform.
- Select the appropriate transport method (UDP or TCP) and set the correct port used by Plaspy.
- Validate the tracker has mobile data connectivity (GPRS) and correct APN if required by the SIM.
- Save and apply settings, then confirm the device is visible and reporting in Plaspy.
- Troubleshoot connectivity by checking signal, SIM status, and device logs where available.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the GOTOP C790. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (device may be configured to use either)
- Plaspy automatically detects the tracker protocol and associates data from the device

## Typical Requirements Before Setup

- A powered and installed GOTOP C790 tracker in the vehicle with stable power.
- An active SIM card with mobile data enabled suitable for GPRS communication.
- Access to the official GOTOP configuration method or software used for this model.
- Knowledge of the correct APN and any SIM credentials needed for mobile data.
- Confirmation of the device firmware version or hardware revision, which can affect menu options and commands.
- Tools or access to restart the device after configuration if required.

## How This Tracker Connects to Plaspy

The GOTOP C790 sends location and event data over GPRS to the Plaspy server endpoint and port so the device is visible and manageable within Plaspy. Plaspy receives the incoming packets on the shared server and maps them to the appropriate device using its automatic protocol detection.

- Device reports positional updates to the Plaspy server domain or IP at port 8888.
- Transport is established using either UDP or TCP depending on device settings.
- Event reports such as SOS, geofence, speed alarms, and ACC changes are transmitted to Plaspy for platform alerts.
- Plaspy automatically recognizes the tracker protocol and processes the incoming data stream.
- Routine validation involves checking that the tracker appears online in Plaspy and that recent position samples are present.

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software for the C790 (manufacturer web tool, configuration app, or SMS/command interface as provided by GOTOP).
2. In the device server settings, enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138.
3. Set the server port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP as the transport if the device requires a selection.
5. Apply or save the configuration within the GOTOP configuration tool or by sending the appropriate commands.
6. Restart the device if the configuration method or firmware requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by confirming the tracker appears online and recent data is visible in the platform.

## Example Configuration Commands

The exact commands or configuration screens for the GOTOP C790 vary by firmware and the manufacturer tool you use. Because manufacturer methods differ, consult the GOTOP configuration guide or support tools for exact command syntax. Plaspy requires the same endpoint and port values shown above (d.plaspy.com or 54.85.159.138 on port 8888) and accepts connections over UDP or TCP.

If you have access to GOTOP command strings or an SMS configuration interface from official documentation, apply the server domain or IP and port exactly as shown and then save and reboot the device. Keep placeholders such as APN, APN user, and APN password (for example {{apn}}, {{apnu}}, {{apnp}}) if the manufacturer's commands use them, and replace those placeholders with your SIM operator values.

## Configuration Notes

- Firmware and tool differences can change the exact menu labels or command format; always confirm the syntax for your firmware version.
- Choosing UDP versus TCP may affect delivery behavior; test both if the device or network shows intermittent reports.
- Plaspy uses the same port 8888 for all devices and automatically detects the tracker protocol, so the server endpoint and port are the primary required values.
- Ensure the SIM APN is correct for GPRS data; missing or incorrect APN is a common cause of failed reporting.
- For installations that use remote immobilization or fuel cut features, confirm those functions are enabled and tested in a safe environment according to manufacturer guidance.

## Why Use Plaspy with This Configuration

Pointing the GOTOP C790 at Plaspy gives organizations a straightforward way to collect vehicle location and event data on a single platform. With Plaspy receiving positional updates, alarms, and event notifications, fleet managers can monitor vehicle activity, respond to alerts, and maintain operational awareness using a unified server endpoint and consistent port configuration.

To learn more about Plaspy and platform features visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup instructions on the official GOTOP website https://www.gotop.cc/.

---
slug: /sinotrack/st_906/configuration
id: st_906-configuration
sidebar_label: Configuration
title: SinoTrack - ST-906 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for SinoTrack ST-906 to point the tracker to Plaspy with SMS commands and server settings
keywords:
  - SinoTrack ST-906 configuration
  - ST-906 Plaspy setup
  - SinoTrack configuration SMS
  - ST-906 server configuration
  - ST-906 GPS tracker setup
  - Plaspy tracker configuration
  - vehicle tracker SMS commands
  - ST-906 APN configuration
  - GPS platform integration
  - fleet tracker setup
---

# SinoTrack - ST-906 Configuration

This page covers the public configuration context for using the SinoTrack ST-906 with Plaspy. It collects the practical, publicly available steps and server settings you can apply so the device reports location and telemetry to Plaspy for mapping, alerts, and fleet visibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The ST-906 supports SMS based configuration for APN, server and reporting behavior; this guide explains how to point those settings to Plaspy using the public commands and values shared here.

## Configuration Overview

The goal of configuration is to prepare the ST-906 so it reliably communicates with the Plaspy ingestion endpoint and appears on the platform for live tracking and history playback. For the ST-906 this is primarily done by sending the manufacturer SMS commands that set the APN and the server endpoint.

- Configure the device APN so it can establish a GPRS data session with your SIM operator.
- Point the tracker to Plaspy by updating the device server IP or domain and the port.
- Ensure the device reporting intervals and GPRS mode are enabled so location messages are sent to Plaspy.
- Verify the device identity using the RCONF command so Plaspy can recognize the tracker ID.
- Validate connectivity and confirm the device appears in Plaspy after applying settings.

## Plaspy Server Settings

- Use the Plaspy server domain d.plaspy.com when a domain entry is required.
- You can also use the Plaspy server IP 54.85.159.138 as the platform endpoint.
- All devices in Plaspy report to the same port 8888 for ingestion.
- The ST-906 may be configured to use either UDP or TCP transport on port 8888 depending on the device setting.
- Plaspy automatically detects the tracker protocol so the platform can process messages from compatible devices without per device protocol setup.

## Typical Requirements Before Setup

- A powered and installed SinoTrack ST-906 unit with a working installer or access to the device wiring.
- A SIM card with an active data plan and the correct APN details for your mobile operator.
- An SMS capable phone or management tool to send the device SMS configuration commands.
- Access to the official SinoTrack documentation or installer guide for device specific command formats and any required unlock codes.
- A Plaspy account or access to a Plaspy instance to verify the device appears after configuration.

## How This Tracker Connects to Plaspy

When configured with the correct APN and server details the ST-906 establishes a GPRS connection and sends periodic position and status messages to the configured endpoint. For Plaspy, the tracker is set to report to the shared Plaspy server domain or IP and the common port so the platform can ingest the messages and present them on a map.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or 54.85.159.138.
- Messages are sent to port 8888 which is the standard ingestion port used across Plaspy supported devices.
- The device can use UDP or TCP transport on port 8888 depending on the chosen configuration.
- Plaspy automatically detects the tracker protocol so messages are parsed and associated with the device ID.
- After successful configuration the tracker will appear in Plaspy for live tracking, history playback and event monitoring.

## Common Configuration Workflow

1. Access the official SinoTrack configuration method, typically SMS commands documented in the device manual.
2. Prepare the APN values for your SIM operator and keep them ready for the APN command.
3. Enter d.plaspy.com or the server IP 54.85.159.138 into the tracker server setting depending on your preference.
4. Set the device port to 8888 as Plaspy uses the same port for all supported devices.
5. Choose UDP or TCP if the device requires you to select a transport protocol.
6. Apply or save the configuration by sending the required SMS commands or using the manufacturer tool.
7. Restart the device if required by the manufacturer configuration steps or after applying server settings.
8. Validate that the device reports to Plaspy by checking the device ID in Plaspy and confirming recent position reports.

## Example Configuration Commands

The ST-906 supports SMS based configuration. The commands below are the public SMS sequences provided by the manufacturer. Preserve placeholders when you replace values. Send each command as a standard text message to the device phone number.

- Restore factory settings (optional at initial setup)
```text
RESET
```

- Set the time zone to UTC 0
```text
8960000E00
```

- Set the APN of the operator
```text
8030000 [apn] [apnu] [apnp]
```
Explanation: keep the placeholders [apn] for the APN name, [apnu] for the APN username if required, and [apnp] for the APN password if required by your operator.

- Set up the GPRS server to Plaspy using the Plaspy server IP and port
```text
8040000 54.85.159.138 8888
```
You may optionally point the device to the domain instead of the IP if supported by the device configuration interface (example uses the Plaspy IP as provided).

- Set update interval when device is on
```text
8050000 60
```

- Set update interval when device is off
```text
8090000 60
```

- Switch the device to GPRS reporting mode
```text
7100000
```

- Check current configuration and device ID
```text
RCONF
```
Note: Plaspy uses the device ID that appears in the RCONF response to map the tracker to the Plaspy account or vehicle record.

## Configuration Notes

- SMS based setup is the public configuration method shown here; some installers may use a PC tool or configuration box if available from the vendor.
- Firmware versions and hardware revisions can change command syntax or behavior; always confirm commands against the device manual or vendor notes.
- Choose UDP or TCP transport based on your installation preference; both are supported by Plaspy on port 8888.
- All Plaspy devices use the same port 8888 and Plaspy auto detects the tracker protocol, so use the provided Plaspy server values consistently.
- If you are unsure about APN credentials use the operator documentation or test with a smartphone using the same SIM.

## Why Use Plaspy with This Configuration

Pointing the SinoTrack ST-906 to Plaspy lets organizations receive live position updates, history playback and event reports in a centralized platform that automatically detects compatible tracker protocols. The ST-906’s SMS configuration flow makes it straightforward to set APN and server values in the field so devices can begin reporting to Plaspy without specialized tools.

To learn more about Plaspy and the platform features available for fleet management and vehicle tracking visit https://www.plaspy.com. For the latest device specific commands, firmware notes and manufacturer guidance verify setup details on the official SinoTrack website https://www.sinotrackgps.com/ since manufacturer specifications and configuration methods can change over time.

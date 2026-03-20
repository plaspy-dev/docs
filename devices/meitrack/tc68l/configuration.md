---
slug: /meitrack/tc68l/configuration
id: tc68l-configuration
sidebar_label: Configuration
title: Meitrack - TC68L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Meitrack TC68L showing how to point the device to Plaspy using shared server settings and SMS commands
keywords:
  - Meitrack TC68L configuration
  - Meitrack TC68L setup
  - TC68L Plaspy configuration
  - Meitrack GPS tracker configuration
  - TC68L server configuration
  - Plaspy device setup
  - TC68L SMS commands
  - OBD II tracker setup
  - vehicle tracking configuration
  - TC68L GPRS server
---

# Meitrack - TC68L Configuration

This page covers the public configuration context for using the Meitrack TC68L with Plaspy. It focuses on the practical server settings and the SMS configuration commands commonly used to point a TC68L at Plaspy so the device can report location and event data to the platform. Use this document to understand the required server values and the overall setup workflow for integrating this model into Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools. The TC68L description supplied here (4G OBD II plug and play tracker with internal battery and SOS) is the basis for the guidance below, and the example commands reflect publicly available SMS setup commands for this model.

## Configuration Overview

This configuration prepares the TC68L to communicate reliably with Plaspy by pointing the device to the Plaspy server and ensuring periodic updates and event reporting are enabled. For the TC68L the manufacturer provides SMS based commands that can set server, reporting intervals, and basic behaviors.

- Point the device to Plaspy using the shared Plaspy server domain or IP and the required port.
- Configure the device APN and GPRS parameters so the TC68L can connect to mobile data.
- Enable periodic position updates and events so the device sends location and alerts to Plaspy.
- Validate connectivity from the device to Plaspy and confirm the device appears in the platform.
- If available, use manufacturer SMS or configuration tools to apply settings and restart the tracker.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the TC68L. All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered and accessible TC68L installed or temporarily connected so SMS commands can be received.
- An active SIM card with data access installed in the device and correct APN information ready.
- Access to the manufacturer's configuration method such as SMS commands or a supported configuration tool.
- The default device password if required for commands; the sample commands below use the default password 0000.
- A Plaspy account and device provisioning workflow to register the tracker once it reports to the platform.
- A plan for testing connectivity and confirming the device appears in Plaspy after configuration.

## How This Tracker Connects to Plaspy

When configured, the TC68L reports location and event data to the shared Plaspy server endpoint and port. Plaspy handles incoming connections from supported trackers and will automatically identify the tracker protocol so devices can be managed in the platform.

- The device is set to send GPRS/TCP or GPRS/UDP connections to d.plaspy.com or 54.85.159.138 on port 8888.
- Periodic position updates are sent to Plaspy according to the configured reporting interval.
- Event alerts such as SOS, tamper, or disconnect notifications are forwarded to Plaspy for real time monitoring.
- Plaspy processes the incoming data and presents device location and telemetry in the platform.
- Automatic protocol detection in Plaspy removes the need to manually select a protocol on the platform side.

## Common Configuration Workflow

1. Identify and use the official Meitrack configuration method, for example SMS commands or the manufacturer tool documented by Meitrack.
2. Enter the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138 in the device configuration.
3. Set the device port to 8888 as this is the shared port used by Plaspy for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection during setup.
5. Configure the device APN and any SIM login fields so the device can establish a mobile data connection.
6. Apply or save the configuration and restart the device if required by the tracker to apply network settings.
7. Validate that the TC68L reports to Plaspy by checking device activity in the Plaspy platform and confirming periodic updates and events are visible.

## Example Configuration Commands

The Meitrack TC68L can be configured by SMS using the device password and the following public commands. The sample setup shown here uses the default device password 0000. If needed, change the password according to manufacturer instructions.

- Optional initial factory settings reset (use only when required for initial setup):
```text
0000,F11
```

- Set the GPRS server to Plaspy using the device IP and port. Replace [apn] with your SIM APN. If your operator requires username or password, include [apnu] and [apnp] as needed.
```text
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
Note: You can use d.plaspy.com instead of the IP if your device accepts a domain name in the A21 command.

- Set the time zone to UTC 0 (adjust if you need a different time zone):
```text
0000,B36,0
```

- Set the update interval to every 1 minute (example value used in public sample):
```text
0000,A12,6,0
```

- Set event reporting behavior (example enabling common events based on the public sample):
```text
0000,C03,0
```

Placeholders explained:
- [apn] — your mobile operator APN string required for GPRS data.
- [apnu] — APN username if your operator requires one.
- [apnp] — APN password if your operator requires one.

Send each SMS command from an authorized phone number if the device is configured to accept SMS from specific numbers, and allow a moment for the device to apply settings and establish a data connection.

## Configuration Notes

- SMS based setup is a common public method for Meitrack models and is shown here because it is included in the public configuration sample.
- Firmware and hardware revisions can change command syntax or supported parameters; verify commands against the device firmware notes from Meitrack.
- Choose TCP or UDP according to any device limitations; Plaspy accepts either on port 8888 and automatically detects the protocol when the device connects.
- After initial setup, consider changing the default password 0000 for device security following manufacturer guidance.
- Confirm APN and SIM data service before relying on real time reports; incorrect APN settings are a common cause of connectivity failures.

## Why Use Plaspy with This Configuration

Using the Meitrack TC68L with Plaspy gives organizations a straightforward path to vehicle tracking and event monitoring by leveraging Plaspy shared server settings and automatic protocol detection. The public SMS commands enable quick provisioning of the device to point to Plaspy so location updates, alerts, and operational telemetry can flow into the platform for visibility and operational workflows.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the latest device specific commands, firmware details, and installation guidance always verify current information on the official Meitrack website https://www.meitrack.com/ as manufacturer specifications and setup methods can change over time.

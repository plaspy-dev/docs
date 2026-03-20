---
slug: /sinotrack/st_915l/configuration
id: st_915l-configuration
sidebar_label: Configuration
title: SinoTrack - ST-915L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the SinoTrack ST 915L showing how to point the tracker to Plaspy with SMS commands and server settings
keywords:
  - SinoTrack ST-915L configuration
  - SinoTrack ST-915L setup
  - ST-915L server configuration
  - ST-915L SMS commands
  - Plaspy device configuration
  - GPS tracker setup Plaspy
  - ST-915L APN configuration
  - ST-915L GPRS server setup
  - vehicle tracking configuration
  - fleet tracking ST-915L
---

# SinoTrack - ST-915L Configuration

This page documents the public configuration context for using the SinoTrack ST-915L with Plaspy. It focuses on the practical, manufacturer-published setup steps and the shared Plaspy server settings needed to point the device at a Plaspy instance. The guidance reflects SMS based commands published by the vendor for updating APN and server settings, and the way Plaspy identifies and accepts reports from compatible trackers.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use the vendor SMS commands shown here as a practical starting point, and verify any device specific differences against the latest manufacturer documentation before deploying at scale.

## Configuration Overview

This configuration process prepares the ST-915L to send location and telemetry to Plaspy by updating the device APN and server target and validating connectivity. The typical goal is to ensure the tracker reports reliably to the Plaspy endpoint so the device appears in the platform and delivers position, battery, and status updates.

- Point the device to the Plaspy server endpoint and port so outbound GPRS traffic is routed to the platform.
- Configure APN credentials for the installed SIM so the tracker can establish a GPRS session.
- Enable the reporting interval and operating mode so the device regularly sends position updates.
- Verify device identity and settings using the manufacturer RCONF command so Plaspy can correlate the device ID.
- Confirm the tracker appears in Plaspy and that telemetry and location messages are received.

## Plaspy Server Settings

- Server domain d.plaspy.com is the named endpoint used by Plaspy for device reporting.
- Server IP 54.85.159.138 may be used when configuring the device with an IP address instead of a domain.
- Port 8888 is the single port Plaspy uses for all supported devices.
- Transport support for UDP or TCP is available on the device and you may select UDP or TCP when the tracker requires a transport choice.
- Plaspy automatically detects the tracker protocol so devices can report using their native protocol without per device protocol configuration.

## Typical Requirements Before Setup

- A charged ST-915L with a working SIM card that has data and SMS enabled.
- Access to the device SMS configuration method or an approved manufacturer tool to send configuration SMS commands.
- The APN settings for the mobile operator to configure GPRS access using placeholders such as {{apn}} {{apnu}} and {{apnp}}.
- Knowledge of whether the device firmware expects an IP address or domain for server configuration.
- A test account or access to Plaspy to confirm the device appears and reports after configuration.
- Basic tools for SMS sending such as a phone with SMS capability and the device phone number.

## How This Tracker Connects to Plaspy

The ST-915L is configured to report to the shared Plaspy server endpoint and port by updating the device APN and GPRS server parameters via SMS. Once the device establishes a GPRS session with the configured APN, it sends position and telemetry packets to the configured Plaspy address and port so the platform can display and process the device data.

- The device is pointed to Plaspy by setting the server IP or domain and port in the tracker settings.
- APN configuration enables the tracker to bring up a GPRS connection for data transfer.
- After GPRS is active the tracker sends periodic position and status reports to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy ingests the incoming packets and automatically detects the tracker protocol so the device is processed without manual protocol mapping.
- Platform visibility includes location updates, battery or status reports, and historical playback when reports are received.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the ST-915L, typically SMS based commands as published by SinoTrack.
2. Optionally restore factory settings if you require a clean starting point using the vendor reset command.
3. Enter d.plaspy.com or 54.85.159.138 as the device server address depending on whether the tracker accepts a domain or an IP.
4. Set port 8888 in the device server configuration; Plaspy uses the same port for all supported devices.
5. Choose UDP or TCP if the device requires selecting a transport protocol.
6. Apply or save the configuration and switch the device to GPRS mode so it can connect using the configured APN.
7. Restart the device if required by the manufacturer to apply network settings.
8. Validate that the device reports to Plaspy by checking the RCONF output and confirming the device appears in the Plaspy platform.

## Example Configuration Commands

The SinoTrack ST-915L manufacturer provides these public SMS commands. Commands are sent as SMS messages to the device phone number in the order shown when order matters. Preserve placeholders when substituting APN values.

- Restore factory settings (optional initial step)
```text
RESET
```

- Set the time zone to UTC 0
```text
8960000E00
```

- Set the APN of the operator using placeholders
```text
8030000 {{apn}} {{apnu}} {{apnp}}
```
Note: Keep the placeholders {{apn}}, {{apnu}}, and {{apnp}} and replace them with your operator APN name, APN username, and APN password as required. If your operator does not use username or password, leave those placeholders empty.

- Set up the GPRS server to point to Plaspy using the Plaspy IP and port
```text
8040000 54.85.159.138 8888
```
You may also configure the server using the domain d.plaspy.com if the device accepts a domain name.

- Set update interval for when the device is on
```text
8050000 60
```

- Set update interval for when the device is off
```text
8090000 60
```

- Switch the device to GPRS mode
```text
7100000
```

- Verify device settings and retrieve the device ID that Plaspy will use
```text
RCONF
```
The RCONF response includes the device ID used to correlate the tracker in Plaspy.

## Configuration Notes

- Firmware and regional variants can change exact SMS command formats or available parameters; always confirm with the device manual for your firmware version.
- The device supports selecting UDP or TCP for transport. Choose the transport that matches your network conditions and the device firmware behavior.
- SMS based setup is practical for remote or in field configuration, but ensure SMS messages are sent from a trusted phone number to avoid unauthorized configuration.
- Use the IP address 54.85.159.138 or the domain d.plaspy.com when configuring the server. Port 8888 is the single port Plaspy uses for all devices.
- After applying settings, validate with RCONF and check Plaspy to confirm reporting and device health telemetry are received.

## Why Use Plaspy with This Configuration

Configuring the SinoTrack ST-915L to report to Plaspy provides a straightforward way to centralize location and device telemetry for fleet management, anti theft monitoring, and long term asset tracking. The ST-915L hardware characteristics such as long battery life and reliable GNSS performance combined with Plaspy automatic protocol detection make it practical to deploy devices and begin receiving live and historical data without complex per device protocol mapping.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance verify configuration and behavior on the official SinoTrack site https://www.sinotrackgps.com/ since firmware and setup methods can change over time.

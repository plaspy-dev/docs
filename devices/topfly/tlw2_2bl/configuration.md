---
slug: /topfly/tlw2_2bl/configuration
id: tlw2_2bl-configuration
sidebar_label: Configuration
title: TopFly - TLW2-2BL Configuration
sidebar_class_name: menu_item_tracker
description: Configure the TopFly TLW2-2BL for Plaspy with public server settings SMS commands and setup guidance
keywords:
  - TopFly TLW2-2BL configuration
  - TLW2-2BL Plaspy setup
  - TopFly tracker configuration for Plaspy
  - TLW2-2BL server settings
  - TopFly TLW2-2BL GPS setup
  - TLW2-2BL APN configuration
  - TopFly TLW2-2BL SMS commands
  - TLW2-2BL tracker integration
  - TopFly GPS tracker configuration
  - TLW2-2BL fleet tracking
---

# TopFly - TLW2-2BL Configuration

This page describes the public configuration context for using the TopFly TLW2-2BL tracker with the Plaspy platform. It compiles the shared Plaspy server settings, common workflow steps, and the publicly available SMS configuration commands that are commonly used to prepare a TLW2-2BL for reporting to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol to simplify device onboarding. Exact manufacturer-side setup steps and command syntax can vary by firmware revision, hardware revision, installation type, and vendor tools, so use this guidance together with the official TopFly documentation and your device firmware notes.

## Configuration Overview

Configuring a TLW2-2BL for Plaspy prepares the tracker to send GNSS positions, sensor telemetry and event alerts to the Plaspy ingestion endpoint. The public configuration steps center on setting the data APN and GPRS server target so the device can successfully open a data session and stream updates into Plaspy using the shared server and port.

- Point the device at the Plaspy server domain or IP so it sends data to Plaspy for ingestion and mapping.
- Configure APN and optional APN credentials if the device will use a mobile data connection.
- Set the device upload or timer interval so position updates match your monitoring needs.
- Choose UDP or TCP transport when the device requires a transport selection for server delivery.
- Validate connectivity by confirming the device appears in Plaspy after applying settings.
- Use SMS or the vendor tool to apply settings depending on installation and access.

## Plaspy Server Settings

- Server domain d.plaspy.com for device configuration and reporting.
- Server IP 54.85.159.138 as the Plaspy endpoint alternative to the domain.
- Port 8888 which Plaspy uses for device connections.
- Transport support for UDP or TCP depending on the device capability and preference.
- Plaspy automatically detects the tracker protocol so you do not need to select a protocol in Plaspy for supported devices.
- Note that Plaspy uses the same port for all supported devices which simplifies fleet wide configuration.

## Typical Requirements Before Setup

- Ensure the tracker has a compatible active LTE or mobile data SIM and an APN provisioned for data access.
- Access to the TopFly configuration method for your device, commonly SMS commands or an official vendor tool.
- Device powered and installed or accessible so SMS commands or configuration can be received and applied.
- The device default password if required for SMS configuration; the public sample commands below use the default password 0000.
- Basic knowledge of the APN, APN username, and APN password for your cellular provider if required.
- Access to Plaspy account or an operator who can confirm device visibility after configuration.

## How This Tracker Connects to Plaspy

When configured, the TLW2-2BL sends position, telemetry and event messages to the shared Plaspy server endpoint and port so Plaspy can ingest and display the data. Plaspy receives these messages over the configured transport, maps the device using its protocol, and makes the device visible on dashboards.

- The tracker is configured to report to the Plaspy server endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- Messages are sent using either UDP or TCP transport depending on the device selection and network characteristics.
- Plaspy automatically detects the tracker protocol and parses incoming position and event data for real time display.
- Regular timer or interval messages ensure continuous visibility and history in Plaspy.
- Alarms and input events reported by the tracker are forwarded to Plaspy for alerts and logging.

## Common Configuration Workflow

1. Access the official TopFly configuration method for the TLW2-2BL, for example SMS commands or the manufacturer configuration tool.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server or IP configuration.
3. Set the device port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection for server connections.
5. Configure APN and optional APN credentials so the device can open a GPRS or LTE data session.
6. Apply or save the configuration on the device and restart the device if the vendor procedure requires a reboot.
7. Validate that the device reports to Plaspy by checking device visibility and recent position messages in the Plaspy platform.

## Example Configuration Commands

The TLW2-2BL can be configured by sending SMS messages in the command format shown below. These are the public sample SMS commands and use the device default password 0000 as provided in the manufacturer sample. Preserve the order when applying commands that depend on connectivity being established.

- Set the time zone to UTC 0
```text
GMT,0000,0#
```

- Set the operator APN and optional APN credentials
```text
APN,0000,[apn],[apnu],[apnp]#
```
Explanation: keep the placeholders [apn], [apnu], and [apnp]. Replace [apn] with your mobile operator APN. Replace [apnu] and [apnp] with the APN username and APN password if your operator requires them; leave them empty or blank if not required.

- Set the GPRS server to the Plaspy IP and port
```text
IP,0000,54.85.159.138 8888#
```
Explanation: this command configures the device to send data to the Plaspy server IP and port. You can substitute d.plaspy.com in vendor tools or SMS formats that accept hostnames if supported.

- Set the upload/update timer to 60 seconds
```text
TIMER,0000,60:60:0:0#
```
Explanation: this sample configures the device upload interval. Adjust the values per your reporting frequency requirements and device firmware capabilities.

Note: These commands are the publicly available SMS examples. Some installations may use manufacturer software or provisioning tools instead of SMS. Always confirm the command syntax for your firmware version.

## Configuration Notes

- Firmware variations can change command syntax or available options. Confirm the exact SMS command format with the TopFly documentation for your firmware.
- Choose UDP or TCP based on your network reliability and carrier behavior; some carriers perform better with UDP while others prefer TCP for session stability.
- SMS based configuration is supported in the public commands above; vendor tools or a local configuration utility may provide the same settings with a different workflow.
- The sample SMS commands use the default device password 0000 as published in the public examples; change the password after provisioning when possible.
- Plaspy uses a single shared port 8888 and automatic protocol detection which simplifies bulk device provisioning across a fleet.

## Why Use Plaspy with This Configuration

Using the TLW2-2BL with Plaspy provides a straightforward path to reliable vehicle and asset visibility. The tracker’s LTE connectivity and buffering combine with Plaspy’s protocol detection and unified server endpoint to make onboarding and large scale rollouts easier. Organizations gain consistent location, telemetry and alarm reporting in Plaspy for operational monitoring, alerts and historical analysis.

To learn more about Plaspy and how this configuration fits into broader fleet workflows visit https://www.plaspy.com. For the latest device specific commands, firmware notes and manufacturer procedures verify the current documentation at https://www.topflytech.com/ as manufacturer details and setup methods can change over time.

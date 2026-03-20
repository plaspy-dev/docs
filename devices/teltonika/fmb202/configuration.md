---
slug: /teltonika/fmb202/configuration
id: fmb202-configuration
sidebar_label: Configuration
title: Teltonika - FMB202 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Teltonika FMB202 use with Plaspy server settings and common setup steps
keywords:
  - teltonika fmb202 configuration
  - teltonika fmb202 setup
  - fmb202 server configuration
  - plaspy tracker setup
  - plaspy device configuration
  - teltonika gps tracker configuration
  - vehicle tracking setup
  - fmb202 gps platform setup
  - teltonika configuration guide
  - fleet tracking plaspy
---

# Teltonika - FMB202 Configuration

This page covers the public configuration context for using the Teltonika FMB202 tracker with the Plaspy platform. It describes the shared server settings Plaspy requires, the basic workflow for preparing the device, and the sample commands that are commonly used to point an FMB202 at Plaspy. The content below is intended to help technical users and installers apply public configuration steps so a device can report to Plaspy for monitoring and tracking.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. The FMB202 supports multiple configuration channels such as SMS, GPRS commands, Teltonika Configurator via USB or Bluetooth, and FOTA updates, so use the method that matches your device firmware and installer workflow.

## Configuration Overview

Preparing an FMB202 for use with Plaspy is about directing the device to the Plaspy server endpoint, supplying correct APN credentials for cellular connectivity, and validating that the device appears and reports correctly in the platform. The public command examples below show how a typical basic setup is performed using Teltonika public command syntax.

- Point the tracker to the Plaspy server domain or IP so telemetry is routed to Plaspy.
- Configure the cellular APN, username, and password placeholders so GPRS data is available.
- Set the shared Plaspy port so data arrives on the expected socket.
- Choose transport (UDP or TCP) if the device requires selecting a transport mode.
- Save and apply settings using Teltonika tools or SMS commands and validate connectivity.
- Confirm the device becomes visible in Plaspy and that location and event data are reported.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy endpoint settings to enter on the device or via the Teltonika configuration method.

## Typical Requirements Before Setup

- A charged and powered FMB202 device, or connected to the vehicle 6 to 30 V supply if installed.
- Cellular data connectivity with a valid SIM card and the APN credentials for your mobile operator.
- Access to a Teltonika configuration method supported by your device firmware such as SMS commands, GPRS commands, Teltonika Configurator (USB or Bluetooth), or FOTA Web updates.
- The device firmware should be up to date enough to accept the configuration method you intend to use.
- Basic knowledge of the device IMEI and any installer credentials required by Teltonika tools.
- A plan to validate connectivity by observing the device in the Plaspy platform after configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the FMB202 sends location and diagnostic data to the Plaspy server endpoint and port. Plaspy receives telemetry and uses its protocol detection to interpret the device messages and display them in the platform.

- The tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Data is sent over the selected transport protocol, either UDP or TCP.
- Plaspy automatically detects and interprets the tracker protocol so no separate protocol selection on the platform side is required.
- Regular position updates and event reports are forwarded from the device to Plaspy for visibility and alerts.
- After configuration, validate the device appears and reports in Plaspy for operational monitoring.

## Common Configuration Workflow

1. Access the official Teltonika configuration method for your device such as SMS commands, GPRS commands, Teltonika Configurator via USB or Bluetooth, or FOTA Web depending on your firmware and tools.
2. Enter the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138 in the device server field.
3. Set the device port to 8888 which is the Plaspy listening port for all supported devices.
4. Choose UDP or TCP if the device requires explicit transport selection during configuration.
5. Configure the cellular APN, APN username, and APN password so the device can establish a GPRS data session.
6. Apply or save the configuration using the chosen Teltonika method and restart the device if required by your workflow.
7. Validate that the device is reporting to Plaspy by checking device status and incoming telemetry in the platform.

## Example Configuration Commands

To configure the basic parameters on your Teltonika device, the public Teltonika command format commonly used is shown below. This example sets APN fields, the server domain, the Plaspy port, and a transport selection value. Preserve the placeholders when replacing with your operator APN credentials.

- Send this command via SMS or the Teltonika configuration channel supported by your device:

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notes on placeholders and fields
- {{apn}} is the cellular APN name required by your SIM operator.
- {{apnu}} is the APN username if required by your operator.
- {{apnp}} is the APN password if required by your operator.
- 2004 sets the server domain to d.plaspy.com and 2005 sets the port to 8888 for Plaspy.
- 2006 in this example sets a transport selection value; check your Teltonika documentation for the exact numeric values used to select UDP or TCP on your firmware.

## Configuration Notes

- Firmware and configurator tool versions can change parameter IDs and command syntax; always confirm command format with your current Teltonika documentation.
- The FMB202 supports SMS and GPRS configuration so choose the method that matches your installation and firmware capabilities.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol, so configuring the correct server and port is the critical step.
- If a transport option is required by the device, test both UDP and TCP if unsure and consult Teltonika docs for the meaning of transport parameter values.
- After applying settings, a device restart may be needed for changes to take effect. Validate connectivity in Plaspy after restart.

## Why Use Plaspy with This Configuration

Using the Teltonika FMB202 with Plaspy provides a reliable path for fleet and asset visibility where a compact, waterproof tracker is required. With Plaspy handling protocol detection and a shared server endpoint, installers can standardize configuration and reduce platform-side setup. The FMB202 features such as long battery runtime, multiple configuration channels, and robust sensor support make it a practical choice for installations that need persistent tracking and remote configuration.

To learn more about Plaspy and how it integrates with trackers like the FMB202 visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup instructions and parameter definitions on the manufacturer site https://www.teltonika-gps.com/ before deploying.

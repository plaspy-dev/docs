---
slug: /teltonika/fmb910/configuration
id: fmb910-configuration
sidebar_label: Configuration
title: Teltonika - FMB910 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Teltonika FMB910 to send data to Plaspy with server settings and example commands
keywords:
  - Teltonika FMB910 configuration
  - FMB910 setup
  - Teltonika configuration for Plaspy
  - FMB910 server configuration
  - Teltonika GPS tracker setup
  - FMB910 tracking software configuration
  - Plaspy device integration
  - vehicle tracking configuration
  - fleet tracker setup
  - GPS tracker server settings
---

# Teltonika - FMB910 Configuration

This page documents the public configuration context for using the Teltonika FMB910 with Plaspy. It focuses on the shared Plaspy server settings, a practical example command from public device guidance, and an operational workflow you can follow to prepare the FMB910 for data reporting to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side configuration steps can vary with firmware revision, hardware revision, installation type, and the Teltonika tools or SMS commands you use. Use this guide as practical setup guidance and confirm device-specific details with the official Teltonika documentation.

## Configuration Overview

Preparing your Teltonika FMB910 for Plaspy means configuring the device to report to Plaspy's shared endpoint and validating connectivity so the device appears in the platform. The public configuration example included here shows how APN values and the Plaspy server are specified in a typical Teltonika parameter command.

- Set the device APN and any APN credentials required for cellular data.
- Point the tracker to Plaspy using the shared server domain or IP and the standard Plaspy port.
- Choose the transport method (UDP or TCP) if the device requires a transport selection.
- Save and apply configuration so the device starts reporting to Plaspy.
- Validate that the device reports location and events to Plaspy and appears in the account.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

Use either the domain d.plaspy.com or the IP address 54.85.159.138 when entering server settings in the device configuration tool. The port is 8888 for all devices on Plaspy.

## Typical Requirements Before Setup

- Ensure the FMB910 is powered and accessible for configuration.
- Install and activate a SIM card with a working data APN where required for 2G cellular connectivity.
- Have APN parameters ready: APN, APN username, and APN password if your mobile operator requires them.
- Access to the Teltonika official configuration method such as SMS batch commands, a Teltonika configuration tool, or remote management tools supported by your device firmware.
- A plan to test connectivity after configuration so you can confirm the device reports to Plaspy.

## How This Tracker Connects to Plaspy

The FMB910 reports location, event, and sensor data to the shared Plaspy endpoint and port so Plaspy can ingest the messages, display live positions, and trigger platform workflows. Configuration instructs the device to open a TCP or UDP session to the Plaspy server and then transmit position and event payloads.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or 54.85.159.138.
- All devices use port 8888 on Plaspy, so the same port is used regardless of tracker model.
- Transport selection can be UDP or TCP depending on device capability and installer preference.
- Plaspy automatically detects the tracker protocol on incoming connections.
- Once data is received, Plaspy provides live map views, alerts, and historical reporting.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software appropriate for your FMB910 firmware and deployment (SMS batch commands, Teltonika configuration tools, or remote management).
2. Enter the Plaspy server as d.plaspy.com or the IP 54.85.159.138 in the device server field.
3. Set port 8888 for the Plaspy connection.
4. Choose UDP or TCP if the device requires you to select a transport method.
5. Provide APN settings and any APN credentials required by the mobile operator.
6. Apply or save the configuration and restart the device if required by your device or firmware.
7. Validate that the device reports to Plaspy and appears in your Plaspy interface.

If you use Teltonika SMS commands for configuration, the example command below shows a common batch parameter update that combines APN and Plaspy server settings.

## Example Configuration Commands

The following command is a public example batch parameter command used to set APN values and the Plaspy server settings on Teltonika devices. Preserve and replace the APN placeholders with values from your mobile operator.

- Replace {{apn}} with your SIM card APN value.
- Replace {{apnu}} with the APN username if required, otherwise leave blank.
- Replace {{apnp}} with the APN password if required, otherwise leave blank.

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notes on this example command:
- This format is commonly used as an SMS batch command or by Teltonika configuration tools to set multiple parameters at once.
- The placeholders {{apn}}, {{apnu}}, and {{apnp}} must be replaced with your operator values.
- The parameter segment that sets the server uses d.plaspy.com and port 8888 as required by Plaspy.
- For the meaning of specific parameter IDs such as 2006 consult the official Teltonika parameter reference for your firmware version before changing values.

## Configuration Notes

- Firmware versions and device parameter numbering can differ; always check the Teltonika parameter reference for your device firmware.
- Choosing UDP or TCP may affect how data is buffered and retried; select the transport that matches your network and monitoring needs.
- APN fields are required for cellular data on 2G networks; confirm operator APN details before configuring the tracker.
- The example command shows a public batch update approach; other configuration methods such as configuration tools or FOTA may be preferred for bulk deployments.
- Plaspy uses a single port for all supported devices and will detect the incoming protocol automatically.

## Why Use Plaspy with This Configuration

Using the Teltonika FMB910 with Plaspy gives small and medium fleets a straightforward, cost effective path to real-time tracking, event alerts, and operational visibility. Pointing the FMB910 to Plaspy's shared server endpoint simplifies the integration so position and sensor streams flow directly into Plaspy dashboards and workflows.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and parameter details verify current information on the Teltonika site https://www.teltonika-gps.com/.

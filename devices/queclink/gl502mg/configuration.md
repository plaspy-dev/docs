---
slug: /queclink/gl502mg/configuration
id: gl502mg-configuration
sidebar_label: Configuration
title: QuecLink - GL502MG Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GL502MG with Plaspy server settings and example SMS commands
keywords:
  - QuecLink GL502MG configuration
  - QuecLink GL502MG setup
  - QuecLink GL502MG server configuration
  - GL502MG Plaspy setup
  - GL502MG GPS tracker setup
  - QuecLink tracker configuration guide
  - Plaspy tracker configuration
  - GL502MG asset tracking setup
  - GL502MG container tracking
  - QuecLink configuration instructions
---

# QuecLink - GL502MG Configuration

This page documents the public configuration context for using the QuecLink GL502MG tracker with Plaspy. It summarizes the practical server settings, example setup commands that are publicly available, and the typical workflow to prepare the device so it can report to Plaspy for asset, trailer, and container tracking.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps for the GL502MG can vary by firmware, hardware revision, installation type, and vendor tools. The GL502MG can be configured using SMS-based commands (sample commands are provided below), so follow both Plaspy values and current QuecLink documentation for the exact method that matches your device firmware.

## Configuration Overview

The goal of configuration is to prepare the GL502MG to communicate reliably with Plaspy and to validate device visibility in the Plaspy platform. Use the public server settings below and the manufacturer configuration method to set the device server address, transport, and reporting cadence.

- Configure the device to point to Plaspy server endpoint so telemetry is received in the platform
- Set the device APN and GPRS parameters so it has mobile data connectivity
- Set reporting interval and input/event reporting so the tracker sends updates on schedule
- Optionally restore factory settings or apply default values before a fresh configuration
- Validate that the tracker appears in Plaspy after saving and restarting the device

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the device may be configured to use either)
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged GL502MG tracker with working firmware and physical installation appropriate for the asset
- An active SIM card with data plan and the correct APN settings for the mobile network operator
- A phone or SMS gateway able to send SMS configuration commands if using SMS-based setup
- Access to QuecLink configuration instructions or vendor tools to confirm command format and firmware compatibility
- Network coverage for LTE Cat M1/NB2 or 2G fallback as required by your deployment
- Optional: a USB Type-C connection for firmware updates and debugging if provided by your installer workflow

## How This Tracker Connects to Plaspy

The GL502MG is configured to report location and device events to a shared Plaspy server endpoint and port so Plaspy can ingest telemetry and present it in the platform. Once the tracker is pointed to the Plaspy server and the device has data connectivity, Plaspy detects the protocol automatically and begins processing messages.

- Device sends periodic location updates to d.plaspy.com on port 8888
- Transport may use UDP or TCP depending on device configuration and network conditions
- Plaspy uses automated protocol detection so no manual protocol selection in the platform is required
- Event messages such as SOS or input state changes are sent to the same Plaspy endpoint for processing
- The tracker becomes visible in Plaspy once it successfully authenticates and transmits its first packets to the server

## Common Configuration Workflow

1. Access the official QuecLink configuration method or software for your GL502MG (SMS commands, vendor tool, or documented interface).
2. Enter d.plaspy.com or 54.85.159.138 as the device server address depending on the configuration format you use.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP if the device requires explicit transport selection.
5. Configure the APN and any operator credentials so the device has mobile data access.
6. Apply or save the configuration and restart the device if required by the commands or tool.
7. Validate that the device reports to Plaspy and appears in your platform view.

## Example Configuration Commands

The GL502MG may be configured by sending SMS commands to the device. The following public sample commands are provided in the manufacturer content. The sample uses the device password queclink which is documented as the default in the provided example. Send each command as an SMS to the device number in the order shown when performing an initial setup.

1. Optional initial factory restore (label as optional or initial setup)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone UTC+0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN (replace placeholders with your operator values)
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- [apn] is the APN string required by your mobile operator
- [apnu] is the APN username if required, otherwise leave empty
- [apnp] is the APN password if required, otherwise leave empty

4. Set the GPRS server to Plaspy (this example includes both domain and IP and uses port 8888)
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Set the update interval to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notes:
- These commands are intended as a public example and may need adjustments for your firmware version or vendor customization.
- Keep the order when the sequence matters, for example setting APN before enabling GPRS server settings.
- The default password in the example is queclink; verify if your device uses a different password and update commands accordingly.

## Configuration Notes

- Firmware differences and hardware revisions can change command sets and required parameters; always confirm with the device firmware release notes.
- SMS-based setup is supported by the public example above, but vendor tools or USB-based methods may be preferred for bulk provisioning.
- Choose UDP or TCP based on network reliability and your operator; Plaspy accepts either on port 8888.
- Plaspy uses the same port across devices and will automatically detect the tracker protocol once the device starts sending data to d.plaspy.com or 54.85.159.138.
- If a default device password is used in examples, verify and change the password per your security policy where possible.

## Why Use Plaspy with This Configuration

Using the QuecLink GL502MG with Plaspy gives organizations a straightforward path to monitor assets, trailers, and containers with a rugged device that is designed for long-term deployments. Configuring the GL502MG to report to Plaspy's shared server endpoint provides centralized visibility for location reporting, event alerts, and operational oversight without needing custom server infrastructure.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the latest device-specific configuration methods, firmware behavior, and manufacturer guidance, always verify current information on the QuecLink official website https://www.queclink.com/ as specifications and setup steps can change over time.

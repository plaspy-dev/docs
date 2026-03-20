---
slug: /xexun/x02/configuration
id: x02-configuration
sidebar_label: Configuration
title: Xexun - X02 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Xexun X02 showing Plaspy server settings, SMS commands, and practical setup steps for integration
keywords:
  - Xexun X02 configuration
  - Xexun X02 setup
  - Xexun X02 server configuration
  - Xexun X02 Plaspy
  - Plaspy device setup
  - GPS tracker configuration
  - vehicle tracker setup
  - Xexun tracker SMS commands
  - GPRS tracker setup
  - fleet tracking configuration
---

# Xexun - X02 Configuration

This page documents the public configuration context for using the Xexun X02 tracker with the Plaspy platform. It explains the shared Plaspy server settings you will point the device to, outlines practical setup steps including SMS command examples when available, and clarifies what to verify before integrating the tracker into Plaspy.

Plaspy uses a common server endpoint and port across supported devices and automatically detects the tracker protocol, while the manufacturer side setup can vary by firmware version, hardware revision, installation type, and vendor tools. The example commands and workflow on this page come from the public X02 configuration guidance and are intended to help you prepare the device for reliable communication with Plaspy.

## Configuration Overview

Configuring the X02 for Plaspy prepares the device to send GNSS and telemetry data to the Plaspy cloud so the unit appears in your Plaspy account for live tracking and history. The public setup typically includes setting the mobile operator APN, configuring the GPRS server and port, and ensuring the device reporting interval meets your monitoring needs.

- Point the X02 to the Plaspy server endpoint so data is routed to your Plaspy account.
- Configure the device APN, and APN username and password if required by the mobile operator.
- Set the GPRS server address and port to the Plaspy values and select the appropriate transport (UDP or TCP).
- Set reporting intervals and any buffering or retransmission options to match your operational needs.
- Validate connectivity and confirm the device appears and reports on Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port for device data

## Typical Requirements Before Setup

- A charged X02 device with sufficient battery for initial setup and testing.
- A valid cellular SIM with data enabled and correct APN information for the operator.
- Access to the manufacturer configuration method used by the X02 such as SMS commands or vendor software.
- Knowledge of the device password if required for configuration (the example commands below use the default password 123456).
- A place to test device connectivity where cellular coverage is available so the device can reach d.plaspy.com or 54.85.159.138 on port 8888.

## How This Tracker Connects to Plaspy

The X02 transmits GNSS positions, assisted fixes, and telemetry over the device cellular link to the Plaspy server endpoint and port. Once configured to use the Plaspy server, the device sends periodic updates and event reports so the unit becomes visible in Plaspy for live tracking, alerts, and history playback.

- Device reports (location and telemetry) are sent to d.plaspy.com or 54.85.159.138 on port 8888.
- Choose UDP or TCP for transport if the device requires explicit selection; Plaspy supports both.
- Plaspy automatically detects the incoming tracker protocol and associates the feed with the correct device type.
- Events such as geofence breaches, tamper alerts, and low battery are forwarded to Plaspy for notifications and reporting.
- Successful configuration ensures the X02 appears in Plaspy and transmits according to the configured reporting interval.

## Common Configuration Workflow

1. Access the official Xexun configuration method for the X02, for example the documented SMS command interface or the manufacturer's configuration tool.
2. Update the device APN settings with your operator APN details so the device can establish a GPRS session.
3. Enter the Plaspy server endpoint by providing either d.plaspy.com or the server IP 54.85.159.138 in the device server configuration.
4. Set the server port to 8888 and choose UDP or TCP if the X02 requires a transport selection.
5. Apply or save the configuration and, if the device uses SMS commands, send the required SMS commands to commit settings.
6. Restart the device if the manufacturer instructions recommend a reboot to apply network settings.
7. Validate that the device reports to Plaspy by checking for the unit in your Plaspy account and confirming periodic location updates.

## Example Configuration Commands

The X02 supports SMS-based configuration. The public sample commands below use the device default password 123456. Keep the order where initial factory restore or APN settings are required before server setup.

- Optional initial step to restore factory settings (only if you need to reset the device):
```
begin123456
```

- Set the operator APN. Replace [apn] with your mobile operator APN string:
```
apn123456 [apn]
```

- Set the APN username if your operator requires it. Replace [apnu] with the APN username:
```
apnuser123456 [apnu]
```

- Set the APN password if required. Replace [apnp] with the APN password:
```
apnpasswd123456 [apnp]
```

- Set the GPRS server to the Plaspy server IP and port. This points the device to Plaspy:
```
adminip123456 54.85.159.138 8888
```

- Enable GPRS mode on the device (if required by firmware to start data mode):
```
gprsmode123456
```

- Set the update interval to 60 seconds in the sample syntax shown (use appropriate interval for your needs):
```
t060s***n123456
```

Notes for the commands above:
- The example password 123456 is the factory default in the public sample. If your device password has been changed, substitute the correct password.
- Placeholders [apn], [apnu], and [apnp] must be replaced with the operator APN, APN username, and APN password respectively.
- Send these commands via SMS from an authorized phone number or method as required by the X02 firmware and manufacturer instructions.
- Only issue the factory restore command when you intend to reset the device to defaults.

## Configuration Notes

- SMS based configuration is commonly used for the X02; follow the manufacturer instructions for correct SMS formatting and authorized sender numbers.
- Firmware revisions and hardware variants can change command syntax or available features; verify command formats against the latest Xexun documentation.
- Choose UDP or TCP based on network reliability and your operational requirements; Plaspy accepts either transport on port 8888 and will auto detect protocol.
- Confirm APN, APN user, and APN password values with your mobile operator; incorrect APN settings will prevent GPRS connectivity.
- Remember that all devices reported to Plaspy use the same server port, which simplifies device onboarding across multiple models.

## Why Use Plaspy with This Configuration

Using the X02 with Plaspy gives organizations real time visibility into vehicle and asset location, historical playback for route analysis, and event-driven alerts for security and operational workflows. When the X02 is configured to report to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy ingests location and telemetry automatically and makes it available through maps, alerts, and reports to support fleet management and incident response.

Learn more about Plaspy and how to onboard devices at https://www.plaspy.com. For the most current device specific commands, firmware notes, and installation guidance verify setup details and documentation with the manufacturer at https://www.xexun.com/ since methods and firmware behavior can change over time.

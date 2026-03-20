---
slug: /queclink/gl100/configuration
id: gl100-configuration
sidebar_label: Configuration
title: QuecLink - GL100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GL100 showing how to connect the tracker to Plaspy using shared server settings and SMS commands
keywords:
  - QuecLink GL100 configuration
  - QuecLink GL100 setup
  - QuecLink GL100 Plaspy
  - GPS tracker configuration
  - vehicle tracking setup
  - QuecLink server configuration
  - tracker SMS configuration
  - GPRS tracker setup
  - QuecLink GL100 APN
  - tracking platform integration
---

# QuecLink - GL100 Configuration

This page documents the public configuration context for using the QuecLink GL100 with Plaspy. It collects the practical server settings and SMS configuration examples commonly used to point GL100 devices at the Plaspy backend. Use this as a practical reference when preparing the device and sending configuration commands; always confirm device-specific details in the official QuecLink documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, and the GL100 can be configured using SMS commands or the manufacturer tool depending on your installation and firmware. Manufacturer-side setup steps can vary by firmware revision, hardware variant, installation type, and vendor tools, so verify details with QuecLink if anything behaves differently.

## Configuration Overview

Below is a concise overview of the configuration goals when preparing a GL100 for Plaspy. The supplied SMS commands in this guide set APN, server endpoints, reporting intervals, and basic inputs so the tracker will report to the Plaspy backend.

- Point the GL100 to the Plaspy server endpoint so device messages are delivered to the platform.
- Configure operator APN and GPRS parameters so the device can establish a data connection.
- Set reporting interval and inputs (for example SOS) so events reach Plaspy reliably.
- Validate connectivity and visibility in Plaspy after applying settings.
- Use the provided SMS commands as examples; confirm syntax against your device firmware.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the GL100. Plaspy uses the same port for all supported devices and automatically detects the device protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (device may be configured using UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- A charged and powered GL100 device with access to send/receive SMS or the manufacturer configuration tool.
- Active SIM card with operator data and SMS service and the correct APN information for the SIM operator.
- The device IMEI and the device password (the example commands below use the default password queclink).
- Access to official QuecLink configuration instructions or software for your firmware version.
- Basic knowledge of sending SMS commands if using SMS configuration or access to the vendor tool for bulk configuration.
- A Plaspy account or platform access to confirm the device appears and reports after configuration.

## How This Tracker Connects to Plaspy

The GL100 is configured to report its position and events to the shared Plaspy server endpoint and port. Once the server and APN are set, the device will use GPRS to connect and send periodic reports and alerts to Plaspy for platform visibility.

- Device uses configured APN to establish GPRS connectivity with the mobile network.
- Tracker targets d.plaspy.com (or the provided IP) on port 8888 so messages are routed to Plaspy.
- Messages can be sent over UDP or TCP depending on configuration; Plaspy accepts either and auto-detects the protocol.
- Periodic location updates and event notifications (for example SOS or input changes) are delivered to the Plaspy backend.
- After successful connection, device status and position data become visible within Plaspy for monitoring and reporting.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for your GL100 (SMS commands, vendor tool, or configuration software) and confirm the device password and firmware version.
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device server settings.
3. Set the device server port to 8888 (Plaspy uses the same port for all devices).
4. Choose the transport option UDP or TCP if the device requires transport selection.
5. Configure operator APN values and any authentication the SIM requires.
6. Apply or save the configuration and restart the device if required by the tool or SMS response.
7. Validate that the GL100 reports to Plaspy by checking device connectivity and recent position updates in the Plaspy platform.

## Example Configuration Commands

The GL100 can be configured by sending SMS commands to the device. The following commands are taken from public QuecLink-style examples. The device default password used in these examples is queclink. Preserve the placeholders such as [apn], [apnu], and [apnp] and replace them with your operator APN values.

Note: The first command is a factory restore and should be used only when required as an initial step.

- Restore factory settings (optional initial step)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Set the time zone UTC+0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Set the operator APN (replace placeholders with your operator values)
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
Explanation of placeholders:
- [apn] = your mobile operator APN
- [apnu] = APN username if required (leave blank if none)
- [apnp] = APN password if required (leave blank if none)

- Set the GPRS server to Plaspy (domain and IP included; device will use port 8888)
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

- Set the update/report interval to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Enable SOS button notification on input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Send each command as an SMS message from an authorized phone number or using the vendor configuration tool according to QuecLink guidance. If your device requires a different command prefix or password, adapt accordingly.

## Configuration Notes

- SMS-based configuration is commonly supported for the GL100 but exact command syntax and responses can vary by firmware version and hardware revision.
- You can specify the Plaspy server by hostname d.plaspy.com or by IP 54.85.159.138; include port 8888 in the server settings. Plaspy uses the same port for all devices and auto-detects the protocol.
- Choose UDP or TCP based on your installation preference; Plaspy accepts both transports and handles protocol detection automatically.
- Keep the device password secure and confirm the default password before sending commands; some deployments require changing the default password after setup.
- When using placeholders like [apn], [apnu], and [apnp], make sure to replace them with exact operator values or leave username/password empty if the operator does not require them.

## Why Use Plaspy with This Configuration

Using the QuecLink GL100 with Plaspy provides a straightforward way to get reliable position and event data into a single monitoring platform. By pointing the tracker to Plaspy's shared server endpoint and using consistent reporting intervals, organizations can gain real-time visibility, centralized event handling, and consistent device management across fleets of similar devices.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device-specific configuration details, firmware behavior, and command syntax on the manufacturer site https://www.queclink.com/ to ensure accuracy with your GL100 firmware and installation.

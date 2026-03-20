---
slug: /xexun/tk_203/configuration
id: tk_203-configuration
sidebar_label: Configuration
title: Xexun - TK-203 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xexun TK 203 showing how to configure the device for use with Plaspy including SMS commands and server settings
keywords:
  - Xexun TK 203 configuration
  - Xexun TK 203 setup
  - TK 203 Plaspy configuration
  - Plaspy tracker configuration
  - GPS tracker server settings
  - TK 203 SMS commands
  - Xexun tracker setup guide
  - GPS platform integration Plaspy
  - vehicle tracking configuration
  - GPRS tracker setup
---

# Xexun - TK-203 Configuration

This page covers the public configuration context for using the Xexun TK-203 with Plaspy. It collects the practical, publicly available steps and SMS commands used to prepare a TK-203 to report location and events to the Plaspy platform. The TK-203 supports GSM, GPRS, GPS, SMS control, automatic position reporting, and common alert types such as SOS, geofence, movement, overspeed, and low battery.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the same server endpoint and port are used for many device models. Exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools, so use this guide together with the device manual and any vendor instructions when available.

## Configuration Overview

This configuration process prepares the TK-203 to send location updates and alerts to Plaspy using the tracker GPRS connection or SMS commands for initial setup. In practical terms the process sets network APN details, the Plaspy server endpoint, the reporting mode, and a suitable update interval so the device is visible and active in Plaspy.

- Configure the mobile data APN and optional APN credentials so the device can access GPRS
- Set the server endpoint so the TK-203 reports to Plaspy
- Choose transport mode if required and set the reporting interval for automatic updates
- Validate connectivity by confirming the device reports to the Plaspy server and appears in the platform
- Optionally use SMS commands to perform initial setup and troubleshooting if GPRS configuration is not yet active

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy settings used to point the TK-203 at Plaspy. Plaspy uses the same port for all supported devices and performs automatic protocol detection to interpret incoming device messages.

## Typical Requirements Before Setup

- A charged TK-203 device with access to its SMS or configuration interface
- A valid SIM card installed with data and SMS enabled and enough balance or a data plan for GPRS
- Manufacturer documentation or access to the vendor configuration method for sending SMS commands
- Knowledge of the device password or PIN if required for configuration using SMS; the sample default password below is 123456
- Basic coverage in the installation area to allow GPRS and GPS operation

## How This Tracker Connects to Plaspy

The TK-203 can be configured to report via GPRS to a remote server so Plaspy receives location and event messages for display and monitoring. Configuration points are the APN, server IP or domain, port, transport mode, and reporting interval.

- The device sends periodic position reports to the shared Plaspy server endpoint and port
- Device events such as SOS, geofence triggers, movement, overspeed, and low battery can be forwarded to Plaspy once the server is set
- The TK-203 may be set by SMS commands to initiate GPRS and server configuration before full network access is established
- Plaspy recognizes incoming messages and applies automatic protocol detection so no manual protocol selection is required in the platform
- Successful configuration ensures visibility and operational monitoring in Plaspy for fleet or personal tracking

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS configuration commands as documented by the vendor.
2. Enter the Plaspy server information on the device or via SMS using either the server domain d.plaspy.com or the server IP 54.85.159.138 as allowed by the device.
3. Set the port to 8888 as the destination port for reporting to Plaspy.
4. Choose UDP or TCP if the device requires a transport selection and supports both options.
5. Apply or save the device configuration and allow the device to attempt a GPRS connection using the APN and credentials you provided.
6. Restart the device if the manufacturer instructions recommend a reboot to apply network settings.
7. Validate that the device reports to Plaspy and appears in the platform, confirming periodic updates and event reporting.

## Example Configuration Commands

The TK-203 can be configured by sending SMS messages to the device. The sample commands below are provided in the order commonly used for initial setup. The example uses the default device password 123456 where shown. If your device uses a different password replace 123456 with the correct password.

- Optional initial factory restore command (use only if you need to reset device settings)
```text
begin123456
```

- Set the APN for the mobile operator. Replace {{apn}} with your operator APN.
```text
apn123456 {{apn}}
```

- Set the APN username if required by your operator. Replace {{apnu}} with the APN username.
```text
apnuser123456 {{apnu}}
```

- Set the APN password if required by your operator. Replace {{apnp}} with the APN password.
```text
apnpasswd123456 {{apnp}}
```

- Set the GPRS server endpoint and port to Plaspy. The command below uses the Plaspy server IP and port. If your firmware supports domain names you can substitute d.plaspy.com for the IP address where applicable.
```text
adminip123456 54.85.159.138 8888
```

- Set the GPRS mode to enable data reporting (use as provided by the device).
```text
gprsmode123456
```

- Set the automatic update interval to 60 seconds. Keep the password token intact.
```text
t060s***n123456
```

Notes on placeholders
- {{apn}} is your mobile operator APN for GPRS data
- {{apnu}} is the APN username if required by the operator
- {{apnp}} is the APN password if required by the operator

Send each SMS to the TK-203 from an authorized number and wait for device confirmation replies when available. Use the factory restore command only when you intend to reset configuration to defaults.

## Configuration Notes

- Firmware versions and hardware revisions may change available SMS commands or command syntax; always cross check with the device manual for your firmware.
- The TK-203 supports SMS based configuration in the public commands above; some installers prefer vendor tools when available.
- Choose TCP or UDP according to installer preference or vendor recommendation; Plaspy accepts both transports on port 8888.
- Confirm APN and operator credentials with your mobile provider before configuring GPRS.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol on incoming connections.

## Why Use Plaspy with This Configuration

Configuring the Xexun TK-203 to report to Plaspy gives you a centralized way to view periodic location updates and receive event notifications for SOS, geofence, movement, overspeed, and battery alerts. Using the shared Plaspy server settings simplifies deployment across mixed fleets because the platform automatically detects the tracker protocol and uses the same destination port for supported devices.

To learn more about Plaspy and the services it provides visit https://www.plaspy.com. For the latest device specific instructions, firmware notes, and manufacturer support resources verify current information on the official Xexun site https://www.xexun.com/.

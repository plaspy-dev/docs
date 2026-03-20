---
slug: /carscop/cctr_800/configuration
id: cctr_800-configuration
sidebar_label: Configuration
title: Carscop - CCTR-800 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the Carscop CCTR-800 GPS tracker to Plaspy using shared server settings
keywords:
  - Carscop CCTR-800 configuration
  - Carscop GPS tracker setup
  - CCTR-800 Plaspy configuration
  - Carscop server configuration
  - GPS tracker setup guide
  - vehicle tracking setup
  - tracker APN configuration
  - SMS configuration tracker
  - portable tracker setup
  - fleet tracking Plaspy
---

# Carscop - CCTR-800 Configuration

This page documents the public configuration context for using the Carscop CCTR-800 portable GPS tracker with the Plaspy platform. It focuses on the server and device settings that are commonly required to direct the tracker to Plaspy, and it consolidates publicly available SMS command examples from the manufacturer where provided.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. This guide explains the practical steps and public commands known for the CCTR-800 and points to the official Carscop documentation for device specific details.

## Configuration Overview

The goal of configuring the CCTR-800 for Plaspy is to prepare the tracker so it reliably reports location and device status to the Plaspy server endpoint and appears in your Plaspy account. Typical configuration covers network access (APN), server destination, transport selection, and a verification step to confirm the device is visible on the platform.

- Set the device APN and optional APN credentials so the tracker can use GPRS to reach Plaspy
- Configure the device to report to the Plaspy server endpoint and port
- Select UDP or TCP transport on the tracker if required by the device interface
- Use the provided SMS commands or manufacturer tool to apply settings and, if necessary, restore factory defaults before setup
- Validate the tracker is sending data and visible inside Plaspy after configuration

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note that Plaspy uses the same port for all supported devices and can automatically detect the correct tracker protocol once the tracker is pointed to the Plaspy server and port.

## Typical Requirements Before Setup

- A charged CCTR-800 with access to its SMS configuration or the official Carscop configuration tool
- A SIM card with active data (GPRS) and SMS capability inserted in the tracker where required
- The operator APN, and optionally APN username and password (placeholders are used in command examples)
- Access to the device default password if needed for SMS commands (manufacturer default shown in public commands)
- A method to receive or view device replies to SMS commands to confirm setting acceptance
- Confirmation of firmware version and any manufacturer notes that affect command syntax

## How This Tracker Connects to Plaspy

The CCTR-800 is configured to report location and status to the shared Plaspy server endpoint and port so that Plaspy can process incoming messages and display device data in the platform. Plaspy will detect the protocol automatically after the device begins sending data to the correct endpoint.

- The tracker uses GPRS to open a data connection to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be configured as UDP or TCP depending on device options and network conditions
- The device sends periodic location updates and event reports to the Plaspy endpoint
- Plaspy receives the data and maps it to the correct tracker protocol automatically
- Once reporting, the tracker becomes visible in Plaspy for monitoring, historical playback, and alerts

## Common Configuration Workflow

1. Access the official Carscop configuration method such as the device SMS commands or the manufacturer configuration software.
2. Enter the Plaspy server address by using either the domain d.plaspy.com or the IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP transport on the device if the tracker requires a transport selection during setup.
5. Configure the device APN and optional APN username and password so it can establish a GPRS data connection.
6. Apply or save the configuration on the device and restart the tracker if the device or instructions recommend a reboot.
7. Validate that the device reports to Plaspy by checking visibility in your Plaspy account and confirming incoming position messages.

If you are using SMS configuration, follow the manufacturer's SMS command order and verify reply messages from the tracker before assuming the configuration is complete.

## Example Configuration Commands

The following SMS commands are the publicly available examples for the CCTR-800. The sample setup uses the device default password 123456. Replace placeholders where required.

- Reset to factory settings (optional initial step)
```
RESET*123456
```

- Set time zone to UTC+0
```
TIMEZONE*123456*+00
```

- Set operator APN (replace {{apn}} with your operator APN)
```
APN*123456*{{apn}}
```

- Set APN username and password (optional; replace {{apnu}} and {{apnp}} with credentials)
```
USERNAME*123456*{{apnu}}*{{apnp}}
```

- Set the GPRS server to Plaspy by IP and port
```
IP*123456*54.85.159.138,8888
```

- Keep the tracker online (example command to maintain online status)
```
KEEPONLINE*123456
```

Notes on placeholders
- {{apn}} — your mobile operator APN value
- {{apnu}} — APN username if required by your operator
- {{apnp}} — APN password if required by your operator

The order above reflects a common sequence: optional reset, time zone, APN, APN credentials, server endpoint, and keepalive. Use the device replies to confirm each command succeeded.

## Configuration Notes

- SMS-based configuration is supported and shown above; some installers prefer the manufacturer's software or platform for batch and over-the-air updates.
- Firmware versions and regional device revisions can change command syntax or available features; always verify with current manufacturer documentation.
- Choosing TCP versus UDP depends on network reliability and your preference; Plaspy supports both transports and will accept data on port 8888.
- Keep the device password secure; the examples use the publicly documented default password 123456 which may need to be changed for production deployments.
- If the device reports via domain name, you can use d.plaspy.com; using the IP 54.85.159.138 is an alternate option when DNS is restricted.

## Why Use Plaspy with This Configuration

Configuring the Carscop CCTR-800 to report to Plaspy gives organizations a straightforward way to centralize tracking, monitor movement, and access historical location data without per-device server setup complexity. Because Plaspy uses a shared server address and port and automatically detects the tracker protocol, the integration process focuses on setting network access and directing the tracker to the Plaspy endpoint.

To learn more about Plaspy and the services it provides visit https://www.plaspy.com. For device specific commands, firmware notes, and the latest Carscop documentation verify setup details with the manufacturer at http://www.carscop.com/ as manufacturer specifications and configuration methods can change over time.

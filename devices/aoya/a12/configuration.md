---
slug: /aoya/a12/configuration
id: a12-configuration
sidebar_label: Configuration
title: AoYa - A12 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the AoYa A12 GPS tracker for use with Plaspy including server settings and SMS commands
keywords:
  - AoYa A12 configuration
  - AoYa A12 setup
  - AoYa A12 GPS tracker
  - AoYa A12 server configuration
  - AoYa A12 SMS commands
  - AoYa A12 GPRS setup
  - Plaspy tracker configuration
  - Plaspy server settings
  - vehicle tracking configuration
  - fleet tracking setup
---

# AoYa - A12 Configuration

This page documents the public configuration context for using the AoYa A12 GPS tracker with the Plaspy platform. It collects practical, manufacturer-visible settings and the common SMS command flow used to prepare the device to report location and status to Plaspy. Use this guide to understand the shared server values Plaspy expects and the typical SMS commands shown in public AoYa documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the server side. Exact steps on the manufacturer side can vary by firmware, hardware revision, installation type, and vendor tools. The A12 modelConfiguration shown here uses SMS-based commands and a default device password, which is useful in many installations but should be verified against the device you have on hand.

## Configuration Overview

The configuration process prepares the AoYa A12 to communicate reliably with Plaspy, validate connectivity, and appear in the Plaspy fleet view. For the A12 a common public configuration path uses SMS commands to set APN, server address, transport mode, and time zone; the device then uses GPRS to send location and status data to Plaspy.

- Set the mobile data APN and optional APN credentials so the tracker can connect to the carrier network.
- Point the device to the Plaspy server domain or IP so data is sent to the correct endpoint.
- Choose the transport mode (UDP or TCP) and ensure the device is using the Plaspy port.
- Validate the device reports to Plaspy and use the check command to confirm basic settings.
- Optionally perform a factory reset when starting a new installation or troubleshooting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note: All devices in Plaspy use the same port, so port 8888 is shared across supported trackers.

## Typical Requirements Before Setup

- A charged AoYa A12 with access to its SMS command interface.
- An active SIM card installed with a data plan that supports GPRS for the device.
- Carrier APN information (APN, optional username, and password) for the SIM.
- Access to manufacturer configuration instructions or the ability to send SMS to the device.
- The device default password (public example is 123456) or the password you set for the tracker.
- A method to restart or power-cycle the tracker after saving settings if required.

## How This Tracker Connects to Plaspy

When configured, the AoYa A12 is set to report its position and device status to the shared Plaspy server endpoint and port. Plaspy receives incoming device data over the assigned transport and maps it to the platform, with automatic protocol detection simplifying cross-device configuration.

- The tracker uses GPRS to open connectivity to the server and send tracked data.
- The device is pointed to the Plaspy server using either the server IP or, if supported, the server domain.
- Transport is selected on the device as UDP or TCP; Plaspy accepts both and detects protocol automatically.
- Regular position updates and event messages sent by the tracker become visible in Plaspy once the device is reporting to the server.
- Using the common Plaspy port ensures consistent handling across different tracker models.

## Common Configuration Workflow

1. Access the official AoYa configuration method documented by the manufacturer, typically SMS command interface or vendor software.
2. Configure the device APN using the APN command so the tracker can reach the internet.
3. Enter the Plaspy server by specifying either d.plaspy.com or 54.85.159.138 depending on the device capabilities.
4. Set the server port to 8888, since all devices in Plaspy use the same port.
5. Choose UDP or TCP on the tracker if the firmware requires an explicit transport selection.
6. Save or apply the configuration on the device and restart or power-cycle the tracker if recommended.
7. Validate that the device reports to Plaspy by checking the device status in Plaspy and using the device check command if available.

## Example Configuration Commands

The AoYa A12 modelConfiguration provides a set of public SMS commands commonly used to configure the device. The sample commands below assume the device default password 123456. Preserve the placeholders when substituting your carrier values.

1. Optional initial factory reset (use only if you intend to restore defaults):
```text
begin123456
```
2. Set the time zone to UTC+0:
```text
time zone123456 0
```
3. Set the operator APN (replace [apn] with the carrier APN):
```text
apn123456 [apn]
```
4. Set the APN username and password if the carrier requires authentication (replace [apnu] and [apnp] with your values):
```text
up123456 [apnu] [apnp]
```
5. Set the GPRS server to Plaspy using the public Plaspy IP and port:
```text
adminip123456 54.85.159.138 8888
```
Note: If your device firmware supports specifying a server domain instead of an IP, you can use d.plaspy.com in the device configuration tool where allowed. The adminip command shown above is the public example using the Plaspy IP.

6. Switch to GPRS mode and select transport. Two public variants are shown; use the one supported by your device:
```text
gprs123456,1,1
```
or
```text
gprs123456
```
7. Verify current settings with the device check command:
```text
check123456
```

Placeholders explained:
- [apn] — your mobile carrier APN
- [apnu] — APN username if required by carrier
- [apnp] — APN password if required by carrier

The sample device password in public documentation is 123456. If your device uses a different password, substitute it in each command. Only perform a factory reset when necessary.

## Configuration Notes

- Firmware and regional variants can change command syntax and available features; verify exact SMS structures against your device firmware.
- The AoYa A12 public flow commonly uses SMS commands to set APN and server values; other models or firmware may include web or client tools.
- Choose UDP or TCP according to network conditions; Plaspy accepts both and will auto detect the protocol.
- Because Plaspy uses the same port (8888) for all devices, ensure that port is set consistently on the tracker.
- Keep device passwords and APN credentials secure; replace default passwords where possible following vendor guidance.

## Why Use Plaspy with This Configuration

Configuring the AoYa A12 to report to Plaspy gives organizations a straightforward way to centralize vehicle location and status data. Using the shared Plaspy server settings and port reduces configuration variance between models, while Plaspy's automatic protocol detection helps accommodate UDP or TCP transports without extra server-side setup.

To learn more about Plaspy and how it integrates with a wide range of trackers visit https://www.plaspy.com. For the latest, device specific commands, firmware notes, and hardware revisions verify details with the manufacturer at http://www.aoyagps.com/ as setup methods and firmware behavior can change over time.

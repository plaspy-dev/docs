---
slug: /bofan/pt_201/configuration
id: pt_201-configuration
sidebar_label: Configuration
title: Bofan - PT-201 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Bofan PT-201 showing Plaspy server settings and SMS command examples for GPRS setup
keywords:
  - Bofan PT-201 configuration
  - Bofan PT-201 setup
  - Bofan PT-201 server configuration
  - PT-201 Plaspy integration
  - Bofan GPS tracker configuration
  - PT-201 SMS commands
  - PT-201 GPRS setup
  - motorcycle GPS tracker setup
  - Plaspy tracker configuration
  - PT-201 tracking software configuration
---

# Bofan - PT-201 Configuration

This page documents the public configuration context for using the Bofan PT-201 tracker with the Plaspy platform. It collects the shared Plaspy server settings and the commonly used SMS configuration commands published for the PT-201, and explains how those values are applied to prepare the device for live tracking in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installer practice, and vendor tools. The examples below use the PT-201 public SMS commands where available and focus on practical steps to point the device at Plaspy for GPRS reporting.

## Configuration Overview

The configuration process prepares the PT-201 to communicate with the Plaspy tracking platform over GPRS so that location and event data appear in your Plaspy account. For PT-201 devices this commonly involves sending SMS configuration commands or using the vendor configuration tool to set an APN, identifier, server endpoint, and reporting interval.

- Set the device identifier used for server registration so Plaspy can associate messages with a device
- Configure the mobile data APN so the device can establish a GPRS connection
- Point the device to the Plaspy server endpoint and the shared port used by Plaspy
- Set a reporting interval to control how often the tracker updates location to Plaspy
- Validate connectivity and confirm the device appears in Plaspy after applying the configuration

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be used on port 8888 depending on device capability
- Plaspy automatically detects the tracker protocol so devices can report using their native protocol while sharing the same Plaspy port

## Typical Requirements Before Setup

- A powered PT-201 with access to send and receive SMS or the manufacturer configuration tool
- An active SIM with data enabled and the correct APN for the mobile operator
- The device IMEI or the identifier that will be used when registering the tracker in Plaspy
- Access to the device default SMS password if SMS configuration is required (the PT-201 default shown in examples is 000000)
- Basic knowledge of whether your device requires TCP or UDP selection when configuring server transport
- A Plaspy account ready for device registration so you can confirm the device is reporting after configuration

## How This Tracker Connects to Plaspy

The PT-201 sends location and status messages over GPRS to a configured server endpoint and port. When configured for Plaspy, the tracker reports to the shared Plaspy server address and port so Plaspy can ingest the messages and display them in the platform.

- The device is configured to report to the Plaspy server domain or IP and the shared port 8888
- Messages are sent over the chosen transport (UDP or TCP) depending on device support
- Plaspy matches the device identifier to a device record and processes incoming telemetry automatically
- Regular position updates and alerts sent by the PT-201 become visible in Plaspy for monitoring and historical review
- Validation of connectivity is performed by confirming the tracker appears and sends data to Plaspy after configuration

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS commands from a phone with the tracker SIM inserted.
2. Enter the Plaspy server by domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device configuration.
3. Set the device port to 8888, which is the shared Plaspy port for all devices.
4. Choose UDP or TCP if the PT-201 requires an explicit transport selection.
5. Set the device identifier (14-digit ID commonly used with Plaspy) and configure the APN using the operator values.
6. Apply or save the configuration and restart the device if required by the firmware or vendor instructions.
7. Validate that the device reports to Plaspy and appears in your Plaspy account, adjusting APN or transport if needed.

## Example Configuration Commands

The PT-201 supports SMS-based configuration. The following public command templates are provided in the manufacturer content and are presented here in the same order that is typically performed. The default device SMS password in these examples is 000000.

- Optional initial factory reset (use only if needed):
```text
000000DFT
```

- Set the 14 digit identifier used with Plaspy (use the last 14 digits of the IMEI). Replace \<14-digit-id> with the actual 14 digit identifier:
```text
000000GID<14-digit-id>
```
Example: if the last 14 digits of the IMEI are 12345678901234, send:
```text
000000GID12345678901234
```

- Set the APN for the mobile operator. Preserve placeholders for username and password if required by the carrier:
```text
000000APN{{apn}},{{apnu}},{{apnp}}
```
Explanation of placeholders:
- {{apn}} = the operator APN name
- {{apnu}} = APN username, if required by the operator (leave blank if not required)
- {{apnp}} = APN password, if required by the operator (leave blank if not required)

- Set the GPRS server to point to Plaspy. This example uses the public Plaspy server IP and port:
```text
000000SVR54.85.159.138,8888
```
You may substitute d.plaspy.com for the IP if the device accepts domain names:
```text
000000SVRd.plaspy.com,8888
```

- Set the position update interval to 1 minute (60 seconds):
```text
000000GTI60
```

Send each SMS to the tracker number using the device SIM. Wait for any acknowledgment SMS from the device before proceeding to the next step when possible.

## Configuration Notes

- The PT-201 supports SMS configuration as shown above; manufacturer tools may offer the same settings via USB, configuration software, or an installer interface.
- Firmware and hardware revisions can change command syntax or available options. Verify commands against the current PT-201 manual from the manufacturer.
- TCP versus UDP is a device-level option. Choose the transport supported by your device firmware and network conditions; Plaspy accepts either on port 8888 and automatically detects the protocol.
- Keep the device default SMS password secure. The public examples use the default 000000 when that password applies; change the password if required by your security policy.
- APN details differ by mobile operator and market. Use the operator APN, username, and password values when sending the APN command.

## Why Use Plaspy with This Configuration

Using the PT-201 with Plaspy gives motorcycle fleet managers and individual users an established platform for visibility, real time tracking, and event notifications. Pointing the PT-201 at Plaspy with the shared server settings simplifies onboarding by using a consistent endpoint and port for all supported devices, and Plaspy's automatic protocol detection reduces the need for manual protocol selection in many cases.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the most current device specific commands, firmware details, and installation instructions verify the official PT-201 documentation at https://www.bofancloud.com/ since manufacturer specifications and setup methods can change over time.

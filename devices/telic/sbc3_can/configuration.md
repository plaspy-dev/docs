---
slug: /telic/sbc3_can/configuration
id: sbc3_can-configuration
sidebar_label: Configuration
title: Telic - SBC3 CAN Configuration
sidebar_class_name: menu_item_tracker
description: Practical setup guide for Telic SBC3 CAN tracker with Plaspy server settings and SMS configuration steps
keywords:
  - Telic SBC3 CAN configuration
  - Telic SBC3 CAN setup
  - SBC3 CAN Plaspy integration
  - Telic GPS tracker configuration
  - Telic tracker server settings
  - Plaspy tracker setup
  - vehicle tracking configuration
  - fleet management GPS setup
  - SMS configuration Telic
  - CAN bus tracker configuration
---

# Telic - SBC3 CAN Configuration

This page documents the public configuration context for using the Telic SBC3 CAN tracker with Plaspy. It collects the practical server settings and the SMS configuration commands that are commonly used to point the SBC3 CAN to Plaspy for location reporting and device visibility. Use this guide together with the manufacturer documentation to complete a safe and reliable setup.

Plaspy uses a shared server endpoint and the same port for all supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so verify details against Telic documentation where needed. The examples below show the SMS commands and workflow published for the SBC3 CAN that are suitable for integration with Plaspy.

## Configuration Overview

The goal of this configuration is to prepare the SBC3 CAN to communicate with the Plaspy fleet platform and to validate that telemetry and status messages reach the Plaspy server. The SBC3 CAN supports SMS based configuration in the public instructions, so the workflow focuses on updating network access, server endpoint, and operational mode.

- Configure APN and optional APN credentials so the device can use GPRS for data.
- Set the Plaspy GPRS server address so the tracker reports to Plaspy.
- Choose the appropriate transport mode if required and enable GPRS reporting.
- Validate connectivity and device reporting so the device becomes visible in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Automatic protocol detection in Plaspy

Note that all devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol so you typically only need to configure the server address and port on the tracker.

## Typical Requirements Before Setup

- A powered and installed Telic SBC3 CAN unit with SMS configuration enabled.
- An active cellular SIM with a valid data plan and correct APN information.
- Access to the device configuration method recommended by the manufacturer such as SMS commands or the official Telic configuration tool.
- The device default password if using SMS commands and permission to change it if required.
- Network coverage in the installation area for GPRS connectivity.
- Administrative access to the fleet account on Plaspy to validate device visibility after configuration.

## How This Tracker Connects to Plaspy

The SBC3 CAN is configured to report data to the Plaspy shared server endpoint and port so Plaspy receives location and status updates automatically. The platform uses the same port for all supported trackers and it will detect the incoming protocol to parse messages correctly.

- The tracker sends GPRS data to the Plaspy server endpoint or IP on port 8888.
- Transport can be UDP or TCP depending on device preferences and operator network.
- Plaspy automatically detects the tracker protocol and interprets telemetry.
- Once reporting is active the device becomes visible and manageable within Plaspy.
- Regular status, position, and event messages are forwarded to Plaspy for monitoring.

## Common Configuration Workflow

1. Access the official Telic configuration method for the SBC3 CAN, for example SMS or the manufacturer tool, following Telic instructions.
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 when prompted for server address.
3. Set the server port to 8888 as the device port for reporting.
4. If the device asks for a transport choice, choose UDP or TCP according to your network preference.
5. Configure APN and optional APN credentials so GPRS can be used for data transport.
6. Apply or save the configuration and restart the device if the manufacturer instructions require a reboot.
7. Validate that the device reports to Plaspy by checking device status in the platform and using the device verification command where available.

## Example Configuration Commands

The SBC3 CAN supports SMS based configuration. The following SMS commands are the public instructions provided for this model. The device default password used in these examples is 123456. Replace placeholders and the password as appropriate for your installation.

- Optional initial factory reset
```sms
begin123456
```

- Set the time zone to UTC 0
```sms
time zone123456 0
```

- Set the operator APN
```sms
apn123456 [apn]
```
Explanation: replace [apn] with your mobile operator APN name.

- Set the APN username and password if required
```sms
up123456 [apnu] [apnp]
```
Explanation: replace [apnu] with the APN username and [apnp] with the APN password. Include this SMS only if your operator requires APN credentials.

- Set the GPRS server to the Plaspy IP and port
```sms
adminip123456 54.85.159.138 8888
```
Note: This command configures the tracker to report to the Plaspy server IP on port 8888. If your workflow requires using the domain instead, enter d.plaspy.com in the server field when using the manufacturer tool if that option is offered.

- Switch the device into GPRS mode
```sms
gprs123456,1,1
```
Or the shorter variant
```sms
gprs123456
```
Explanation: Use the variant required by your firmware. The first form shows parameters commonly used to enable GPRS operation.

- Check current device settings
```sms
check123456
```
This verification command returns key configuration values to confirm APN, server, and mode.

## Configuration Notes

- SMS based configuration is a published method for the SBC3 CAN but manufacturer tools or configuration interfaces may also be available; follow Telic recommendations for the best tool for your environment.
- Firmware and hardware revisions can change command syntax or available parameters; if a command does not respond, verify the device firmware and consult Telic documentation.
- Choose UDP or TCP based on operator stability and application needs. Plaspy supports both transports on port 8888 and automatically detects the incoming protocol.
- The default SMS password in these public instructions is 123456. Replace the password where supported to maintain device security.
- All Plaspy devices use the same server port, which simplifies fleet configuration across multiple tracker models.

## Why Use Plaspy with This Configuration

Using the Telic SBC3 CAN with Plaspy provides a practical way to gain visibility into vehicle locations and device status while relying on a consistent server configuration across devices. The SBC3 CAN's ability to be configured for GPRS reporting and the published SMS commands makes it straightforward to bring units online and visible in Plaspy for monitoring and operational workflows.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer instructions verify information on the Telic website https://www.telic.de. Manufacturer configuration methods, firmware behavior, and device interfaces can change over time so always cross check with official Telic documentation.

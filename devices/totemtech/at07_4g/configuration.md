---
slug: /totemtech/at07_4g/configuration
id: at07_4g-configuration
sidebar_label: Configuration
title: Totemtech - AT07-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Totemtech AT07 4G setup with Plaspy tracking server and SMS based commands
keywords:
  - Totemtech AT07 4G configuration
  - Totemtech AT07 4G setup
  - AT07 4G Plaspy integration
  - AT07 4G GPS tracker configuration
  - GPS tracker server configuration
  - fleet tracking setup
  - SMS configuration GPS tracker
  - GPRS tracker setup
  - vehicle tracker server settings
  - telemetry integration Plaspy
---

# Totemtech - AT07-4G Configuration

This page documents the public configuration context for using the Totemtech AT07-4G tracker with the Plaspy tracking platform. It focuses on the practical server settings and the manufacturer provided SMS commands that are commonly used to prepare the device to report into Plaspy for real time tracking and telemetry. Use this as an operational reference while confirming any firmware or vendor tool differences with the official manufacturer documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol for incoming connections, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. The AT07-4G supports SMS and GPRS configuration, and the example SMS commands below show how to set APN, GPRS server target, and basic reporting parameters for use with Plaspy.

## Configuration Overview

Configuring the AT07-4G for Plaspy is about pointing the device at the Plaspy server endpoint, ensuring the device has working cellular connectivity and correct APN credentials, and enabling the required reporting behavior so location and event data are delivered reliably to Plaspy. The manufacturer provides SMS based commands for many common setup tasks which can be used in field installations or during bench configuration.

- Set the operator APN and optional APN credentials so the device can establish a GPRS session
- Configure the device to report to the Plaspy server endpoint or IP and the shared Plaspy port
- Choose the transport mode supported by the device where required and enable acknowledgement reporting
- Set reporting intervals and any event reporting parameters to control when data is sent to Plaspy
- Validate connectivity and confirm the device appears in Plaspy after applying configuration

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol for incoming device data

These values are the public Plaspy endpoint details and are used by AT07-4G devices configured to report to Plaspy. Plaspy uses the same port for all supported devices and the platform automatically detects the tracker protocol.

## Typical Requirements Before Setup

- A powered AT07-4G device with a valid SIM card and active mobile data or SMS service
- APN details from the SIM operator including APN name and any APN username and password
- Access to the device phone number to send SMS commands or access to the official manufacturer configuration tool
- Familiarity with the device default password if SMS commands require authentication
- A test plan to confirm the device reaches the Plaspy server and appears in the platform after configuration

## How This Tracker Connects to Plaspy

The AT07-4G is configured to open a GPRS session and send telemetry to the Plaspy server endpoint and port. Once the device has network access and the correct server settings it will transmit position fixes and event notifications so Plaspy can provide live maps, alerts, and history.

- Device is configured to report to the shared Plaspy endpoint at d.plaspy.com or 54.85.159.138
- All devices use the same Plaspy port 8888 for reporting
- The tracker uses UDP or TCP as selected during configuration and Plaspy will accept either transport
- Plaspy automatically detects the incoming tracker protocol and processes location and event messages
- After successful configuration the device sends periodic location updates and event reports to Plaspy for visibility and monitoring

## Common Configuration Workflow

1. Access the official manufacturer configuration method or vendor tool, or prepare to send SMS commands to the device phone number
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138 depending on the device command format
3. Set the server port to 8888 as required by the device configuration
4. Choose UDP or TCP transport if the device requires a transport selection
5. Apply or save the configuration to the device using the manufacturer tool or by sending the documented SMS commands
6. Restart the device if the manufacturer recommends a reboot after configuration
7. Validate that the device reports to Plaspy and is visible in the platform using live location updates and event messages

If you are configuring multiple devices, apply this workflow consistently and confirm visibility in Plaspy after each device is configured.

## Example Configuration Commands

The AT07-4G can be configured using SMS commands. Below are the public SMS commands provided by the manufacturer in the order commonly used. The example assumes the device default SMS password is 000000. Replace {{apn}}, {{apnu}}, and {{apnp}} with your operator APN name, APN username, and APN password as needed.

- Optional initial factory reset command using the default password
```text
*000000,007#
```

- Set the operator APN including optional username and password
```text
*000000,002,{{apn}},{{apnu}},{{apnp}}#
```
Explanation: replace {{apn}} with the mobile operator APN, and optionally {{apnu}} and {{apnp}} with APN username and password if required by the operator.

- Set the GPRS server to report to Plaspy by IP and port
```text
*000000,003,54.85.159.138,8888,1
```
Explanation: this command sets the server IP and port to Plaspy public values. Preserve the command format required by your firmware.

- Enable acknowledgment reporting
```text
*000000,019,1#
```

- Set the update interval to 60 seconds
```text
*000000,60,60,0,60#
```
Notes on use
- Send each SMS to the device phone number from an authorized number if the tracker restricts SMS commands.
- The default device password shown is 000000. Update the device password after initial setup where supported by the device to secure remote commands.
- Keep the command order consistent with the manufacturer guidance where indicated.

## Configuration Notes

- SMS based configuration is supported and useful for field installations, but manufacturer tools or PC configuration software may also be available depending on your vendor
- Firmware and hardware revisions can change command formats or available parameters; confirm commands against the device firmware version in hand
- The AT07-4G can use either UDP or TCP to reach Plaspy; choose the transport required by your installation and the device firmware
- Plaspy uses the same port 8888 for all devices and automatically detects the device protocol for incoming connections
- Change default passwords and secure authorized SMS senders where possible to reduce the risk of unauthorized configuration

## Why Use Plaspy with This Configuration

Configuring the AT07-4G to report to Plaspy provides consistent fleet visibility, event reporting, and integrated telemetry handling within a single platform. For operations that rely on anti-theft alerts, fuel monitoring, or mixed fleet telemetry, the combination of the AT07-4G hardware and Plaspy server settings supports reliable reporting and historical trace storage.

To learn more about Plaspy and how the platform handles device connections and telemetry visit https://www.plaspy.com. Manufacturer specifications, command syntax, and firmware behavior can change over time, so verify the latest device specific setup details and firmware information at the official Totemtech website http://www.totemtek.com/ before deploying at scale.

---
slug: /bofan/pt_60/configuration
id: pt_60-configuration
sidebar_label: Configuration
title: Bofan - PT-60 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Bofan PT 60 showing Plaspy server settings and practical setup steps for integration
keywords:
  - Bofan PT-60 configuration
  - Bofan PT-60 setup
  - PT-60 server configuration
  - Bofan GPS tracker configuration
  - PT-60 Plaspy integration
  - PT-60 tracking setup
  - Bofan tracker setup guide
  - GPS tracker configuration Plaspy
  - vehicle tracking PT-60
  - personal tracker PT-60
---

# Bofan - PT-60 Configuration

The following documentation covers the public configuration context for using the Bofan PT-60 tracker with Plaspy. It explains the shared Plaspy server settings you must apply to the tracker and describes the practical steps for preparing the device so it can report location and status to the Plaspy platform. Where available, example SMS commands from the device configuration reference are included and explained.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so treat the commands and workflows here as practical public guidance. Always verify the final details with the device and firmware documentation provided by the manufacturer.

## Configuration Overview

This configuration process prepares a PT-60 to communicate with Plaspy by setting the server endpoint, ensuring GSM GPRS connectivity, and configuring identification and reporting intervals. The goal is to make the tracker visible and reliably report location and events into the Plaspy platform.

- Configure the device to point to the Plaspy server endpoint and port so it can report telemetry.
- Set the device identifier used by Plaspy, typically a 14 digit identifier derived from the IMEI.
- Provide correct APN settings so the device can use GPRS data to reach the Plaspy server.
- Adjust the reporting interval to match your monitoring needs and network constraints.
- Validate connectivity and appearance of the device in Plaspy after applying settings.

## Plaspy Server Settings

- Use the server domain d.plaspy.com when configuring device server settings where domain names are supported.
- The Plaspy server IP is 54.85.159.138 for devices that require a numeric address.
- The server port used by Plaspy for all supported devices is 8888.
- The device may be configured to use UDP or TCP on port 8888 depending on tracker options.
- Plaspy automatically detects the tracker protocol so the platform can accept connections from supported device types without additional per device protocol configuration.

## Typical Requirements Before Setup

- A charged PT-60 with a working SIM card that has data and SMS capability as required by the configuration method.
- The device IMEI available for deriving identifiers or for platform device registration.
- APN information from the mobile network operator including APN name and optionally username and password.
- Access to the official manufacturer configuration method such as SMS commands or vendor software.
- Basic SMS sending capability from a mobile phone if using SMS control commands.
- Access to Plaspy account or onboarding instructions to confirm device visibility after configuration.

## How This Tracker Connects to Plaspy

The PT-60 is configured to send location and event data to the shared Plaspy server endpoint and port so Plaspy can track and display device telemetry. Once configured, the device uses the mobile data connection to open a TCP or UDP session to Plaspy and report according to the tracker firmware behavior.

- The tracker reports to the Plaspy server domain d.plaspy.com or the IP 54.85.159.138 on port 8888.
- You can select UDP or TCP transport on the device if the firmware supports transport selection.
- Plaspy listens on the same port 8888 for all supported devices and performs automatic protocol detection.
- Location and event messages are processed by Plaspy so the device becomes visible in the platform after successful connection.
- The tracker identifier configured on the device must match the identifier used when registering the device in Plaspy if manual registration is required.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the PT-60. For many PT-60 installations this is via SMS command interface.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 into the device server setting.
3. Set the server port to 8888 as this is the shared port used by Plaspy for all devices.
4. If the device requires transport selection, choose UDP or TCP according to your preference or network requirements.
5. Apply or save the configuration on the device and send the required SMS commands if using SMS setup.
6. Restart the device if the manufacturer instructions require a reboot to apply new settings.
7. Validate in Plaspy that the device reports successfully and that telemetry and location data are visible on the platform.

## Example Configuration Commands

The PT-60 supports SMS based configuration commands. The device default password in the public reference is 000000. Replace the placeholders where appropriate and send each SMS from an authorized phone number allowed by the device.

1. Optional factory reset or initial reset
Description: Use only if you need to reset the device to factory defaults before applying new settings.
```
000000DFT
```

2. Set the 14 digit identifier used with Plaspy
Description: Set the device identifier. Use the last 14 digits of the IMEI as the identifier in most Plaspy setups.
```
000000GID<14-digit-identifier>
```
Example note: If your IMEI is 123456789012345, the last 14 digits would be 23456789012345. Replace \<14-digit-identifier> with that value.

3. Set the APN for GPRS connectivity
Description: Replace the placeholders with your operator APN values. If your APN requires a username or password include [apnu] and [apnp] placeholders.
```
000000APN[apn]
```
Optional variant with APN user and pass
```
000000APN[apn],[apnu],[apnp]
```
Explanation: [apn] is the operator APN string, [apnu] is the APN username if required, and [apnp] is the APN password if required.

4. Set the GPRS server to Plaspy
Description: Configure the server address and port so the tracker reports to Plaspy. This sets the numeric IP and port as published for Plaspy.
```
000000SVR54.85.159.138,8888
```
Alternate if your device accepts a domain name instead of IP
```
000000SVR d.plaspy.com,8888
```

5. Set the update interval to 1 minute
Description: Configure the periodic reporting interval to 60 seconds as a common example.
```
000000GTI60
```

Note: Keep the device password prefix 000000 in each command unless you have changed the device password. Commands must be sent exactly as required by the tracker SMS command syntax.

## Configuration Notes

- Firmware and command syntax can vary between hardware revisions and firmware versions. If a command fails, verify the tracker firmware documentation.
- The PT-60 public commands above use SMS based configuration; manufacturer software or USB tools may also be available and can be used instead depending on your installation.
- You can supply d.plaspy.com or 54.85.159.138 as the server target; choose the domain where DNS is preferred or the numeric IP when required by device firmware.
- Plaspy uses the same port 8888 for all supported devices and performs automatic protocol detection so the platform accepts TCP or UDP messages on that port.
- When choosing UDP versus TCP consider network reliability and any firewall rules in your deployment environment.

## Why Use Plaspy with This Configuration

Using Plaspy with a properly configured PT-60 gives organizations centralized visibility and operational monitoring for tracked assets and people. With the server settings above, the PT-60 can report location and events into Plaspy so teams can view real time positions, set alerts, and monitor device status within a single platform.

To learn more about Plaspy visit https://www.plaspy.com and review the latest manufacturer configuration and firmware details at https://www.bofancloud.com/ as device specific commands, firmware behavior, and setup methods can change over time.

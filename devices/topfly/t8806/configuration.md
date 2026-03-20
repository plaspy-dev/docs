---
slug: /topfly/t8806/configuration
id: t8806-configuration
sidebar_label: Configuration
title: TopFly - T8806 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guidance and SMS commands to configure the TopFly T8806 for use with the Plaspy tracking platform
keywords:
  - TopFly T8806 configuration
  - TopFly T8806 setup
  - TopFly T8806 Plaspy
  - T8806 GPS configuration
  - T8806 server configuration
  - TopFly tracker configuration
  - Plaspy device setup
  - GPS tracker setup
  - vehicle tracking configuration
  - fleet tracking setup
---

# TopFly - T8806 Configuration

This page documents the public configuration context for using the TopFly T8806 GPS tracker with Plaspy. It covers the Plaspy server values you must apply on the device and presents the publicly available SMS commands that many T8806 units accept for basic setup. Use this guidance to prepare the device to report to Plaspy and to validate connectivity in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary with firmware, hardware revision, installation type, and vendor tools, so review the official TopFly documentation and consider device firmware differences when applying settings.

## Configuration Overview

This configuration prepares the T8806 to communicate with Plaspy so the device appears and reports correctly in the platform. The practical steps usually include setting regional parameters, APN for mobile data, and the remote server address and reporting interval.

- Configure time zone and timing parameters so reported timestamps are accurate in Plaspy
- Configure the mobile operator APN so the tracker can use GPRS data to reach the Plaspy server
- Set the GPRS server address and port so the tracker sends telemetry to Plaspy at d.plaspy.com or the Plaspy IP
- Configure the location update interval so reports arrive at the expected cadence
- Validate device connectivity and confirm the tracker appears in Plaspy after settings are applied

## Plaspy Server Settings

Use the following public Plaspy server values when configuring the T8806:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and installed T8806 tracker with access to send and receive SMS messages or the manufacturer configuration tool
- An active cellular SIM with a data plan and a correct APN for the mobile operator
- The device default password is 0000 as used in the public SMS examples below
- Access to the device owner or installer documentation from TopFly for model specific commands and behavior
- A way to confirm device reporting in Plaspy after configuration, for example via the Plaspy device list or telemetry view

## How This Tracker Connects to Plaspy

The T8806 sends location and device data to the shared Plaspy server endpoint and port so Plaspy can display live positions, history, and events. Plaspy then decodes incoming messages and associates them with your account and device record.

- The tracker is configured to report to the Plaspy server endpoint at d.plaspy.com or to the IP 54.85.159.138
- All devices use port 8888 when reporting to Plaspy
- Choose UDP or TCP transport on the device if required; the tracker may be configured using either transport on port 8888
- Plaspy automatically detects the tracker protocol so you do not need to specify protocol type inside the Plaspy platform
- After the tracker reports successfully, Plaspy shows live location and receives device events for operational monitoring

## Common Configuration Workflow

1. Access the official TopFly configuration method for your T8806 unit such as SMS commands or the vendor configuration tool
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 depending on how you configure the device
3. Set port 8888 for the server connection
4. Choose UDP or TCP if the device requires a transport selection
5. Configure the operator APN so the device can use mobile data to reach Plaspy
6. Apply or save the configuration and restart the device if required by the manufacturer instructions
7. Validate that the device reports to Plaspy by checking the device in the Plaspy platform and confirming incoming telemetry

## Example Configuration Commands

The public TopFly T8806 configuration examples below are commonly sent to the device by SMS. The sample commands use the device default password 0000. Preserve the placeholders when you replace them with real values.

- Set the time zone to UTC 0
```
GMT,0000,0#
```

- Set the APN for your mobile operator
```
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
Note: {{apn}} is the APN name, {{apnu}} is the APN username if required, and {{apnp}} is the APN password if required. Leave empty fields blank if your operator does not require username or password.

- Set the GPRS server to the Plaspy IP and port 8888
```
IP,0000,54.85.159.138 8888#
```
If the device supports a domain name for server configuration, you may be able to replace the IP with d.plaspy.com; check the TopFly documentation or firmware behavior before switching to a domain value.

- Set the upload interval to 60 seconds
```
TIMER,0000,60:60:0:0#
```

These commands preserve the order important for basic setup: timezone, APN, server endpoint, and reporting timer. Send each SMS from the authorized phone number or according to the device pairing rules described by TopFly.

## Configuration Notes

- SMS based setup is shown in the public examples above. Some installers prefer vendor tools or PC software when available for bulk or advanced configuration.
- Firmware versions and regional hardware variants can change command syntax or available features. Always confirm the syntax with the device manual that matches your device firmware.
- Choose UDP or TCP on the device according to your network and installer preference. Plaspy will accept either transport on port 8888 and automatically detect protocol type.
- Keep the device default password in mind; change it when supported if security policy requires a custom password after provisioning.
- If your device does not accept a domain string for the server, use the Plaspy IP 54.85.159.138 and port 8888 as shown in the SMS examples.

## Why Use Plaspy with This Configuration

Configuring the TopFly T8806 to report to Plaspy provides a reliable way to centralize vehicle locations, event alerts, and historical routes in one fleet management platform. Using the shared Plaspy server settings simplifies device provisioning and reduces per device configuration variance by relying on a consistent server address and port.

To learn more about Plaspy and how it works with devices like the TopFly T8806 visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation instructions verify details with the manufacturer at https://www.topflytech.com/ as device behavior and setup methods can change over time.

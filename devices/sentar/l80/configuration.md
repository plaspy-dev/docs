---
slug: /sentar/l80/configuration
id: l80-configuration
sidebar_label: Configuration
title: Sentar - L80 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for configuring the Sentar L80 GPS tracker to work with Plaspy server settings
keywords:
  - Sentar L80 configuration
  - Sentar L80 setup
  - Sentar L80 server configuration
  - Sentar L80 Plaspy
  - L80 GPS tracker setup
  - Sentar GPS configuration
  - Plaspy tracker configuration
  - GPS tracker server settings
  - child tracking L80
  - tracking platform setup
---

# Sentar - L80 Configuration

This page documents the public configuration context for using the Sentar L80 tracker with Plaspy. It presents the practical server settings and sample configuration commands that are publicly available so you can prepare the device to communicate with Plaspy for location reporting and basic telemetry visibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps for the L80 can vary by firmware, hardware revision, installation type, and vendor configuration tools, so use this guide together with the official Sentar documentation and any device-specific instructions you have.

## Configuration Overview

Configuring the Sentar L80 for Plaspy is primarily about pointing the watch to Plaspy's server, ensuring the device has valid mobile connectivity and APN settings, and verifying that periodic location updates reach the platform. The Sentar L80 supports SMS based configuration commands, which many installers and technicians use for initial setup.

- Set the L80 to report to Plaspy server settings so the platform receives location and device messages.
- Configure or verify APN and GPRS parameters so the device can make a data connection.
- Choose UDP or TCP transport on the device if required and set the shared Plaspy port.
- Validate device time zone and reporting interval so location data appears correctly in Plaspy.
- Use the SMS commands provided by Sentar to perform factory reset, set APN placeholders, and confirm settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when a device connects
- All devices in Plaspy use the same port 8888

## Typical Requirements Before Setup

- Device powered and reachable by SMS if using the SMS configuration method shown below.
- Active SIM card with a data plan and the correct APN for the mobile operator.
- Access to the device default password if required for configuration; the sample commands below use the default password 123456 as shown in public Sentar guidance.
- Knowledge of the correct APN settings for the SIM including APN name, APN username, and APN password.
- A basic understanding of whether the device firmware requires TCP or UDP for GPRS reporting.
- Access to official Sentar configuration instructions or installer tools when available.

## How This Tracker Connects to Plaspy

The L80 reports location and device messages to the shared Plaspy endpoint so Plaspy can display the device on the platform and trigger events. During setup the tracker is pointed to the Plaspy server address and configured to upload at a chosen interval so location updates arrive on the platform.

- The tracker is configured to send GPRS data to the Plaspy server endpoint and port.
- Data transport can be UDP or TCP depending on device configuration and firmware.
- Plaspy inspects incoming connections and automatically detects the tracker protocol.
- Regular upload intervals ensure the device is visible and trackable in Plaspy.
- Event reporting and device status messages are visible in Plaspy once the device successfully connects.

## Common Configuration Workflow

1. Access the official Sentar configuration method for the L80, typically SMS commands or the manufacturer installer tool.
2. Enter the Plaspy server address on the device configuration: either d.plaspy.com or the IP 54.85.159.138.
3. Set the port to 8888 which is the shared Plaspy port for all devices.
4. Choose UDP or TCP if the device requires a transport selection and save that setting.
5. Configure the device APN, username, and password placeholders so GPRS data can connect.
6. Apply or save the configuration and restart the device if the device firmware requires a reboot.
7. Validate that the device reports to Plaspy and appears in the platform with expected location updates.

## Example Configuration Commands

The Sentar L80 supports SMS configuration commands in the public Sentar command format. The sample setup below uses the device default password 123456 as shown in public manufacturer guidance. Preserve the password and placeholders exactly when sending SMS commands.

- Factory reset (optional initial step)
```text
pw,123456,factory#
```

- Set the time zone to UTC 0
```text
pw,123456,lz,0,0#
```

- Check the MCC and MNC / get IMSI information
```text
pw,123456,imsi#
```

- Set the operator APN where {{apn}} is the APN name, {{apnu}} is the APN username, {{apnp}} is the APN password, and xxxyy represents MCC and MNC combined
```text
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```

- Set the GPRS server to Plaspy using the public IP and port shown in this guide
```text
pw,123456.ip,54.85.159.138,8888#
```

Note: If your device firmware supports hostname configuration instead of an IP address you can replace the IP with the Plaspy domain d.plaspy.com when sending the server command, but verify that your device accepts hostnames first.

- Set upload interval to 300 seconds (sample command as published)
```text
pw123456,upload,300#
```

- Verify settings on the device
```text
pw,123456,ts#
```

Placeholders explanation:
- {{apn}} is the mobile operator APN name.
- {{apnu}} is the APN username if required by the operator.
- {{apnp}} is the APN password if required by the operator.
- xxxyy in the APN command stands for the operator MCC and MNC and should be replaced with the correct numeric codes when required.

## Configuration Notes

- Sentar L80 public commands are commonly sent by SMS; ensure the device can receive SMS before proceeding.
- Firmware revisions and regional variants may change command syntax or parameter order; always confirm with the device documentation.
- Choose UDP or TCP based on device firmware guidance and network conditions; both transports are supported by Plaspy.
- Keep the device default password in mind when using example commands; change passwords through supported manufacturer steps where appropriate.
- Verify APN values with the mobile operator to ensure GPRS connectivity before attempting to connect to Plaspy.

## Why Use Plaspy with This Configuration

Using the Sentar L80 with Plaspy gives organizations and parents a way to centralize location visibility and device status reporting in one platform. With Plaspy accepting a consistent server address and port across devices and automatically detecting the tracker protocol, the integration process focuses on correct APN and transport configuration so devices appear reliably in the platform.

To learn more about Plaspy and supported device workflows visit https://www.plaspy.com. Manufacturer specific configuration methods, firmware behavior, and device details can change over time; verify the latest Sentar instructions and firmware notes at http://www.sentarsmart.com/ before applying production configurations.

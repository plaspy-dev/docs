---
slug: /v_sun/v_690/configuration
id: v_690-configuration
sidebar_label: Configuration
title: V-SUN - V-690 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for V-SUN V-690 to connect with Plaspy including server settings and SMS command examples
keywords:
  - V-SUN V-690 configuration
  - V-SUN V-690 setup
  - V-SUN V-690 Plaspy
  - V-SUN GPS tracker configuration
  - V-690 server setup
  - V-SUN tracking software
  - V-SUN GPS platform setup
  - V-690 SMS commands
  - V-SUN APN configuration
  - V-SUN GPRS tracker
---

# V-SUN - V-690 Configuration

This page covers the public configuration context for using the V-SUN V-690 GPS tracker with Plaspy. It summarizes the practical server settings and the commonly used SMS configuration commands published for the V-690 so you can prepare the device to report location and basic events into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The examples below follow the publicly available SMS command sequence and show how to point the V-690 at the Plaspy server endpoint.

## Configuration Overview

The goal of the configuration process is to prepare the V-690 so it can reliably communicate with Plaspy and appear in the platform for monitoring and reporting. Using the device's SMS command interface you will typically set APN and GPRS server values, enable data reporting modes, and confirm the tracker is sending to the Plaspy endpoint.

- Configure the device APN and GPRS server so the tracker can use mobile data to reach Plaspy.
- Specify the Plaspy server endpoint and port so reporting goes to the correct platform.
- Enable GPRS and GPS reporting modes so location data is collected and transmitted.
- Validate connectivity and ensure the device is visible in Plaspy after setup.
- Use SMS commands as published by the manufacturer when no configuration tool is available.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- The device may be configured to use UDP or TCP transport on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered V-SUN V-690 with a SIM card installed that has mobile data enabled and SMS capability
- Knowledge of the device SMS configuration method or access to the manufacturer configuration tool
- The device password if required for SMS commands; the public examples below use the default password 0000
- APN details from the mobile operator for data connectivity
- Access to the Plaspy account or platform to verify the device appears after configuration

## How This Tracker Connects to Plaspy

The V-690 is configured to send location and basic device data to the shared Plaspy server endpoint and port using GPRS data sessions. Once APN and server settings are applied and reporting modes are enabled, the tracker transmits packets to Plaspy where the platform detects protocol and processes incoming updates.

- The tracker uses the configured APN to establish a GPRS data connection
- Device reports are directed to d.plaspy.com or the IP 54.85.159.138 on port 8888
- Transport may be UDP or TCP depending on device setting and network behavior
- Plaspy automatically detects the tracker protocol and accepts data on the shared port
- Once reporting is active the device becomes visible for tracking and monitoring in Plaspy

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the V-690, typically SMS commands or manufacturer software, and confirm the device password.
2. Enter the Plaspy server by specifying either the domain d.plaspy.com or the IP 54.85.159.138 in the GPRS server setting.
3. Set the port to 8888 as the destination port for all devices in Plaspy.
4. Choose UDP or TCP if the device requires a transport selection for GPRS reporting.
5. Apply or save the configuration on the device and enable GPRS and GPS reporting modes as required.
6. Restart the device if recommended by the manufacturer or required to activate new settings.
7. Validate that the device reports to Plaspy and appears in the platform, checking for periodic updates.

## Example Configuration Commands

The V-690 can be configured using SMS commands. The following public SMS commands are provided in the manufacturer example. The sample setup uses the default device password 0000. Preserve placeholders as shown and replace them with your operator values where needed.

- Factory reset (optional initial step)
```text
*RESET#0000##
```

- Set the operator APN
```text
#803#0000#{{apn}}#{{apnu}}#{{apnp}}##
```
Explanation: {{apn}} is the operator APN. {{apnu}} and {{apnp}} are optional APN username and APN password placeholders. Include the username and password fields only if your operator requires them.

- Set the GPRS server to use Plaspy IP and port
```text
#804#0000#54.85.159.138#8888##
```
You may substitute d.plaspy.com for the IP if preferred and supported by the device.

- Set the moving update interval (example uses 120 seconds)
```text
#805#0000#120#1##
```

- Set the static update interval (example uses 120 seconds)
```text
#809#0000#120#1##
```

- Enable GPRS mode
```text
7100000
```

- Enable GPS mode
```text
2220000
```

Follow the command order when the sequence matters, and replace the default password 0000 if your device password was changed.

## Configuration Notes

- SMS commands shown here are the publicly available example sequence for the V-690; some firmware versions may require slightly different command formats.
- You can specify the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138; both should point to the same Plaspy service on port 8888.
- Choose UDP or TCP based on device options and network conditions; Plaspy accepts either and detects the protocol automatically.
- Preserve APN placeholders {{apn}}, {{apnu}}, and {{apnp}} when preparing commands and replace them with your operator values as needed.
- If you have a custom installer tool from V-SUN or a vendor, follow that tool for bulk provisioning rather than manual SMS where possible.

## Why Use Plaspy with This Configuration

Using the V-SUN V-690 configured to report to Plaspy gives organizations straightforward visibility into device location and status through a single shared endpoint. The shared Plaspy server and automatic protocol detection reduce per-device configuration complexity and make it simpler to bring multiple tracker types online with consistent server settings.

Learn more about Plaspy and how it can centralize tracking for your fleet or monitoring use cases at https://www.plaspy.com. For the most current device specific commands, firmware behavior, and manufacturer instructions verify details with V-SUN at http://www.v-sun.cc/ as vendor procedures and firmware implementations may change over time.

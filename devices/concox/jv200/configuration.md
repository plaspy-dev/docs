---
slug: /concox/jv200/configuration
id: jv200-configuration
sidebar_label: Configuration
title: Concox - JV200 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Concox JV200 for Plaspy with server settings and SMS commands for GPRS setup
keywords:
  - Concox JV200 configuration
  - Concox JV200 setup
  - JV200 server configuration
  - JV200 Plaspy setup
  - Concox GPS tracker configuration
  - JV200 SMS configuration
  - vehicle tracker setup Plaspy
  - GPRS tracker configuration
  - JV200 APN settings
  - Plaspy device configuration
---

# Concox - JV200 Configuration

This page covers the public configuration context for using the Concox JV200 tracker with the Plaspy platform. It explains the shared server settings Plaspy requires and the typical SMS commands and workflow you can use to prepare JV200 units for reporting to Plaspy. The information below is drawn from public configuration commands and standard setup practices; always cross check with the device documentation for firmware specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. The JV200 is a GSM+GPRS+GPS vehicle tracker with AGPS support for fast positioning, and the device can be configured using SMS commands as shown in the example commands section.

## Configuration Overview

Preparing a Concox JV200 for use with Plaspy is focused on enabling GPRS communication, configuring the correct APN for the installed SIM, and pointing the device to Plaspy's server endpoint and port. The JV200 commonly uses SMS commands for configuration, which makes initial setup possible without specialized software.

- Configure APN and GPRS parameters so the JV200 can connect to mobile data networks.
- Point the device to Plaspy server settings so location and telemetry are delivered to Plaspy.
- Choose transport (UDP or TCP) if required and set the port that Plaspy uses.
- Validate connectivity and confirm the device is visible in Plaspy.
- Use simple verification commands to check the device configuration over SMS.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered Concox JV200 unit installed or accessible for initial configuration.
- An active SIM card with mobile data and SMS capability and correct APN details for the mobile operator.
- Access to a phone capable of sending SMS commands to the tracker or the manufacturer configuration tool if available.
- Basic knowledge of the device serial number or identifier so you can locate the device in Plaspy after setup.
- The manufacturer's configuration instructions for the specific firmware version installed on the JV200.

## How This Tracker Connects to Plaspy

Once configured, the JV200 uses the mobile network to establish a GPRS session and transmits location and device data to the shared Plaspy server endpoint on port 8888. Plaspy receives the connection and automatically determines the tracker protocol to process incoming messages.

- The tracker is pointed to d.plaspy.com or directly to 54.85.159.138 as the GPRS server.
- Data is sent to port 8888 which is the standard port Plaspy uses for all devices.
- Transport can be UDP or TCP depending on device configuration; either option is supported.
- Plaspy auto detects the incoming protocol so no manual protocol selection is required in the platform.
- Reporting enables visibility of location and basic device status in Plaspy for monitoring and operations.

## Common Configuration Workflow

1. Access the official Concox configuration method for the JV200 (SMS commands or vendor tool) as provided in the manufacturer documentation.
2. Set the device APN using the APN command and replace placeholders with your operator values.
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server and set port 8888.
4. Choose UDP or TCP if the device requires a transport selection and save that setting.
5. Enable or start GPRS mode on the device and apply or save the configuration.
6. Restart the device if required by the firmware or after major changes.
7. Validate that the JV200 reports to Plaspy and appears as an active device in the platform.

## Example Configuration Commands

The Concox JV200 can be configured by sending SMS messages to the device. Below are the public SMS commands in the same order as typically applied.

- Optional initial step to reset device to factory defaults. Use this only if you want to clear existing settings.

```text
FACTORY#
```

- Set the time zone to UTC 0 (example).

```text
GMT,E,0#
```

- Configure the operator APN. Replace the placeholders with your operator APN details.
  - [apn] : operator APN name (required)
  - [apnu] : APN username (optional)
  - [apnp] : APN password (optional)

```text
APN,[apn]{{apnu ? ',' + [apnu] : ''}}{{apnp ? ',' + [apnp] : ''}}#
```

- Set the GPRS server by domain (preferred) or by IP. Both point the device to Plaspy on port 8888.

```text
SERVER,1,d.plaspy.com,8888,0#
```

or

```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the location update interval to every 60 seconds. Two common timer formats are shown.

```text
TIMER,60#
```

or

```text
TIMER,60,60#
```

- Enable GPRS mode on the device.

```text
GPRSON,1#
```

- Verify current GPRS and server parameters.

```text
GPRSSET#
```

Notes on the example commands
- Preserve placeholders such as [apn], [apnu], and [apnp] when composing SMS commands. Replace them with your operator values.
- The SERVER command above shows both domain and IP options. Using d.plaspy.com is recommended for easier maintenance, but the IP 54.85.159.138 is available if required.
- Port 8888 is used for Plaspy across all supported devices.

## Configuration Notes

- SMS based setup is a common and simple method for JV200 initial configuration; ensure the SIM can receive SMS and has GPRS enabled.
- Firmware differences and hardware revisions can change command syntax or behavior; confirm exact commands for your device firmware.
- Choose UDP or TCP based on device capabilities and network conditions; both are supported by Plaspy on port 8888.
- Using the domain d.plaspy.com is preferred because Plaspy manages protocol detection and endpoint continuity, but the direct IP is provided as an alternate.
- After configuration, use the verification command GPRSSET# and confirm the device appears in Plaspy.

## Why Use Plaspy with This Configuration

Configuring the Concox JV200 to report to Plaspy provides a straightforward way to add real time tracking and operational visibility for vehicles. With the JV200 reporting to a shared Plaspy server endpoint on port 8888, organizations gain consistent data delivery into a platform that automatically handles protocol differences between devices.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For the latest device specific setup details, command syntax, and firmware instructions for the Concox JV200, verify the official manufacturer information at https://www.iconcox.com/ as setup methods and device behavior may change over time.

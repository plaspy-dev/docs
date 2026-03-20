---
slug: /concox/jm_vg02u/configuration
id: jm_vg02u-configuration
sidebar_label: Configuration
title: Concox - JM-VG02U Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox JM VG02U tracker integration with Plaspy server and practical SMS commands
keywords:
  - Concox JM VG02U
  - JM VG02U configuration
  - Concox GPS tracker setup
  - Plaspy tracker configuration
  - vehicle tracking setup
  - GPS tracker server configuration
  - OBDII tracker setup
  - fleet management GPS
  - tracking software configuration
  - JM VG02U SMS commands
---

# Concox - JM-VG02U Configuration

This page covers the public configuration context for using the Concox JM-VG02U tracker with Plaspy. It summarizes the practical server settings and the common SMS commands published for the JM-VG02U so you can prepare the device to report to Plaspy for real time tracking and telemetry.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the platform edge. Manufacturer side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools, so use the commands shown here with reference to the official Concox documentation and any device specific release notes.

## Configuration Overview

The goal of configuring the JM-VG02U for Plaspy is to point the device at Plaspy's shared server endpoint, confirm network connectivity and APN, and enable periodic reporting so the device becomes visible inside the Plaspy platform.

- Configure the device to use Plaspy server settings so location and events are delivered to the platform.
- Verify the SIM APN and GPRS mode so the tracker has mobile data connectivity.
- Set reporting interval (timer) and ensure the device is permitted to send data over the chosen transport.
- Validate the device on Plaspy by checking that it appears as an active tracker and sends updates.
- Use the supplied SMS commands where supported to make fast, repeatable changes for bulk or field deployments.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These values are the public server settings to use when configuring the JM-VG02U to report to Plaspy.

## Typical Requirements Before Setup

- A powered and operational JM-VG02U plugged into the vehicle OBDII port or otherwise powered.
- A valid nano SIM installed with mobile data enabled and the correct APN for the operator.
- SMS service credit and ability to send configuration SMS messages to the device phone number if using SMS commands.
- Access to the official Concox configuration instructions or tools to confirm firmware specific command support.
- A Plaspy account or access to the Plaspy instance and device provisioning workflow to confirm the device is visible after setup.

## How This Tracker Connects to Plaspy

The JM-VG02U is configured to send GNSS/INS fixes and event messages to the shared Plaspy server endpoint and port. Plaspy ingests those messages in real time and automatically determines the correct protocol for the device so the tracker becomes visible in the platform without per device protocol mapping.

- The device is pointed to d.plaspy.com or the Plaspy server IP and sends data to port 8888.
- The tracker uses mobile GPRS to deliver location and event packets to the server.
- Plaspy receives and parses incoming messages and applies protocol detection automatically.
- After successful configuration the device will report periodically according to the timer and generate events visible inside Plaspy.
- Verification is performed by confirming periodic location updates and event messages in the Plaspy interface.

## Common Configuration Workflow

1. Access the official Concox configuration method for the JM-VG02U, typically SMS commands or vendor provisioning tools, and review the device manual for your firmware version.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138 as supported by the device.
3. Set the server port to 8888 exactly as the platform uses a shared port for all devices.
4. Choose UDP or TCP transport if the device requires a transport selection during server configuration.
5. Configure the APN for the installed SIM using the APN command and enable GPRS mode.
6. Apply or save the configuration and restart the device if required by the device or firmware.
7. Validate that the device reports to Plaspy by observing periodic position messages and that the tracker becomes active in the Plaspy platform.

## Example Configuration Commands

The JM-VG02U supports SMS based configuration. Below are the public SMS commands published for this model in the order that is commonly used for initial setup. Send each line as an SMS to the device's SIM phone number. Labelled reset is optional and recommended only when starting from unknown configuration.

- Factory reset (optional initial step)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN (replace placeholders as needed)
```text
APN,{{apn}}#
```
If your operator requires username and password include the optional fields:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Note: {{apn}} is the operator APN string. {{apnu}} and {{apnp}} are optional APN username and password placeholders.

- Set the GPRS server to Plaspy by domain (use this to prefer domain)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server to Plaspy by IP address
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the reporting update interval to every 60 seconds
```text
TIMER,60#
```
Alternative timer form for some firmware variants:
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Check current GPRS parameter settings
```text
GPRSSET#
```

These commands are the public SMS interactions supplied for JM-VG02U configuration. After sending, wait for confirmation SMS responses from the tracker where available, then verify connectivity in Plaspy.

## Configuration Notes

- Command support and exact syntax may vary by firmware version; confirm command availability in the Concox manual for your device revision.
- SMS based setup is suitable for field installation or single device configuration. For mass provisioning consult Concox tools or vendor provisioning services.
- Choose TCP or UDP based on network reliability and carrier behavior for your location; Plaspy supports both transports and will accept connections on port 8888.
- Always verify the APN and SIM provisioning before pointing the device to d.plaspy.com or 54.85.159.138.
- Use the GPRSSET# verification command to confirm the device has recorded the server and APN settings before validating on Plaspy.

## Why Use Plaspy with This Configuration

Configuring the Concox JM-VG02U to report to Plaspy gives organizations continuous visibility into vehicle location, trip segmentation, and event data such as driving behavior alerts and power events. The OBDII plug and INS aided GNSS of the JM-VG02U provide robust data that Plaspy ingests and visualizes for fleet management, safety analysis, and operational oversight.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For device specific commands, firmware notes, and the latest setup instructions confirm details with the manufacturer at https://www.iconcox.com/ as methods and firmware behavior can change over time.

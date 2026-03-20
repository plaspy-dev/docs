---
slug: /haicom/hi_604x/configuration
id: hi_604x-configuration
sidebar_label: Configuration
title: Haicom - HI-604X Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Haicom HI-604X with Plaspy using shared server settings and SMS or USB setup for GPRS tracking
keywords:
  - Haicom HI-604X configuration
  - Haicom HI-604X setup
  - HI-604X Plaspy setup
  - Haicom GPS tracker configuration
  - HI-604X server configuration
  - Haicom HI-604X SMS setup
  - HI-604X GPRS configuration
  - Plaspy tracker configuration
  - vehicle tracking HI-604X
  - HI-604X platform integration
---

# Haicom - HI-604X Configuration

This page provides public configuration guidance for using the Haicom HI-604X GPS tracker with Plaspy. It focuses on the shared Plaspy server settings and common manufacturer-side setup approaches that enable the HI-604X to report location and status to the Plaspy platform. The instructions below summarize the practical steps and sample SMS commands that are publicly available for configuring the device to communicate with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the tracker sends data to the platform. Manufacturer-side setup steps for the HI-604X can vary by firmware version, hardware revision, installation type, and vendor tools; this page describes the common public options including SMS-based configuration and USB or software configuration where applicable.

## Configuration Overview

The configuration process prepares the HI-604X to send GPRS location updates and event reports to Plaspy using the platform's shared endpoint. This typically involves supplying the operator APN, pointing the device at Plaspy's server, setting the reporting interval, and choosing the transport protocol if required.

- Configure the device APN so the tracker can use the cellular data connection to reach Plaspy.
- Point the tracker to the Plaspy server endpoint so reports are delivered to the platform.
- Choose UDP or TCP transport on port 8888 if the device requires explicit transport selection.
- Set update/reporting interval to match the monitoring needs and power considerations.
- Validate connectivity by confirming the device appears in Plaspy and is sending position updates.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the HI-604X:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

All devices in Plaspy use the same port, so you should use port 8888 when registering or configuring the tracker for the platform.

## Typical Requirements Before Setup

- A valid SIM card with data enabled and the correct APN for the mobile operator.
- Access to the HI-604X configuration method provided by the manufacturer such as SMS commands, USB and configuration software, or vendor tools.
- Device powered and placed where it can acquire GPS and cellular signals during testing.
- Knowledge of the device password if SMS configuration requires it (the commonly documented default password in public setup examples is 0000).
- The Plaspy server settings (d.plaspy.com or 54.85.159.138 and port 8888) ready to enter during setup.
- A way to verify the device on the Plaspy platform once configuration is applied.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the HI-604X will use its GPRS connection to send position updates and events to the shared Plaspy server endpoint and port. Plaspy receives those reports and automatically interprets the tracker protocol to display device telemetry and location in the platform.

- The tracker is configured with the operator APN so it can open a GPRS data session.
- Device GPRS settings specify Plaspy as the remote server using d.plaspy.com or 54.85.159.138.
- Reports are sent to port 8888 using UDP or TCP, depending on device configuration.
- Plaspy detects the tracker protocol automatically and maps incoming data to the device record.
- Platform visibility and event reporting allow monitoring of location, movement, and configured alerts.

## Common Configuration Workflow

1. Access the official Haicom configuration method such as SMS commands, Haicom USB/software, or vendor provisioning tools.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP 54.85.159.138 according to the device configuration interface.
3. Set the server port to 8888 (Plaspy uses this same port for all supported devices).
4. Choose UDP or TCP transport if the device requires a transport selection; both are supported by Plaspy.
5. Apply or save the configuration in the device interface or by sending the appropriate SMS commands.
6. Restart the device if required by the device firmware or after saving settings.
7. Validate that the HI-604X reports to Plaspy and appears in the platform with expected update intervals.

## Example Configuration Commands

The HI-604X supports SMS-based configuration. The publicly available sample commands below illustrate the typical SMS commands and syntax. The sample setup uses the default device password 0000 in these examples.

- Set the operator APN
  - Use the following SMS command, replacing the APN placeholders as needed:
```sms
#0000,200,[apn],[apnu],[apnp]
```
  - Explanation of placeholders:
    - [apn] = operator APN name (for data)
    - [apnu] = APN username if required by carrier (leave blank if unused)
    - [apnp] = APN password if required by carrier (leave blank if unused)

- Set the GPRS server to Plaspy
  - This command points the tracker to Plaspy using the public IP and port:
```sms
#0000,210,54.85.159.138,8888,8888,8888,0
```
  - Note: the command structure in device documentation includes repeated port parameters; follow the exact syntax required by your firmware.

- Set the interval update to 60 seconds
  - Example SMS to configure a 60 second reporting interval:
```sms
#0000,250,0,60,0,0,0,0,0,0
```

Send each command as a separate SMS from an authorized phone number or using the manufacturer-recommended method. Preserve the order when that order is important, for example setting the APN before the GPRS server.

## Configuration Notes

- Manufacturer firmware and exact SMS command syntax can vary by production run and firmware version; always review the HI-604X manual or release notes when available.
- The HI-604X supports SMS and software configuration methods; SMS is a common fallback when USB or remote provisioning is not available.
- Choose UDP for lower overhead or TCP for a connection-oriented session if the device and network require a specific transport; Plaspy accepts both and detects the protocol automatically.
- Replace APN placeholders ([apn], [apnu], [apnp]) with your mobile operator credentials; some carriers do not require username or password.
- If the tracker has a default password, change it if the manufacturer recommends doing so for security after initial setup.

## Why Use Plaspy with This Configuration

Using the HI-604X with Plaspy gives organizations a practical way to consolidate device reports and receive real time position updates, event notifications, and historical trip data through a central platform. The HI-604X's support for GPRS and SMS configuration, combined with Plaspy's automatic protocol detection and shared server endpoint, streamlines integration for fleet and asset monitoring.

To learn more about Plaspy and how it integrates with supported trackers visit https://www.plaspy.com. For the latest HI-604X device specific setup details, firmware information, and manufacturer instructions verify current information at the Haicom website http://www.haicom.com.tw/ .

---
slug: /gotop/g06b/configuration
id: g06b-configuration
sidebar_label: Configuration
title: GOTOP - G06B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP G06B tracker setup and Plaspy compatibility with required server settings and workflow
keywords:
  - GOTOP G06B configuration
  - GOTOP G06B setup
  - GOTOP G06B server configuration
  - GOTOP G06B Plaspy
  - GOTOP GPS tracker
  - G06B 4G tracker
  - GOTOP tracker configuration
  - vehicle GPS tracker setup
  - fleet tracking G06B
  - Plaspy server configuration
---

# GOTOP - G06B Configuration

This page provides the public configuration context for using the GOTOP G06B GPS tracker with Plaspy. It describes the practical server settings and the general setup workflow needed to point the device at Plaspy so the tracker can report location and status to the platform. The guidance focuses on the shared Plaspy endpoint and the typical manufacturer-side steps you will take to register the device with the platform.

Plaspy uses a single shared server endpoint and port across supported devices and automatically detects the tracker protocol, but exact manufacturer-side configuration steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use this page as a practical integration reference and verify device-specific details with the official GOTOP documentation when needed.

## Configuration Overview

Configuring the G06B for use with Plaspy centers on preparing the device to send its data to the Plaspy server endpoint and verifying connectivity so the unit appears in your Plaspy account. The tracker supports 4G connectivity and SMS-based interaction, so setup commonly involves ensuring the SIM and network settings are correct and entering the Plaspy server details on the device or via the manufacturer's configuration tool.

- Set the device server address to Plaspy so location and alarm events forward to the platform.
- Ensure the tracker has a working 4G SIM and correct APN so it can reach the Plaspy server.
- Select the transport protocol if the device firmware requires choosing UDP or TCP.
- Save and apply settings, then validate that the device reports to Plaspy.
- Confirm alerts such as ACC, SOS, and geofence events are visible in Plaspy after connection.

## Plaspy Server Settings

Use these exact Plaspy connection settings when configuring the G06B to report to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

Include either the domain or the IP in the device configuration as supported by the manufacturer tool. Using the domain d.plaspy.com is preferred where DNS is available.

## Typical Requirements Before Setup

- A charged and powered G06B device installed or accessible for configuration.
- A valid 4G SIM card with an active data plan and the SIM's APN settings available.
- Access to the GOTOP configuration method required by your device firmware such as the manufacturer app, web tool, or SMS command set.
- Device identifier information such as the IMEI to register or verify the unit in your tracking workflow.
- Basic knowledge of whether the device firmware requires UDP or TCP selection when setting the server.
- Confirmed access to Plaspy and account information for validating the device after setup.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the G06B sends periodic location updates and event messages to the Plaspy server endpoint on the shared port. Plaspy receives those messages and automatically determines the correct protocol parser so device data becomes visible in the platform without separate protocol configuration.

- The tracker is pointed at the Plaspy server domain or IP and uses port 8888 for all communication.
- The device sends GPS position reports at the configured intervals to the Plaspy endpoint.
- Event alarms such as ACC change, SOS, movement, and power cut are transmitted to Plaspy as configured on the device.
- Data transport is sent over UDP or TCP depending on your selection and device support.
- Once messages arrive at d.plaspy.com the platform auto-detects the tracker protocol and ingests the device data.

## Common Configuration Workflow

1. Access the official GOTOP configuration method for the G06B such as the manufacturer app, web configuration tool, or documented SMS command set.
2. Locate the server or remote center settings and enter d.plaspy.com or 54.85.159.138 as the server address.
3. Set the port to 8888 in the server settings.
4. Choose UDP or TCP if the device requires a transport selection; otherwise use the default transport provided by the firmware.
5. Ensure APN and SIM settings are correct so the device can reach the internet.
6. Apply or save the configuration and, if the device requires it, restart the tracker to activate the new settings.
7. Validate that the device reports to Plaspy by checking your Plaspy account for the device's first position or status message.

## Example Configuration Commands

The G06B can be configured using the official GOTOP configuration methods. Exact commands and SMS formats vary by firmware and vendor tool, so the method you use will depend on the device firmware and the GOTOP documentation. If your installer uses SMS commands, refer to the official GOTOP command list for the precise syntax required to set the server, port, transport, and APN.

For example, many GOTOP devices accept SMS or tool-based configuration in a pattern similar to this conceptual example (check the official manual for exact command text and placeholders):

- Set server by domain or IP (example conceptual form)
```text
adminip d.plaspy.com 8888
```

- Set server by IP (example conceptual form)
```text
adminip 54.85.159.138 8888
```

- Set transport to TCP or UDP (example conceptual form)
```text
setprotocol tcp
```

- Set APN placeholders if required by your SIM
```text
setapn {{apn}} {{apnu}} {{apnp}}
```

Note: The commands above are illustrative. The exact SMS or tool commands and exact parameter names differ by firmware. Preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}} when using command templates and replace them with your SIM operator values.

## Configuration Notes

- Firmware differences may change command syntax and available configuration fields; always confirm the command set for your G06B firmware revision.
- Choose TCP or UDP based on network reliability and the manufacturer recommendation; Plaspy accepts both transports on port 8888.
- If using SMS configuration, allow a short time for the device to restart and register on the network before validating connection to Plaspy.
- Verify APN settings for the 4G SIM so the tracker can establish a data session to reach d.plaspy.com.
- Keep a copy of the device IMEI and any assigned device name or ID to help locate the unit in Plaspy after initial reporting.

## Why Use Plaspy with This Configuration

Using the GOTOP G06B with Plaspy gives organizations a straightforward way to centralize vehicle visibility, alerting, and operational monitoring. By pointing the tracker to the shared Plaspy endpoint and port, devices begin reporting position and events to the platform where managers can view history, receive alarms, and integrate tracking into operational workflows.

To learn more about Plaspy and how it supports devices like the GOTOP G06B visit https://www.plaspy.com. For the most current device specific commands, firmware behavior, and manufacturer configuration steps verify details on the GOTOP official site https://www.gotop.cc/ as manufacturer specifications and setup methods can change over time.

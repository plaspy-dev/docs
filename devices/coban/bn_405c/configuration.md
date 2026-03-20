---
slug: /coban/bn_405c/configuration
id: bn_405c-configuration
sidebar_label: Configuration
title: Coban - BN-405C Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Coban BN-405C GPS tracker showing Plaspy server settings and SMS based setup steps
keywords:
  - Coban BN-405C configuration
  - BN-405C setup
  - Coban tracker Plaspy
  - Plaspy configuration
  - GPS tracker setup
  - vehicle tracking configuration
  - fleet management tracker
  - BN-405C server configuration
  - Coban GPS platform setup
  - tracker SMS commands
---

# Coban - BN-405C Configuration

This page documents the public configuration context for using the Coban BN-405C tracker with the Plaspy platform. It collects the practical server settings, typical prerequisites, and example SMS commands that are commonly used to point a BN-405C device at Plaspy for live location reporting and event alerts. Use this guide as a practical reference when preparing devices for Plaspy integration.

Plaspy uses a shared server endpoint and the same port for all supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The BN-405C also supports SMS based configuration, and the example commands below show common public SMS commands used to set APN, server address, reporting intervals and transport mode.

## Configuration Overview

This configuration process prepares the BN-405C to communicate reliably with Plaspy so the device appears in the platform and reports location, status, and alarms. Typical actions include configuring GPRS parameters, pointing the device to the Plaspy server, choosing transport, and validating successful reports.

- Configure the device APN and operator credentials so it can use mobile data for GPRS reporting.
- Set the device server address to Plaspy and choose the transport mode UDP or TCP.
- Set reporting intervals and protocol options so the device sends regular position updates to Plaspy.
- Validate connectivity and confirm the tracker is visible in the Plaspy platform.
- Optionally run a factory reset or check command when preparing or troubleshooting a device.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port number for all supported devices. You can configure a Coban BN-405C to use either the domain d.plaspy.com or the IP address 54.85.159.138 and the port 8888 when setting the device server.

## Typical Requirements Before Setup

- A powered BN-405C unit installed or temporarily bench powered with stable vehicle power or bench power supply.
- A working cellular SIM card with data enabled and the correct APN details for the mobile operator.
- Access to the manufacturer configuration method for the BN-405C such as SMS configuration or the vendor tool provided by Coban.
- The device default password if required for SMS configuration. The public commands below use the default password 123456 when shown.
- Basic tools to send and receive SMS messages from the device phone number or local administration tool to issue SMS commands.
- Knowledge of the intended transport mode UDP or TCP depending on site policy or network requirements.

## How This Tracker Connects to Plaspy

The BN-405C is configured to send location and status messages to Plaspy using the shared server endpoint and configured transport. Plaspy receives device messages to display live position, generate alerts, and store historical trips for reporting.

- The tracker is pointed at the Plaspy server endpoint either by domain d.plaspy.com or IP 54.85.159.138 on port 8888.
- The device sends periodic GPS updates over cellular data using UDP or TCP transport to the configured Plaspy endpoint.
- Plaspy automatically detects the device protocol and parses incoming messages for position and event data.
- Status messages and alarms reported by the BN-405C appear in Plaspy for live monitoring and notification workflows.
- After configuration, validating that the device successfully reports to Plaspy confirms a complete integration.

## Common Configuration Workflow

1. Access the official Coban BN-405C configuration method for your device. This is commonly done via SMS commands or the vendor configuration tool described by the manufacturer.
2. Enter the Plaspy server information in the device settings using either d.plaspy.com or 54.85.159.138 as the server address.
3. Set the server port to 8888 which Plaspy uses across supported devices.
4. Choose UDP or TCP transport if the device requires explicit transport selection.
5. Apply or save the configuration on the device and, if required, send any final SMS commands to switch to GPRS reporting mode.
6. Restart the device if the manufacturer recommends a reboot to apply network settings.
7. Validate that the BN-405C reports to Plaspy by checking device activity in the platform or using the device check command.

## Example Configuration Commands

The BN-405C supports SMS based configuration. The following public SMS commands are presented in the same order often used for initial setup. The device default password used in these examples is 123456. Replace placeholders such as {{apn}}, {{apnu}}, and {{apnp}} with your operator APN, APN username, and APN password respectively.

Optional initial factory reset
```
begin123456
```

Set the device time zone to UTC 0
```
time zone123456 0
```

Set the operator APN
```
apn123456 {{apn}}
```

Set the APN username and password
```
up123456 {{apnu}} {{apnp}}
```

Set the GPRS server by IP address and port
```
adminip123456 54.85.159.138 8888
```

Set the GPS update interval example
```
fix060s060s***n123456
```

Switch the device to GPRS reporting mode and select transport
- Example to explicitly set GPRS with transport flags
```
gprs123456,1,1
```
- Simpler GPRS enable command
```
gprs123456
```

Check current settings on the device
```
check123456
```

Enable improved digital sensor reporting or fuel sensor status
```
protocol123456 18
```

Notes on placeholders
- {{apn}} is the mobile operator access point name required for data.
- {{apnu}} is the APN username for networks that require authentication.
- {{apnp}} is the APN password for networks that require authentication.

If your installation uses the domain rather than the IP you can set the server accordingly using any manufacturer supported command syntax that accepts domain names. The example adminip command above uses the public Plaspy IP as provided.

## Configuration Notes

- Firmware differences and hardware revisions may change exact SMS command syntax and available options. Always confirm commands with the device manual or manufacturer resources.
- SMS based configuration is commonly supported for the BN-405C but manufacturer tools may also provide a PC or web based configuration method.
- Choose TCP or UDP based on your network and firewall policies. Plaspy supports either transport and will detect the protocol automatically.
- Plaspy uses the same port across devices so setting port 8888 is required for visibility in the platform.
- If you encounter connectivity issues, verify APN credentials, SIM data allowance, and that the device can reach the Plaspy server address.

## Why Use Plaspy with This Configuration

Using the Coban BN-405C with Plaspy provides a straightforward path to centralized fleet visibility, event alerting, and historical trip playback. Configuring the tracker to point at Plaspy with the shared server settings makes devices report consistently to the platform so managers can monitor location, ignition events, and alarms from a single dashboard.

Learn more about Plaspy and platform features at https://www.plaspy.com. For device specific instructions, firmware updates, and the latest command references verify current details on the official Coban site https://www.coban.net/ as manufacturer procedures and firmware behavior can change over time.

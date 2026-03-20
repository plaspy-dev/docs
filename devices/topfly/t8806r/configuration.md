---
slug: /topfly/t8806r/configuration
id: t8806r-configuration
sidebar_label: Configuration
title: TopFly - T8806+R Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopFly T8806+R tracker showing Plaspy server setup and SMS commands
keywords:
  - TopFly T8806+R configuration
  - TopFly T8806+R setup
  - T8806+R Plaspy
  - TopFly GPS tracker configuration
  - T8806+R server configuration
  - TopFly tracker SMS commands
  - vehicle tracking setup
  - fleet tracking configuration
  - GPS platform setup
  - Plaspy tracker configuration
---

# TopFly - T8806+R Configuration

This page documents the public configuration context for using the TopFly T8806+R tracker with Plaspy. It focuses on the practical server settings and example manufacturer commands that are publicly available so you can prepare the device to report to Plaspy for real time visibility and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware revision, hardware version, installation type, and vendor configuration tools. The example SMS commands shown below are taken from the TopFly public configuration notes and illustrate a common SMS based setup flow using the device default password.

## Configuration Overview

The goal of the configuration process is to prepare the tracker to communicate reliably with Plaspy and to validate that data reaches the platform. The T8806+R supports SMS based configuration in the publicly available commands shown below and offers features such as real time reporting and large buffer storage for offline data.

- Configure the device to send data to the Plaspy server endpoint so positions and events appear in the platform.
- Set APN and GPRS parameters so the tracker can use mobile data for reporting.
- Set the Plaspy server address and port so the device knows where to send telemetry.
- Configure reporting intervals such as the TIMER command to control how often the device transmits.
- Validate the device reaches Plaspy and appears online in the platform.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the tracker:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically after the device connects.

## Typical Requirements Before Setup

- A powered and accessible T8806+R tracker with the ability to receive SMS commands or the official configuration tool.
- An active SIM card with a working mobile data plan and correct APN settings.
- The device default password if required by SMS configuration (the public example uses 0000).
- Access to the installer or technician who will perform the configuration and testing.
- Basic knowledge of sending SMS commands to the device or use of the manufacturer configuration interface.
- Ability to validate connectivity from the device to the Plaspy server after configuration.

## How This Tracker Connects to Plaspy

When configured to report to Plaspy the tracker sends location and event data to the shared Plaspy server endpoint and port so positions and alerts are visible within the platform. Plaspy receives the incoming connection and determines the correct protocol handler automatically.

- The device is set to report to the Plaspy server address and port so telemetry is routed to the platform.
- Location updates are sent at the configured reporting interval controlled by the device timer.
- Device events such as ignition, power disconnect, and alarm conditions are transmitted to Plaspy for monitoring.
- Plaspy uses the same listening port for all supported devices and will auto detect the protocol used by the tracker.
- Once the device connects, you can validate presence and status in Plaspy using the platform tools.

## Common Configuration Workflow

1. Access the official TopFly configuration method or SMS based setup procedure as provided by TopFly documentation or installer tools.
2. Enter the Plaspy server address either as the domain d.plaspy.com or as the server IP 54.85.159.138 depending on the device configuration option.
3. Set the port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP transport if the device requires transport selection for server communication.
5. Apply or save the configuration on the device and ensure the settings are accepted.
6. Restart the device if required by the manufacturer or after applying new network/server settings.
7. Validate that the device reports to Plaspy and appears online in the platform.

## Example Configuration Commands

The T8806+R public configuration example uses SMS commands with the device password 0000 (default in the public notes). These commands are presented in the order shown in the manufacturer example. Send each SMS to the tracker phone number using the device password where indicated.

1) Set the time zone to UTC 0
```
GMT,0000,0#
```

2) Set the operator APN
```
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
- {{apn}} is the mobile data access point name provided by your SIM operator.
- {{apnu}} is the APN username if required by the carrier. Leave blank if not needed.
- {{apnp}} is the APN password if required by the carrier. Leave blank if not needed.

3) Set the GPRS server IP and port to the Plaspy server
```
IP,0000,54.85.159.138 8888#
```
- This public example configures the device to report to the Plaspy server IP and port shown above. If your device supports domain names you may choose to use d.plaspy.com where appropriate, but the command above is the manufacturer provided example.

4) Set the reporting update interval to 60 seconds
```
TIMER,0000,60:60:0:0#
```
- This TIMER format sets the device reporting behavior according to the public example. The command above configures a 60 second reporting interval as shown in the manufacturer notes.

Note: These SMS commands reflect the public TopFly example and use the default device password 0000 as shown in the provided configuration content.

## Configuration Notes

- The public example uses SMS based configuration. Some installations may use TopFly configuration software or tools instead; follow the official TopFly documentation for those methods.
- Firmware and hardware revisions can change available commands or command syntax. Confirm the exact command format for your unit before mass deployment.
- Plaspy accepts both UDP and TCP transports on the shared port 8888. Choose the transport supported by the device and by your network.
- If your device supports using a domain name for the server, d.plaspy.com is the Plaspy domain to use; the provided SMS example configures the IP address directly.
- Always verify APN values and credentials with the SIM provider and preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}} when preparing SMS templates.

## Why Use Plaspy with This Configuration

Using the TopFly T8806+R with Plaspy gives organizations a straightforward way to get device telemetry into a single platform for vehicle and asset visibility. The shared Plaspy server settings and automatic protocol detection simplify integration across multiple device models and reduce the per device configuration overhead.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest TopFly device specific commands, firmware notes, and hardware details verify current information at the manufacturer site https://www.topflytech.com/ as setup methods and firmware behavior can change over time.

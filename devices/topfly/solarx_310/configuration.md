---
slug: /topfly/solarx_310/configuration
id: solarx_310-configuration
sidebar_label: Configuration
title: TopFly - SolarX 310 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopFly SolarX 310 connecting to Plaspy with shared server settings and example SMS commands
keywords:
  - TopFly SolarX 310 configuration
  - TopFly SolarX 310 setup Plaspy
  - SolarX 310 server configuration
  - SolarX 310 GPS tracker setup
  - Plaspy tracker configuration
  - SolarX 310 SMS configuration
  - TopFly asset tracker configuration
  - SolarX 310 APN setup
  - fleet tracking SolarX 310
  - SolarX 310 GPRS server setup
---

# TopFly - SolarX 310 Configuration

This page documents the public configuration context for using the TopFly SolarX 310 with Plaspy. It focuses on the shared Plaspy server settings, practical setup steps, and the example SMS commands published for basic device setup. Use this guide to prepare the device to report to Plaspy and to validate connectivity before adding the device to your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The SolarX 310 provides SMS and GPRS configuration options in its public documentation; example SMS commands and default values provided below are included for convenience and are drawn from the device's public configuration notes.

## Configuration Overview

The configuration process prepares the SolarX 310 to communicate with Plaspy, ensures a valid cellular data or SMS path, and enables timely reporting of location and events. In practical terms the goal is to set the network access (APN), point the tracker to the Plaspy endpoint, set reporting intervals, and confirm the device is visible in the platform.

- Configure the device APN and credentials so GPRS data can be sent.
- Set the SolarX 310 to report to Plaspy using the shared server endpoint and port.
- Define reporting intervals so location updates match your operational needs.
- Validate connectivity and confirm the device appears in Plaspy after configuration.
- Preserve the device password and record any installer actions for future maintenance.

## Plaspy Server Settings

- Plaspy server domain d.plaspy.com
- Plaspy server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged and functional SolarX 310 unit with access to its SIM slot or SMS interface for configuration.
- A cellular SIM with active data or SMS capability and the correct APN information for the operator.
- The device password if required for commands; the public example uses the default password 0000.
- Access to the manufacturer configuration method such as SMS commands or the TopFly configuration tool or USB interface.
- A reliable phone or SMS gateway capable of sending the configuration messages if using SMS based setup.
- Basic knowledge of whether the device will use UDP or TCP transport so you can select the correct option if required.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the SolarX 310 reports position and telemetry to the shared Plaspy server endpoint and port. Plaspy ingests the incoming device messages, associates them with the registered device, and provides visibility, alerts, and historical playback on the platform.

- The tracker sends GPRS or SMS messages addressed to the Plaspy server endpoint and port.
- Reports include location updates and device events which Plaspy uses for live tracking and alerts.
- Buffered points stored on the device are forwarded to Plaspy when connectivity is restored.
- Plaspy uses the shared port and automatic protocol detection so the tracker can use UDP or TCP without additional per-device port changes.
- Once the device communicates successfully with d.plaspy.com or 54.85.159.138 on port 8888, it becomes visible in Plaspy for monitoring and reporting.

## Common Configuration Workflow

1. Access the official TopFly configuration method for the SolarX 310 (SMS commands, USB tool, or vendor software) as documented by the manufacturer.
2. Enter the Plaspy server endpoint using either d.plaspy.com or 54.85.159.138 depending on the device command format.
3. Set the server port to 8888 (Plaspy uses this same port for all supported devices).
4. Choose transport UDP or TCP if the device requires you to select a transport protocol.
5. Configure the device APN and any required credentials so GPRS data can be sent to the server.
6. Apply or save the configuration and restart the device if the device or workflow requires a reboot.
7. Validate that the SolarX 310 reports to Plaspy and appears in the platform dashboards and telemetry feeds.

## Example Configuration Commands

The SolarX 310 can be configured using SMS commands. The following public example commands are provided in the device configuration notes. The example assumes the device password is the default 0000. Send each command as a separate SMS to the device.

- Set the time zone to UTC 0
```text
GMT,0000,0#
```

- Set the operator APN and credentials
```text
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
Explanation: {{apn}} is the operator APN name, {{apnu}} is the APN username if required, and {{apnp}} is the APN password if required. Leave placeholders empty as your carrier requires.

- Set the GPRS server to the Plaspy IP and port
```text
IP,0000,54.85.159.138 8888#
```
Note: This command uses the server IP and port as shown in the public configuration. Plaspy also accepts the domain d.plaspy.com but use the exact SMS format supported by your device.

- Set the position update interval to 60 seconds
```text
TIMER,0000,60:60:0:0#
```
Explanation: This example sets the reporting intervals using the device's TIMER command format. Adjust values according to operational needs and device documentation.

Important command notes:
- The sample setup uses the default device password 0000 as shown in the public configuration. If your device password has been changed, replace 0000 with the device password.
- Preserve the order of commands if your workflow requires APN and server to be set before enabling frequent reporting.
- If your installer tool accepts domain names instead of IP addresses, you may configure d.plaspy.com where supported by the TopFly tool or firmware.

## Configuration Notes

- Firmware and tool differences may change the exact SMS syntax or available commands; always refer to the TopFly documentation for the firmware revision on your device.
- The SolarX 310 supports both SMS and GPRS based configuration; choose the method that matches your operational constraints and installer workflow.
- When the device requires transport selection, UDP and TCP are both supported; Plaspy detects the device protocol automatically and uses the same port for every device.
- Installer best practice is to test connectivity in a staging environment and confirm the device appears in Plaspy before full deployment.
- Keep a record of any password changes and the APN credentials used during configuration for ongoing device management.

## Why Use Plaspy with This Configuration

Using the SolarX 310 with Plaspy gives organizations resilient remote visibility with centralized telemetry, buffered reporting, and event alerts. The combination of SolarX 310 buffering and Plaspy ingestion helps preserve historical tracks after connectivity loss and provides timely alerts for tamper or sensor events so operations teams can act quickly.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. For the latest device specific setup steps, firmware notes, and official SolarX 310 documentation, verify current information at the manufacturer site https://www.topflytech.com/ as device setup methods and firmware behavior can change over time.

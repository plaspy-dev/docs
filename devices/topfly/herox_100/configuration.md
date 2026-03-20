---
slug: /topfly/herox_100/configuration
id: herox_100-configuration
sidebar_label: Configuration
title: TopFly - HeroX 100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopFly HeroX 100 showing Plaspy server settings, SMS commands, APN placeholders and practical setup steps
keywords:
  - TopFly HeroX 100 configuration
  - TopFly HeroX 100 setup Plaspy
  - HeroX 100 server configuration
  - HeroX 100 GPS tracker setup
  - TopFly tracker Plaspy integration
  - HeroX 100 SMS configuration
  - HeroX 100 APN setup
  - HeroX 100 GPRS server
  - TopFly fleet tracking configuration
  - HeroX 100 telemetry setup
---

# TopFly - HeroX 100 Configuration

This page documents the public configuration context for using the TopFly HeroX 100 with Plaspy. It focuses on the shared Plaspy server settings, the practical steps needed to direct the tracker to the platform, and example SMS configuration commands published for the HeroX 100. Use this guide to prepare the device for Plaspy and to understand the basic workflow; device-specific behavior and vendor tools may change and should be checked with the manufacturer.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The HeroX 100 supports SMS and GPRS configuration methods in public documentation and can be configured to report to Plaspy using the shared endpoint and port described below.

## Configuration Overview

Configuring the HeroX 100 for Plaspy prepares the device to send GNSS fixes, telemetry, and event data to the platform. The public model configuration shows SMS-based commands that set timezone, APN, the GPRS server address, and reporting intervals. The goal of the setup is to ensure reliable cellular connectivity, correct server target and port, and an update cadence that meets your operational needs.

- Direct the device to the Plaspy server endpoint so Plaspy can receive location and telemetry.
- Configure APN and cellular settings so GPRS data carries tracker messages to Plaspy.
- Set reporting intervals and time zone so location data is timely and consistent.
- Validate connectivity and visibility in Plaspy after applying settings.
- Use the published SMS commands if SMS configuration is convenient for installation and testing.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can accept many common tracker protocols without per-device protocol configuration

## Typical Requirements Before Setup

- A powered and installed HeroX 100 with the manufacturer recommended wiring and power applied.
- A valid cellular SIM card with an active data plan and SMS capability inserted into the device.
- The correct APN, APN username, and APN password for the SIM operator (used with the APN command placeholders).
- Access to the official TopFly configuration method for this model, such as SMS configuration or the vendor software, and knowledge of the device password if required.
- The device phone number (for sending SMS commands) and a way to receive confirmation messages on success.
- Basic network verification tools or platform access to confirm the device appears in Plaspy after configuration.

## How This Tracker Connects to Plaspy

The HeroX 100 is configured to report position fixes and telemetry to Plaspy by pointing its GPRS reporting to the shared Plaspy endpoint and port. Once the device is sending data to d.plaspy.com or the equivalent IP and port, Plaspy ingests the messages and maps the telemetry into live tracking, alerts, and reports.

- The tracker sends GNSS position data and timestamps to the Plaspy endpoint.
- CAN BUS telemetry and digital/analog I/O events are forwarded to Plaspy as available from the device.
- BLE sensor readings and accessory events are transmitted through the device to the Plaspy server.
- The tracker is pointed at the shared Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888.
- Transport can be configured as UDP or TCP depending on installer preference and firmware options; Plaspy will detect the protocol automatically.

## Common Configuration Workflow

1. Access the official TopFly configuration method for the HeroX 100 (for many installations this is SMS commands as published by the manufacturer or a vendor tool).
2. Enter the Plaspy server address by using d.plaspy.com or the server IP 54.85.159.138 in the device configuration.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Configure APN settings for the installed SIM using the APN command with your operator values.
6. Apply or save the configuration and restart the device if required by the manufacturer procedure.
7. Validate that the device reports to Plaspy by checking the device list or receiving data in the platform.

## Example Configuration Commands

The HeroX 100 public configuration includes SMS commands. The sample sequence below uses the device password 0000 which is published as the default password in the model configuration. Send these commands as SMS messages to the device phone number. Preserve the placeholders when supplying operator values.

- Set the time zone to UTC+0:
```text
GMT,0000,0#
```

- Set the operator APN (replace placeholders with your operator values):
```text
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
Explanation: {{apn}} = APN name, {{apnu}} = APN username (if required), {{apnp}} = APN password (if required). If your operator requires only an APN you can leave username and password empty as supported by the device.

- Set the GPRS server to the Plaspy server IP and port:
```text
IP,0000,54.85.159.138 8888#
```
Note: You may alternatively point the device to d.plaspy.com if the tracker firmware resolves domain names; the public example shows the server IP and port combination.

- Set the reporting/update interval to 60 seconds:
```text
TIMER,0000,60:60:0:0#
```
These commands appear in the manufacturer published sequence. Keep the order when performing initial setup so APN and server target are active before enabling frequent reporting.

## Configuration Notes

- SMS based configuration is provided in the public TopFly material for this model; follow manufacturer instructions about command syntax and phone numbers.
- Firmware revisions or vendor provisioning tools may change command support and exact parameter formatting; verify the device firmware version and consult TopFly documentation if commands do not respond as expected.
- Choosing TCP or UDP can affect delivery behavior and network overhead; select the transport that best matches your connectivity and operational requirements.
- The device default password used in the sample commands is 0000; many projects change device passwords for security—confirm the password before sending commands.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol, so pointing the device to the shared server endpoint is the primary requirement.

## Why Use Plaspy with This Configuration

Using the HeroX 100 with Plaspy provides integrated visibility of position, vehicle telemetry, and sensor events in a single fleet management platform. The HeroX 100's multi GNSS precision, cellular connectivity, CAN BUS and BLE accessory support make it a strong fit for workflows that need frequent updates, remote control of outputs, and integrated sensor data for cold chain or driver ID workflows.

To learn more about Plaspy and how this configuration fits into a complete tracking solution visit https://www.plaspy.com. For the latest device-specific commands, firmware notes, and detailed technical documents for the HeroX 100 consult the official TopFly documentation at https://www.topflytech.com/ to verify current setup methods and manufacturer recommendations.

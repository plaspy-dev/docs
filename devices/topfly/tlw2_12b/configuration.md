---
slug: /topfly/tlw2_12b/configuration
id: tlw2_12b-configuration
sidebar_label: Configuration
title: TopFly - TLW2-12B Configuration
sidebar_class_name: menu_item_tracker
description: Complete guide to configuring TopFly TLW2-12B for use with Plaspy including server settings SMS commands and a setup checklist
keywords:
  - TopFly TLW2-12B configuration
  - TopFly TLW2-12B setup
  - TLW2-12B Plaspy configuration
  - TopFly GPS tracker configuration
  - trailer GPS tracker setup
  - Plaspy device configuration
  - fleet tracking setup
  - TLW2 configuration commands
  - TopFly TLW2 server settings
  - GPS tracker SMS setup
---

# TopFly - TLW2-12B Configuration

This page documents the public configuration context for using the TopFly TLW2-12B tracker with Plaspy. It summarizes the practical steps, server settings, and sample commands that are commonly used to prepare the device for reporting to Plaspy. Use this guide to understand the shared Plaspy settings and the recommended workflow before performing a device integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so verify final details with the device vendor and current product documentation as you apply these public settings.

## Configuration Overview

This configuration process prepares the TLW2-12B to send location and telemetry to Plaspy and verifies that the device can reach the platform reliably. Publicly available commands for the TLW2-12B are commonly sent by SMS and include APN, server endpoint, and reporting interval settings.

- Configure APN and operator credentials so the device can use the cellular network for data.
- Point the tracker to Plaspy using the shared server endpoint and port so it can register with Plaspy.
- Choose transport UDP or TCP on the tracker if required by firmware to match Plaspy transport support.
- Set reporting intervals and buffering behavior so Plaspy receives the expected frequency of updates.
- Validate connectivity and confirm that the device appears in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com is available as the canonical server name for Plaspy.
- Server IP 54.85.159.138 can be used where a numeric address is required.
- Port 8888 is the shared port used by Plaspy for device connections.
- Transport support for UDP or TCP is available; the device may be configured using either transport on port 8888.
- Plaspy automatically detects the tracker protocol when the device connects so a specific protocol selection is not required by the platform, though the tracker firmware may ask you to choose UDP or TCP.

## Typical Requirements Before Setup

- A charged and accessible TLW2-12B with power connected or sufficient internal battery charge.
- An active SIM card with data service and SMS capability installed in the device where required.
- Access to the official TopFly configuration method such as SMS commands, vendor app, or configuration tool.
- Manufacturer documentation or release notes for the device firmware version you are configuring.
- Knowledge of the correct APN, APN username, and APN password for the SIM operator.
- A test device or staging environment to validate reporting to Plaspy before wide deployment.

## How This Tracker Connects to Plaspy

The TLW2-12B is configured to report its location and telemetry to the shared Plaspy server endpoint and port so Plaspy can ingest data, display real time location, and trigger alerts. When coverage is interrupted, buffered points are uploaded when connectivity returns so historical tracks remain intact.

- Device sends position and telemetry to d.plaspy.com or to 54.85.159.138 on port 8888.
- Transport can be selected as UDP or TCP on the device; Plaspy accepts both on port 8888.
- Plaspy automatically detects the tracker protocol when the connection is established.
- Buffered data is uploaded after reconnection so Plaspy can reconstruct trip history.
- BLE sensor readings and local telemetry are forwarded to Plaspy as permitted by device firmware and configuration.

## Common Configuration Workflow

1. Access the official TopFly configuration method such as SMS commands, the vendor app, or configuration tool as described in TopFly documentation.
2. Enter the Plaspy server using either domain d.plaspy.com or the IP address 54.85.159.138 in the device server settings.
3. Set the port to 8888 which is the shared port used by Plaspy for all devices.
4. Choose UDP or TCP if the device requires a transport selection for its data uplink.
5. Configure the APN and other operator parameters so the tracker can use cellular data for uplink and SMS if needed.
6. Apply or save the configuration and restart the device if the firmware requires a reboot to apply changes.
7. Validate that the tracker reports to Plaspy by checking device visibility and recent telemetry in the Plaspy platform.

## Example Configuration Commands

The TLW2-12B accepts SMS configuration commands in the following public sample format. The example below uses the device default password 0000 as shown in public TopFly guidance. Preserve placeholders when you replace values for your SIM and operator.

- Default password note
  - The sample commands below use the default device password 0000. Change passwords according to TopFly documentation after initial setup if required.

- Set time zone to UTC 0
```
GMT,0000,0#
```

- Set the operator APN
```
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
  - {{apn}} is the APN for your SIM operator.
  - {{apnu}} is the APN username when required by your operator; leave blank if not used.
  - {{apnp}} is the APN password when required by your operator; leave blank if not used.

- Set the GPRS server to Plaspy by IP and port
```
IP,0000,54.85.159.138 8888#
```
  - You may also use the domain d.plaspy.com where the device accepts a domain string for server configuration.

- Set the update interval to 60 seconds
```
TIMER,0000,60:60:0:0#
```
  - This example configures reporting intervals and may vary by firmware. Replace the timing values as required for your reporting policy.

## Configuration Notes

- Firmware differences and hardware revisions can change exact SMS syntax and available commands. Confirm syntax with the TopFly TLW2-12B manual for your firmware version.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol, but many trackers still require you to pick UDP or TCP in device settings.
- The device supports SMS based configuration in public examples; if you prefer a vendor configuration tool or provisioning workflow, follow TopFly guidance.
- Verify APN credentials with your SIM operator before configuring the tracker to avoid connectivity delays.
- After initial configuration, confirm buffered behavior and reporting cadence in Plaspy to ensure the device meets operational requirements.

## Why Use Plaspy with This Configuration

Using the TLW2-12B with Plaspy gives fleets and asset managers continuous visibility into trailer and asset movement, environmental telemetry, and event-driven alerts. The device's buffering behavior and frequent reporting options combined with Plaspy's automatic protocol detection make it straightforward to bring telemetry into dashboards and automated workflows.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information on the official TopFly site https://www.topflytech.com/.

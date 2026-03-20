---
slug: /topfly/tld2_d/configuration
id: tld2_d-configuration
sidebar_label: Configuration
title: TopFly - TLD2-D Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopFly TLD2 D tracker with Plaspy server settings and example SMS commands
keywords:
  - TopFly TLD2 D configuration
  - TopFly TLD2 D setup
  - TopFly GPS tracker configuration
  - TLD2 D server configuration
  - OBDII tracker setup Plaspy
  - Plaspy tracker configuration
  - vehicle tracking setup
  - fleet telemetry integration
  - TLD2 D SMS configuration
  - Plaspy compatibility guide
---

# TopFly - TLD2-D Configuration

This page covers the public configuration context for using the TopFly TLD2-D tracker with Plaspy. It focuses on the practical, public-facing settings and commands you can use to point the device to Plaspy and verify communication. The content below reflects Plaspy server values and sample device commands that are part of the public TopFly configuration flow.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TLD2-D supports SMS based configuration as shown in the sample commands below, but you should confirm the precise workflow with TopFly documentation when applying settings in production.

## Configuration Overview

This configuration process prepares the TLD2-D to communicate with Plaspy by setting network parameters, update intervals, and the remote server endpoint. The goal is to enable reliable GNSS and CAN BUS telemetry delivery into the Plaspy platform with minimal installer effort.

- Configure the device APN and GPRS server to point to Plaspy so telemetry arrives on the correct endpoint.
- Choose the transport protocol (UDP or TCP) and set the shared Plaspy port used by all devices.
- Set a reporting interval appropriate for your fleet policy to balance timeliness and data usage.
- Validate that the device can register on the mobile network and send packets to Plaspy.
- Confirm the device appears in Plaspy and that location, CAN BUS, and sensor data are visible.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- automatic protocol detection in Plaspy which identifies the tracker protocol after the device connects

These values are the public Plaspy settings to enter on the TopFly device or send via SMS when directing the tracker to the Plaspy platform.

## Typical Requirements Before Setup

- Confirm the TLD2-D is powered and plugged into the vehicle OBDII port or otherwise powered on.
- Install a working nano SIM card with data or SMS capability and the correct APN information from your mobile operator.
- Have the device default password available for SMS configuration if required by the tracker (the sample commands below use 0000).
- Access to the TopFly SMS command method or the vendor configuration tool required to send settings to the device.
- A Plaspy account and permission to add or monitor the new device within your platform workspace.
- A test plan for verifying location, CAN BUS telemetry, and event reporting after configuration.

## How This Tracker Connects to Plaspy

The TLD2-D is configured to report GNSS positions, CAN BUS telemetry and sensor events to the shared Plaspy endpoint and port so the platform can ingest and display device data for monitoring and reporting.

- The tracker is pointed at the Plaspy server endpoint d.plaspy.com or 54.85.159.138 and uses port 8888 for outbound telemetry.
- Transport can be UDP or TCP depending on device options; the device may be configured to use either transport on port 8888.
- Plaspy automatically detects the tracker protocol after the first connection so explicit protocol selection on the platform is not required.
- The device sends periodic location and telemetry updates based on the configured reporting interval to enable live mapping and historical logging.
- Event reports such as ignition changes, harsh driving, BLE sensor updates, and CAN BUS data are delivered to Plaspy for alerting and analysis.

## Common Configuration Workflow

1. Access the official TopFly configuration method for the TLD2-D such as the SMS command interface or a TopFly configuration tool provided by the vendor.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 when configuring the GPRS server destination.
3. Set the port to 8888 (all devices in Plaspy use the same port).
4. Choose UDP or TCP on the device if a transport selection is required.
5. Configure the device APN and any required APN username or password placeholders to match your SIM operator settings.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device successfully reports to Plaspy and appears in your Plaspy workspace with expected telemetry.

## Example Configuration Commands

The TLD2-D supports SMS based configuration. The following public example commands are sent to the device as SMS messages. The sample setup uses the device password 0000 which is the default. Preserve placeholders when replacing with your operator values.

- Set the device time zone to UTC 0
```
GMT,0000,0#
```

- Set the operator APN with placeholders for APN, APN username and APN password
```
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
Explanation: replace {{apn}} with your operator APN, {{apnu}} with the APN username if required, and {{apnp}} with the APN password if required. If no username or password is needed, many operators accept empty values or omit them per manufacturer syntax.

- Set the GPRS server to the Plaspy server IP and port
```
IP,0000,54.85.159.138 8888#
```
Note: You may alternatively configure the server using the Plaspy domain d.plaspy.com when supported by the device configuration method.

- Set the reporting interval to 60 seconds
```
TIMER,0000,60:60:0:0#
```
These commands are public examples from TopFly configuration documentation. Use the exact SMS syntax required by your device firmware and confirm the default password or any required source phone number rules with TopFly.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and available settings; verify the exact SMS format for your device firmware version.
- The TLD2-D supports multiple transport methods; choose UDP or TCP according to your operational preference and network behavior, then point to Plaspy on port 8888.
- SMS based setup is a common option shown here, but TopFly may also provide vendor tools, a web portal, or remote management options depending on the device and your provisioning workflow.
- Maintain a record of the APN settings and any placeholders used so future re-provisioning or SIM changes are straightforward.
- Plaspy uses the same port across supported devices and automatically detects protocol, reducing per-device configuration required on the server side.

## Why Use Plaspy with This Configuration

Using the TLD2-D with Plaspy gives fleet operators a fast path to live location, vehicle diagnostics and sensor visibility with minimal installation time. The plug and play OBDII form factor combined with the ability to configure the device to point to Plaspy makes scale deployment and centralized monitoring practical for mixed fleets and rental vehicles.

Learn more about Plaspy and how it collects and presents fleet telemetry on the main website https://www.plaspy.com. For the most current device specific configuration commands, firmware behavior and installation details verify information on the manufacturer website https://www.topflytech.com/ before final deployment.

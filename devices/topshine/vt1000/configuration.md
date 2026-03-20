---
slug: /topshine/vt1000/configuration
id: vt1000-configuration
sidebar_label: Configuration
title: TopShine - VT1000 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopShine VT1000 GPS tracker setup with Plaspy server settings and SMS commands for provisioning
keywords:
  - TopShine VT1000 configuration
  - VT1000 setup Plaspy
  - TopShine tracker configuration
  - VT1000 server configuration
  - VT1000 GPS tracker setup
  - TopShine Plaspy integration
  - vehicle tracker configuration
  - fleet tracking VT1000
  - GPS tracker server settings
  - tracker SMS configuration
---

# TopShine - VT1000 Configuration

This page documents the public configuration context for using the TopShine VT1000 tracker with Plaspy. It summarizes the Plaspy server settings you must apply to the VT1000, outlines typical prerequisites, and provides example SMS provisioning commands that are commonly used for initial device setup as published by the manufacturer.

Plaspy uses shared server settings across supported devices and performs automatic protocol detection so the platform can accept connections from trackers using common tracker protocols. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so use this page as a practical integration guide and confirm any device specific details against the manufacturer documentation.

## Configuration Overview

The goal of this configuration process is to prepare the VT1000 so it can reliably report position and telemetry to Plaspy, and so fleet managers can validate the device is visible in the platform. The VT1000 supports TCP and UDP reporting and can also use SMS for commands and some fallbacks; the example commands below follow the manufacturer’s SMS provisioning approach.

- Configure the device network settings so it targets the Plaspy server endpoint and port.
- Provision the device identifier and APN so GPRS or 4G data sessions succeed.
- Verify the device is using GPRS or 4G reporting mode and set an appropriate reporting interval.
- Confirm the tracker is visible in Plaspy and reporting location updates and alarms.
- Use SMS commands for initial provisioning if the installer does not have a configuration tool.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the VT1000. These values are the shared server settings Plaspy uses for supported devices.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A VT1000 unit powered and accessible for SMS or configuration tool access.
- An active SIM card with a data plan and the correct operator APN configured.
- Ability to send SMS provisioning commands from a mobile phone if using SMS setup.
- The device IMEI available for use as the device identifier when required.
- Access to manufacturer documentation or configuration software for firmware or advanced settings.
- A plan for validating connectivity in Plaspy after provisioning.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the VT1000 is set to report position and telemetry to the shared Plaspy server endpoint and port. Plaspy receives the device packets, detects the protocol automatically, and presents location, alarms, and telemetry in the platform.

- The device is configured to send GPRS or 4G TCP or UDP packets to d.plaspy.com (54.85.159.138) on port 8888.
- Plaspy automatically detects the tracker protocol so the device does not require a protocol selection in Plaspy itself.
- Regular location updates and alarm reports are forwarded to Plaspy for mapping and alerting.
- SMS can be used for provisioning and as a fallback transport for commands or diagnostics.
- Once reporting correctly, the device will appear in Plaspy and provide telemetry and event visibility to fleet operators.

## Common Configuration Workflow

Follow this practical workflow for provisioning a VT1000 to report to Plaspy. Adjust steps for installer tools or local procedures as required.

1. Access the official TopShine configuration method for the VT1000, using SMS provisioning or the manufacturer configuration tool as available.
2. Enter the Plaspy server as d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888. Note that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP on port 8888 if the device requires a transport selection.
5. Configure the APN and any APN username or password required by the SIM operator.
6. Apply or save the configuration and switch the device to GPRS or 4G reporting mode if required.
7. Restart or power cycle the device if the manufacturer recommends a reboot after settings change.
8. Validate that the device reports to Plaspy by checking device visibility and recent position updates in the Plaspy platform.

## Example Configuration Commands

The VT1000 supports SMS based provisioning. Below are commonly published SMS commands and templates that appear in the manufacturer reference. The sample factory password used in these examples is 000000 which is the default for many VT1000 units. Preserve placeholders where applicable:

- Reset to factory settings (optional initial step)
```text
W000000,990,099###
```

- Set the device ID
  - The device ID template uses the first 14 digits derived from the IMEI. Plaspy will use the full 15 digit IMEI for device identification in the platform.
```text
W000000,010,{{device_id14}}
```
  - Replace {{device_id14}} with the first 14 digits you derive from the IMEI. For example if IMEI is 123456789012345 use 12345678901234 in this command.

- Set the operator APN
  - If only an APN is required:
```text
W000000,011,[apn]
```
  - If APN username and password are required, include these placeholders:
```text
W000000,011,[apn],[apnu],[apnp]
```
  - Explanation of placeholders:
    - [apn] = cellular data APN for the SIM operator
    - [apnu] = APN username if required
    - [apnp] = APN password if required

- Set the GPRS server and port pointing to Plaspy
```text
W000000,012,54.85.159.138,8888
```
  - This configures the device to send data to Plaspy on port 8888.

- Switch the device to GPRS reporting mode
```text
W000000,013,2
```

- Set the update interval (manufacturer numeric code)
```text
W000000,014,6
```
  - The numeric value used here follows the manufacturer command meaning for reporting frequency. Confirm the interval semantics with TopShine documentation.

- Get device IMEI (verification command)
```text
W000000,601
```

Note: The exact SMS format and required command sequences can vary by firmware version and local device customization. Use the manufacturer documentation as the authoritative source when in doubt.

## Configuration Notes

- Firmware and hardware revisions can change command formats or available features. Verify command syntax against the VT1000 firmware release notes.
- SMS provisioning is useful when on site or when no configuration tool is available, but ensure the SIM can receive and send SMS.
- TCP versus UDP selection may affect reliability or latency. Choose the transport recommended for your network environment; Plaspy will accept either on port 8888 and automatically detect the protocol.
- The default device password in the public examples is 000000. If your device has a different password, substitute it in commands where required.
- Confirm APN credentials with the mobile operator before setting them in the device.

## Why Use Plaspy with This Configuration

Using the VT1000 with Plaspy gives fleets a practical way to combine robust vehicle telemetry, passenger connectivity, and video support with a single cloud platform. By pointing the VT1000 to d.plaspy.com or 54.85.159.138 on port 8888 and confirming transport settings, teams can rapidly begin collecting real time location, alarms, and sensor data in Plaspy for dispatching, security, and reporting workflows.

Learn more about how Plaspy organizes device telemetry and fleet visibility at https://www.plaspy.com. For the latest VT1000 specific commands, firmware notes, and device manuals, verify setup details on the manufacturer website https://www.gztopshine.com/ since device behavior and provisioning steps can change as firmware and hardware are updated.

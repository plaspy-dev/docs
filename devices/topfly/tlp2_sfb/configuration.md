---
slug: /topfly/tlp2_sfb/configuration
id: tlp2_sfb-configuration
sidebar_label: Configuration
title: TopFly - TLP2-SFB Configuration
sidebar_class_name: menu_item_tracker
description: TopFly TLP2 SFB configuration guide for Plaspy compatibility with server settings example and SMS commands
keywords:
  - TopFly TLP2-SFB configuration
  - TopFly TLP2-SFB setup for Plaspy
  - TopFly GPS tracker configuration
  - TLP2-SFB server configuration
  - TLP2-SFB SMS commands
  - Plaspy tracker integration
  - Plaspy server settings
  - asset tracker configuration
  - GPS platform setup
  - remote asset monitoring
---

# TopFly - TLP2-SFB Configuration

This page documents the public configuration context for using the TopFly TLP2-SFB tracker with Plaspy. It focuses on the practical server settings, typical prerequisites, and the public SMS commands that are commonly used to point the device at Plaspy for tracking and telemetry ingestion. Use this guide alongside your device manual and vendor tools to complete setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device sends data to the platform. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so follow the device manufacturer documentation when details differ from the examples shown here.

## Configuration Overview

Preparing the TLP2-SFB for Plaspy involves setting the device to report to the Plaspy endpoint and confirming data flow from the tracker into the platform. The typical configuration ensures the tracker can use cellular connectivity to stream location and sensor telemetry to Plaspy, and that reporting intervals and buffering behavior meet your operational needs.

- Configure the tracker to use the Plaspy server endpoint and port so data is routed to Plaspy dashboards.
- Set the device APN and verify cellular connectivity so the tracker can upload buffered history and live points.
- Choose the transport protocol if the tracker requires a selection between UDP or TCP before sending data.
- Set reporting intervals and buffering so the tracker preserves history during coverage gaps and syncs to Plaspy when reconnected.
- Validate the device is visible in Plaspy and that telemetry and event messages arrive as expected.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

Note that Plaspy uses the same port for all supported devices and that selecting UDP or TCP is done on the device side if required.

## Typical Requirements Before Setup

- A powered and accessible TLP2-SFB unit with sufficient battery and any solar setup finalized.
- An active SIM card and cellular data access compatible with the device and region if using GPRS or LTE transport.
- Access to the device configuration method supported by the manufacturer such as SMS commands, vendor app, or configuration tool.
- The device default SMS password if using SMS configuration commands; the public sample here shows the default password 0000.
- APN details from the mobile operator to populate the APN command placeholders.
- Access to a Plaspy account or platform workspace to validate that the device appears and reports after configuration.

## How This Tracker Connects to Plaspy

The TLP2-SFB is configured to report location and telemetry to the shared Plaspy server endpoint and port. When the tracker transmits over the selected transport, Plaspy ingests the data, matches it to the device record, and makes the location and sensor data available for maps, alerts, and reporting.

- The tracker streams GPS and telemetry to d.plaspy.com or the IP 54.85.159.138 on port 8888.
- Transport can be either UDP or TCP depending on device selection; Plaspy accepts both on port 8888.
- Plaspy automatically detects the tracker protocol so no platform-side protocol selection is required.
- Buffered points stored on the device upload to Plaspy after connectivity resumes to preserve trip history.
- BLE sensor data and event messages forwarded by the tracker arrive in Plaspy together with location updates.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the TLP2-SFB, for example SMS setup or the vendor configuration tool.
2. Enter the Plaspy server endpoint either as the domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 which is the shared port used by Plaspy for all devices.
4. Choose the transport protocol UDP or TCP on the device if it requires a transport selection.
5. Set APN and other operator parameters so the tracker can establish a cellular data connection.
6. Apply or save the configuration on the device and restart the tracker if required by the manufacturer.
7. Validate that the device reports to Plaspy by checking the device presence and recent telemetry in your Plaspy workspace.

If you are using SMS commands for initial configuration, include the device password with each command and follow the manufacturer order when required.

## Example Configuration Commands

The TLP2-SFB supports SMS-based configuration. The public example commands below show the commonly used SMS messages and use the default device password 0000 as provided in the public configuration content. Send each line as a separate SMS to the device phone number.

1. Set the time zone to UTC 0
```sms
GMT,0000,0#
```

2. Set the operator APN
```sms
APN,0000,[apn],[apnu],[apnp]#
```
- [apn] is the operator APN name
- [apnu] is the APN username if required by the operator
- [apnp] is the APN password if required by the operator

3. Set the GPRS server to Plaspy using the public server IP and port
```sms
IP,0000,54.85.159.138 8888#
```
This command points the tracker to Plaspy using the provided IP and port. You may alternatively use the domain d.plaspy.com in device interfaces that accept a hostname.

4. Set the position update interval to 60 seconds
```sms
TIMER,0000,60:60:0:0#
```
This example sets reporting intervals and may be adapted to your operational requirements.

Important notes about commands
- The example SMS commands use the default password 0000 shown in the public configuration content. If your device password has been changed, use the current password in the commands.
- Preserve the command order if the device documentation requires a specific sequence during initial setup.

## Configuration Notes

- Firmware and hardware revisions may change command syntax or supported features. Verify commands against the device manual for the exact firmware version in your unit.
- SMS based setup is supported in the public examples, but manufacturer tools or over the air configuration may also be available for bulk deployments.
- When a device interface accepts both a domain and an IP address, using d.plaspy.com can simplify future server updates, while using the IP 54.85.159.138 is a valid direct option shown in public commands.
- Choose UDP or TCP on the device based on installer preference or network requirements; Plaspy accepts both transports on port 8888 and detects the protocol automatically.
- Keep a record of changed passwords and configuration settings for maintenance and service workflows.

## Why Use Plaspy with This Configuration

Using the TopFly TLP2-SFB with Plaspy provides a practical way to centralize location, event, and sensor telemetry from outdoor assets into a single platform. The device buffering and high frequency reporting capabilities make it suitable for scenarios where continuous visibility and historical reconstruction are important, and Plaspy ingests those updates for maps, alerts, and reporting.

To learn more about how Plaspy works with compatible trackers visit https://www.plaspy.com. For the latest device specific instructions firmware notes and official documentation verify details on the manufacturer site https://www.topflytech.com/

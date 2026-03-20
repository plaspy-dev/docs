---
slug: /topten/pt99/configuration
id: pt99-configuration
sidebar_label: Configuration
title: TopTen - PT99 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopTen PT99 showing how to configure the device to communicate with Plaspy
keywords:
  - TopTen PT99 configuration
  - PT99 setup for Plaspy
  - TopTen PT99 GPS tracker configuration
  - PT99 server configuration
  - Plaspy tracker configuration
  - PT99 GPS platform setup
  - PT99 IMEI tracker ID
  - PT99 SMS configuration
  - vehicle tracker PT99 configuration
  - GPS tracker Plaspy compatibility
---

# TopTen - PT99 Configuration

This page documents the public configuration context for using the TopTen PT99 tracker with Plaspy. It collects the shared Plaspy server settings, the common workflow for preparing the device, and the publicly available SMS commands provided by the manufacturer for configuring APN and server endpoints. Use this guide to prepare a PT99 for communication with Plaspy while keeping manufacturer documentation at hand for device specific steps.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives at the platform. Manufacturer side setup steps can vary depending on PT99 firmware, hardware revision, installation type, and vendor tools. The PT99 supports SMS based configuration in the public commands shown below and requires correct APN and server values to report to Plaspy.

## Configuration Overview

The configuration process prepares the PT99 to send location and status data to Plaspy and ensures the device is reachable and visible in the platform. With the PT99 this typically means setting the APN, pointing the device to the Plaspy server endpoint, and confirming the device identifier that Plaspy will use.

- Configure APN and GPRS server settings on the PT99 so it can establish a data connection.
- Point the device to the Plaspy server endpoint and port so reports arrive at Plaspy.
- Verify the device identifier used by Plaspy is the tracker ID derived from the IMEI as shown in the PAR response.
- Validate connectivity and reporting intervals so the tracker appears and updates correctly in Plaspy.
- Optionally restore factory settings before a fresh configuration when required by your deployment process.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the PT99 server and transport values:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Plaspy uses the same port for all supported devices and will accept TCP or UDP traffic on port 8888 while performing protocol detection on incoming connections.

## Typical Requirements Before Setup

- A PT99 device with battery charged or an adequate power source for configuration.
- A SIM card provisioned for mobile data and SMS if using SMS based configuration as shown in the public commands.
- The device IMEI available so you can determine the tracker ID used by Plaspy (the PT99 ID corresponds to the last 14 digits of the IMEI).
- A phone or service able to send SMS commands to the PT99 if using SMS configuration.
- Access to the official TopTen documentation or vendor tool for firmware specific instructions and for troubleshooting.
- Time to verify that the device reports to the Plaspy endpoint after the configuration is applied.

## How This Tracker Connects to Plaspy

The PT99 is configured to report to the shared Plaspy server endpoint and port so events, location updates, and status messages arrive at the platform for processing and display. Plaspy associates the device with an identifier derived from the PT99 IMEI and handles protocol detection automatically.

- The tracker is set to send data to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- The PT99 can be configured to use UDP or TCP transport to reach Plaspy on port 8888.
- Plaspy performs automatic protocol detection when it receives tracker traffic, so the platform recognizes the PT99 protocol without additional user action.
- The device identifier used by Plaspy corresponds to the last 14 digits of the IMEI as returned in the PT99 PAR response.
- Reporting and sleep intervals can be set on the PT99 so the device reports at the desired frequency to Plaspy.

## Common Configuration Workflow

1. Access the official TopTen configuration method for your PT99 model such as the manufacturer SMS commands or vendor configuration tool.
2. Confirm the device IMEI and determine the tracker ID that Plaspy will use (the PT99 ID is the last 14 digits of the IMEI).
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device configuration screen or SMS command.
4. Set the port to 8888 in the device settings.
5. Choose UDP or TCP transport if the device requires selecting a transport option.
6. Set APN and any required APN username or password values and apply or save the configuration on the device.
7. Restart or power cycle the PT99 if required by the device firmware to apply settings.
8. Validate that the device reports to Plaspy by checking for the tracker identifier and recent telemetry in your Plaspy instance.

## Example Configuration Commands

The PT99 supports SMS based configuration. The following public SMS commands are shown in the manufacturer supplied configuration notes. Replace 111111 with your device SMS password if your unit uses a different admin password. Keep the order shown when setting up APN and server values.

- Optional initial factory reset or clear command
```text
111111CLR
```
Label: optional initial factory reset when required by your deployment.

- APN and GPRS server setup command
```text
111111WWW:IPN:54.85.159.138;COM:8888;APN:[apn],[apnu],[apnp];RPT:60;SLP:60;RUN:2;
```
Explanation:
- Replace [apn] with your mobile operator APN name.
- Replace [apnu] with the APN username if required by your operator, or leave blank if none.
- Replace [apnp] with the APN password if required, or leave blank if none.
- This command points the device to the Plaspy server IP 54.85.159.138 and port 8888, and sets reporting and sleep related parameters as provided in the manufacturer's example.

- Verification command to check current WWW settings
```text
111111WWW:
```
This query returns the current APN and server settings recorded on the device.

Note: The manufacturer example uses the server IP 54.85.159.138 rather than the domain d.plaspy.com. You may use the domain d.plaspy.com or the IP address when configuring the device. Plaspy accepts connections to d.plaspy.com and the same traffic on 54.85.159.138 on port 8888. Devices may be configured using UDP or TCP on port 8888 as required by the device firmware.

## Configuration Notes

- Firmware and OS revisions can change the exact SMS syntax and available parameters; always confirm with the TopTen documentation for your device firmware.
- The PT99 example uses SMS for configuration; some deployments may also provide a vendor tool or configuration utility—use the official method you have available.
- When a device requires a transport selection, try UDP or TCP on port 8888 depending on installer preference; Plaspy will accept either and detect the protocol automatically.
- Keep APN placeholders [apn], [apnu], and [apnp] as shown; replace them with values from your mobile operator.
- The device identifier used by Plaspy is derived from the IMEI; the PT99 tracker ID corresponds to the last 14 digits returned in the PAR response.

## Why Use Plaspy with This Configuration

Using the PT99 with Plaspy provides a practical way to centralize location reporting, alerts, and device monitoring. Pointing the PT99 to the shared Plaspy endpoint and standard port makes onboarding straightforward and lets Plaspy handle protocol detection and device mapping based on the IMEI derived tracker ID.

If you want to learn more about how Plaspy supports device integrations and fleet visibility, visit https://www.plaspy.com. For device specific instructions, firmware notes, and the most current PT99 setup details consult the manufacturer at http://www.t10.cn as vendor configuration steps and firmware behavior can change over time.

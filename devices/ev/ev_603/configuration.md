---
slug: /ev/ev_603/configuration
id: ev_603-configuration
sidebar_label: Configuration
title: EV - EV-603 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the EV EV-603 GPS tracker and how to set it up to work with Plaspy servers
keywords:
  - EV EV-603 configuration
  - EV EV-603 setup
  - EV-603 GPS tracker configuration
  - EV-603 Plaspy setup
  - EV tracker server configuration
  - EV-603 SMS configuration
  - vehicle tracking EV-603
  - EV tracker installation guide
  - Plaspy tracker configuration
  - EV EV-603 manual
---

# EV - EV-603 Configuration

This page documents the public configuration context for using the EV EV-603 Vehicle and Motorcycle GPS tracker with Plaspy. It summarizes the practical steps and public commands that are commonly used to point the EV-603 at Plaspy servers, and explains what to check before you attempt integration. The EV-603 includes GPS and GSM connectivity, a backup battery, and supports SMS configuration commands that manufacturers often publish for installer use.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so a single set of server values is used to register the tracker with the platform. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools; for the EV-603 the public configuration flow includes SMS commands and a manufacturer-controlled server change step that may require contacting the vendor.

## Configuration Overview

This configuration prepares the EV-603 to communicate reliably with Plaspy servers so the device appears and reports on the Plaspy platform. The goal is to set the device time zone and APN, ensure the device can reach the network, and configure the tracker to send data to the shared Plaspy endpoint and port.

- Prepare the tracker with a valid SIM and APN so it has GPRS/SMS connectivity for reporting and remote commands.
- Set the device time zone and any regional settings so timestamps match your Plaspy account reporting.
- Configure the server settings to point to Plaspy using d.plaspy.com or the public IP so the device delivers position and event data.
- Ensure the tracker port is set to the shared Plaspy port and select UDP or TCP as supported by the device.
- Validate connectivity so the tracker is visible and reporting in Plaspy after applying settings.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: device may be configured to use UDP or TCP on port 8888
- Protocol handling: Plaspy automatically detects the tracker protocol for supported devices

## Typical Requirements Before Setup

- A powered EV-603 with an active SIM card and a valid mobile data plan or SMS capability.
- Access to the device configuration method the manufacturer supports (SMS commands or vendor software).
- Knowledge of the device default password if SMS commands require authentication (the public default shown below is 123456).
- Confirmed APN settings for the SIM operator to allow GPRS data.
- A charged backup battery or stable power source while configuring and testing the device.
- Contact information for the manufacturer or vendor if server change options must be enabled by them.

## How This Tracker Connects to Plaspy

The EV-603 is configured to report location and device events to the shared Plaspy server endpoint and port so Plaspy can display real-time positions and alerts. Reporting occurs over the selected transport to the same Plaspy port used by all supported devices, and Plaspy detects the protocol automatically.

- The tracker sends position updates and event notifications to d.plaspy.com (or 54.85.159.138) on port 8888.
- Transport can be configured as UDP or TCP depending on installer preference and device capabilities.
- Plaspy receives and parses the tracker protocol automatically once network connectivity and server settings are correct.
- Device-generated events such as motion, alarm, or status changes are forwarded to user accounts on Plaspy for monitoring.
- Successful configuration makes the device visible in Plaspy and enables location history and alert reporting.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the EV-603 (SMS command interface or vendor utility).
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP 54.85.159.138 as the device server target.
3. Set the device port to 8888, which is the shared Plaspy port for all devices.
4. Choose UDP or TCP if the device requires selection of the transport protocol.
5. Apply or save the configuration on the device using the manufacturer method (for SMS, send the appropriate commands).
6. Restart or power cycle the device if the manufacturer instructions require a reboot for changes to take effect.
7. Validate that the device reports to Plaspy and shows up in the platform with recent position data.

## Example Configuration Commands

The EV-603 public configuration supports SMS commands. The sample public commands below use the device default password 123456. These commands are sent as SMS messages to the device phone number. Preserve and replace placeholders as needed.

- Default password used in example commands: 123456

1) Set the time zone to UTC+0
```text
123456L+00
```
- Sends a command to set device time zone to UTC 0.

2) Set the operator APN
```text
123456S1,{{apn}}
```
- Basic APN command. If your operator requires APN username and password, extend the command with the optional placeholders:
```text
123456S1,{{apn}},{{apnu}},{{apnp}}
```
- {{apn}} is the operator APN string. {{apnu}} is the APN username and {{apnp}} is the APN password. Keep these placeholders and replace them with actual operator values.

3) Set the server to Plaspy public IP and port
```text
123456I1,54.85.159.138,8888
```
- NOTE: Manufacturer documentation indicates you may need to contact the vendor to enable the option to change the server on some firmware revisions. If the device supports setting the server by domain you can alternatively point to d.plaspy.com if the tracker accepts domain names in the same command format.

## Configuration Notes

- Firmware and regional variants may change exact SMS command formats or whether server changes are permitted; always verify commands against the device documentation.
- The server change step for EV-603 can require manufacturer enablement on some units; contact the vendor if the I1 command is ignored.
- Choose TCP or UDP according to your network policy and installer preference; Plaspy accepts either on port 8888 and automatically detects protocol specifics.
- If using SMS for configuration, ensure the SIM has enough SMS credit and that messages are sent to the device phone number.
- After applying commands, allow a few minutes for the device to register to the network and begin reporting to Plaspy.

## Why Use Plaspy with This Configuration

Using the EV-603 with Plaspy centralizes visibility of vehicle and motorcycle location, alerts, and operational events in a single platform. Configuring the device to report to Plaspy using the shared server settings simplifies deployment across many units because the same server and port are used for all supported trackers and Plaspy handles protocol detection automatically.

To learn more about Plaspy and how it manages device connections and fleet visibility visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest EV-603 instructions and capabilities on the manufacturer site http://www.eviewltd.com/ before making large scale deployments.

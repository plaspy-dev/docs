---
slug: /ev/ev_05/configuration
id: ev_05-configuration
sidebar_label: Configuration
title: EV - EV-05 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the EV EV-05 wearable GPS tracker and how to connect it to Plaspy
keywords:
  - EV EV-05 configuration
  - EV-05 setup
  - EV wearable GPS tracker
  - Plaspy configuration
  - GPS tracker setup
  - wearable tracker configuration
  - EV-05 server configuration
  - EV-05 Plaspy setup
  - GPS platform integration
  - personal safety tracker setup
---

# EV - EV-05 Configuration

This page documents the public configuration context for using the EV-05 Mobile Safety Watch with Plaspy. It gathers the practical setup facts that are publicly available, explains the shared Plaspy server settings you will use, and summarizes the common steps to prepare the watch so it reports location and alert telemetry into the Plaspy platform.

Plaspy accepts telemetry from many device types using shared server settings and automatic protocol detection. Exact manufacturer-side setup steps for the EV-05 can vary with firmware version, hardware revision, installation type, and vendor tools; the EV-05 also supports SMS-based configuration commands as part of the public setup flow described below.

## Configuration Overview

The goal of this configuration process is to prepare the EV-05 so it reliably communicates with Plaspy and is visible in the Plaspy dashboard. For the EV-05 this commonly means using the manufacturer configuration method (SMS or vendor tool) to set the network APN and server endpoint, confirm transport type, and validate reporting during normal and SOS operation.

- Set the device timezone and carrier APN so data connectivity is functional for the watch.
- Configure the device server endpoint to point at Plaspy so reports arrive in the platform.
- Choose the transport (UDP or TCP) if the device requires a transport selection and save the change.
- Validate connectivity and event reporting in Plaspy so SOS and telemetry are visible to monitoring users.
- If using SMS configuration, apply commands in the order recommended by the manufacturer and confirm the device acknowledges changes.

## Plaspy Server Settings

Use the following publicly provided Plaspy server settings when configuring the EV-05:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: configure using UDP or TCP on port 8888 if the device requires a transport selection
- Plaspy automatically detects the tracker protocol so a single port is used for all supported devices

Note that Plaspy uses the same port for all devices and relies on automatic protocol detection to handle different tracker protocols.

## Typical Requirements Before Setup

- A charged and powered EV-05 device ready for configuration and within network coverage
- An active SIM card with a working data plan and SMS capability inserted in the watch if SMS or cellular configuration is used
- Access to the official EV manufacturer configuration method or software (SMS commands, vendor web tool, or handset app) for the EV-05
- Knowledge of the device default password (the public default used in examples below is 123456) and the ability to change it if required
- Network information such as your carrier APN and optional APN username/password values
- Contact details for the device vendor or manufacturer support if a server-change permission must be enabled

## How This Tracker Connects to Plaspy

The EV-05 reports location, safety alerts, and selected telemetry to Plaspy by directing its outbound device connections to the shared Plaspy endpoint and port. Once configured to the Plaspy server settings, the watch will send periodic position updates and event messages that Plaspy parses and displays.

- Device sends position and event packets to d.plaspy.com or directly to 54.85.159.138 on port 8888
- The EV-05 can use UDP or TCP transport depending on its configuration and network conditions
- Plaspy automatically detects the protocol and ingests the tracker data without requiring device-specific ports
- SOS, fall alerts, and telemetry are forwarded to Plaspy so monitoring users receive high-priority notifications
- Successful configuration is validated when Plaspy receives initial position or heartbeat messages from the device

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the EV-05 (SMS commands, vendor configuration portal, or manufacturer-provided tool).
2. Confirm the device is powered, has an active SIM if required, and that you know the default device password (public default example shown below).
3. Enter the Plaspy server address by setting d.plaspy.com or 54.85.159.138 as the server endpoint.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration and restart the device if the manufacturer recommends a reboot.
6. Validate that the EV-05 reports to Plaspy by checking for position or heartbeat messages in the Plaspy platform.
7. If server changes are restricted by firmware, contact the manufacturer to enable the server-change option and reapply the configuration.

## Example Configuration Commands

The EV-05 supports SMS-based configuration. The following commands are examples taken from public device configuration content. The sample device password used in these commands is 123456 which is the public factory default; change the password where possible.

- Set the timezone to UTC+0
```text
123456L+00
```

- Set the operator APN (replace {{apn}} with your carrier APN; optionally include {{apnu}} and {{apnp}} for APN username and password)
```text
123456S1,{{apn}},{{apnu}},{{apnp}}
```
Explanation: S1 sets APN for data. Keep the placeholders exactly as shown and replace only the values required by your mobile operator.

- Set the device server to Plaspy (public command example). Note the manufacturer states you may need to contact them to enable the option to change server settings for this device.
```text
123456I1,54.85.159.138,8888
```
Explanation: I1 indicates server configuration with IP and port. You may also be able to specify the domain d.plaspy.com instead of the IP if the device accepts domain names, but some firmware requires the numeric IP.

Important: The manufacturer documentation indicates the ability to change server settings may be restricted; contact the manufacturer to enable server-change capability if the device ignores these commands.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and allowed operations; always confirm the exact SMS command set for your EV-05 firmware.
- The EV-05 supports SMS configuration as a public method; vendor tools or provisioning services may offer additional or alternative workflows.
- TCP versus UDP selection can affect delivery characteristics on some networks; choose the transport that best matches your monitoring requirements and local network reliability.
- Because the public example uses a default password (123456), change device credentials when your workflow and manufacturer support it to maintain device access control.
- If the device will not accept server changes by SMS, coordinate with the vendor to enable the server-change option or use the vendor provisioning tool.

## Why Use Plaspy with This Configuration

Configuring the EV-05 to send data to Plaspy makes wearable safety telemetry and location visible alongside other tracked assets in a single platform. For organizations managing personal safety, remote patient monitoring, or lone worker programs, this integration brings SOS events, fall detection, and health telemetry into the same operational view used for other GPS devices.

To learn more about how Plaspy handles device integrations and to review platform features, visit https://www.plaspy.com. For the latest EV-05 device-specific setup details, firmware notes, and manufacturer guidance, verify information on the official manufacturer site http://www.eviewltd.com/ as device configuration methods and firmware behavior can change over time.

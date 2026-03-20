---
slug: /queclink/gv500/configuration
id: gv500-configuration
sidebar_label: Configuration
title: QuecLink - GV500 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GV500 showing Plaspy server settings and practical setup steps for integration
keywords:
  - QuecLink GV500 configuration
  - QuecLink GV500 setup
  - GV500 server configuration
  - GV500 setup for Plaspy
  - GV500 GPS tracker configuration
  - GV500 OBDII setup
  - Plaspy device configuration
  - vehicle tracking setup
  - fleet tracking GV500
  - QuecLink GPS platform setup
---

# QuecLink - GV500 Configuration

This page documents the public configuration context for using the QuecLink GV500 with Plaspy. It explains the practical server settings and manufacturer side steps that are commonly used to make the GV500 report into Plaspy. The GV500 description in this guide reflects its OBDII installation style, GPRS communication capabilities, and on device features such as the embedded @Track protocol and event reporting that are relevant to platform integration.

Plaspy uses shared server settings for all supported devices and automatically detects the tracker protocol so device entries generally point to the same backend endpoint. Exact manufacturer configuration steps can vary by firmware version, hardware revision, installation type, and the specific vendor tools used. The example SMS commands shown below are public sample commands and illustrate one common workflow for configuring a GV500 to send data to Plaspy.

## Configuration Overview

The purpose of configuring a GV500 for Plaspy is to prepare the tracker to connect to the Plaspy backend, ensure reliable GPRS connectivity, and enable the device to report positions and events so the vehicle is visible in the platform. This includes setting network APN, server endpoint, reporting intervals, and any event inputs you want the platform to receive.

- Point the device to the Plaspy server endpoint so the GV500 can open a GPRS session and push data.
- Configure the operator APN and any required credentials so the tracker has internet access.
- Choose UDP or TCP transport as supported by the device and set the shared Plaspy port.
- Set reporting intervals and enable event inputs such as SOS or I/O alerts for platform visibility.
- Validate the device is actively reporting to Plaspy and visible in the Plaspy device list.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public Plaspy endpoint settings to use when configuring the GV500. Plaspy uses the same port for all supported devices and performs protocol detection automatically.

## Typical Requirements Before Setup

- Physical access to the vehicle to connect and power the GV500 through the OBDII port or an approved installation point.
- An active SIM card with a data plan and the correct APN settings for the mobile operator.
- Access to the manufacturer configuration method accepted by the GV500 such as SMS commands or official QuecLink configuration software.
- The device default password used in sample commands is queclink as shown in the example commands below.
- Knowledge of the Plaspy server values d.plaspy.com and 54.85.159.138 and the shared port 8888.
- A process to validate connectivity and reporting once settings are applied, for instance by checking device status in Plaspy.

## How This Tracker Connects to Plaspy

The GV500 uses its GPRS connection to transmit position reports and event messages to the configured server endpoint. When it is pointed at Plaspy it will open a TCP or UDP session to the platform and send telemetry according to its configured reporting schedule and event triggers.

- The tracker reports scheduled GPS positions to the configured Plaspy server endpoint and port.
- Event reports such as SOS, geo fence crossing, and low battery are sent to Plaspy for immediate visibility.
- The device sends data over GPRS after the operator APN and credentials are configured.
- Plaspy accepts the incoming connection on the shared port and automatically detects the tracker protocol to interpret messages.
- Once connected, the device appears in Plaspy for monitoring, history, and alerting.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for the GV500 using SMS or the manufacturer software tool.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 as required by Plaspy.
4. Choose UDP or TCP transport on the device if it requires an explicit transport selection.
5. Configure the operator APN and any APN username and password placeholders if your network requires them.
6. Apply or save the configuration and restart the device if the device firmware requires a reboot to activate settings.
7. Validate that the GV500 is reporting to Plaspy and that position and event data appear in the platform.

If the device uses SMS commands for configuration, send the properly formatted SMS commands from an authorized phone number and include the device password where required.

## Example Configuration Commands

The following public SMS commands are a common example sequence for QuecLink GV500 devices. These commands are typically sent by SMS to the device phone number. The sample commands use the default device password queclink where required. Preserve the placeholders [apn], [apnu], and [apnp] and replace them with your operator APN, APN username, and APN password.

- Optional initial step to restore factory settings
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Set the time zone to UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Set the operator APN and optional APN credentials
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
Explanation: replace [apn] with your operator APN. If your carrier requires username or password, replace [apnu] and [apnp] accordingly. If not required, leave those placeholders empty per your device command syntax.

- Set the GPRS server to Plaspy using both domain and IP with port 8888
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
This command configures the device to use Plaspy as the reporting server. It includes the Plaspy domain and IP and specifies port 8888.

- Set the GPS position update interval to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Enable SOS button notification mapped to input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Send each command as a single SMS message to the device number. Commands and placeholders must match the device firmware expectations. If you change the device password from the default queclink, use the new password in subsequent commands.

## Configuration Notes

- Device firmware and hardware revisions can change command syntax and available options; verify command compatibility with your GV500 firmware.
- Plaspy uses the same port 8888 for all devices and automatically detects the tracker protocol when the device connects.
- Choose TCP or UDP based on installer preference and the device firmware options; behavior may vary slightly with each transport type.
- SMS based configuration is supported and shown here in examples, but official QuecLink software tools may provide a safer and more auditable configuration workflow.
- Replace APN placeholders with your carrier details and test connectivity before deploying devices at scale.

## Why Use Plaspy with This Configuration

Using Plaspy as the backend for QuecLink GV500 devices gives organizations a consistent server endpoint and automatic protocol detection so multiple devices can be managed with a single configuration profile. The shared Plaspy server settings reduce per device variation and help standardize fleet onboarding and monitoring.

To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For the most current device specific commands, firmware guidance, and detailed hardware information, verify the latest documentation on the manufacturer website https://www.queclink.com/. Device specific configuration steps and firmware behavior can change over time so always confirm the current details with the official QuecLink resources.

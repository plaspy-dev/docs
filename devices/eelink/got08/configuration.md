---
slug: /eelink/got08/configuration
id: got08-configuration
sidebar_label: Configuration
title: EElink - GOT08 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink GOT08 with Plaspy including server settings example and SMS commands for quick setup
keywords:
  - EElink GOT08 configuration
  - EElink GOT08 setup
  - GOT08 Plaspy configuration
  - GOT08 server configuration
  - EElink OBD tracker setup
  - GOT08 SMS configuration
  - Plaspy compatible trackers
  - vehicle tracking configuration
  - GPS tracker server settings
  - fleet tracking GOT08
---

# EElink - GOT08 Configuration

This page documents the public configuration context for using the EElink GOT08 with the Plaspy platform. It summarizes the shared Plaspy server settings you will point the device at, explains the recommended practical steps, and includes example SMS commands that are commonly used to configure GOT08 units for Plaspy reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but the exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The GOT08 description and the provided SMS command set are the main grounding for the guidance on this page; always verify the device firmware and vendor documentation when in doubt.

## Configuration Overview

The goal of configuration is to prepare a GOT08 unit so it reliably communicates location and OBD telemetry to Plaspy. For GOT08 devices this commonly means using the manufacturer SMS interface to set APN and server parameters, then validating that the unit reports to the Plaspy endpoint and appears in the platform.

- Set the device APN so the tracker can use cellular data for GPRS connections.
- Point the device to the Plaspy server endpoint and port so data is routed to Plaspy.
- Choose UDP or TCP transport if the tracker requires an explicit selection.
- Confirm location and telemetry reports reach Plaspy and are visible in the platform.
- Optionally reset or set timers to define the reporting frequency for live tracking and logging.

## Plaspy Server Settings

When configuring the GOT08 for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These values are the public Plaspy endpoints you should configure on the device so the GOT08 streams data into the Plaspy platform.

## Typical Requirements Before Setup

- Physical access to the vehicle OBD-II port to install or inspect the GOT08 device.
- A working GSM SIM card installed in the tracker with data enabled and SMS capability if using SMS provisioning.
- A phone capable of sending SMS commands to the device for SMS based configuration, or access to the official EELINK configuration tool if provided.
- Power applied to the GOT08 via the vehicle OBD port and the device in normal operating condition.
- Plaspy account access and device provisioning steps ready in Plaspy to validate incoming reports.
- Familiarity with the device firmware version or vendor documentation on configuration commands.

## How This Tracker Connects to Plaspy

The GOT08 is configured to report location and available OBD telemetry to the shared Plaspy server endpoint and port. Once pointed at Plaspy, the device streams position and vehicle data so Plaspy can visualize, alert, and store historical logs.

- GOT08 sends location and OBD telemetry to the Plaspy server endpoint d.plaspy.com or the server IP 54.85.159.138.
- All traffic is sent to port 8888 on the Plaspy endpoint.
- The device can be configured to use UDP or TCP transport on port 8888 depending on the tracker setting.
- Plaspy automatically detects the tracker protocol so the same port is used across supported devices.
- Once reporting, Plaspy provides real-time visibility, event reporting, and storage for later playback and analysis.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the GOT08 (SMS commands or vendor configuration software) as documented by EELINK.
2. Configure the device APN so the tracker can use cellular data for reporting.
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 and set the port to 8888.
4. Choose transport UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device and send any required commit or save commands.
6. Restart the tracker if the device requires a reboot to apply network parameters.
7. Validate that the GOT08 is reporting to Plaspy by checking device status and incoming messages in the Plaspy platform.

## Example Configuration Commands

The GOT08 supports SMS based configuration. The following public SMS commands are provided in the manufacturer content and can be sent in order by SMS to the device. Preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}} and replace them with your operator values as needed.

- Optional initial factory reset (use only when you need to reset device to defaults):
```text
FACTORY#
```

- Set the device time zone to UTC+0 (example):
```text
GMT,E,0#
```

- Set the operator APN (replace placeholders with your carrier values; keep comma separated format):
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Explanation: {{apn}} is the APN name. {{apnu}} is the APN username if required. {{apnp}} is the APN password if required. If your carrier does not require username or password, omit those placeholders according to device syntax.

- Set the GPRS server by domain (recommended to use the Plaspy domain):
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server by IP address:
```text
SERVER,0,54.85.159.138,8888#
```

- Set the reporting interval to every 60 seconds:
```text
TIMER,60#
```

- Check current parameters on the device:
```text
PARAM#
```

Send these commands by SMS to the GOT08 from an authorized phone number if the device restricts SMS control to a white listed number. Keep the command order when performing initial provisioning: APN, SERVER, TIMER and then verification with PARAM#.

## Configuration Notes

- SMS based configuration is supported for the GOT08 according to the public manufacturer commands; verify whether your device requires the sender phone number to be preauthorized.
- Firmware versions and hardware revisions may change the exact command syntax or available parameters; consult EELINK documentation for firmware specific notes.
- The device supports server configuration by domain or by IP. If DNS is unreliable in your deployment, use the server IP option.
- Choose UDP or TCP depending on your network and the device requirements; Plaspy accepts either transport on port 8888 and will detect the protocol automatically.
- Always confirm APN settings with your mobile operator; incorrect APN configuration is the most common cause of failed GPRS connectivity.

## Why Use Plaspy with This Configuration

Using the GOT08 with Plaspy provides a quick path to vehicle visibility because the GOT08 installs in the OBD-II port and can be provisioned with simple SMS commands so it begins reporting location and OBD telemetry rapidly. For fleet managers and vehicle owners who need timely visibility, pairing a plug-and-play tracker like the GOT08 with Plaspy reduces installation overhead and accelerates time to useful data.

To learn more about Plaspy and how this configuration works within the platform visit https://www.plaspy.com. Manufacturer setup methods, firmware behavior, and device-specific details can change over time, so verify the latest configuration and command set on the official EELINK site https://www.eelink.com.cn/.

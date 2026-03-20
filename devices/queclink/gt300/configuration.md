---
slug: /queclink/gt300/configuration
id: gt300-configuration
sidebar_label: Configuration
title: QuecLink - GT300 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guidance for configuring the QuecLink GT300 to report to Plaspy with example SMS commands and server settings
keywords:
  - QuecLink GT300 configuration
  - QuecLink GT300 setup
  - GT300 Plaspy configuration
  - GT300 server configuration
  - QuecLink GT300 GPS tracker configuration
  - QuecLink GT300 SMS commands
  - GT300 APN settings
  - GT300 GPRS server setup
  - QuecLink GT300 tracking platform setup
  - GT300 protocol configuration
---

# QuecLink - GT300 Configuration

This page describes the public configuration context for using the QuecLink GT300 with Plaspy. It explains the practical steps and publicly available SMS commands used to point the GT300 to Plaspy servers, and how those settings are applied so the device can report location and event data into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The GT300 model supports SMS command configuration as shown in the public examples below; use the manufacturer documentation and your chosen provisioning method to confirm exact command syntax for your device firmware.

## Configuration Overview

This configuration prepares the GT300 to communicate reliably with Plaspy so the device can deliver GPS and event reports to the platform. The practical goal is to set the APN and GPRS server entries, ensure the device reporting interval is appropriate, and enable any input or alarm reporting required for your monitoring needs.

- Configure the APN and GPRS server to point to Plaspy so the tracker can send data
- Set the reporting interval to balance update frequency and battery use
- Enable inputs or SOS reporting that you need to surface in Plaspy
- Confirm device time zone and network registration for accurate timestamps
- Validate successful packet delivery to Plaspy and device visibility in the platform

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public, shared settings used by Plaspy for supported devices. All devices configured for Plaspy use the same port and the platform performs automatic protocol detection.

## Typical Requirements Before Setup

- A charged and powered GT300 device accessible for configuration
- Access to the device configuration method supported by your unit such as SMS commands or a manufacturer tool
- A valid SIM with data enabled and the appropriate APN details for your mobile operator
- Access to the GT300 default password if required for configuration (the public sample uses the password queclink)
- Network coverage in the installation area so the device can register to the mobile network
- A Plaspy account and the ability to identify the device after it starts reporting to the platform

## How This Tracker Connects to Plaspy

The GT300 is configured to send location and event messages to the Plaspy server endpoint and port so the platform can ingest and display device data. Plaspy uses the shared server domain or IP and the same listening port for all devices, while automatically determining the correct protocol.

- Device sends GPRS packets to d.plaspy.com or 54.85.159.138 on port 8888
- Tracker reports periodic GPS positions based on the configured interval
- Input events such as SOS or alarm inputs are sent to Plaspy for alerting
- Plaspy receives the incoming data and maps the GT300 messages to the platform protocol automatically
- Successful connectivity is validated when the device appears online and sends position updates to Plaspy

## Common Configuration Workflow

1. Access the official QuecLink configuration method for your GT300 unit, such as SMS command provisioning or the vendor configuration tool.
2. Enter the Plaspy server address as d.plaspy.com or the server IP 54.85.159.138 in the device GPRS server setting.
3. Set the server port to 8888.
4. If the device requires a transport selection, choose UDP or TCP according to your preference or network requirements.
5. Set the APN and any APN username or password placeholders required by your mobile operator.
6. Apply or save the configuration and restart the device if the configuration method or firmware requires a reboot.
7. Validate that the GT300 reports to Plaspy by checking device connectivity and position updates in the Plaspy platform.

## Example Configuration Commands

The GT300 can be configured via SMS commands. The following public example commands were provided as sample SMS setup. The sample assumes the device password is queclink which is shown as the device default. Use these in order when performing initial provisioning; the factory restore is optional and typically used only during initial setup or troubleshooting.

- Restore factory settings (optional initial setup)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Set the time zone to UTC+0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Set the operator APN (replace placeholders with your operator values)
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
Note: [apn] is the operator APN, [apnu] is the APN username if required, and [apnp] is the APN password if required. Keep placeholders and replace them with your operator credentials.

- Set the GPRS server to Plaspy (domain and IP shown; port 8888 used)
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
This command configures the device to report to d.plaspy.com and includes the server IP 54.85.159.138. Port 8888 is the configured port for Plaspy.

- Set the update interval to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Enable SOS button notification on input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

These commands are public examples. Exact command syntax and parameters can vary by firmware. Preserve the device password parameter and replace APN placeholders with your operator values before sending SMS.

## Configuration Notes

- The GT300 supports SMS based configuration as shown in the example commands; some installations use a vendor tool or configuration portal instead.
- Firmware and hardware revisions may change available commands, required parameters, or default passwords; verify the right syntax for your unit.
- Plaspy accepts connections over UDP or TCP on port 8888 and performs automatic protocol detection for incoming trackers.
- If you change the device password from the default queclink, ensure you use the new password in subsequent SMS commands.
- When using domain names in server entries, confirm DNS resolution is available on the device or use the server IP as a fallback.

## Why Use Plaspy with This Configuration

Using Plaspy with the QuecLink GT300 provides a practical way to centralize location, alerting, and device state for monitoring lone workers, seniors, or mobile assets. Pointing the GT300 to Plaspy using the shared server settings and the examples above helps ensure devices report reliably into a single platform where visibility and event management are available.

To learn more about Plaspy and how it handles device connections, visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and capabilities, verify details with the manufacturer at https://www.queclink.com/ as setup steps and firmware behavior can change over time.
